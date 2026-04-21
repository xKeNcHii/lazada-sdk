# lazada-sdk

[![CI](https://github.com/xKeNcHii/lazada-sdk/actions/workflows/ci.yml/badge.svg)](https://github.com/xKeNcHii/lazada-sdk/actions/workflows/ci.yml)
[![npm @lazada-sdk/sdk](https://img.shields.io/npm/v/@lazada-sdk/sdk?label=%40lazada-sdk%2Fsdk)](https://www.npmjs.com/package/@lazada-sdk/sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Unofficial TypeScript SDK for the [Lazada Open Platform](https://open.lazada.com/) API. Derived end-to-end from the public developer documentation: a Python scraper mirrors the docs into markdown, a TypeScript parser turns them into OpenAPI 3.1, and the SDK's types + manager classes are generated from that spec. Every spec refresh regenerates cleanly — no hand-maintained wrappers to drift out of sync.

> **Not affiliated with Lazada.** Use at your own risk; respect Lazada's [terms](https://open.lazada.com/). Credentials are your responsibility.

## Status

**v0.1.0-alpha.** Plumbing validated against the live Lazada SG production API on 2026-04-21 — signing, regional routing, GET query and POST form-body signing, error decoding, and generated-manager method dispatch all confirmed with real seller credentials. The full 367-method surface has **not** been exercised end-to-end; treat any specific endpoint as unverified until you've called it yourself. Breaking changes possible before v1.0.

See [packages/sdk-ts/README.md](packages/sdk-ts/README.md) for the SDK's own changelog and caveats.

## For SDK users

Install the runtime package:

```bash
npm install @lazada-sdk/sdk
# or
pnpm add @lazada-sdk/sdk
```

Minimal usage:

```ts
import { LazadaSDK } from "@lazada-sdk/sdk";

const sdk = new LazadaSDK({
  appKey: process.env.LAZADA_APP_KEY!,
  appSecret: process.env.LAZADA_APP_SECRET!,
  region: "SG",
  accessToken: process.env.LAZADA_ACCESS_TOKEN!,
});

const { data, error } = await sdk.seller.getSeller();
if (error) throw error;
console.log(data);
```

Runs on Node ≥ 20, Cloudflare Workers, Vercel Edge, Deno, and modern browsers (signing uses WebCrypto, no `node:crypto` dependency).

Full docs: **[packages/sdk-ts/README.md](packages/sdk-ts/README.md)** — covers manager catalog, GET/POST duality, token refresh, pagination, error taxonomy, and bundle-size budgets.

## Repo layout

```
.
├── scraper/            Python scraper: fetches https://open.lazada.com docs → docs/api/*.md
├── docs/               Scraped markdown mirror (local only; not published)
├── spec/               @lazada-sdk/spec (private) — markdown → OpenAPI 3.1 parser
│   ├── src/parse-docs.ts         markdown → OpenAPI emission
│   ├── src/bootstrap-managers.ts OpenAPI → TypeScript manager classes
│   └── openapi/lazada.openapi.yaml
├── packages/sdk-ts/    @lazada-sdk/sdk — the published runtime SDK
│   ├── src/signature.ts          WebCrypto HMAC-SHA256 signing
│   ├── src/client.ts             openapi-fetch middleware (routing, signing, error)
│   ├── src/token-manager.ts      OAuth refresh with in-flight coalescing
│   ├── src/managers/*.manager.ts Auto-generated from spec
│   └── src/schemas/generated.ts  Auto-generated types from OpenAPI
├── examples/           Runnable smoke + task-oriented examples
├── CONTRIBUTING.md     Scrape → parse → bootstrap regeneration loop
└── release-please-config.json    Automated semver releases for @lazada-sdk/sdk
```

Only `@lazada-sdk/sdk` is published to npm. `@lazada-sdk/spec` is a dev-only build tool.

## How the pipeline works

```
Lazada docs site  ──(Python scraper)─→  docs/api/*.md
                                              │
                           (markdown parser)  ▼
                          spec/openapi/lazada.openapi.yaml  ◄── single source of truth
                                              │
                         ┌────────────────────┴────────────────────┐
                         ▼                                         ▼
                openapi-typescript                         bootstrap-managers.ts
                         │                                         │
                         ▼                                         ▼
            packages/sdk-ts/src/schemas/           packages/sdk-ts/src/managers/
                 generated.ts (types)                   *.manager.ts (classes)
```

The SDK imports types + classes; everything downstream of the OpenAPI spec is regenerable from it. When Lazada publishes new endpoints, re-run the scraper → parse → gen:types → bootstrap, commit the regenerated files, cut a release.

## Development

```bash
pnpm install
pnpm -r build
pnpm -r test
pnpm -r typecheck
```

Requires **Node ≥ 20** and **pnpm ≥ 9**.

To run the live examples against a real Lazada app, copy `.env.example` to `.env`, fill in your credentials, then:

```bash
npx tsx examples/seller-smoke.ts       # GET /seller/get
npx tsx examples/post-smoke.ts         # POST /images/migrate (body-signing)
npx tsx examples/get-pending-orders.ts # Paginated order fetch
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full regeneration loop, commit conventions, and release process.

## License

MIT. See [LICENSE](packages/sdk-ts/LICENSE).

---

# Lazada Open Platform docs (local mirror)

Scraped from <https://open.lazada.com/apps/doc/api> on 2026-04-21.

## API Reference

- [Choice Customized API](docs/api/choice-customized-api.md) — 12 endpoints
- [Content API](docs/api/content-api.md) — 7 endpoints
- [Cross Boarder Product API](docs/api/cross-boarder-product-api.md) — 11 endpoints
- [E-Tickets API](docs/api/e-tickets-api.md) — 8 endpoints
- [Early Bird Price API](docs/api/early-bird-price-api.md) — 3 endpoints
- [FBL API](docs/api/fbl-api.md) — 49 endpoints
- [Finance API](docs/api/finance-api.md) — 4 endpoints
- [FirstMile Bigbag(only for CN)](docs/api/firstmile-bigbag-only-for-cn.md) — 9 endpoints
- [Flexicombo API](docs/api/flexicombo-api.md) — 9 endpoints
- [Free Shipping API](docs/api/free-shipping-api.md) — 11 endpoints
- [Fulfillment API](docs/api/fulfillment-api.md) — 9 endpoints
- [Instant Messaging API](docs/api/instant-messaging-api.md) — 7 endpoints
- [LazLike API](docs/api/lazlike-api.md) — 13 endpoints
- [LazLive API](docs/api/lazlive-api.md) — 1 endpoints
- [LazPay API](docs/api/lazpay-api.md) — 24 endpoints
- [Lazada DG API](docs/api/lazada-dg-api.md) — 7 endpoints
- [Lazada Logistics API](docs/api/lazada-logistics-api.md) — 29 endpoints
- [Lazada Wallet Corporate Top-up API](docs/api/lazada-wallet-corporate-top-up-api.md) — 5 endpoints
- [Logistics API](docs/api/logistics-api.md) — 9 endpoints
- [Logistics Station API](docs/api/logistics-station-api.md) — 18 endpoints
- [Media Center API](docs/api/media-center-api.md) — 6 endpoints
- [Membership API](docs/api/membership-api.md) — 10 endpoints
- [Order API](docs/api/order-api.md) — 8 endpoints
- [Product API](docs/api/product-api.md) — 28 endpoints
- [Product Review API](docs/api/product-review-api.md) — 3 endpoints
- [RedMart API](docs/api/redmart-api.md) — 8 endpoints
- [Return and Refund API](docs/api/return-and-refund-api.md) — 8 endpoints
- [Seller API](docs/api/seller-api.md) — 17 endpoints
- [Seller Voucher API](docs/api/seller-voucher-api.md) — 9 endpoints
- [Service Market API](docs/api/service-market-api.md) — 2 endpoints
- [Sponsored Solutions API](docs/api/sponsored-solutions-api.md) — 28 endpoints
- [Store Decoration API](docs/api/store-decoration-api.md) — 1 endpoints
- [System API](docs/api/system-api.md) — 4 endpoints

## Guides

- [API Best Practice](docs/guides/api-best-practice.md) — 43 pages
- [API Reference](docs/guides/api-reference.md) — 7 pages
- [Advanced Tasks](docs/guides/advanced-tasks.md) — 6 pages
- [Developer's Guide](docs/guides/developer-s-guide.md) — 10 pages
- [FAQ](docs/guides/faq.md) — 4 pages
- [Overview](docs/guides/overview.md) — 1 pages
- [Push Mechanism(WebHook) Application](docs/guides/push-mechanism-webhook-application.md) — 18 pages
- [Quick Start Guide](docs/guides/quick-start-guide.md) — 13 pages
- [Security Center](docs/guides/security-center.md) — 18 pages
- [Terms and Agreement](docs/guides/terms-and-agreement.md) — 4 pages
