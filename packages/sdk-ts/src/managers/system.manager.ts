import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `system-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class SystemManager extends BaseManager {
  createAuthToken(body: B<"/auth/token/create", "post">) {
    return this.client.POST("/auth/token/create", { body });
  }

  createAuthTokenWithOpenId(body: B<"/auth/token/createWithOpenId", "post">) {
    return this.client.POST("/auth/token/createWithOpenId", { body });
  }

  refreshAuthToken(body: B<"/auth/token/refresh", "post">) {
    return this.client.POST("/auth/token/refresh", { body });
  }

  postFbiDownloadStartExportByDataset(body: B<"/fbi/download/startExportByDataset", "post">) {
    return this.client.POST("/fbi/download/startExportByDataset", { body });
  }

}
