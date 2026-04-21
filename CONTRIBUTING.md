# Contributing

## Repo layout

- `scraper/` — Python scraper that mirrors Lazada's public API docs into `docs/api/*.md`.
- `spec/` — TypeScript parser that turns `docs/api/*.md` into `spec/openapi/lazada.openapi.yaml` + bootstrap script that generates manager classes.
- `packages/sdk-ts/` — the published SDK. Types are generated from the OpenAPI spec; managers are generated from the bootstrap script.
- `examples/` — runnable scripts that exercise the SDK against real Lazada endpoints.

## Local setup

```bash
pnpm install
pnpm -r build
pnpm -r test
```

Requires **Node ≥ 20** and **pnpm ≥ 9**.

## The regeneration loop

When Lazada publishes new endpoints or changes existing ones:

```bash
# 1. Refresh the doc mirror (requires Python 3.11+).
cd scraper && pip install -r requirements.txt && python scrape.py

# 2. Rebuild the OpenAPI spec from the refreshed markdown.
cd .. && pnpm --filter @lazada-sdk/spec parse

# 3. Regenerate TypeScript types from the spec.
pnpm --filter @lazada-sdk/sdk gen:types

# 4. Regenerate the manager classes (use --force to overwrite existing files).
pnpm --filter @lazada-sdk/spec bootstrap:managers -- --force

# 5. Typecheck + test.
pnpm -r typecheck && pnpm -r test
```

Commit the regenerated `spec/openapi/lazada.openapi.yaml`, `packages/sdk-ts/src/schemas/generated.ts`, and `packages/sdk-ts/src/managers/*.ts` together in one "chore: spec refresh" commit.

## Manager naming heuristic

`bootstrap-managers.ts` derives method names from OpenAPI paths:

| Path | Method |
|---|---|
| `GET /orders/get` | `getOrders()` |
| `GET /seller/metrics/get` | `getSellerMetrics()` |
| `POST /image/upload` | `uploadImage()` |
| `POST /auth/token/createWithOpenId` | `createAuthTokenWithOpenId()` |

When both `GET` and `POST` variants exist for the same path (Lazada's large-payload workaround), the SDK emits only the POST variant. If you need the GET transport, call it via `sdk.client.GET(path, ...)` directly.

Collisions within a manager are resolved by folding the parent path segment into the name (`/order/cancel` and `/rma/cancel` → `cancelOrder` and `cancelRma`). If you see an ugly name like `postSomethingUglyCompound`, extend the verb list in `spec/src/bootstrap-managers.ts` and regenerate.

## Running examples against a live environment

```bash
cp .env.example .env
# edit .env with your Lazada app credentials and access token
pnpm --filter @lazada-sdk/sdk exec tsx ../../examples/get-pending-orders.ts
```

## Commits and releases

- Conventional commits (`feat:`, `fix:`, `chore:`, etc.) — release-please parses these to compute version bumps.
- Use `!` or `BREAKING CHANGE:` trailer for breaking changes.
- Only `@lazada-sdk/sdk` is published to npm. `@lazada-sdk/spec` is an internal dev tool.

## What to test before opening a PR

- `pnpm -r typecheck`
- `pnpm -r test`
- `pnpm --filter @lazada-sdk/sdk size` — bundle budgets must stay green.
- If you touched signing or request routing, run one of `examples/*.ts` against the Lazada sandbox to verify the change lands correctly on a real server.
