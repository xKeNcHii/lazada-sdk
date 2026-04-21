import type { LazadaClient } from "../client.js";

export abstract class BaseManager {
  constructor(protected readonly client: LazadaClient) {}
}
