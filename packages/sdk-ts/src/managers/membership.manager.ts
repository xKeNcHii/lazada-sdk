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
  getMembershipLinkmember(params: Q<"/membership/linkmember/get", "get">) {
    return this.client.GET("/membership/linkmember/get", { params: { query: params } });
  }

  getMembershipLinkmember_2(body: B<"/membership/linkmember/get", "post">) {
    return this.client.POST("/membership/linkmember/get", { body });
  }

  getPartner(params: Q<"/partner/get", "get">) {
    return this.client.GET("/partner/get", { params: { query: params } });
  }

  getPartner_2(body: B<"/partner/get", "post">) {
    return this.client.POST("/partner/get", { body });
  }

  listMembershipLinkmember(params: Q<"/membership/linkmember/list", "get">) {
    return this.client.GET("/membership/linkmember/list", { params: { query: params } });
  }

  listMembershipLinkmember_2(body: B<"/membership/linkmember/list", "post">) {
    return this.client.POST("/membership/linkmember/list", { body });
  }

  listPartner(params: Q<"/partner/list", "get">) {
    return this.client.GET("/partner/list", { params: { query: params } });
  }

  listPartner_2(body: B<"/partner/list", "post">) {
    return this.client.POST("/partner/list", { body });
  }

  postMembershipLink(body: B<"/membership/link", "post">) {
    return this.client.POST("/membership/link", { body });
  }

  getPartnerLink(params: Q<"/partner/link", "get">) {
    return this.client.GET("/partner/link", { params: { query: params } });
  }

  postPartnerLink(body: B<"/partner/link", "post">) {
    return this.client.POST("/partner/link", { body });
  }

  getPartnerTransaction(params: Q<"/partner/transaction", "get">) {
    return this.client.GET("/partner/transaction", { params: { query: params } });
  }

  postPartnerTransaction(body: B<"/partner/transaction", "post">) {
    return this.client.POST("/partner/transaction", { body });
  }

  getPartnerUnlink(params: Q<"/partner/unlink", "get">) {
    return this.client.GET("/partner/unlink", { params: { query: params } });
  }

  postPartnerUnlink(body: B<"/partner/unlink", "post">) {
    return this.client.POST("/partner/unlink", { body });
  }

  updatePartner(params: Q<"/partner/update", "get">) {
    return this.client.GET("/partner/update", { params: { query: params } });
  }

  updatePartner_2(body: B<"/partner/update", "post">) {
    return this.client.POST("/partner/update", { body });
  }

  getPartnerUpdatepartneruserid(params: Q<"/partner/updatePartnerUserId", "get">) {
    return this.client.GET("/partner/updatePartnerUserId", { params: { query: params } });
  }

  postPartnerUpdatepartneruserid(body: B<"/partner/updatePartnerUserId", "post">) {
    return this.client.POST("/partner/updatePartnerUserId", { body });
  }

}
