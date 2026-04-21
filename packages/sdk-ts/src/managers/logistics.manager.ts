import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `logistics-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class LogisticsManager extends BaseManager {
  postLogisticsTpsRunsheetsStops(body: B<"/logistics/tps/runsheets/stops", "post">) {
    return this.client.POST("/logistics/tps/runsheets/stops", { body });
  }

  createLogisticsTpsStations(body: B<"/logistics/tps/stations/create", "post">) {
    return this.client.POST("/logistics/tps/stations/create", { body });
  }

  getLogisticOrderTrace(params: Q<"/logistic/order/trace", "get">) {
    return this.client.GET("/logistic/order/trace", { params: { query: params } });
  }

  postLogisticOrderTrace(body: B<"/logistic/order/trace", "post">) {
    return this.client.POST("/logistic/order/trace", { body });
  }

  getDopScan(params: Q<"/dop/scan", "get">) {
    return this.client.GET("/dop/scan", { params: { query: params } });
  }

  postDopScan(body: B<"/dop/scan", "post">) {
    return this.client.POST("/dop/scan", { body });
  }

  getStationsDopScan(params: Q<"/stations/dop/scan", "get">) {
    return this.client.GET("/stations/dop/scan", { params: { query: params } });
  }

  postStationsDopScan(body: B<"/stations/dop/scan", "post">) {
    return this.client.POST("/stations/dop/scan", { body });
  }

  updateLogisticsTpsStations(body: B<"/logistics/tps/stations/update", "post">) {
    return this.client.POST("/logistics/tps/stations/update", { body });
  }

  postLogisticsTpsSellersPickupTimeslot(body: B<"/logistics/tps/sellers/pickup_timeslot", "post">) {
    return this.client.POST("/logistics/tps/sellers/pickup_timeslot", { body });
  }

  postLogisticsLdpCreateconsolidationservice(body: B<"/logistics/ldp/createConsolidationService", "post">) {
    return this.client.POST("/logistics/ldp/createConsolidationService", { body });
  }

  postLogisticsLdpUpdatelastmile(body: B<"/logistics/ldp/updateLastmile", "post">) {
    return this.client.POST("/logistics/ldp/updateLastmile", { body });
  }

}
