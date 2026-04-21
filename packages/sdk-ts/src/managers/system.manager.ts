import { BaseManager } from "./base.manager.js";
import type { paths } from "../schemas/generated.js";

type AuthTokenCreateQuery =
  paths["/auth/token/create"]["get"] extends { parameters: { query?: infer Q } } ? Q : never;
type AuthTokenRefreshQuery =
  paths["/auth/token/refresh"]["get"] extends { parameters: { query?: infer Q } } ? Q : never;

/**
 * System API — auth token lifecycle.
 */
export class SystemManager extends BaseManager {
  generateAccessToken(params: AuthTokenCreateQuery) {
    return this.client.GET("/auth/token/create", { params: { query: params } });
  }

  refreshAccessToken(params: AuthTokenRefreshQuery) {
    return this.client.GET("/auth/token/refresh", { params: { query: params } });
  }
}
