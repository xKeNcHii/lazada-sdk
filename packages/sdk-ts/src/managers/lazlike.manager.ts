import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `lazlike-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class LazlikeManager extends BaseManager {
  queryContentMcnContentTagInfosByName(body: B<"/content/mcn/content/queryTagInfosByName", "post">) {
    return this.client.POST("/content/mcn/content/queryTagInfosByName", { body });
  }

  cancelContentMcnContentScheduled(body: B<"/content/mcn/content/cancelScheduled", "post">) {
    return this.client.POST("/content/mcn/content/cancelScheduled", { body });
  }

  postContentMcnVideoBlockCommit(body: B<"/content/mcn/video/block/commit", "post">) {
    return this.client.POST("/content/mcn/video/block/commit", { body });
  }

  createContentMcnContent(body: B<"/content/mcn/content/create", "post">) {
    return this.client.POST("/content/mcn/content/create", { body });
  }

  createContentMcnVideoBlock(body: B<"/content/mcn/video/block/create", "post">) {
    return this.client.POST("/content/mcn/video/block/create", { body });
  }

  listContentMcnCategory() {
    return this.client.GET("/content/mcn/category/list", {});
  }

  listContentMcnProperty() {
    return this.client.POST("/content/mcn/property/list", {});
  }

  replyContentMcnContentSchedulePublish(body: B<"/content/mcn/content/replySchedulePublish", "post">) {
    return this.client.POST("/content/mcn/content/replySchedulePublish", { body });
  }

  uploadContentMcnImage(body: B<"/content/mcn/image/upload", "post">) {
    return this.client.POST("/content/mcn/image/upload", { body });
  }

  uploadContentMcnVideoBlock(body: B<"/content/mcn/video/block/upload", "post">) {
    return this.client.POST("/content/mcn/video/block/upload", { body });
  }

  getContentMcnProductValidate(params: Q<"/content/mcn/product/validate", "get">) {
    return this.client.GET("/content/mcn/product/validate", { params: { query: params } });
  }

  searchContentMcnSimilarProduct(body: B<"/content/mcn/similar/product/search", "post">) {
    return this.client.POST("/content/mcn/similar/product/search", { body });
  }

  queryContentMcnContentReviewRecords(body: B<"/content/mcn/content/queryReviewRecords", "post">) {
    return this.client.POST("/content/mcn/content/queryReviewRecords", { body });
  }

}
