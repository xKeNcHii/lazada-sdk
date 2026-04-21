import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type Q<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;
type B<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;

/**
 * Auto-generated manager for `membership-api`. Method names follow the path-segment
 * heuristic; rename as needed. Do not hand-edit the imports section —
 * bootstrap --force will rewrite this file.
 */
export class MembershipManager extends BaseManager {
  getMembershipLinkmember(body: B<"/membership/linkmember/get", "post">) {
    return this.client.POST("/membership/linkmember/get", { body });
  }

  getPartner(body: B<"/partner/get", "post">) {
    return this.client.POST("/partner/get", { body });
  }

  listMembershipLinkmember(body: B<"/membership/linkmember/list", "post">) {
    return this.client.POST("/membership/linkmember/list", { body });
  }

  listPartner(body: B<"/partner/list", "post">) {
    return this.client.POST("/partner/list", { body });
  }

  postMembershipLink(body: B<"/membership/link", "post">) {
    return this.client.POST("/membership/link", { body });
  }

  postPartnerLink(body: B<"/partner/link", "post">) {
    return this.client.POST("/partner/link", { body });
  }

  postPartnerTransaction(body: B<"/partner/transaction", "post">) {
    return this.client.POST("/partner/transaction", { body });
  }

  postPartnerUnlink(body: B<"/partner/unlink", "post">) {
    return this.client.POST("/partner/unlink", { body });
  }

  updatePartner(body: B<"/partner/update", "post">) {
    return this.client.POST("/partner/update", { body });
  }

  updatePartnerPartnerUserId(body: B<"/partner/updatePartnerUserId", "post">) {
    return this.client.POST("/partner/updatePartnerUserId", { body });
  }

}
