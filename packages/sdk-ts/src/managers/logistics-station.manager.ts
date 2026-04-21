import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `logistics-station-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class LogisticsStationManager extends BaseManager {
  postLogisticsStationCagesValidate(body: B<"/logistics/station/cages/validate", "post">) {
    return this.client.POST("/logistics/station/cages/validate", { body });
  }

  postLogisticsStationV1ConfirmInbound(body: B<"/logistics/station/v1/confirm-inbound", "post">) {
    return this.client.POST("/logistics/station/v1/confirm-inbound", { body });
  }

  postLogisticsStationV1CpConfirmParcelCollection(body: B<"/logistics/station/v1/cp/confirm-parcel-collection", "post">) {
    return this.client.POST("/logistics/station/v1/cp/confirm-parcel-collection", { body });
  }

  createLogisticsStationV1ScannedParcels(body: B<"/logistics/station/v1/scanned-parcels/create", "post">) {
    return this.client.POST("/logistics/station/v1/scanned-parcels/create", { body });
  }

  deleteLogisticsStationV1ScannedParcels(body: B<"/logistics/station/v1/scanned-parcels/delete", "post">) {
    return this.client.POST("/logistics/station/v1/scanned-parcels/delete", { body });
  }

  postLogisticsStationDopConfirmInbound(body: B<"/logistics/station/dop/confirm-inbound", "post">) {
    return this.client.POST("/logistics/station/dop/confirm-inbound", { body });
  }

  postLogisticsStationDopScannedParcels(body: B<"/logistics/station/dop/scanned-parcels", "post">) {
    return this.client.POST("/logistics/station/dop/scanned-parcels", { body });
  }

  deleteLogisticsStationDopScannedParcels(body: B<"/logistics/station/dop/scanned-parcels/delete", "post">) {
    return this.client.POST("/logistics/station/dop/scanned-parcels/delete", { body });
  }

  listLogisticsStationDopInboundedParcels(params: Q<"/logistics/station/dop/inbounded-parcels/list", "get">) {
    return this.client.GET("/logistics/station/dop/inbounded-parcels/list", { params: { query: params } });
  }

  listLogisticsStationDopScannedParcels(params: Q<"/logistics/station/dop/scanned-parcels/list", "get">) {
    return this.client.GET("/logistics/station/dop/scanned-parcels/list", { params: { query: params } });
  }

  listLogisticsStationV1CpScheduledPuParcels(params: Q<"/logistics/station/v1/cp/scheduled-pu-parcels/list", "get">) {
    return this.client.GET("/logistics/station/v1/cp/scheduled-pu-parcels/list", { params: { query: params } });
  }

  listLogisticsStationV1InboundedParcels(params: Q<"/logistics/station/v1/inbounded-parcels/list", "get">) {
    return this.client.GET("/logistics/station/v1/inbounded-parcels/list", { params: { query: params } });
  }

  listLogisticsStation() {
    return this.client.GET("/logistics/station/list", {});
  }

  getLogisticsStationV1Metadata() {
    return this.client.GET("/logistics/station/v1/metadata", {});
  }

  listLogisticsStationV1ScannedParcels(params: Q<"/logistics/station/v1/scanned-parcels/list", "get">) {
    return this.client.GET("/logistics/station/v1/scanned-parcels/list", { params: { query: params } });
  }

  searchLogisticsStationV1DopCrParcels(params: Q<"/logistics/station/v1/dop/cr-parcels/search", "get">) {
    return this.client.GET("/logistics/station/v1/dop/cr-parcels/search", { params: { query: params } });
  }

  postLogisticsStationV1CagesValidate(body: B<"/logistics/station/v1/cages/validate", "post">) {
    return this.client.POST("/logistics/station/v1/cages/validate", { body });
  }

  postLogisticsStationV1CpValidateOtp(body: B<"/logistics/station/v1/cp/validate-otp", "post">) {
    return this.client.POST("/logistics/station/v1/cp/validate-otp", { body });
  }

}
