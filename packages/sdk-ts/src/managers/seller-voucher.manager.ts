import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `seller-voucher-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class SellerVoucherManager extends BaseManager {
  removePromotionVoucherProductSku(body: B<"/promotion/voucher/product/sku/remove", "post">) {
    return this.client.POST("/promotion/voucher/product/sku/remove", { body });
  }

  postPromotionVoucherActivate(body: B<"/promotion/voucher/activate", "post">) {
    return this.client.POST("/promotion/voucher/activate", { body });
  }

  addPromotionVoucherProductSku(body: B<"/promotion/voucher/product/sku/add", "post">) {
    return this.client.POST("/promotion/voucher/product/sku/add", { body });
  }

  createPromotionVoucher(body: B<"/promotion/voucher/create", "post">) {
    return this.client.POST("/promotion/voucher/create", { body });
  }

  postPromotionVoucherDeactivate(body: B<"/promotion/voucher/deactivate", "post">) {
    return this.client.POST("/promotion/voucher/deactivate", { body });
  }

  getPromotionVoucher(params: Q<"/promotion/voucher/get", "get">) {
    return this.client.GET("/promotion/voucher/get", { params: { query: params } });
  }

  getPromotionVouchers(params: Q<"/promotion/vouchers/get", "get">) {
    return this.client.GET("/promotion/vouchers/get", { params: { query: params } });
  }

  getPromotionVoucherProducts(params: Q<"/promotion/voucher/products/get", "get">) {
    return this.client.GET("/promotion/voucher/products/get", { params: { query: params } });
  }

  updatePromotionVoucher(body: B<"/promotion/voucher/update", "post">) {
    return this.client.POST("/promotion/voucher/update", { body });
  }

}
