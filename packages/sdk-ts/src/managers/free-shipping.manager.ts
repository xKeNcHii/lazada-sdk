import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `free-shipping-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class FreeShippingManager extends BaseManager {
  postPromotionFreeshippingActivate(body: B<"/promotion/freeshipping/activate", "post">) {
    return this.client.POST("/promotion/freeshipping/activate", { body });
  }

  addPromotionFreeshippingProductSku(body: B<"/promotion/freeshipping/product/sku/add", "post">) {
    return this.client.POST("/promotion/freeshipping/product/sku/add", { body });
  }

  createPromotionFreeshipping(body: B<"/promotion/freeshipping/create", "post">) {
    return this.client.POST("/promotion/freeshipping/create", { body });
  }

  postPromotionFreeshippingDeactivate(body: B<"/promotion/freeshipping/deactivate", "post">) {
    return this.client.POST("/promotion/freeshipping/deactivate", { body });
  }

  removePromotionFreeshippingProductSku(body: B<"/promotion/freeshipping/product/sku/remove", "post">) {
    return this.client.POST("/promotion/freeshipping/product/sku/remove", { body });
  }

  getPromotionFreeshippingDeliveryoptions() {
    return this.client.GET("/promotion/freeshipping/deliveryoptions/get", {});
  }

  getPromotionFreeshipping(params: Q<"/promotion/freeshipping/get", "get">) {
    return this.client.GET("/promotion/freeshipping/get", { params: { query: params } });
  }

  getPromotionFreeshippings(params: Q<"/promotion/freeshippings/get", "get">) {
    return this.client.GET("/promotion/freeshippings/get", { params: { query: params } });
  }

  getPromotionFreeshippingRegions() {
    return this.client.GET("/promotion/freeshipping/regions/get", {});
  }

  getPromotionFreeshippingProducts(params: Q<"/promotion/freeshipping/products/get", "get">) {
    return this.client.GET("/promotion/freeshipping/products/get", { params: { query: params } });
  }

  updatePromotionFreeshipping(body: B<"/promotion/freeshipping/update", "post">) {
    return this.client.POST("/promotion/freeshipping/update", { body });
  }

}
