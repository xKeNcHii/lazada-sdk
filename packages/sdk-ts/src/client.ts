import createClient, { type Middleware } from "openapi-fetch";
import type { paths } from "./schemas/generated.js";
import { resolveBaseUrl, type LazadaConfig } from "./config.js";
import { signRequest } from "./signature.js";
import { classifyError, LazadaApiError } from "./errors.js";

export type LazadaClient = ReturnType<typeof createLazadaClient>;

interface LazadaRawResponse {
  code?: string | number;
  type?: string;
  message?: string;
  request_id?: string;
  data?: unknown;
  [k: string]: unknown;
}

export function createLazadaClient(config: LazadaConfig): ReturnType<typeof createClient<paths>> {
  // Use a placeholder base URL — per-request middleware rewrites to the correct
  // regional or auth host based on the path.
  const client = createClient<paths>({ baseUrl: "https://placeholder.invalid" });

  const signingMiddleware: Middleware = {
    async onRequest({ request }) {
      const url = new URL(request.url);
      const apiPath = url.pathname;
      const correctBase = resolveBaseUrl(config, apiPath);
      const correctUrl = new URL(apiPath + url.search, correctBase);

      const params: Record<string, string> = {};
      for (const [k, v] of correctUrl.searchParams.entries()) params[k] = v;

      params.app_key = config.appKey;
      params.timestamp = Date.now().toString();
      params.sign_method = "sha256";
      if (config.accessToken) params.access_token = config.accessToken;

      let body: string | undefined;
      if (request.body) {
        body = await request.clone().text();
      }

      params.sign = signRequest({
        appSecret: config.appSecret,
        apiPath,
        params,
        body,
      });

      correctUrl.search = "";
      for (const [k, v] of Object.entries(params)) correctUrl.searchParams.set(k, v);

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
      if (code !== "0" && code !== "") {
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
