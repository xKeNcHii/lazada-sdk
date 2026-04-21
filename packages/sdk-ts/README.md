# @lazada-sdk/sdk

[![CI](https://github.com/xKeNcHii/lazada-sdk/actions/workflows/ci.yml/badge.svg)](https://github.com/xKeNcHii/lazada-sdk/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js >=20](https://img.shields.io/badge/node-%3E%3D20-brightgreen.svg)](https://nodejs.org)

Unofficial TypeScript SDK for the Lazada Open Platform API.

> **Not affiliated with Lazada.** Derived from public documentation. Use at your own risk. See [Lazada's terms](https://open.lazada.com/).

## Install

```bash
npm install @lazada-sdk/sdk
# or
pnpm add @lazada-sdk/sdk
```

Runs on **Node ≥ 20, Cloudflare Workers, Vercel Edge, Deno, and modern browsers**. Signing uses WebCrypto — no `node:crypto` dependency.

## Quick start

```ts
import { LazadaSDK } from "@lazada-sdk/sdk";

const sdk = new LazadaSDK({
  appKey: process.env.LAZADA_APP_KEY!,
  appSecret: process.env.LAZADA_APP_SECRET!,
  region: "SG",                 // SG | VN | PH | MY | TH | ID
  accessToken: process.env.LAZADA_ACCESS_TOKEN!,
});

const { data, error } = await sdk.seller.getSeller();
if (error) throw error;
console.log(data);
```

## Features

- **367 endpoints** across 33 API groups, typed end-to-end from an OpenAPI 3.1 spec.
- **HMAC-SHA256 request signing** handled transparently — you never construct the `sign` parameter yourself.
- **Multi-region base URLs** — automatically routes to `api.lazada.sg`, `api.lazada.vn`, etc., and to `auth.lazada.com` for OAuth endpoints.
- **Typed errors** — non-zero `code` responses throw `LazadaApiError` with subclasses for auth / rate limit / validation families.
- **ESM + CJS** dual output, source maps, full `.d.ts`.

## Auth

You bring your own access token. To exchange an OAuth `code` for a token:

```ts
const { data } = await sdk.system.createAuthToken({ code: oauthCode });
// data.access_token, data.refresh_token, data.expires_in, ...
```

Refresh is automatic: pass a `refreshToken` at construction time and the SDK
refreshes before every request where the access token is within
`refreshBufferSec` of expiry (default 60s). Concurrent requests during a
refresh coalesce into a single network call.

## Managers

One manager per Lazada API group:

```
sdk.order, sdk.product, sdk.seller, sdk.logistics, sdk.lazadaLogistics,
sdk.finance, sdk.fulfillment, sdk.returnAndRefund, sdk.sellerVoucher,
sdk.freeShipping, sdk.flexicombo, sdk.redmart, sdk.lazpay, sdk.membership,
sdk.content, sdk.productReview, sdk.storeDecoration, sdk.mediaCenter,
sdk.instantMessaging, sdk.sponsoredSolutions, sdk.lazlike, sdk.lazlive,
sdk.eTickets, sdk.earlyBirdPrice, sdk.crossBoarderProduct, sdk.fbl,
sdk.choiceCustomized, sdk.firstmileBigbagOnlyForCn, sdk.logisticsStation,
sdk.serviceMarket, sdk.lazadaDg, sdk.lazadaWalletCorporateTopUp, sdk.system
```

All method names are generated from the OpenAPI spec using a `<verb><PathSegments>` heuristic — e.g. `/orders/get` becomes `getOrders`, `/image/upload` becomes `uploadImage`. Spec refreshes regenerate cleanly; no hand-maintained wrapper code drifts out of sync.

### GET/POST duality

Many Lazada endpoints are registered twice — once as `GET /foo/get` (query
params) and once as `POST /foo/get` (form-encoded body). The two variants have
identical semantics; POST exists to handle payloads that exceed URL length
limits. **The SDK emits one method per path, preferring POST when both
exist.** If a code sample you're following specifically calls the GET variant
and you need to match that transport, reach for the raw client:

```ts
await sdk.client.GET("/choice/products/get", { params: { query: { ... } } });
```

## Error handling

```ts
import { LazadaApiError, LazadaAuthError, LazadaRateLimitError } from "@lazada-sdk/sdk";

try {
  await sdk.order.getOrders({ created_after: "2024-01-01" });
} catch (err) {
  if (err instanceof LazadaAuthError) {
    // Refresh your access token and retry
  } else if (err instanceof LazadaRateLimitError) {
    // Back off
  } else if (err instanceof LazadaApiError) {
    // err.code, err.type, err.message, err.requestId
  }
}
```

## Status

**v0.1.0 (alpha).** The SDK has full unit-test coverage for signing, token refresh, URL routing, form encoding, and error classification — but has **not yet been validated against a live Lazada environment**. The first production user should expect to file 1–2 issues around edge cases (unicode params, unusual body shapes). Breaking changes are possible until v1.0.

## License

MIT. See [LICENSE](./LICENSE).
