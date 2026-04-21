import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `return-and-refund-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class ReturnAndRefundManager extends BaseManager {
  listOrderReverseReturnDetail(params: Q<"/order/reverse/return/detail/list", "get">) {
    return this.client.GET("/order/reverse/return/detail/list", { params: { query: params } });
  }

  listOrderReverseReturnHistory(params: Q<"/order/reverse/return/history/list", "get">) {
    return this.client.GET("/order/reverse/return/history/list", { params: { query: params } });
  }

  listOrderReverseReason(params: Q<"/order/reverse/reason/list", "get">) {
    return this.client.GET("/order/reverse/reason/list", { params: { query: params } });
  }

  getReverseGetreverseordersforseller(params: Q<"/reverse/getreverseordersforseller", "get">) {
    return this.client.GET("/reverse/getreverseordersforseller", { params: { query: params } });
  }

  postReverseGetreverseordersforseller(body: B<"/reverse/getreverseordersforseller", "post">) {
    return this.client.POST("/reverse/getreverseordersforseller", { body });
  }

  createOrderReverseCancel(params: Q<"/order/reverse/cancel/create", "get">) {
    return this.client.GET("/order/reverse/cancel/create", { params: { query: params } });
  }

  getOrderReverseCancelSellerDecide(params: Q<"/order/reverse/cancel/seller/decide", "get">) {
    return this.client.GET("/order/reverse/cancel/seller/decide", { params: { query: params } });
  }

  getOrderReverseOnlyrefundSellerDecide(params: Q<"/order/reverse/onlyrefund/seller/decide", "get">) {
    return this.client.GET("/order/reverse/onlyrefund/seller/decide", { params: { query: params } });
  }

  updateOrderReverseReturn(params: Q<"/order/reverse/return/update", "get">) {
    return this.client.GET("/order/reverse/return/update", { params: { query: params } });
  }

}
