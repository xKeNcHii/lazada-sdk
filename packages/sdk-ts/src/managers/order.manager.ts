import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `order-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class OrderManager extends BaseManager {
  getOrderDocument(params: Q<"/order/document/get", "get">) {
    return this.client.GET("/order/document/get", { params: { query: params } });
  }

  getOrdersItems(params: Q<"/orders/items/get", "get">) {
    return this.client.GET("/orders/items/get", { params: { query: params } });
  }

  getOrdersOvo(body: B<"/orders/ovo/get", "post">) {
    return this.client.POST("/orders/ovo/get", { body });
  }

  getOrder(params: Q<"/order/get", "get">) {
    return this.client.GET("/order/get", { params: { query: params } });
  }

  getOrderItems(params: Q<"/order/items/get", "get">) {
    return this.client.GET("/order/items/get", { params: { query: params } });
  }

  getOrders(params: Q<"/orders/get", "get">) {
    return this.client.GET("/orders/get", { params: { query: params } });
  }

  getOrderReverseCancelValidate(params: Q<"/order/reverse/cancel/validate", "get">) {
    return this.client.GET("/order/reverse/cancel/validate", { params: { query: params } });
  }

  setOrderInvoiceNumber(body: B<"/order/invoice_number/set", "post">) {
    return this.client.POST("/order/invoice_number/set", { body });
  }

}
