import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { TokenManager } from "../token-manager.js";
import { MemoryTokenStorage } from "../storage/memory-token-storage.js";
import { LazadaAuthError } from "../errors.js";

const server = setupServer();

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const REFRESH = "https://auth.lazada.com/rest/auth/token/refresh";

describe("TokenManager", () => {
  it("returns the static access token when no refresh flow is configured", async () => {
    const tm = new TokenManager({
      appKey: "K",
      appSecret: "S",
      accessToken: "static-token",
    });
    expect(await tm.getAccessToken()).toBe("static-token");
  });

  it("returns undefined when no token is configured", async () => {
    const tm = new TokenManager({ appKey: "K", appSecret: "S" });
    expect(await tm.getAccessToken()).toBeUndefined();
  });

  it("refreshes when the current token is within the refresh buffer", async () => {
    let refreshCalls = 0;
    server.use(
      http.get(REFRESH, ({ request }) => {
        refreshCalls++;
        const u = new URL(request.url);
        expect(u.searchParams.get("refresh_token")).toBe("initial-refresh");
        return HttpResponse.json({
          code: "0",
          access_token: "new-access",
          refresh_token: "new-refresh",
          expires_in: 604800, // 7 days
        });
      }),
    );

    const tm = new TokenManager({
      appKey: "K",
      appSecret: "S",
      accessToken: "old-access",
      refreshToken: "initial-refresh",
      tokenExpiresAt: Math.floor(Date.now() / 1000) + 10, // expires in 10s, buffer 60s
    });

    expect(await tm.getAccessToken()).toBe("new-access");
    expect(refreshCalls).toBe(1);
    expect(tm.snapshot().refreshToken).toBe("new-refresh");
  });

  it("does NOT refresh when the token is far from expiry", async () => {
    // No msw handler registered — any call will throw unhandled request error.
    const tm = new TokenManager({
      appKey: "K",
      appSecret: "S",
      accessToken: "fresh-token",
      refreshToken: "r",
      tokenExpiresAt: Math.floor(Date.now() / 1000) + 3600,
    });
    expect(await tm.getAccessToken()).toBe("fresh-token");
  });

  it("coalesces concurrent refreshes into a single network call", async () => {
    let refreshCalls = 0;
    server.use(
      http.get(REFRESH, async () => {
        refreshCalls++;
        // Small delay so multiple callers land during the in-flight refresh.
        await new Promise((r) => setTimeout(r, 20));
        return HttpResponse.json({
          code: "0",
          access_token: "coalesced",
          refresh_token: "r2",
          expires_in: 3600,
        });
      }),
    );

    const tm = new TokenManager({
      appKey: "K",
      appSecret: "S",
      refreshToken: "r1",
      tokenExpiresAt: 0, // forces refresh
    });

    const [a, b, c] = await Promise.all([
      tm.getAccessToken(),
      tm.getAccessToken(),
      tm.getAccessToken(),
    ]);
    expect([a, b, c]).toEqual(["coalesced", "coalesced", "coalesced"]);
    expect(refreshCalls).toBe(1);
  });

  it("persists refreshed tokens to storage", async () => {
    server.use(
      http.get(REFRESH, () =>
        HttpResponse.json({
          code: "0",
          access_token: "persisted",
          refresh_token: "persisted-refresh",
          expires_in: 3600,
        }),
      ),
    );

    const storage = new MemoryTokenStorage();
    const tm = new TokenManager({
      appKey: "K",
      appSecret: "S",
      refreshToken: "r",
      tokenExpiresAt: 0,
      storage,
      storageKey: "custom-key",
    });

    await tm.getAccessToken();
    const stored = await storage.get("custom-key");
    expect(stored?.accessToken).toBe("persisted");
    expect(stored?.refreshToken).toBe("persisted-refresh");
    expect(typeof stored?.expiresAt).toBe("number");
  });

  it("hydrates from storage on first use when config omits tokens", async () => {
    const storage = new MemoryTokenStorage();
    await storage.set("lazada:default", {
      accessToken: "from-storage",
      refreshToken: "r",
      expiresAt: Math.floor(Date.now() / 1000) + 3600,
    });

    const tm = new TokenManager({
      appKey: "K",
      appSecret: "S",
      storage,
    });
    expect(await tm.getAccessToken()).toBe("from-storage");
  });

  it("wraps a failed refresh as LazadaAuthError", async () => {
    server.use(
      http.get(REFRESH, () =>
        HttpResponse.json({
          code: "InvalidCode",
          type: "ISP",
          message: "Refresh token expired",
        }),
      ),
    );

    const tm = new TokenManager({
      appKey: "K",
      appSecret: "S",
      refreshToken: "dead",
      tokenExpiresAt: 0,
    });
    await expect(tm.getAccessToken()).rejects.toBeInstanceOf(LazadaAuthError);
  });

  it("throws when forceRefresh() is called without a refresh token", async () => {
    const tm = new TokenManager({
      appKey: "K",
      appSecret: "S",
      accessToken: "a",
    });
    await expect(tm.forceRefresh()).rejects.toBeInstanceOf(LazadaAuthError);
  });
});
