import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `flexicombo-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class FlexicomboManager extends BaseManager {
  activatePromotionFlexicombo(body: B<"/promotion/flexicombo/activate", "post">) {
    return this.client.POST("/promotion/flexicombo/activate", { body });
  }

  addPromotionFlexicomboProducts(body: B<"/promotion/flexicombo/products/add", "post">) {
    return this.client.POST("/promotion/flexicombo/products/add", { body });
  }

  createPromotionFlexicombo(body: B<"/promotion/flexicombo/create", "post">) {
    return this.client.POST("/promotion/flexicombo/create", { body });
  }

  deactivatePromotionFlexicombo(body: B<"/promotion/flexicombo/deactivate", "post">) {
    return this.client.POST("/promotion/flexicombo/deactivate", { body });
  }

  deletePromotionFlexicomboProducts(body: B<"/promotion/flexicombo/products/delete", "post">) {
    return this.client.POST("/promotion/flexicombo/products/delete", { body });
  }

  getPromotionFlexicomboDetails(params: Q<"/promotion/flexicombo/details", "get">) {
    return this.client.GET("/promotion/flexicombo/details", { params: { query: params } });
  }

  listPromotionFlexicombo(params: Q<"/promotion/flexicombo/list", "get">) {
    return this.client.GET("/promotion/flexicombo/list", { params: { query: params } });
  }

  listPromotionFlexicomboProducts(params: Q<"/promotion/flexicombo/products/list", "get">) {
    return this.client.GET("/promotion/flexicombo/products/list", { params: { query: params } });
  }

  updatePromotionFlexicombo(body: B<"/promotion/flexicombo/update", "post">) {
    return this.client.POST("/promotion/flexicombo/update", { body });
  }

}
