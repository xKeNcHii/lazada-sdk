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
  getJitPurchaseOrderBatchPickupDeliver(params: Q<"/jit/purchase_order/batch_pickup_deliver", "get">) {
    return this.client.GET("/jit/purchase_order/batch_pickup_deliver", { params: { query: params } });
  }

  postJitPurchaseOrderBatchPickupDeliver(body: B<"/jit/purchase_order/batch_pickup_deliver", "post">) {
    return this.client.POST("/jit/purchase_order/batch_pickup_deliver", { body });
  }

  postChoiceStockEdit(body: B<"/choice/stock/edit", "post">) {
    return this.client.POST("/choice/stock/edit", { body });
  }

  getChoiceProductItem(params: Q<"/choice/product/item/get", "get">) {
    return this.client.GET("/choice/product/item/get", { params: { query: params } });
  }

  getChoiceProducts(params: Q<"/choice/products/get", "get">) {
    return this.client.GET("/choice/products/get", { params: { query: params } });
  }

  getChoiceProducts_2(body: B<"/choice/products/get", "post">) {
    return this.client.POST("/choice/products/get", { body });
  }

  getChoiceSeller(params: Q<"/choice/seller/get", "get">) {
    return this.client.GET("/choice/seller/get", { params: { query: params } });
  }

  getChoiceSeller_2(body: B<"/choice/seller/get", "post">) {
    return this.client.POST("/choice/seller/get", { body });
  }

  getChoiceSkuItemRelationGetBySku(params: Q<"/choice/sku_item_relation/get_by_sku", "get">) {
    return this.client.GET("/choice/sku_item_relation/get_by_sku", { params: { query: params } });
  }

  postChoiceSkuItemRelationGetBySku(body: B<"/choice/sku_item_relation/get_by_sku", "post">) {
    return this.client.POST("/choice/sku_item_relation/get_by_sku", { body });
  }

  postJitPurchaseOrderPackage(body: B<"/jit/purchase_order/package", "post">) {
    return this.client.POST("/jit/purchase_order/package", { body });
  }

  getJitPurchaseOrderPrint(params: Q<"/jit/purchase_order/print", "get">) {
    return this.client.GET("/jit/purchase_order/print", { params: { query: params } });
  }

  postJitPurchaseOrderPrint(body: B<"/jit/purchase_order/print", "post">) {
    return this.client.POST("/jit/purchase_order/print", { body });
  }

  getPickupOrderPrint(params: Q<"/pickup_order/print", "get">) {
    return this.client.GET("/pickup_order/print", { params: { query: params } });
  }

  postPickupOrderPrint(body: B<"/pickup_order/print", "post">) {
    return this.client.POST("/pickup_order/print", { body });
  }

  getJitPurchaseOrderQueryList(params: Q<"/jit/purchase_order/query_list", "get">) {
    return this.client.GET("/jit/purchase_order/query_list", { params: { query: params } });
  }

  postJitPurchaseOrderQueryList(body: B<"/jit/purchase_order/query_list", "post">) {
    return this.client.POST("/jit/purchase_order/query_list", { body });
  }

  getJitPurchaseOrderQueryListPurchaseItem(params: Q<"/jit/purchase_order/query_list_purchase_item", "get">) {
    return this.client.GET("/jit/purchase_order/query_list_purchase_item", { params: { query: params } });
  }

  postJitPurchaseOrderQueryListPurchaseItem(body: B<"/jit/purchase_order/query_list_purchase_item", "post">) {
    return this.client.POST("/jit/purchase_order/query_list_purchase_item", { body });
  }

  queryPickupOrder(params: Q<"/pickup_order/query", "get">) {
    return this.client.GET("/pickup_order/query", { params: { query: params } });
  }

  queryPickupOrder_2(body: B<"/pickup_order/query", "post">) {
    return this.client.POST("/pickup_order/query", { body });
  }

}
