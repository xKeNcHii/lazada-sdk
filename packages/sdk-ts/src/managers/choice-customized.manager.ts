import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `choice-customized-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class ChoiceCustomizedManager extends BaseManager {
  postJitPurchaseOrderBatchPickupDeliver(body: B<"/jit/purchase_order/batch_pickup_deliver", "post">) {
    return this.client.POST("/jit/purchase_order/batch_pickup_deliver", { body });
  }

  postChoiceStockEdit(body: B<"/choice/stock/edit", "post">) {
    return this.client.POST("/choice/stock/edit", { body });
  }

  getChoiceProductItem(params: Q<"/choice/product/item/get", "get">) {
    return this.client.GET("/choice/product/item/get", { params: { query: params } });
  }

  getChoiceProducts(body: B<"/choice/products/get", "post">) {
    return this.client.POST("/choice/products/get", { body });
  }

  getChoiceSeller(body: B<"/choice/seller/get", "post">) {
    return this.client.POST("/choice/seller/get", { body });
  }

  getChoiceSkuItemRelationBySku(body: B<"/choice/sku_item_relation/get_by_sku", "post">) {
    return this.client.POST("/choice/sku_item_relation/get_by_sku", { body });
  }

  postJitPurchaseOrderPackage(body: B<"/jit/purchase_order/package", "post">) {
    return this.client.POST("/jit/purchase_order/package", { body });
  }

  printJitPurchaseOrder(body: B<"/jit/purchase_order/print", "post">) {
    return this.client.POST("/jit/purchase_order/print", { body });
  }

  printPickupOrder(body: B<"/pickup_order/print", "post">) {
    return this.client.POST("/pickup_order/print", { body });
  }

  queryJitPurchaseOrderList(body: B<"/jit/purchase_order/query_list", "post">) {
    return this.client.POST("/jit/purchase_order/query_list", { body });
  }

  queryJitPurchaseOrderListPurchaseItem(body: B<"/jit/purchase_order/query_list_purchase_item", "post">) {
    return this.client.POST("/jit/purchase_order/query_list_purchase_item", { body });
  }

  queryPickupOrder(body: B<"/pickup_order/query", "post">) {
    return this.client.POST("/pickup_order/query", { body });
  }

}
