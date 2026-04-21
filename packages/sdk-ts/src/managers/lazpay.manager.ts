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
  getLazadapayV1DebitConsultPayment(params: Q<"/lazadapay/v1/debit/consult_payment", "get">) {
    return this.client.GET("/lazadapay/v1/debit/consult_payment", { params: { query: params } });
  }

  postLazadapayV1DebitConsultPayment(body: B<"/lazadapay/v1/debit/consult_payment", "post">) {
    return this.client.POST("/lazadapay/v1/debit/consult_payment", { body });
  }

  createInsuranceSubscription(body: B<"/insurance/subscription/create", "post">) {
    return this.client.POST("/insurance/subscription/create", { body });
  }

  getDigitalServiceCreateorder(params: Q<"/digital/service/createorder", "get">) {
    return this.client.GET("/digital/service/createorder", { params: { query: params } });
  }

  postDigitalServiceCreateorder(body: B<"/digital/service/createorder", "post">) {
    return this.client.POST("/digital/service/createorder", { body });
  }

  getDigitalServiceGetpaymentstatus(params: Q<"/digital/service/getPaymentStatus", "get">) {
    return this.client.GET("/digital/service/getPaymentStatus", { params: { query: params } });
  }

  postDigitalServiceGetpaymentstatus(body: B<"/digital/service/getPaymentStatus", "post">) {
    return this.client.POST("/digital/service/getPaymentStatus", { body });
  }

  getDigitalServiceUpdatefulfillemtstatus(params: Q<"/digital/service/updateFulfillemtStatus", "get">) {
    return this.client.GET("/digital/service/updateFulfillemtStatus", { params: { query: params } });
  }

  postDigitalServiceUpdatefulfillemtstatus(body: B<"/digital/service/updateFulfillemtStatus", "post">) {
    return this.client.POST("/digital/service/updateFulfillemtStatus", { body });
  }

  getDigitalOrderAlterstatus(params: Q<"/digital/order/alterStatus", "get">) {
    return this.client.GET("/digital/order/alterStatus", { params: { query: params } });
  }

  postDigitalOrderAlterstatus(body: B<"/digital/order/alterStatus", "post">) {
    return this.client.POST("/digital/order/alterStatus", { body });
  }

  createDigitalOrder(params: Q<"/digital/order/create", "get">) {
    return this.client.GET("/digital/order/create", { params: { query: params } });
  }

  createDigitalOrder_2(body: B<"/digital/order/create", "post">) {
    return this.client.POST("/digital/order/create", { body });
  }

  getDigitalOrderGetstatus(params: Q<"/digital/order/getStatus", "get">) {
    return this.client.GET("/digital/order/getStatus", { params: { query: params } });
  }

  postDigitalOrderGetstatus(body: B<"/digital/order/getStatus", "post">) {
    return this.client.POST("/digital/order/getStatus", { body });
  }

  getInsuranceSubscriptionGetsubscription(params: Q<"/insurance/subscription/getSubscription", "get">) {
    return this.client.GET("/insurance/subscription/getSubscription", { params: { query: params } });
  }

  postInsuranceSubscriptionGetsubscription(body: B<"/insurance/subscription/getSubscription", "post">) {
    return this.client.POST("/insurance/subscription/getSubscription", { body });
  }

  getInsuranceOrderAlterstatus(params: Q<"/insurance/order/alterStatus", "get">) {
    return this.client.GET("/insurance/order/alterStatus", { params: { query: params } });
  }

  postInsuranceOrderAlterstatus(body: B<"/insurance/order/alterStatus", "post">) {
    return this.client.POST("/insurance/order/alterStatus", { body });
  }

  createInsuranceOrder(params: Q<"/insurance/order/create", "get">) {
    return this.client.GET("/insurance/order/create", { params: { query: params } });
  }

  createInsuranceOrder_2(body: B<"/insurance/order/create", "post">) {
    return this.client.POST("/insurance/order/create", { body });
  }

  getInsurancePromotionGetpromotions(params: Q<"/insurance/promotion/getPromotions", "get">) {
    return this.client.GET("/insurance/promotion/getPromotions", { params: { query: params } });
  }

  postInsurancePromotionGetpromotions(body: B<"/insurance/promotion/getPromotions", "post">) {
    return this.client.POST("/insurance/promotion/getPromotions", { body });
  }

  getInsuranceOrderGetstatus(params: Q<"/insurance/order/getStatus", "get">) {
    return this.client.GET("/insurance/order/getStatus", { params: { query: params } });
  }

  postInsuranceOrderGetstatus(body: B<"/insurance/order/getStatus", "post">) {
    return this.client.POST("/insurance/order/getStatus", { body });
  }

  getRpaIdTaxCallback(params: Q<"/rpa/id/tax/callback", "get">) {
    return this.client.GET("/rpa/id/tax/callback", { params: { query: params } });
  }

  postRpaIdTaxCallback(body: B<"/rpa/id/tax/callback", "post">) {
    return this.client.POST("/rpa/id/tax/callback", { body });
  }

  queryWalletOpenServiceBalance() {
    return this.client.GET("/wallet/open/service/balance/query", {});
  }

  queryWalletOpenServiceBalance_2() {
    return this.client.POST("/wallet/open/service/balance/query", {});
  }

  queryWalletOpenServiceKyc(params: Q<"/wallet/open/service/kyc/query", "get">) {
    return this.client.GET("/wallet/open/service/kyc/query", { params: { query: params } });
  }

  queryWalletOpenServiceKyc_2(body: B<"/wallet/open/service/kyc/query", "post">) {
    return this.client.POST("/wallet/open/service/kyc/query", { body });
  }

  getWalletOpenServiceWithdraw(params: Q<"/wallet/open/service/withdraw", "get">) {
    return this.client.GET("/wallet/open/service/withdraw", { params: { query: params } });
  }

  postWalletOpenServiceWithdraw(body: B<"/wallet/open/service/withdraw", "post">) {
    return this.client.POST("/wallet/open/service/withdraw", { body });
  }

  queryWalletOpenServiceWithdraw(params: Q<"/wallet/open/service/withdraw/query", "get">) {
    return this.client.GET("/wallet/open/service/withdraw/query", { params: { query: params } });
  }

  queryWalletOpenServiceWithdraw_2(body: B<"/wallet/open/service/withdraw/query", "post">) {
    return this.client.POST("/wallet/open/service/withdraw/query", { body });
  }

  getWalletOpenServiceReconciliation(params: Q<"/wallet/open/service/reconciliation", "get">) {
    return this.client.GET("/wallet/open/service/reconciliation", { params: { query: params } });
  }

  postWalletOpenServiceReconciliation(body: B<"/wallet/open/service/reconciliation", "post">) {
    return this.client.POST("/wallet/open/service/reconciliation", { body });
  }

  getInsurancePromotionCollectbenefit(params: Q<"/insurance/promotion/collectBenefit", "get">) {
    return this.client.GET("/insurance/promotion/collectBenefit", { params: { query: params } });
  }

  postInsurancePromotionCollectbenefit(body: B<"/insurance/promotion/collectBenefit", "post">) {
    return this.client.POST("/insurance/promotion/collectBenefit", { body });
  }

  getInsuranceSynccdp(params: Q<"/insurance/syncCDP", "get">) {
    return this.client.GET("/insurance/syncCDP", { params: { query: params } });
  }

  postInsuranceSynccdp(body: B<"/insurance/syncCDP", "post">) {
    return this.client.POST("/insurance/syncCDP", { body });
  }

  queryInsuranceAddonOrders(params: Q<"/insurance/addon/orders/query", "get">) {
    return this.client.GET("/insurance/addon/orders/query", { params: { query: params } });
  }

  queryInsuranceAddonOrders_2(body: B<"/insurance/addon/orders/query", "post">) {
    return this.client.POST("/insurance/addon/orders/query", { body });
  }

  getInsurancePromotionQuerybenefit(params: Q<"/insurance/promotion/queryBenefit", "get">) {
    return this.client.GET("/insurance/promotion/queryBenefit", { params: { query: params } });
  }

  postInsurancePromotionQuerybenefit(body: B<"/insurance/promotion/queryBenefit", "post">) {
    return this.client.POST("/insurance/promotion/queryBenefit", { body });
  }

}
