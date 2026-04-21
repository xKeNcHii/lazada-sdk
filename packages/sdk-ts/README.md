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

Requires Node.js ≥ 20.

## Quick start

```ts
import { LazadaSDK } from "@lazada-sdk/sdk";

const sdk = new LazadaSDK({
  appKey: process.env.LAZADA_APP_KEY!,
  appSecret: process.env.LAZADA_APP_SECRET!,
  region: "SG",                 // SG | VN | PH | MY | TH | ID
  accessToken: process.env.LAZADA_ACCESS_TOKEN!,
});

const { data, error } = await sdk.seller.get();
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
const { data } = await sdk.system.generateAccessToken({ code: oauthCode });
// data.access_token, data.refresh_token, data.expires_in, ...
```

Refresh:

```ts
const { data } = await sdk.system.refreshAccessToken({
  refresh_token: stored.refresh_token,
});
```

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

Method names for `order`, `seller`, and `system` are hand-polished. The other 30 groups use auto-generated names following `<verb><PathSegments>` (e.g. `getOrdersItems`, `postImageUpload`). Hand-polished names land in a minor version bump as they're added.

## Error handling

```ts
import { LazadaApiError, LazadaAuthError, LazadaRateLimitError } from "@lazada-sdk/sdk";

try {
  await sdk.order.getList({ created_after: "2024-01-01" });
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

**v0.0.x** — API surface is functional but lightly road-tested. Signing and URL routing have unit tests but have not been run against every Lazada endpoint. POST endpoints with request bodies should be smoke-tested before relying on them in production.

## License

MIT. See [LICENSE](./LICENSE).
