import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `lazada-logistics-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class LazadaLogisticsManager extends BaseManager {
  postLogisticsEpisCustomersExternalRelationshipsBundle(body: B<"/logistics/epis/customers/external_relationships_bundle", "post">) {
    return this.client.POST("/logistics/epis/customers/external_relationships_bundle", { body });
  }

  postLogisticsEpisCustomersExternalRelationships(body: B<"/logistics/epis/customers/external_relationships", "post">) {
    return this.client.POST("/logistics/epis/customers/external_relationships", { body });
  }

  postLogisticsEpisCustomersWarehouses(body: B<"/logistics/epis/customers/warehouses", "post">) {
    return this.client.POST("/logistics/epis/customers/warehouses", { body });
  }

  getLogisticsEpisServiceDeliveryOptions(params: Q<"/logistics/epis/service/delivery_options", "get">) {
    return this.client.GET("/logistics/epis/service/delivery_options", { params: { query: params } });
  }

  cancelLogisticsEpisPackages(body: B<"/logistics/epis/packages/cancel", "post">) {
    return this.client.POST("/logistics/epis/packages/cancel", { body });
  }

  postLogisticsEpisPackagesCancelV3(body: B<"/logistics/epis/packages/cancel/v3", "post">) {
    return this.client.POST("/logistics/epis/packages/cancel/v3", { body });
  }

  postLogisticsEpisPackagesConsign(body: B<"/logistics/epis/packages/consign", "post">) {
    return this.client.POST("/logistics/epis/packages/consign", { body });
  }

  postLogisticsEpisPackagesConsignV2(body: B<"/logistics/epis/packages/consign/v2", "post">) {
    return this.client.POST("/logistics/epis/packages/consign/v2", { body });
  }

  postLogisticsEpisPackages(body: B<"/logistics/epis/packages", "post">) {
    return this.client.POST("/logistics/epis/packages", { body });
  }

  updateLogisticsEpisPackages(body: B<"/logistics/epis/packages/update", "post">) {
    return this.client.POST("/logistics/epis/packages/update", { body });
  }

  getLogisticsEpisPackagesAwb(params: Q<"/logistics/epis/packages/awb", "get">) {
    return this.client.GET("/logistics/epis/packages/awb", { params: { query: params } });
  }

  postLogisticsEpisPackagesReattempt(body: B<"/logistics/epis/packages/reattempt", "post">) {
    return this.client.POST("/logistics/epis/packages/reattempt", { body });
  }

  postLogisticsEpisPackagesRts(body: B<"/logistics/epis/packages/rts", "post">) {
    return this.client.POST("/logistics/epis/packages/rts", { body });
  }

  postLogisticsEpisFulfillmentUploadAwb(body: B<"/logistics/epis/fulfillment/upload_awb", "post">) {
    return this.client.POST("/logistics/epis/fulfillment/upload_awb", { body });
  }

  createLogisticsEpisXspace(body: B<"/logistics/epis/xspace/create", "post">) {
    return this.client.POST("/logistics/epis/xspace/create", { body });
  }

  postLogisticsEpisXspaceDetail(body: B<"/logistics/epis/xspace/detail", "post">) {
    return this.client.POST("/logistics/epis/xspace/detail", { body });
  }

  queryLogisticsEpisXspace(body: B<"/logistics/epis/xspace/query", "post">) {
    return this.client.POST("/logistics/epis/xspace/query", { body });
  }

  postLogisticsEpisXspaceRate(body: B<"/logistics/epis/xspace/rate", "post">) {
    return this.client.POST("/logistics/epis/xspace/rate", { body });
  }

  postLogisticsEpisEstimateShippingFee(body: B<"/logistics/epis/estimate_shipping_fee", "post">) {
    return this.client.POST("/logistics/epis/estimate_shipping_fee", { body });
  }

  postLogisticsEpisGetShippingFee(body: B<"/logistics/epis/get_shipping_fee", "post">) {
    return this.client.POST("/logistics/epis/get_shipping_fee", { body });
  }

}
