import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `product-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class ProductManager extends BaseManager {
  postProductStockSellableAdjust(body: B<"/product/stock/sellable/adjust", "post">) {
    return this.client.POST("/product/stock/sellable/adjust", { body });
  }

  updateSizeChartBatch(body: B<"/size/chart/batch/update", "post">) {
    return this.client.POST("/size/chart/batch/update", { body });
  }

  createProduct(body: B<"/product/create", "post">) {
    return this.client.POST("/product/create", { body });
  }

  deactivateProduct(body: B<"/product/deactivate", "post">) {
    return this.client.POST("/product/deactivate", { body });
  }

  queryCategoryBrands(body: B<"/category/brands/query", "post">) {
    return this.client.POST("/category/brands/query", { body });
  }

  getCategoryAttributes(params: Q<"/category/attributes/get", "get">) {
    return this.client.GET("/category/attributes/get", { params: { query: params } });
  }

  getProductCategorySuggestion(params: Q<"/product/category/suggestion/get", "get">) {
    return this.client.GET("/product/category/suggestion/get", { params: { query: params } });
  }

  getCategoryTree(params: Q<"/category/tree/get", "get">) {
    return this.client.GET("/category/tree/get", { params: { query: params } });
  }

  getCategoryCascadeNextCascadeProp(body: B<"/category/cascade/getNextCascadeProp", "post">) {
    return this.client.POST("/category/cascade/getNextCascadeProp", { body });
  }

  getProductSellerItemPreQcRules(body: B<"/product/seller/item/getPreQcRules", "post">) {
    return this.client.POST("/product/seller/item/getPreQcRules", { body });
  }

  getProductContentScore(body: B<"/product/content/score/get", "post">) {
    return this.client.POST("/product/content/score/get", { body });
  }

  getProductItem(params: Q<"/product/item/get", "get">) {
    return this.client.GET("/product/item/get", { params: { query: params } });
  }

  getProducts(params: Q<"/products/get", "get">) {
    return this.client.GET("/products/get", { params: { query: params } });
  }

  listProductQcAlert(params: Q<"/product/qc/alert/list", "get">) {
    return this.client.GET("/product/qc/alert/list", { params: { query: params } });
  }

  getImageResponse(params: Q<"/image/response/get", "get">) {
    return this.client.GET("/image/response/get", { params: { query: params } });
  }

  getProductSellerItemLimit() {
    return this.client.GET("/product/seller/item/limit", {});
  }

  getSizeChartTemplate(params: Q<"/size/chart/template/get", "get">) {
    return this.client.GET("/size/chart/template/get", { params: { query: params } });
  }

  getProductUnfilledAttribute(body: B<"/product/unfilled/attribute/get", "post">) {
    return this.client.POST("/product/unfilled/attribute/get", { body });
  }

  postImageMigrate(body: B<"/image/migrate", "post">) {
    return this.client.POST("/image/migrate", { body });
  }

  postImagesMigrate(body: B<"/images/migrate", "post">) {
    return this.client.POST("/images/migrate", { body });
  }

  checkProductPre(body: B<"/product/pre/check", "post">) {
    return this.client.POST("/product/pre/check", { body });
  }

  removeProduct(body: B<"/product/remove", "post">) {
    return this.client.POST("/product/remove", { body });
  }

  removeProductSku(body: B<"/product/sku/remove", "post">) {
    return this.client.POST("/product/sku/remove", { body });
  }

  setImages(body: B<"/images/set", "post">) {
    return this.client.POST("/images/set", { body });
  }

  updateProductPriceQuantity(body: B<"/product/price_quantity/update", "post">) {
    return this.client.POST("/product/price_quantity/update", { body });
  }

  updateProduct(body: B<"/product/update", "post">) {
    return this.client.POST("/product/update", { body });
  }

  updateProductStockSellable(body: B<"/product/stock/sellable/update", "post">) {
    return this.client.POST("/product/stock/sellable/update", { body });
  }

  uploadImage(body: B<"/image/upload", "post">) {
    return this.client.POST("/image/upload", { body });
  }

}
