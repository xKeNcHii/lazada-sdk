import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `cross-boarder-product-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class CrossBoarderProductManager extends BaseManager {
  createProductGlobal(body: B<"/product/global/create", "post">) {
    return this.client.POST("/product/global/create", { body });
  }

  getProductGlobalExtension(params: Q<"/product/global/extension", "get">) {
    return this.client.GET("/product/global/extension", { params: { query: params } });
  }

  getProductGlobalStatus(params: Q<"/product/global/status/get", "get">) {
    return this.client.GET("/product/global/status/get", { params: { query: params } });
  }

  getProductGlobalSemiRecommendPrice(body: B<"/product/global/semi/recommend/price/get", "post">) {
    return this.client.POST("/product/global/semi/recommend/price/get", { body });
  }

  getProductGlobalUnfilledAttribute(params: Q<"/product/global/unfilled/attribute/get", "get">) {
    return this.client.GET("/product/global/unfilled/attribute/get", { params: { query: params } });
  }

  getProductGlobalSemiAvaible(body: B<"/product/global/semi/avaible/get", "post">) {
    return this.client.POST("/product/global/semi/avaible/get", { body });
  }

  updateProductGlobalSemi(body: B<"/product/global/semi/update", "post">) {
    return this.client.POST("/product/global/semi/update", { body });
  }

  postProductGlobalSemiUpgrade(body: B<"/product/global/semi/upgrade", "post">) {
    return this.client.POST("/product/global/semi/upgrade", { body });
  }

  updateProductGlobalAttribute(body: B<"/product/global/attribute/update", "post">) {
    return this.client.POST("/product/global/attribute/update", { body });
  }

  deleteProductGlobal(body: B<"/product/global/delete", "post">) {
    return this.client.POST("/product/global/delete", { body });
  }

  postProductGlobalUpdateStatus(body: B<"/product/global/update/status", "post">) {
    return this.client.POST("/product/global/update/status", { body });
  }

}
