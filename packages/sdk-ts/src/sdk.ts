import { createLazadaClient, type LazadaClient } from "./client.js";
import type { LazadaConfig } from "./config.js";
import { OrderManager } from "./managers/order.manager.js";
import { SellerManager } from "./managers/seller.manager.js";
import { SystemManager } from "./managers/system.manager.js";

export class LazadaSDK {
  readonly client: LazadaClient;
  readonly order: OrderManager;
  readonly seller: SellerManager;
  readonly system: SystemManager;

  constructor(public readonly config: LazadaConfig) {
    this.client = createLazadaClient(config);
    this.order = new OrderManager(this.client);
    this.seller = new SellerManager(this.client);
    this.system = new SystemManager(this.client);
  }
}
