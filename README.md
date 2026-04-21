# lazada-sdk

Unofficial TypeScript SDK for the Lazada Open Platform API — derived from the public docs, built as a pnpm monorepo of a markdown→OpenAPI parser (`@lazada-sdk/spec`) and a runtime SDK (`@lazada-sdk/sdk`).

Not affiliated with Lazada. See [plan](./docs/PLAN.md) (if checked in) for architecture.

## Quick start

```bash
pnpm install
pnpm spec:build          # parse docs/ → spec/openapi/lazada.openapi.yaml
pnpm --filter @lazada-sdk/sdk gen:types
pnpm -r build
```

## Layout

- `scraper/` — Python scraper that fetches and converts Lazada's docs to markdown.
- `docs/` — scraped markdown (local mirror; not published on npm).
- `spec/` — parser that converts `docs/api/*.md` → OpenAPI 3.1 YAML.
- `packages/sdk-ts/` — TypeScript SDK; types are generated from the OpenAPI spec, managers are hand-written name-mapping wrappers.

## Status

v0.0.1 scaffolding. The signing layer, OpenAPI emission, and a few example managers (Order, Seller, System) are wired up. Remaining managers are bootstrapped from the spec in a follow-up pass.

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
