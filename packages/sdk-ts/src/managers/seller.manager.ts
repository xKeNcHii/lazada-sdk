import { BaseManager } from "./base.manager.js";

/**
 * Seller API — account and shop-level operations.
 * Minimal v0.1 surface; full surface generated from the spec in a later pass.
 */
export class SellerManager extends BaseManager {
  /** `GET /seller/get` — simplest authenticated smoke endpoint. */
  get() {
    return this.client.GET("/seller/get", {});
  }

  /** `GET /seller/metrics/get` — seller performance metrics. */
  getMetrics() {
    return this.client.GET("/seller/metrics/get", {});
  }
}
