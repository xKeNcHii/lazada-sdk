/**
 * Task-oriented example: fetch pending orders from the last 7 days and print
 * a summary. Demonstrates:
 *   - SDK construction with env-var credentials
 *   - Typed manager call with query params
 *   - Error handling via the discriminated `{ data, error }` return
 *   - Simple paginated-style iteration using `limit` / `offset`
 *
 * Run:
 *   cp .env.example .env   # edit in your credentials
 *   pnpm --filter @lazada-sdk/sdk exec tsx ../../examples/get-pending-orders.ts
 */
import { LazadaSDK } from "../packages/sdk-ts/src/index.js";

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}. See .env.example.`);
  return v;
}

async function main(): Promise<void> {
  const sdk = new LazadaSDK({
    appKey: requireEnv("LAZADA_APP_KEY"),
    appSecret: requireEnv("LAZADA_APP_SECRET"),
    region: (process.env.LAZADA_REGION as "SG" | "VN" | "PH" | "MY" | "TH" | "ID") ?? "SG",
    accessToken: requireEnv("LAZADA_ACCESS_TOKEN"),
  });

  const createdAfter = new Date(Date.now() - 7 * 24 * 3600 * 1000).toISOString();
  const pageSize = 50;
  let offset = 0;
  let total = 0;

  while (true) {
    const { data, error } = await sdk.order.getOrders({
      created_after: createdAfter,
      status: "pending",
      limit: pageSize,
      offset,
    } as never);

    if (error) {
      console.error("Lazada error:", error);
      process.exit(1);
    }

    const batch = (data as { data?: { orders?: unknown[]; count?: number } })?.data;
    const orders = batch?.orders ?? [];
    total += orders.length;
    console.log(`Page offset=${offset}: ${orders.length} orders`);

    if (orders.length < pageSize) break;
    offset += pageSize;
  }

  console.log(`\nTotal pending orders in last 7 days: ${total}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
