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
  getLogisticsCngfcFulfillGetchannelcode(params: Q<"/logistics/cngfc/fulfill/getchannelcode", "get">) {
    return this.client.GET("/logistics/cngfc/fulfill/getchannelcode", { params: { query: params } });
  }

  postLogisticsCngfcFulfillGetchannelcode(body: B<"/logistics/cngfc/fulfill/getchannelcode", "post">) {
    return this.client.POST("/logistics/cngfc/fulfill/getchannelcode", { body });
  }

  getLogisticsCnpmsBigbagLableGetpdf(params: Q<"/logistics/cnpms/bigbag/lable/getPdf", "get">) {
    return this.client.GET("/logistics/cnpms/bigbag/lable/getPdf", { params: { query: params } });
  }

  postLogisticsCnpmsBigbagLableGetpdf(body: B<"/logistics/cnpms/bigbag/lable/getPdf", "post">) {
    return this.client.POST("/logistics/cnpms/bigbag/lable/getPdf", { body });
  }

  cancelLogisticsCnpmsBigbag(params: Q<"/logistics/cnpms/bigbag/cancel", "get">) {
    return this.client.GET("/logistics/cnpms/bigbag/cancel", { params: { query: params } });
  }

  cancelLogisticsCnpmsBigbag_2(body: B<"/logistics/cnpms/bigbag/cancel", "post">) {
    return this.client.POST("/logistics/cnpms/bigbag/cancel", { body });
  }

  getLogisticsCnpmsBigbagQuerycollection(params: Q<"/logistics/cnpms/bigbag/querycollection", "get">) {
    return this.client.GET("/logistics/cnpms/bigbag/querycollection", { params: { query: params } });
  }

  postLogisticsCnpmsBigbagQuerycollection(body: B<"/logistics/cnpms/bigbag/querycollection", "post">) {
    return this.client.POST("/logistics/cnpms/bigbag/querycollection", { body });
  }

  getLogisticsCnpmsBigbagCommit(params: Q<"/logistics/cnpms/bigbag/commit", "get">) {
    return this.client.GET("/logistics/cnpms/bigbag/commit", { params: { query: params } });
  }

  postLogisticsCnpmsBigbagCommit(body: B<"/logistics/cnpms/bigbag/commit", "post">) {
    return this.client.POST("/logistics/cnpms/bigbag/commit", { body });
  }

  updateLogisticsCnpmsBigbag(params: Q<"/logistics/cnpms/bigbag/update", "get">) {
    return this.client.GET("/logistics/cnpms/bigbag/update", { params: { query: params } });
  }

  updateLogisticsCnpmsBigbag_2(body: B<"/logistics/cnpms/bigbag/update", "post">) {
    return this.client.POST("/logistics/cnpms/bigbag/update", { body });
  }

  getLogisticsCnpmsAccountBind(params: Q<"/logistics/cnpms/account/bind", "get">) {
    return this.client.GET("/logistics/cnpms/account/bind", { params: { query: params } });
  }

  postLogisticsCnpmsAccountBind(body: B<"/logistics/cnpms/account/bind", "post">) {
    return this.client.POST("/logistics/cnpms/account/bind", { body });
  }

  queryLogisticsCnpmsAddress(params: Q<"/logistics/cnpms/address/query", "get">) {
    return this.client.GET("/logistics/cnpms/address/query", { params: { query: params } });
  }

  queryLogisticsCnpmsAddress_2(body: B<"/logistics/cnpms/address/query", "post">) {
    return this.client.POST("/logistics/cnpms/address/query", { body });
  }

  queryLogisticsCnpmsBigbag(params: Q<"/logistics/cnpms/bigbag/query", "get">) {
    return this.client.GET("/logistics/cnpms/bigbag/query", { params: { query: params } });
  }

  queryLogisticsCnpmsBigbag_2(body: B<"/logistics/cnpms/bigbag/query", "post">) {
    return this.client.POST("/logistics/cnpms/bigbag/query", { body });
  }

}
