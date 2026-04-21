import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `instant-messaging-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class InstantMessagingManager extends BaseManager {
  listImMessage(params: Q<"/im/message/list", "get">) {
    return this.client.GET("/im/message/list", { params: { query: params } });
  }

  getImSession(params: Q<"/im/session/get", "get">) {
    return this.client.GET("/im/session/get", { params: { query: params } });
  }

  listImSession(params: Q<"/im/session/list", "get">) {
    return this.client.GET("/im/session/list", { params: { query: params } });
  }

  postImMessageRecall(body: B<"/im/message/recall", "post">) {
    return this.client.POST("/im/message/recall", { body });
  }

  openImSession(body: B<"/im/session/open", "post">) {
    return this.client.POST("/im/session/open", { body });
  }

  postImSessionRead(body: B<"/im/session/read", "post">) {
    return this.client.POST("/im/session/read", { body });
  }

  sendImMessage(body: B<"/im/message/send", "post">) {
    return this.client.POST("/im/message/send", { body });
  }

}
