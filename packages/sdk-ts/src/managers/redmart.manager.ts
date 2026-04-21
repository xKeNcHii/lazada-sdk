import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `redmart-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class RedmartManager extends BaseManager {
  getRssPickupJob(body: B<"/rss/pickup-job/get", "post">) {
    return this.client.POST("/rss/pickup-job/get", { body });
  }

  getRssPickupJobs(body: B<"/rss/pickup-jobs/get", "post">) {
    return this.client.POST("/rss/pickup-jobs/get", { body });
  }

  getRssPickupLocations(params: Q<"/rss/pickupLocations/get", "get">) {
    return this.client.GET("/rss/pickupLocations/get", { params: { query: params } });
  }

  getRssProduct(params: Q<"/rss/product/get", "get">) {
    return this.client.GET("/rss/product/get", { params: { query: params } });
  }

  getRssProducts(params: Q<"/rss/products/get", "get">) {
    return this.client.GET("/rss/products/get", { params: { query: params } });
  }

  getRssStockLot(params: Q<"/rss/stockLot/get", "get">) {
    return this.client.GET("/rss/stockLot/get", { params: { query: params } });
  }

  getRssStockLots(params: Q<"/rss/stockLots/get", "get">) {
    return this.client.GET("/rss/stockLots/get", { params: { query: params } });
  }

  updateRssStockLot(body: B<"/rss/stockLot/update", "post">) {
    return this.client.POST("/rss/stockLot/update", { body });
  }

}
