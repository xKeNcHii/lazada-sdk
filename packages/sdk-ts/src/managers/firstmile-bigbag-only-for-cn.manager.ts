import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `firstmile-bigbag-only-for-cn`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class FirstmileBigbagOnlyForCnManager extends BaseManager {
  postLogisticsCngfcFulfillGetchannelcode(body: B<"/logistics/cngfc/fulfill/getchannelcode", "post">) {
    return this.client.POST("/logistics/cngfc/fulfill/getchannelcode", { body });
  }

  postLogisticsCnpmsBigbagLableGetpdf(body: B<"/logistics/cnpms/bigbag/lable/getPdf", "post">) {
    return this.client.POST("/logistics/cnpms/bigbag/lable/getPdf", { body });
  }

  cancelLogisticsCnpmsBigbag(body: B<"/logistics/cnpms/bigbag/cancel", "post">) {
    return this.client.POST("/logistics/cnpms/bigbag/cancel", { body });
  }

  postLogisticsCnpmsBigbagQuerycollection(body: B<"/logistics/cnpms/bigbag/querycollection", "post">) {
    return this.client.POST("/logistics/cnpms/bigbag/querycollection", { body });
  }

  postLogisticsCnpmsBigbagCommit(body: B<"/logistics/cnpms/bigbag/commit", "post">) {
    return this.client.POST("/logistics/cnpms/bigbag/commit", { body });
  }

  updateLogisticsCnpmsBigbag(body: B<"/logistics/cnpms/bigbag/update", "post">) {
    return this.client.POST("/logistics/cnpms/bigbag/update", { body });
  }

  bindLogisticsCnpmsAccount(body: B<"/logistics/cnpms/account/bind", "post">) {
    return this.client.POST("/logistics/cnpms/account/bind", { body });
  }

  queryLogisticsCnpmsAddress(body: B<"/logistics/cnpms/address/query", "post">) {
    return this.client.POST("/logistics/cnpms/address/query", { body });
  }

  queryLogisticsCnpmsBigbag(body: B<"/logistics/cnpms/bigbag/query", "post">) {
    return this.client.POST("/logistics/cnpms/bigbag/query", { body });
  }

}
