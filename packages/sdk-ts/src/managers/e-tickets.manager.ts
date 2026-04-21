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
  queryEticketCode(params: Q<"/eticket/code/query", "get">) {
    return this.client.GET("/eticket/code/query", { params: { query: params } });
  }

  queryEticketCode_2(body: B<"/eticket/code/query", "post">) {
    return this.client.POST("/eticket/code/query", { body });
  }

  getEticketMaAvailable(params: Q<"/eticket/ma/available", "get">) {
    return this.client.GET("/eticket/ma/available", { params: { query: params } });
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

  queryEticketMa(params: Q<"/eticket/ma/query", "get">) {
    return this.client.GET("/eticket/ma/query", { params: { query: params } });
  }

  queryEticketMa_2(body: B<"/eticket/ma/query", "post">) {
    return this.client.POST("/eticket/ma/query", { body });
  }

  getEticketMaQuerytbma(params: Q<"/eticket/ma/queryTbMa", "get">) {
    return this.client.GET("/eticket/ma/queryTbMa", { params: { query: params } });
  }

  postEticketMaQuerytbma(body: B<"/eticket/ma/queryTbMa", "post">) {
    return this.client.POST("/eticket/ma/queryTbMa", { body });
  }

  getEticketMaSend(params: Q<"/eticket/ma/send", "get">) {
    return this.client.GET("/eticket/ma/send", { params: { query: params } });
  }

  postEticketMaSend(body: B<"/eticket/ma/send", "post">) {
    return this.client.POST("/eticket/ma/send", { body });
  }

  getEticketCodeConsume(params: Q<"/eticket/code/consume", "get">) {
    return this.client.GET("/eticket/code/consume", { params: { query: params } });
  }

  postEticketCodeConsume(body: B<"/eticket/code/consume", "post">) {
    return this.client.POST("/eticket/code/consume", { body });
  }

}
