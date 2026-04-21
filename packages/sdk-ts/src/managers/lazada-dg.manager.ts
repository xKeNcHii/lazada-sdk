import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `lazada-dg-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class LazadaDgManager extends BaseManager {
  postDigitalInstallServicecallback(body: B<"/digital/install/servicecallback", "post">) {
    return this.client.POST("/digital/install/servicecallback", { body });
  }

  postDigitalTestInstallServicecallback(body: B<"/digital/test/install/servicecallback", "post">) {
    return this.client.POST("/digital/test/install/servicecallback", { body });
  }

  postDigitalInstallTestServicecallback(body: B<"/digital/install/test/servicecallback", "post">) {
    return this.client.POST("/digital/install/test/servicecallback", { body });
  }

  postDigitalInsuranceNotification(body: B<"/digital/insurance/notification", "post">) {
    return this.client.POST("/digital/insurance/notification", { body });
  }

  postDigitalInsuranceTestNotificationcopy(body: B<"/digital/insurance/test/notificationcopy", "post">) {
    return this.client.POST("/digital/insurance/test/notificationcopy", { body });
  }

  postDigitalInsuranceNotificationlapse(body: B<"/digital/insurance/notificationlapse", "post">) {
    return this.client.POST("/digital/insurance/notificationlapse", { body });
  }

  postDigitalServiceCdkCodeReceived(body: B<"/digital/service/cdkCodeReceived", "post">) {
    return this.client.POST("/digital/service/cdkCodeReceived", { body });
  }

}
