import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type OrdersGetQuery =
  paths["/orders/get"]["get"] extends { parameters: { query?: infer Q } } ? Q : never;
type OrderItemsGetQuery =
  paths["/order/items/get"]["get"] extends { parameters: { query?: infer Q } } ? Q : never;

/**
 * Order API. v0.1 exposes the most common read/write operations.
 */
export class OrderManager extends BaseManager {
  getList(params: OrdersGetQuery) {
    return this.client.GET("/orders/get", { params: { query: params } });
  }

  getItems(params: OrderItemsGetQuery) {
    return this.client.GET("/order/items/get", { params: { query: params } });
  }
}
