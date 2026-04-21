/**
 * POST body-signing smoke test.
 *
 * Calls `POST /orders/get` (dual GET/POST endpoint — read-only, safe) to
 * verify that the middleware correctly signs JSON request bodies. If this
 * returns `code: "0"`, the POST path is proven end-to-end. If it returns
 * `IncompleteSignature`, the body-signing logic in client.ts is wrong.
 */
import { LazadaSDK } from "../packages/sdk-ts/src/index.js";

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

const sdk = new LazadaSDK({
  appKey: requireEnv("LAZADA_APP_KEY"),
  appSecret: requireEnv("LAZADA_APP_SECRET"),
  region: (process.env.LAZADA_REGION as "SG" | "VN" | "PH" | "MY" | "TH" | "ID") ?? "SG",
  accessToken: requireEnv("LAZADA_ACCESS_TOKEN"),
});

// POST /images/migrate — pure POST endpoint with a JSON body.
// We submit a deliberately invalid image URL so we reach Lazada's server,
// have it verify our signature, and fail at business validation (not auth).
// If we see `IncompleteSignature` → our body-sign logic is broken.
// If we see anything else (validation error, batch_id, etc.) → it works.
const { data, error, response } = await sdk.client.POST("/images/migrate", {
  body: {
    payload: { images: ["https://example.invalid/nonexistent.jpg"] },
  } as never,
});

if (error) {
  // eslint-disable-next-line no-console
  console.error("POST error code:", (error as { code?: string }).code);
  // eslint-disable-next-line no-console
  console.error("POST error msg:", (error as { message?: string }).message);
  // eslint-disable-next-line no-console
  console.error("HTTP status:", response.status);
  process.exit(1);
}

// eslint-disable-next-line no-console
console.log("POST /images/migrate OK:", JSON.stringify(data, null, 2).slice(0, 500));
