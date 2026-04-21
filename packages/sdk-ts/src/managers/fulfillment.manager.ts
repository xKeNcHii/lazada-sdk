import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `fulfillment-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class FulfillmentManager extends BaseManager {
  postOrderPackageSofDelivered(body: B<"/order/package/sof/delivered", "post">) {
    return this.client.POST("/order/package/sof/delivered", { body });
  }

  postOrderDigitalDelivered(body: B<"/order/digital/delivered", "post">) {
    return this.client.POST("/order/digital/delivered", { body });
  }

  postOrderPackageSofFailedDelivery(body: B<"/order/package/sof/failed_delivery", "post">) {
    return this.client.POST("/order/package/sof/failed_delivery", { body });
  }

  getOrderShipmentProviders(body: B<"/order/shipment/providers/get", "post">) {
    return this.client.POST("/order/shipment/providers/get", { body });
  }

  packOrderFulfill(body: B<"/order/fulfill/pack", "post">) {
    return this.client.POST("/order/fulfill/pack", { body });
  }

  updateOrderPackageSofStatus(body: B<"/order/package/sof/status/update", "post">) {
    return this.client.POST("/order/package/sof/status/update", { body });
  }

  getOrderPackageDocument(body: B<"/order/package/document/get", "post">) {
    return this.client.POST("/order/package/document/get", { body });
  }

  postOrderPackageRts(body: B<"/order/package/rts", "post">) {
    return this.client.POST("/order/package/rts", { body });
  }

  postOrderPackageRepack(body: B<"/order/package/repack", "post">) {
    return this.client.POST("/order/package/repack", { body });
  }

}
