import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `product-review-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class ProductReviewManager extends BaseManager {
  listReviewSellerHistory(body: B<"/review/seller/history/list", "post">) {
    return this.client.POST("/review/seller/history/list", { body });
  }

  getReviewSellerListV2(params: Q<"/review/seller/list/v2", "get">) {
    return this.client.GET("/review/seller/list/v2", { params: { query: params } });
  }

  addReviewSellerReply(params: Q<"/review/seller/reply/add", "get">) {
    return this.client.GET("/review/seller/reply/add", { params: { query: params } });
  }

}
