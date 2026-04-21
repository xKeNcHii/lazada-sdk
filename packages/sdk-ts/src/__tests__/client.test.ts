import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { LazadaSDK } from "../sdk.js";
import { LazadaApiError, LazadaAuthError } from "../errors.js";

const server = setupServer();

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("client middleware", () => {
  it("injects app_key, timestamp, sign_method, access_token, sign on every request", async () => {
    let captured: URLSearchParams | null = null;
    server.use(
      http.get("https://api.lazada.sg/rest/seller/get", ({ request }) => {
        captured = new URL(request.url).searchParams;
        return HttpResponse.json({ code: "0", data: { id: 1 } });
      }),
    );

    const sdk = new LazadaSDK({
      appKey: "APPKEY",
      appSecret: "SECRET",
      region: "SG",
      accessToken: "TOKEN",
    });
    const { data } = await sdk.seller.get();
    expect(data).toBeDefined();

    expect(captured).not.toBeNull();
    const p = captured!;
    expect(p.get("app_key")).toBe("APPKEY");
    expect(p.get("access_token")).toBe("TOKEN");
    expect(p.get("sign_method")).toBe("sha256");
    expect(p.get("timestamp")).toMatch(/^\d+$/);
    expect(p.get("sign")).toMatch(/^[0-9A-F]{64}$/);
  });

  it("routes auth endpoints to auth.lazada.com instead of the regional host", async () => {
    let hit = "";
    server.use(
      http.get("https://auth.lazada.com/rest/auth/token/create", ({ request }) => {
        hit = new URL(request.url).host;
        return HttpResponse.json({ code: "0", access_token: "X" });
      }),
    );
    const sdk = new LazadaSDK({
      appKey: "K",
      appSecret: "S",
      region: "SG",
    });
    await sdk.system.generateAccessToken({ code: "oauth-code" });
    expect(hit).toBe("auth.lazada.com");
  });

  it("throws LazadaApiError when response code is non-zero", async () => {
    server.use(
      http.get("https://api.lazada.sg/rest/seller/get", () =>
        HttpResponse.json({
          code: "20",
          type: "ISV",
          message: "E020: something bad",
          request_id: "req-123",
        }),
      ),
    );
    const sdk = new LazadaSDK({ appKey: "K", appSecret: "S", region: "SG", accessToken: "T" });
    await expect(sdk.seller.get()).rejects.toThrow(LazadaApiError);
  });

  it("classifies auth-family errors as LazadaAuthError", async () => {
    server.use(
      http.get("https://api.lazada.sg/rest/seller/get", () =>
        HttpResponse.json({
          code: "IncompleteSignature",
          type: "ISP",
          message: "Bad signature",
        }),
      ),
    );
    const sdk = new LazadaSDK({ appKey: "K", appSecret: "S", region: "SG", accessToken: "T" });
    await expect(sdk.seller.get()).rejects.toThrow(LazadaAuthError);
  });

  it("produces a deterministic signature for the same request", async () => {
    const seen: string[] = [];
    server.use(
      http.get("https://api.lazada.sg/rest/seller/get", ({ request }) => {
        seen.push(new URL(request.url).searchParams.get("sign") ?? "");
        return HttpResponse.json({ code: "0", data: {} });
      }),
    );
    const sdk = new LazadaSDK({ appKey: "K", appSecret: "S", region: "SG", accessToken: "T" });
    // Freeze Date.now so timestamps match between calls.
    const orig = Date.now;
    Date.now = () => 1_700_000_000_000;
    try {
      await sdk.seller.get();
      await sdk.seller.get();
    } finally {
      Date.now = orig;
    }
    expect(seen).toHaveLength(2);
    expect(seen[0]).toBe(seen[1]);
    expect(seen[0]).toMatch(/^[0-9A-F]{64}$/);
  });
});
