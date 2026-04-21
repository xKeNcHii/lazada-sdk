# Changelog

All notable changes to `@lazada-sdk/sdk` are documented here.

Format loosely follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses [Conventional Commits](https://www.conventionalcommits.org/) in git history. Semver is tracked by [release-please](https://github.com/googleapis/release-please) once wired up.

## Unreleased

### Added
- **OAuth auto-refresh.** `TokenManager` refreshes `access_token` proactively
  using `refresh_token` within a 60s safety buffer, coalesces concurrent
  refreshes into a single in-flight request, and persists rotated tokens to
  `TokenStorage`. Opt in by passing `refreshToken` (and optionally
  `tokenExpiresAt`, `storage`) in `LazadaConfig`.
- **`paginate()` helper.** Async-iterator over offset/limit or cursor-style
  list endpoints; auto-detects convention from response shape; respects a
  `maxItems` safety cap. `for await (const o of paginate(sdk.order.getList, ...))`.
- **release-please workflow** (`.github/workflows/release.yml`) driven by
  Conventional Commits. Opens a standing release PR, tags, and publishes
  `@lazada-sdk/sdk` to npm (with provenance) on merge. Requires `NPM_TOKEN`
  repo secret.
- **size-limit** budgets in CI: 100 KB full ESM, 5 KB signing-only,
  40 KB SDK+order+seller. Currently 12.6 KB / 335 B / 12 KB — headroom.
- Parser snapshot test + live-docs drift guard.
- POST body shape matrix (nested object, primitives, null/undefined drops,
  pool-signing determinism).
- Error code enumeration test — every mapped code routes to the right subclass.
- Per-manager smoke — 33 manager fields expose methods and share the client instance.
- `llms.txt` at repo root following <https://llmstxt.org>.
- Vitest v8 coverage with a 70% floor across statements/branches/functions/lines.

### Fixed
- POST body signing: form-encode bodies and fold fields into the signing pool (was JSON-encoded and appended raw, causing `IncompleteSignature` for every POST).

## 0.0.1 — 2026-04-21

Initial scaffold. Not yet published to npm.
