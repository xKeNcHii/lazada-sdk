# Changelog

All notable changes to `@lazada-sdk/sdk` are documented here.

Format loosely follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses [Conventional Commits](https://www.conventionalcommits.org/) in git history. Semver is tracked by [release-please](https://github.com/googleapis/release-please) once wired up.

## Unreleased

### Added
- Parser snapshot test + live-docs drift guard (`spec/__tests__/parse-docs-snapshot.test.ts`).
- POST body shape matrix (nested object, primitives, null/undefined drops, pool-signing determinism).
- Error code enumeration test — every mapped code routes to the right subclass.
- Per-manager smoke — 33 manager fields expose methods and share the client instance.
- `llms.txt` at repo root following <https://llmstxt.org>.
- Vitest v8 coverage with a 70% floor across statements/branches/functions/lines.

### Fixed
- POST body signing: form-encode bodies and fold fields into the signing pool (was JSON-encoded and appended raw, causing `IncompleteSignature` for every POST).

## 0.0.1 — 2026-04-21

Initial scaffold. Not yet published to npm.
