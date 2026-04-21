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
  getDigitalInstallServicecallback(params: Q<"/digital/install/servicecallback", "get">) {
    return this.client.GET("/digital/install/servicecallback", { params: { query: params } });
  }

  postDigitalInstallServicecallback(body: B<"/digital/install/servicecallback", "post">) {
    return this.client.POST("/digital/install/servicecallback", { body });
  }

  getDigitalTestInstallServicecallback(params: Q<"/digital/test/install/servicecallback", "get">) {
    return this.client.GET("/digital/test/install/servicecallback", { params: { query: params } });
  }

  postDigitalTestInstallServicecallback(body: B<"/digital/test/install/servicecallback", "post">) {
    return this.client.POST("/digital/test/install/servicecallback", { body });
  }

  getDigitalInstallTestServicecallback(params: Q<"/digital/install/test/servicecallback", "get">) {
    return this.client.GET("/digital/install/test/servicecallback", { params: { query: params } });
  }

  postDigitalInstallTestServicecallback(body: B<"/digital/install/test/servicecallback", "post">) {
    return this.client.POST("/digital/install/test/servicecallback", { body });
  }

  getDigitalInsuranceNotification(params: Q<"/digital/insurance/notification", "get">) {
    return this.client.GET("/digital/insurance/notification", { params: { query: params } });
  }

  postDigitalInsuranceNotification(body: B<"/digital/insurance/notification", "post">) {
    return this.client.POST("/digital/insurance/notification", { body });
  }

  getDigitalInsuranceTestNotificationcopy(params: Q<"/digital/insurance/test/notificationcopy", "get">) {
    return this.client.GET("/digital/insurance/test/notificationcopy", { params: { query: params } });
  }

  postDigitalInsuranceTestNotificationcopy(body: B<"/digital/insurance/test/notificationcopy", "post">) {
    return this.client.POST("/digital/insurance/test/notificationcopy", { body });
  }

  getDigitalInsuranceNotificationlapse(params: Q<"/digital/insurance/notificationlapse", "get">) {
    return this.client.GET("/digital/insurance/notificationlapse", { params: { query: params } });
  }

  postDigitalInsuranceNotificationlapse(body: B<"/digital/insurance/notificationlapse", "post">) {
    return this.client.POST("/digital/insurance/notificationlapse", { body });
  }

  postDigitalServiceCdkcodereceived(body: B<"/digital/service/cdkCodeReceived", "post">) {
    return this.client.POST("/digital/service/cdkCodeReceived", { body });
  }

}
