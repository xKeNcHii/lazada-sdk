import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `finance-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class FinanceManager extends BaseManager {
  getFinancePayoutStatus(params: Q<"/finance/payout/status/get", "get">) {
    return this.client.GET("/finance/payout/status/get", { params: { query: params } });
  }

  queryFinanceTransactionAccountTransactions(body: B<"/finance/transaction/accountTransactions/query", "post">) {
    return this.client.POST("/finance/transaction/accountTransactions/query", { body });
  }

  queryLbsSlbLogisticsFeeDetail(body: B<"/lbs/slb/queryLogisticsFeeDetail", "post">) {
    return this.client.POST("/lbs/slb/queryLogisticsFeeDetail", { body });
  }

  getFinanceTransactionDetails(params: Q<"/finance/transaction/details/get", "get">) {
    return this.client.GET("/finance/transaction/details/get", { params: { query: params } });
  }

}
