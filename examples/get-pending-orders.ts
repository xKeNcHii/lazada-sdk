/**
 * Task-oriented example: fetch pending orders from the last 7 days and print
 * a summary. Demonstrates:
 *   - SDK construction with env-var credentials
 *   - Typed manager call with query params
 *   - The `paginate()` async-iterator helper for multi-page list endpoints
 *
 * Run:
 *   cp .env.example .env   # edit in your credentials
 *   pnpm --filter @lazada-sdk/sdk exec tsx ../../examples/get-pending-orders.ts
 */
import { LazadaSDK, paginate } from "../packages/sdk-ts/src/index.js";

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

  // `paginate` auto-detects offset-based vs cursor-based responses and keeps
  // issuing pages until the stream ends or `maxItems` is reached.
  let total = 0;
  for await (const order of paginate(
    (params) => sdk.order.getOrders(params as never) as never,
    { created_after: createdAfter, status: "pending" },
    { itemsKey: "orders", pageSize: 50, maxItems: 1000 },
  )) {
    total++;
    const o = order as { order_id?: string | number; order_number?: string };
    console.log(`  order ${o.order_id ?? o.order_number ?? "?"}`);
  }

  console.log(`\nTotal pending orders in last 7 days: ${total}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
