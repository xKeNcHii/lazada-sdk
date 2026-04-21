import { createHmac } from "node:crypto";

/**
 * Compute a Lazada Open Platform request signature.
 *
 * Algorithm (from docs/guides/developer-s-guide.md#signature-algorithm):
 *   1. Sort all non-`sign` parameters by key, ASCII-ascending.
 *   2. Concatenate as `apiPath + k1v1 + k2v2 + ...` (+ raw body, if present).
 *   3. HMAC-SHA256 the concatenated string with appSecret.
 *   4. Uppercase hex encode the digest.
 *
 * The `sign` parameter itself is excluded from the input to signing (obviously).
 * Byte-array parameters are also excluded per Lazada's spec, but we don't expose
 * those in the OpenAPI schema — if a caller passes one as a string, it's signed.
 */
export function signRequest(args: {
  appSecret: string;
  apiPath: string;
  params: Record<string, string | number | boolean | undefined | null>;
  body?: string;
}): string {
  const { appSecret, apiPath, params, body } = args;

  const entries = Object.entries(params)
    .filter(([k, v]) => k !== "sign" && v !== undefined && v !== null && v !== "")
    .map(([k, v]) => [k, String(v)] as const)
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));

  let payload = apiPath;
  for (const [k, v] of entries) {
    payload += k + v;
  }
  if (body) payload += body;

  return createHmac("sha256", appSecret).update(payload, "utf8").digest("hex").toUpperCase();
}
