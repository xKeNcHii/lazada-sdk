/**
 * Sandbox smoke test. Run with:
 *   LAZADA_APP_KEY=... LAZADA_APP_SECRET=... LAZADA_ACCESS_TOKEN=... \
 *     pnpm --filter @lazada-sdk/sdk exec tsx examples/seller-smoke.ts
 *
 * Hits `GET /seller/get` — the simplest authenticated endpoint —
 * and prints the response. Verifies end-to-end signing, routing, and
 * error decoding against the real Lazada API.
 */
import { LazadaSDK } from "../packages/sdk-ts/src/index.js";

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

async function main(): Promise<void> {
  const sdk = new LazadaSDK({
    appKey: requireEnv("LAZADA_APP_KEY"),
    appSecret: requireEnv("LAZADA_APP_SECRET"),
    region: (process.env.LAZADA_REGION as "SG" | "VN" | "PH" | "MY" | "TH" | "ID") ?? "SG",
    accessToken: requireEnv("LAZADA_ACCESS_TOKEN"),
  });

  const { data, error } = await sdk.seller.getSeller();
  if (error) {
    // eslint-disable-next-line no-console
    console.error("Error:", error);
    process.exit(1);
  }
  // eslint-disable-next-line no-console
  console.log("Seller:", JSON.stringify(data, null, 2));
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
