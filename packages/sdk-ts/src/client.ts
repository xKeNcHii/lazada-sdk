import createClient, { type Middleware } from "openapi-fetch";
import type { paths } from "./schemas/generated.js";
import { resolveBaseUrl, type LazadaConfig } from "./config.js";
import { signRequest } from "./signature.js";
import { classifyError, LazadaApiError } from "./errors.js";
import { TokenManager } from "./token-manager.js";

export type LazadaClient = ReturnType<typeof createLazadaClient>;

interface LazadaRawResponse {
  code?: string | number;
  type?: string;
  message?: string;
  request_id?: string;
  data?: unknown;
  [k: string]: unknown;
}

export function createLazadaClient(
  config: LazadaConfig,
  tokenManager?: TokenManager,
): ReturnType<typeof createClient<paths>> {
  const tm =
    tokenManager ??
    new TokenManager({
      appKey: config.appKey,
      appSecret: config.appSecret,
      ...(config.accessToken !== undefined ? { accessToken: config.accessToken } : {}),
      ...(config.refreshToken !== undefined ? { refreshToken: config.refreshToken } : {}),
      ...(config.tokenExpiresAt !== undefined ? { tokenExpiresAt: config.tokenExpiresAt } : {}),
      ...(config.storage !== undefined ? { storage: config.storage } : {}),
      ...(config.storageKey !== undefined ? { storageKey: config.storageKey } : {}),
      ...(config.refreshBufferSec !== undefined
        ? { refreshBufferSec: config.refreshBufferSec }
        : {}),
      ...(config.authBaseUrlOverride !== undefined
        ? { authBaseUrl: config.authBaseUrlOverride }
        : {}),
    });

  // Use a placeholder base URL — per-request middleware rewrites to the correct
  // regional or auth host based on the path.
  const client = createClient<paths>({ baseUrl: "https://placeholder.invalid" });

  const signingMiddleware: Middleware = {
    async onRequest({ request }) {
      const url = new URL(request.url);
      const apiPath = url.pathname;
      const correctBase = resolveBaseUrl(config, apiPath).replace(/\/$/, "");
      // `apiPath` starts with `/`; concat with base so the base's own pathname
      // (e.g. `/rest`) is preserved — `new URL("/x", "https://h/rest")` would
      // drop the `/rest`.
      const correctUrl = new URL(correctBase + apiPath + url.search);

      // URL-level params: existing query + injected auth + sign.
      // Signing params: URL-level params ∪ form body fields (all in one pool).
      const urlParams: Record<string, string> = {};
      for (const [k, v] of correctUrl.searchParams.entries()) urlParams[k] = v;

      // Lazada POST convention: body is application/x-www-form-urlencoded
      // with each top-level key as a form field. Every form field participates
      // in signing but goes into the body only — NOT duplicated in URL query.
      // Complex values are JSON-stringified before form-encoding. There's no
      // raw body suffix in the signed payload; the Java "body" branch only
      // applies to genuinely opaque (binary) bodies, none in our surface.
      const formFields: Record<string, string> = {};
      let formBody: string | undefined;
      if (request.method !== "GET" && request.body) {
        const raw = await request.clone().text();
        if (raw) {
          let parsed: unknown;
          try {
            parsed = JSON.parse(raw);
          } catch {
            parsed = undefined;
          }
          if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
            const form = new URLSearchParams();
            for (const [k, v] of Object.entries(parsed as Record<string, unknown>)) {
              if (v === undefined || v === null) continue;
              const strVal = typeof v === "object" ? JSON.stringify(v) : String(v);
              formFields[k] = strVal;
              form.set(k, strVal);
            }
            formBody = form.toString();
          }
        }
      }

      urlParams.app_key = config.appKey;
      urlParams.timestamp = Date.now().toString();
      urlParams.sign_method = "sha256";

      // The token endpoint itself must NOT use an access_token (chicken-and-egg).
      const isAuthExchange = apiPath === "/auth/token/create" || apiPath === "/auth/token/refresh";
      if (!isAuthExchange) {
        const token = await tm.getAccessToken();
        if (token) urlParams.access_token = token;
      }

      urlParams.sign = signRequest({
        appSecret: config.appSecret,
        apiPath,
        params: { ...urlParams, ...formFields },
      });

      correctUrl.search = "";
      for (const [k, v] of Object.entries(urlParams)) correctUrl.searchParams.set(k, v);

      if (formBody !== undefined) {
        const headers = new Headers(request.headers);
        headers.set("content-type", "application/x-www-form-urlencoded");
        return new Request(correctUrl, {
          method: request.method,
          headers,
          body: formBody,
        });
      }

      return new Request(correctUrl, request);
    },
    async onResponse({ response }) {
      if (!response.ok) return response;
      const cloned = response.clone();
      const text = await cloned.text();
      if (!text) return response;
      let parsed: LazadaRawResponse;
      try {
        parsed = JSON.parse(text) as LazadaRawResponse;
      } catch {
        return response;
      }
      const code = parsed.code !== undefined ? String(parsed.code) : "0";
      if (code !== "0") {
        throw classifyError({
          code,
          type: typeof parsed.type === "string" ? parsed.type : "",
          message: typeof parsed.message === "string" ? parsed.message : "Lazada API error",
          ...(typeof parsed.request_id === "string" ? { requestId: parsed.request_id } : {}),
          raw: parsed,
        });
      }
      return response;
    },
  };

  client.use(signingMiddleware);
  return client;
}

export { LazadaApiError };
