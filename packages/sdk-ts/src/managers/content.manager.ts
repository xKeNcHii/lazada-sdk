import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `content-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class ContentManager extends BaseManager {
  cancelContentAiTask(body: B<"/content/ai/cancelTask", "post">) {
    return this.client.POST("/content/ai/cancelTask", { body });
  }

  postContentAiChangeFace(body: B<"/content/ai/changeFace", "post">) {
    return this.client.POST("/content/ai/changeFace", { body });
  }

  postContentAiChangeProductBackground(body: B<"/content/ai/changeProductBackground", "post">) {
    return this.client.POST("/content/ai/changeProductBackground", { body });
  }

  postContentAiFixHand(body: B<"/content/ai/fixHand", "post">) {
    return this.client.POST("/content/ai/fixHand", { body });
  }

  getContentAiTaskStatus(params: Q<"/content/ai/getTaskStatus", "get">) {
    return this.client.GET("/content/ai/getTaskStatus", { params: { query: params } });
  }

  postContentAiProductImageMatch(body: B<"/content/ai/productImageMatch", "post">) {
    return this.client.POST("/content/ai/productImageMatch", { body });
  }

  postContentAiTryOnCloth(body: B<"/content/ai/tryOnCloth", "post">) {
    return this.client.POST("/content/ai/tryOnCloth", { body });
  }

}
