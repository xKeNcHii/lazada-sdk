import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `early-bird-price-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class EarlyBirdPriceManager extends BaseManager {
  createActivityEarlyBird(body: B<"/activity/early/bird/create", "post">) {
    return this.client.POST("/activity/early/bird/create", { body });
  }

  addActivityEarlyBirdSkus(body: B<"/activity/early/bird/addSkus", "post">) {
    return this.client.POST("/activity/early/bird/addSkus", { body });
  }

  deactivateActivityEarlyBirdSkus(body: B<"/activity/early/bird/deactivateSkus", "post">) {
    return this.client.POST("/activity/early/bird/deactivateSkus", { body });
  }

}
