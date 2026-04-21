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
  getContentMcnContentQuerytaginfosbyname(params: Q<"/content/mcn/content/queryTagInfosByName", "get">) {
    return this.client.GET("/content/mcn/content/queryTagInfosByName", { params: { query: params } });
  }

  postContentMcnContentQuerytaginfosbyname(body: B<"/content/mcn/content/queryTagInfosByName", "post">) {
    return this.client.POST("/content/mcn/content/queryTagInfosByName", { body });
  }

  postContentMcnContentCancelscheduled(body: B<"/content/mcn/content/cancelScheduled", "post">) {
    return this.client.POST("/content/mcn/content/cancelScheduled", { body });
  }

  postContentMcnVideoBlockCommit(body: B<"/content/mcn/video/block/commit", "post">) {
    return this.client.POST("/content/mcn/video/block/commit", { body });
  }

  createContentMcnContent(body: B<"/content/mcn/content/create", "post">) {
    return this.client.POST("/content/mcn/content/create", { body });
  }

  createContentMcnVideoBlock(params: Q<"/content/mcn/video/block/create", "get">) {
    return this.client.GET("/content/mcn/video/block/create", { params: { query: params } });
  }

  createContentMcnVideoBlock_2(body: B<"/content/mcn/video/block/create", "post">) {
    return this.client.POST("/content/mcn/video/block/create", { body });
  }

  listContentMcnCategory() {
    return this.client.GET("/content/mcn/category/list", {});
  }

  listContentMcnProperty() {
    return this.client.GET("/content/mcn/property/list", {});
  }

  listContentMcnProperty_2() {
    return this.client.POST("/content/mcn/property/list", {});
  }

  postContentMcnContentReplyschedulepublish(body: B<"/content/mcn/content/replySchedulePublish", "post">) {
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

  searchContentMcnSimilarProduct(params: Q<"/content/mcn/similar/product/search", "get">) {
    return this.client.GET("/content/mcn/similar/product/search", { params: { query: params } });
  }

  searchContentMcnSimilarProduct_2(body: B<"/content/mcn/similar/product/search", "post">) {
    return this.client.POST("/content/mcn/similar/product/search", { body });
  }

  getContentMcnContentQueryreviewrecords(params: Q<"/content/mcn/content/queryReviewRecords", "get">) {
    return this.client.GET("/content/mcn/content/queryReviewRecords", { params: { query: params } });
  }

  postContentMcnContentQueryreviewrecords(body: B<"/content/mcn/content/queryReviewRecords", "post">) {
    return this.client.POST("/content/mcn/content/queryReviewRecords", { body });
  }

}
