import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `seller-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class SellerManager extends BaseManager {
  queryShopFollowStatusBatch(body: B<"/shop/follow/status/batch/query", "post">) {
    return this.client.POST("/shop/follow/status/batch/query", { body });
  }

  getRcStoreList() {
    return this.client.POST("/rc/store/list/get", {});
  }

  getSeller() {
    return this.client.GET("/seller/get", {});
  }

  getSellerMetrics() {
    return this.client.GET("/seller/metrics/get", {});
  }

  getSellerPerformance(body: B<"/seller/performance/get", "post">) {
    return this.client.POST("/seller/performance/get", { body });
  }

  getRcWarehouse() {
    return this.client.POST("/rc/warehouse/get", {});
  }

  getRcWarehouseDetail() {
    return this.client.POST("/rc/warehouse/detail/get", {});
  }

  listSellercenterMsg(body: B<"/sellercenter/msg/list", "post">) {
    return this.client.POST("/sellercenter/msg/list", { body });
  }

  getSellerPolicyFetch(params: Q<"/seller/policy/fetch", "get">) {
    return this.client.GET("/seller/policy/fetch", { params: { query: params } });
  }

  postSellerArConfigSyn(body: B<"/seller/ar/config/syn", "post">) {
    return this.client.POST("/seller/ar/config/syn", { body });
  }

  getSellerCbCountry(body: B<"/seller/cb/country/get", "post">) {
    return this.client.POST("/seller/cb/country/get", { body });
  }

  postSellerCbRegisterInfo(body: B<"/seller/cb/register/info", "post">) {
    return this.client.POST("/seller/cb/register/info", { body });
  }

  getSellerCbCountryLocation(body: B<"/seller/cb/country/location/get", "post">) {
    return this.client.POST("/seller/cb/country/location/get", { body });
  }

  postSellerCbPaymentConfig(body: B<"/seller/cb/payment/config", "post">) {
    return this.client.POST("/seller/cb/payment/config", { body });
  }

  getHuntingBuybox(body: B<"/hunting/buybox/get", "post">) {
    return this.client.POST("/hunting/buybox/get", { body });
  }

  postRcSellerwarehouseSavewarehouseinfo(body: B<"/rc/sellerWarehouse/saveWarehouseInfo", "post">) {
    return this.client.POST("/rc/sellerWarehouse/saveWarehouseInfo", { body });
  }

  postSellerCbRegisterFieldcheck(body: B<"/seller/cb/register/fieldcheck", "post">) {
    return this.client.POST("/seller/cb/register/fieldcheck", { body });
  }

}
