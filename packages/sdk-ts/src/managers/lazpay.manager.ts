import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `lazpay-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class LazpayManager extends BaseManager {
  postLazadapayV1DebitConsultPayment(body: B<"/lazadapay/v1/debit/consult_payment", "post">) {
    return this.client.POST("/lazadapay/v1/debit/consult_payment", { body });
  }

  createInsuranceSubscription(body: B<"/insurance/subscription/create", "post">) {
    return this.client.POST("/insurance/subscription/create", { body });
  }

  postDigitalServiceCreateorder(body: B<"/digital/service/createorder", "post">) {
    return this.client.POST("/digital/service/createorder", { body });
  }

  getDigitalServicePaymentStatus(body: B<"/digital/service/getPaymentStatus", "post">) {
    return this.client.POST("/digital/service/getPaymentStatus", { body });
  }

  updateDigitalServiceFulfillemtStatus(body: B<"/digital/service/updateFulfillemtStatus", "post">) {
    return this.client.POST("/digital/service/updateFulfillemtStatus", { body });
  }

  postDigitalOrderAlterStatus(body: B<"/digital/order/alterStatus", "post">) {
    return this.client.POST("/digital/order/alterStatus", { body });
  }

  createDigitalOrder(body: B<"/digital/order/create", "post">) {
    return this.client.POST("/digital/order/create", { body });
  }

  getDigitalOrderStatus(body: B<"/digital/order/getStatus", "post">) {
    return this.client.POST("/digital/order/getStatus", { body });
  }

  getInsuranceSubscriptionSubscription(body: B<"/insurance/subscription/getSubscription", "post">) {
    return this.client.POST("/insurance/subscription/getSubscription", { body });
  }

  postInsuranceOrderAlterStatus(body: B<"/insurance/order/alterStatus", "post">) {
    return this.client.POST("/insurance/order/alterStatus", { body });
  }

  createInsuranceOrder(body: B<"/insurance/order/create", "post">) {
    return this.client.POST("/insurance/order/create", { body });
  }

  getInsurancePromotionPromotions(body: B<"/insurance/promotion/getPromotions", "post">) {
    return this.client.POST("/insurance/promotion/getPromotions", { body });
  }

  getInsuranceOrderStatus(body: B<"/insurance/order/getStatus", "post">) {
    return this.client.POST("/insurance/order/getStatus", { body });
  }

  postRpaIdTaxCallback(body: B<"/rpa/id/tax/callback", "post">) {
    return this.client.POST("/rpa/id/tax/callback", { body });
  }

  queryWalletOpenServiceBalance() {
    return this.client.POST("/wallet/open/service/balance/query", {});
  }

  queryWalletOpenServiceKyc(body: B<"/wallet/open/service/kyc/query", "post">) {
    return this.client.POST("/wallet/open/service/kyc/query", { body });
  }

  postWalletOpenServiceWithdraw(body: B<"/wallet/open/service/withdraw", "post">) {
    return this.client.POST("/wallet/open/service/withdraw", { body });
  }

  queryWalletOpenServiceWithdraw(body: B<"/wallet/open/service/withdraw/query", "post">) {
    return this.client.POST("/wallet/open/service/withdraw/query", { body });
  }

  postWalletOpenServiceReconciliation(body: B<"/wallet/open/service/reconciliation", "post">) {
    return this.client.POST("/wallet/open/service/reconciliation", { body });
  }

  postInsurancePromotionCollectBenefit(body: B<"/insurance/promotion/collectBenefit", "post">) {
    return this.client.POST("/insurance/promotion/collectBenefit", { body });
  }

  syncInsuranceCdp(body: B<"/insurance/syncCDP", "post">) {
    return this.client.POST("/insurance/syncCDP", { body });
  }

  queryInsuranceAddonOrders(body: B<"/insurance/addon/orders/query", "post">) {
    return this.client.POST("/insurance/addon/orders/query", { body });
  }

  queryInsurancePromotionBenefit(body: B<"/insurance/promotion/queryBenefit", "post">) {
    return this.client.POST("/insurance/promotion/queryBenefit", { body });
  }

}
