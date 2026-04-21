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
    const { data } = await sdk.seller.getSeller();
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
      http.post("https://auth.lazada.com/rest/auth/token/create", ({ request }) => {
        hit = new URL(request.url).host;
        return HttpResponse.json({ code: "0", access_token: "X" });
      }),
    );
    const sdk = new LazadaSDK({
      appKey: "K",
      appSecret: "S",
      region: "SG",
    });
    await sdk.system.createAuthToken({ code: "oauth-code" } as never);
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
    await expect(sdk.seller.getSeller()).rejects.toThrow(LazadaApiError);
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
    await expect(sdk.seller.getSeller()).rejects.toThrow(LazadaAuthError);
  });

  it("form-encodes POST bodies and folds fields into the signing pool", async () => {
    let captured: {
      contentType: string | null;
      body: string;
      signingInputsOk: boolean;
    } | null = null;
    server.use(
      http.post("https://api.lazada.sg/rest/images/migrate", async ({ request }) => {
        const body = await request.text();
        const form = new URLSearchParams(body);
        const u = new URL(request.url);
        // Signing params should include the form field `payload` but NOT have
        // the raw JSON appended (the old buggy behavior did that).
        captured = {
          contentType: request.headers.get("content-type"),
          body,
          signingInputsOk:
            form.has("payload") &&
            u.searchParams.get("sign") !== null &&
            !u.searchParams.has("payload"),
        };
        return HttpResponse.json({ code: "0", batch_id: "fake" });
      }),
    );
    const sdk = new LazadaSDK({ appKey: "K", appSecret: "S", region: "SG", accessToken: "T" });
    await sdk.client.POST("/images/migrate", {
      body: { payload: { images: ["https://x/y.jpg"] } } as never,
    });
    expect(captured).not.toBeNull();
    expect(captured!.contentType).toMatch(/application\/x-www-form-urlencoded/);
    expect(captured!.body).toMatch(/^payload=/);
    expect(captured!.signingInputsOk).toBe(true);
  });

  it("form-encodes a body with multiple top-level primitive fields", async () => {
    let form: URLSearchParams | null = null;
    let signedPool: Record<string, string> | null = null;
    server.use(
      http.post("https://api.lazada.sg/rest/orders/ovo/get", async ({ request }) => {
        form = new URLSearchParams(await request.text());
        const u = new URL(request.url);
        signedPool = Object.fromEntries(u.searchParams.entries());
        return HttpResponse.json({ code: "0", data: [] });
      }),
    );
    const sdk = new LazadaSDK({ appKey: "K", appSecret: "S", region: "SG", accessToken: "T" });
    await sdk.client.POST("/orders/ovo/get", {
      body: { created_after: "2024-01-01", limit: 50, status: "pending" } as never,
    });
    expect(form!.get("created_after")).toBe("2024-01-01");
    expect(form!.get("limit")).toBe("50");
    expect(form!.get("status")).toBe("pending");
    // Form fields MUST NOT be duplicated into the URL query.
    expect(signedPool!).not.toHaveProperty("created_after");
    expect(signedPool!).not.toHaveProperty("limit");
  });

  it("JSON-stringifies object/array values in form-encoded bodies", async () => {
    let form: URLSearchParams | null = null;
    server.use(
      http.post("https://api.lazada.sg/rest/images/migrate", async ({ request }) => {
        form = new URLSearchParams(await request.text());
        return HttpResponse.json({ code: "0", batch_id: "x" });
      }),
    );
    const sdk = new LazadaSDK({ appKey: "K", appSecret: "S", region: "SG", accessToken: "T" });
    const payload = { images: ["https://a/b.jpg", "https://a/c.jpg"] };
    await sdk.client.POST("/images/migrate", {
      body: { payload } as never,
    });
    expect(form!.get("payload")).toBe(JSON.stringify(payload));
  });

  it("drops undefined/null fields from the form body", async () => {
    let form: URLSearchParams | null = null;
    server.use(
      http.post("https://api.lazada.sg/rest/orders/ovo/get", async ({ request }) => {
        form = new URLSearchParams(await request.text());
        return HttpResponse.json({ code: "0" });
      }),
    );
    const sdk = new LazadaSDK({ appKey: "K", appSecret: "S", region: "SG", accessToken: "T" });
    await sdk.client.POST("/orders/ovo/get", {
      body: { a: "1", b: undefined, c: null, d: "2" } as never,
    });
    expect(form!.get("a")).toBe("1");
    expect(form!.get("d")).toBe("2");
    expect(form!.has("b")).toBe(false);
    expect(form!.has("c")).toBe(false);
  });

  it("signs form fields in the same pool as query params", async () => {
    let firstSign = "";
    let secondSign = "";
    let calls = 0;
    server.use(
      http.post("https://api.lazada.sg/rest/orders/ovo/get", ({ request }) => {
        const sign = new URL(request.url).searchParams.get("sign") ?? "";
        if (calls === 0) firstSign = sign;
        else secondSign = sign;
        calls++;
        return HttpResponse.json({ code: "0" });
      }),
    );
    const sdk = new LazadaSDK({ appKey: "K", appSecret: "S", region: "SG", accessToken: "T" });
    const origDateNow = Date.now;
    Date.now = () => 1_700_000_000_000;
    try {
      await sdk.client.POST("/orders/ovo/get", { body: { x: "1" } as never });
      await sdk.client.POST("/orders/ovo/get", { body: { x: "2" } as never });
    } finally {
      Date.now = origDateNow;
    }
    // Different body fields must produce different signatures — proving they
    // are part of the signing pool and not ignored.
    expect(firstSign).not.toBe(secondSign);
    expect(firstSign).toMatch(/^[0-9A-F]{64}$/);
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
      await sdk.seller.getSeller();
      await sdk.seller.getSeller();
    } finally {
      Date.now = orig;
    }
    expect(seen).toHaveLength(2);
    expect(seen[0]).toBe(seen[1]);
    expect(seen[0]).toMatch(/^[0-9A-F]{64}$/);
  });
});
