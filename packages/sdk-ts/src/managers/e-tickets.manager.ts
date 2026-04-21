import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `e-tickets-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class ETicketsManager extends BaseManager {
  queryEticketCode(body: B<"/eticket/code/query", "post">) {
    return this.client.POST("/eticket/code/query", { body });
  }

  postEticketMaAvailable(body: B<"/eticket/ma/available", "post">) {
    return this.client.POST("/eticket/ma/available", { body });
  }

  postEticketMaConsume(body: B<"/eticket/ma/consume", "post">) {
    return this.client.POST("/eticket/ma/consume", { body });
  }

  postEticketMaFailsend(body: B<"/eticket/ma/failsend", "post">) {
    return this.client.POST("/eticket/ma/failsend", { body });
  }

  queryEticketMa(body: B<"/eticket/ma/query", "post">) {
    return this.client.POST("/eticket/ma/query", { body });
  }

  postEticketMaQuerytbma(body: B<"/eticket/ma/queryTbMa", "post">) {
    return this.client.POST("/eticket/ma/queryTbMa", { body });
  }

  sendEticketMa(body: B<"/eticket/ma/send", "post">) {
    return this.client.POST("/eticket/ma/send", { body });
  }

  postEticketCodeConsume(body: B<"/eticket/code/consume", "post">) {
    return this.client.POST("/eticket/code/consume", { body });
  }

}
