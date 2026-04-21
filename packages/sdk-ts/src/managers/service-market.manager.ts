import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `service-market-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class ServiceMarketManager extends BaseManager {
  queryServiceMarketOrder(params: Q<"/service/market/order/query", "get">) {
    return this.client.GET("/service/market/order/query", { params: { query: params } });
  }

  queryServiceMarketOrder_2(body: B<"/service/market/order/query", "post">) {
    return this.client.POST("/service/market/order/query", { body });
  }

  queryServiceMarketSubs(params: Q<"/service/market/subs/query", "get">) {
    return this.client.GET("/service/market/subs/query", { params: { query: params } });
  }

  queryServiceMarketSubs_2(body: B<"/service/market/subs/query", "post">) {
    return this.client.POST("/service/market/subs/query", { body });
  }

}
