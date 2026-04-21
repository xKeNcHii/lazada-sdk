# Changelog

## [1.0.0](https://github.com/xKeNcHii/lazada-sdk/compare/sdk-v0.0.1...sdk-v1.0.0) (2026-04-21)


### ⚠ BREAKING CHANGES

* **sdk:** manager method names changed. sdk.seller.get() is now sdk.seller.getSeller(); sdk.system.generateAccessToken() is now sdk.system.createAuthToken(). signRequest() returns Promise<string>.

### Features

* **sdk:** TypeScript SDK + tests + CI/CD + release automation ([f45ff07](https://github.com/xKeNcHii/lazada-sdk/commit/f45ff0758ed839e928f23f46d6ffcc5946a7d4af))
* **sdk:** v0.1.0 — WebCrypto signing, improved managers, dual-method dedupe ([e151bc0](https://github.com/xKeNcHii/lazada-sdk/commit/e151bc0b15be711accc4088f14774bf00a330b32))
* split camelCase path segments, polish docs, add task-oriented example ([c851be1](https://github.com/xKeNcHii/lazada-sdk/commit/c851be172855a8ab5d2c8eed190cdc9e5e25ebf6))
