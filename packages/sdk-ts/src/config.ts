export const LazadaRegion = {
  SG: "SG",
  VN: "VN",
  PH: "PH",
  MY: "MY",
  TH: "TH",
  ID: "ID",
} as const;

export type LazadaRegion = (typeof LazadaRegion)[keyof typeof LazadaRegion];

export const REGION_BASE_URLS: Record<LazadaRegion, string> = {
  SG: "https://api.lazada.sg/rest",
  VN: "https://api.lazada.vn/rest",
  PH: "https://api.lazada.com.ph/rest",
  MY: "https://api.lazada.com.my/rest",
  TH: "https://api.lazada.co.th/rest",
  ID: "https://api.lazada.co.id/rest",
};

export const AUTH_BASE_URL = "https://auth.lazada.com/rest";

/**
 * Auth paths that must hit `auth.lazada.com` instead of a regional API host.
 */
export const AUTH_PATHS = new Set(["/auth/token/create", "/auth/token/refresh"]);

import type { TokenStorage } from "./storage/token-storage.interface.js";

export interface LazadaConfig {
  appKey: string;
  appSecret: string;
  region: LazadaRegion;
  /** Static access token. Use this for short-lived scripts or when you
   *  manage refresh externally. Ignored if `refreshToken` is also set and
   *  the token near-expires (auto-refresh takes over). */
  accessToken?: string;
  /** Refresh token. If set, the SDK auto-refreshes `accessToken` before
   *  expiry (within `refreshBufferSec`, default 60s) and updates `storage`. */
  refreshToken?: string;
  /** Unix seconds. If set, auto-refresh kicks in `refreshBufferSec` seconds
   *  before this time. If unset, refresh only happens on explicit
   *  `tokenManager.forceRefresh()` (e.g. after a caught LazadaAuthError). */
  tokenExpiresAt?: number;
  /** Persistence for refreshed tokens. Defaults to in-memory. */
  storage?: TokenStorage;
  /** Key used to namespace tokens in storage. Default `"lazada:default"`. */
  storageKey?: string;
  /** Seconds before `tokenExpiresAt` to trigger proactive refresh. Default 60. */
  refreshBufferSec?: number;
  /** Override the resolved base URL (e.g. for a sandbox). */
  baseUrlOverride?: string;
  /** Override the auth host base URL. */
  authBaseUrlOverride?: string;
}

export function resolveBaseUrl(config: LazadaConfig, apiPath: string): string {
  if (AUTH_PATHS.has(apiPath)) return config.authBaseUrlOverride ?? AUTH_BASE_URL;
  return config.baseUrlOverride ?? REGION_BASE_URLS[config.region];
}
