import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `fbl-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class FblManager extends BaseManager {
  postFblFulfillmentSkuRelationWrite(body: B<"/fbl/fulfillment_sku_relation/write", "post">) {
    return this.client.POST("/fbl/fulfillment_sku_relation/write", { body });
  }

  cancelFblFulfillmentOrder(body: B<"/fbl/fulfillment_order/cancel", "post">) {
    return this.client.POST("/fbl/fulfillment_order/cancel", { body });
  }

  cancelFblInboundReservation(body: B<"/fbl/inbound_reservation/cancel", "post">) {
    return this.client.POST("/fbl/inbound_reservation/cancel", { body });
  }

  cancelFblOutboundOrder(body: B<"/fbl/outbound_order/cancel", "post">) {
    return this.client.POST("/fbl/outbound_order/cancel", { body });
  }

  cancelFblVasVasOrder(body: B<"/fbl/vas/cancelVasOrder", "post">) {
    return this.client.POST("/fbl/vas/cancelVasOrder", { body });
  }

  cancelFblInboundOrder(body: B<"/fbl/inbound_order/cancel", "post">) {
    return this.client.POST("/fbl/inbound_order/cancel", { body });
  }

  checkFblInboundReservation(params: Q<"/fbl/inbound_reservation/check", "get">) {
    return this.client.GET("/fbl/inbound_reservation/check", { params: { query: params } });
  }

  createFblFulfillmentOrder(body: B<"/fbl/fulfillment_order/create", "post">) {
    return this.client.POST("/fbl/fulfillment_order/create", { body });
  }

  createFblFulfillmentOrderPnf(body: B<"/fbl/fulfillment_order_pnf/create", "post">) {
    return this.client.POST("/fbl/fulfillment_order_pnf/create", { body });
  }

  createFblFulfillmentSku(body: B<"/fbl/fulfillment_sku/create", "post">) {
    return this.client.POST("/fbl/fulfillment_sku/create", { body });
  }

  createFblFulfillmentSkuFbl(body: B<"/fbl/fulfillment_sku_fbl/create", "post">) {
    return this.client.POST("/fbl/fulfillment_sku_fbl/create", { body });
  }

  createFblInboundOrder(body: B<"/fbl/inbound_order/create", "post">) {
    return this.client.POST("/fbl/inbound_order/create", { body });
  }

  createFblInboundReservation(body: B<"/fbl/inbound_reservation/create", "post">) {
    return this.client.POST("/fbl/inbound_reservation/create", { body });
  }

  createFblOutboundOrder(body: B<"/fbl/outbound_order/create", "post">) {
    return this.client.POST("/fbl/outbound_order/create", { body });
  }

  createFblProductReinbound(body: B<"/fbl/product_reinbound/create", "post">) {
    return this.client.POST("/fbl/product_reinbound/create", { body });
  }

  createFblVasVasOrder(body: B<"/fbl/vas/createVasOrder", "post">) {
    return this.client.POST("/fbl/vas/createVasOrder", { body });
  }

  getFblChannelStocks(params: Q<"/fbl/channel_stocks/get", "get">) {
    return this.client.GET("/fbl/channel_stocks/get", { params: { query: params } });
  }

  getFblFulfillmentProducts(params: Q<"/fbl/fulfillment_products/get", "get">) {
    return this.client.GET("/fbl/fulfillment_products/get", { params: { query: params } });
  }

  getFblFulfillmentSkuList(params: Q<"/fbl/fulfillment_sku_list/get", "get">) {
    return this.client.GET("/fbl/fulfillment_sku_list/get", { params: { query: params } });
  }

  getFblFulfillmentSkuRelationByScItem(body: B<"/fbl/fulfillment_sku_relation/get_by_sc_item", "post">) {
    return this.client.POST("/fbl/fulfillment_sku_relation/get_by_sc_item", { body });
  }

  getFblFulfillmentSkuRelationBySku(body: B<"/fbl/fulfillment_sku_relation/get_by_sku", "post">) {
    return this.client.POST("/fbl/fulfillment_sku_relation/get_by_sku", { body });
  }

  getFblFulfillmentSkuRelationByScItems(body: B<"/fbl/fulfillment_sku_relation/get_by_sc_items", "post">) {
    return this.client.POST("/fbl/fulfillment_sku_relation/get_by_sc_items", { body });
  }

  getFblFulfillmentSkuRelationBySkus(body: B<"/fbl/fulfillment_sku_relation/get_by_skus", "post">) {
    return this.client.POST("/fbl/fulfillment_sku_relation/get_by_skus", { body });
  }

  getFblIcpOrderFile(params: Q<"/fbl/icp_order/file", "get">) {
    return this.client.GET("/fbl/icp_order/file", { params: { query: params } });
  }

  getFblInboundOrderDetail(params: Q<"/fbl/inbound_order_detail/get", "get">) {
    return this.client.GET("/fbl/inbound_order_detail/get", { params: { query: params } });
  }

  getFblInboundOrders(params: Q<"/fbl/inbound_orders/get", "get">) {
    return this.client.GET("/fbl/inbound_orders/get", { params: { query: params } });
  }

  getFblInboundReservationFile(params: Q<"/fbl/inbound_reservation/file", "get">) {
    return this.client.GET("/fbl/inbound_reservation/file", { params: { query: params } });
  }

  getFblInventoryChangedSku(params: Q<"/fbl/inventory_changed_sku/get", "get">) {
    return this.client.GET("/fbl/inventory_changed_sku/get", { params: { query: params } });
  }

  getFblInventoryOccupyDetails(params: Q<"/fbl/inventory_occupy_details/get", "get">) {
    return this.client.GET("/fbl/inventory_occupy_details/get", { params: { query: params } });
  }

  getFblInventoryOperateLog(params: Q<"/fbl/inventory_operate_log/get", "get">) {
    return this.client.GET("/fbl/inventory_operate_log/get", { params: { query: params } });
  }

  getFblOutboundOrderDetail(params: Q<"/fbl/outbound_order_detail/get", "get">) {
    return this.client.GET("/fbl/outbound_order_detail/get", { params: { query: params } });
  }

  getFblOutboundOrders(params: Q<"/fbl/outbound_orders/get", "get">) {
    return this.client.GET("/fbl/outbound_orders/get", { params: { query: params } });
  }

  getFblPlatformProductsGet2(params: Q<"/fbl/platform_products/get2", "get">) {
    return this.client.GET("/fbl/platform_products/get2", { params: { query: params } });
  }

  getFblShipper() {
    return this.client.GET("/fbl/shipper/get", {});
  }

  getFblStockRule(params: Q<"/fbl/stock_rule/get", "get">) {
    return this.client.GET("/fbl/stock_rule/get", { params: { query: params } });
  }

  getFblVasVasOrderByNo(body: B<"/fbl/vas/getVasOrderByNo", "post">) {
    return this.client.POST("/fbl/vas/getVasOrderByNo", { body });
  }

  getFblWarehouses(params: Q<"/fbl/warehouses/get", "get">) {
    return this.client.GET("/fbl/warehouses/get", { params: { query: params } });
  }

  getFblStocks(params: Q<"/fbl/stocks/get", "get">) {
    return this.client.GET("/fbl/stocks/get", { params: { query: params } });
  }

  getFblStocksV3(params: Q<"/fbl/stocks/getV3", "get">) {
    return this.client.GET("/fbl/stocks/getV3", { params: { query: params } });
  }

  listFblIcpWarehouse(params: Q<"/fbl/icp_warehouse/list", "get">) {
    return this.client.GET("/fbl/icp_warehouse/list", { params: { query: params } });
  }

  getFblFulfillmentOrderList(params: Q<"/fbl/fulfillment_order_list/get", "get">) {
    return this.client.GET("/fbl/fulfillment_order_list/get", { params: { query: params } });
  }

  getFblInboundReservation(params: Q<"/fbl/inbound_reservation/get", "get">) {
    return this.client.GET("/fbl/inbound_reservation/get", { params: { query: params } });
  }

  getFblReverseOrder(params: Q<"/fbl/reverse_order/get", "get">) {
    return this.client.GET("/fbl/reverse_order/get", { params: { query: params } });
  }

  removeFblFulfillmentSkuRelation(body: B<"/fbl/fulfillment_sku_relation/remove", "post">) {
    return this.client.POST("/fbl/fulfillment_sku_relation/remove", { body });
  }

  cancelFblReturns(body: B<"/fbl/returns/cancel", "post">) {
    return this.client.POST("/fbl/returns/cancel", { body });
  }

  createFblReturns(body: B<"/fbl/returns/create", "post">) {
    return this.client.POST("/fbl/returns/create", { body });
  }

  setFblStockRule(body: B<"/fbl/stock_rule/set", "post">) {
    return this.client.POST("/fbl/stock_rule/set", { body });
  }

  updateFblFulfillmentSku(body: B<"/fbl/fulfillment_sku/update", "post">) {
    return this.client.POST("/fbl/fulfillment_sku/update", { body });
  }

  uploadFblWaybill(body: B<"/fbl/waybill/upload", "post">) {
    return this.client.POST("/fbl/waybill/upload", { body });
  }

}
