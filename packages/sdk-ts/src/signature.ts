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
 *
 * Uses WebCrypto (available in Node ≥20, browsers, Cloudflare Workers, Vercel Edge).
 */
export async function signRequest(args: {
  appSecret: string;
  apiPath: string;
  /**
   * All values must already be stringified by the caller. We don't accept
   * number/boolean here — stringification of floats and locale-sensitive
   * values is the caller's responsibility to avoid round-trip drift vs.
   * Lazada's server.
   */
  params: Record<string, string | undefined | null>;
  body?: string;
}): Promise<string> {
  const { appSecret, apiPath, params, body } = args;

  const entries = Object.entries(params)
    .filter((entry): entry is [string, string] => {
      const [k, v] = entry;
      return k !== "sign" && v !== undefined && v !== null && v !== "";
    })
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));

  let payload = apiPath;
  for (const [k, v] of entries) {
    payload += k + v;
  }
  if (body) payload += body;

  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(appSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sigBuf = await crypto.subtle.sign("HMAC", key, enc.encode(payload));
  const bytes = new Uint8Array(sigBuf);
  let hex = "";
  for (let i = 0; i < bytes.length; i++) {
    hex += bytes[i]!.toString(16).padStart(2, "0");
  }
  return hex.toUpperCase();
}
