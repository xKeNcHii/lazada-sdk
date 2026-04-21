import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `lazada-wallet-corporate-top-up-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class LazadaWalletCorporateTopUpManager extends BaseManager {
  queryWalletTransfer(params: Q<"/wallet/transfer/query", "get">) {
    return this.client.GET("/wallet/transfer/query", { params: { query: params } });
  }

  queryWalletTransfer_2(body: B<"/wallet/transfer/query", "post">) {
    return this.client.POST("/wallet/transfer/query", { body });
  }

  getWalletTransferRequest(params: Q<"/wallet/transfer/request", "get">) {
    return this.client.GET("/wallet/transfer/request", { params: { query: params } });
  }

  postWalletTransferRequest(body: B<"/wallet/transfer/request", "post">) {
    return this.client.POST("/wallet/transfer/request", { body });
  }

  queryWalletGiftcode(params: Q<"/wallet/giftcode/query", "get">) {
    return this.client.GET("/wallet/giftcode/query", { params: { query: params } });
  }

  queryWalletGiftcode_2(body: B<"/wallet/giftcode/query", "post">) {
    return this.client.POST("/wallet/giftcode/query", { body });
  }

  getWalletGiftcodeRequest(params: Q<"/wallet/giftcode/request", "get">) {
    return this.client.GET("/wallet/giftcode/request", { params: { query: params } });
  }

  postWalletGiftcodeRequest(body: B<"/wallet/giftcode/request", "post">) {
    return this.client.POST("/wallet/giftcode/request", { body });
  }

  getWalletOpenReconciliation(params: Q<"/wallet/open/reconciliation", "get">) {
    return this.client.GET("/wallet/open/reconciliation", { params: { query: params } });
  }

  postWalletOpenReconciliation(body: B<"/wallet/open/reconciliation", "post">) {
    return this.client.POST("/wallet/open/reconciliation", { body });
  }

}
