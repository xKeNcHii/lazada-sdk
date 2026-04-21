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
  queryWalletTransfer(body: B<"/wallet/transfer/query", "post">) {
    return this.client.POST("/wallet/transfer/query", { body });
  }

  postWalletTransferRequest(body: B<"/wallet/transfer/request", "post">) {
    return this.client.POST("/wallet/transfer/request", { body });
  }

  queryWalletGiftcode(body: B<"/wallet/giftcode/query", "post">) {
    return this.client.POST("/wallet/giftcode/query", { body });
  }

  postWalletGiftcodeRequest(body: B<"/wallet/giftcode/request", "post">) {
    return this.client.POST("/wallet/giftcode/request", { body });
  }

  postWalletOpenReconciliation(body: B<"/wallet/open/reconciliation", "post">) {
    return this.client.POST("/wallet/open/reconciliation", { body });
  }

}
