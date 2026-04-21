import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `media-center-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class MediaCenterManager extends BaseManager {
  postMediaVideoBlockCommit(body: B<"/media/video/block/commit", "post">) {
    return this.client.POST("/media/video/block/commit", { body });
  }

  getMediaVideo(params: Q<"/media/video/get", "get">) {
    return this.client.GET("/media/video/get", { params: { query: params } });
  }

  getMediaVideoQuota() {
    return this.client.GET("/media/video/quota/get", {});
  }

  createMediaVideoBlock(body: B<"/media/video/block/create", "post">) {
    return this.client.POST("/media/video/block/create", { body });
  }

  removeMediaVideo(body: B<"/media/video/remove", "post">) {
    return this.client.POST("/media/video/remove", { body });
  }

  uploadMediaVideoBlock(body: B<"/media/video/block/upload", "post">) {
    return this.client.POST("/media/video/block/upload", { body });
  }

}
