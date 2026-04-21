import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `lazlive-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class LazliveManager extends BaseManager {
  getLazliveProductHighlight(params: Q<"/lazlive/product/highlight", "get">) {
    return this.client.GET("/lazlive/product/highlight", { params: { query: params } });
  }

  postLazliveProductHighlight(body: B<"/lazlive/product/highlight", "post">) {
    return this.client.POST("/lazlive/product/highlight", { body });
  }

}
