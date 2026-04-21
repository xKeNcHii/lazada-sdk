import { signRequest } from "./signature.js";
import { AUTH_BASE_URL } from "./config.js";
import { classifyError, LazadaAuthError } from "./errors.js";
import type { StoredToken, TokenStorage } from "./storage/token-storage.interface.js";

/**
 * Manages the access-token lifecycle: loads from storage, detects expiry,
 * refreshes using the refresh_token, and coalesces concurrent refreshes so
 * N parallel requests only produce one round-trip to `/auth/token/refresh`.
 *
 * Design notes:
 *   - Refresh runs against `auth.lazada.com/rest/auth/token/refresh` via a
 *     direct fetch (not the full SDK client) to avoid recursion through the
 *     middleware that asks for a token in the first place.
 *   - A 60s safety buffer means we refresh proactively before a token
 *     technically expires, absorbing clock skew up to ±60s.
 *   - On refresh failure, the error is surfaced to callers as LazadaAuthError.
 *     Callers should catch it and drive a fresh OAuth authorization flow.
 */

export interface TokenManagerOptions {
  appKey: string;
  appSecret: string;
  accessToken?: string;
  refreshToken?: string;
  tokenExpiresAt?: number; // unix seconds
  storage?: TokenStorage;
  storageKey?: string;
  refreshBufferSec?: number;
  /** Override for tests / sandbox. */
  authBaseUrl?: string;
}

interface TokenState {
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: number; // unix seconds
}

export class TokenManager {
  private state: TokenState;
  private refreshing: Promise<TokenState> | null = null;
  private loadedFromStorage = false;

  constructor(private readonly opts: TokenManagerOptions) {
    this.state = {
      ...(opts.accessToken !== undefined ? { accessToken: opts.accessToken } : {}),
      ...(opts.refreshToken !== undefined ? { refreshToken: opts.refreshToken } : {}),
      ...(opts.tokenExpiresAt !== undefined ? { expiresAt: opts.tokenExpiresAt } : {}),
    };
  }

  /**
   * Returns the current access token, refreshing proactively if it's near
   * expiry. Returns undefined if neither access_token nor refresh_token is
   * configured (caller operates unauthenticated).
   */
  async getAccessToken(): Promise<string | undefined> {
    await this.hydrateFromStorage();

    if (!this.state.refreshToken) {
      // No refresh flow configured — static token, return as-is.
      return this.state.accessToken;
    }

    if (this.needsRefresh()) {
      await this.refreshOnce();
    }

    return this.state.accessToken;
  }

  /**
   * Force-refresh the token even if it isn't near expiry. Useful after a
   * response indicates the server-side token was invalidated.
   */
  async forceRefresh(): Promise<void> {
    await this.refreshOnce();
  }

  /** Current in-memory state snapshot (for tests / inspection). */
  snapshot(): Readonly<TokenState> {
    return { ...this.state };
  }

  private async hydrateFromStorage(): Promise<void> {
    if (this.loadedFromStorage || !this.opts.storage) return;
    this.loadedFromStorage = true;
    const key = this.opts.storageKey ?? "lazada:default";
    const stored = await this.opts.storage.get(key);
    if (stored) {
      // Only overwrite fields that aren't set from config — config takes priority.
      if (this.state.accessToken === undefined) this.state.accessToken = stored.accessToken;
      if (this.state.refreshToken === undefined && stored.refreshToken !== undefined) {
        this.state.refreshToken = stored.refreshToken;
      }
      if (this.state.expiresAt === undefined && stored.expiresAt !== undefined) {
        this.state.expiresAt = stored.expiresAt;
      }
    }
  }

  private needsRefresh(): boolean {
    if (!this.state.accessToken) return true;
    if (this.state.expiresAt === undefined) return false;
    const buffer = this.opts.refreshBufferSec ?? 60;
    return Date.now() / 1000 + buffer >= this.state.expiresAt;
  }

  private async refreshOnce(): Promise<TokenState> {
    if (this.refreshing) return this.refreshing;
    if (!this.state.refreshToken) {
      throw new LazadaAuthError({
        code: "REFRESH_FAILED",
        type: "SDK",
        message: "No refresh_token configured; cannot auto-refresh access token.",
      });
    }
    this.refreshing = this.doRefresh(this.state.refreshToken).finally(() => {
      this.refreshing = null;
    });
    return this.refreshing;
  }

  private async doRefresh(refreshToken: string): Promise<TokenState> {
    const apiPath = "/auth/token/refresh";
    const params: Record<string, string> = {
      app_key: this.opts.appKey,
      refresh_token: refreshToken,
      timestamp: Date.now().toString(),
      sign_method: "sha256",
    };
    params.sign = await signRequest({
      appSecret: this.opts.appSecret,
      apiPath,
      params,
    });

    const base = this.opts.authBaseUrl ?? AUTH_BASE_URL;
    const url = new URL(base.replace(/\/$/, "") + apiPath);
    for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);

    const response = await fetch(url);
    const json = (await response.json()) as {
      code?: string | number;
      type?: string;
      message?: string;
      request_id?: string;
      access_token?: string;
      refresh_token?: string;
      expires_in?: number;
    };

    const code = json.code !== undefined ? String(json.code) : "0";
    if (code !== "0") {
      throw classifyError({
        code,
        type: typeof json.type === "string" ? json.type : "",
        message: typeof json.message === "string" ? json.message : "Token refresh failed",
        ...(typeof json.request_id === "string" ? { requestId: json.request_id } : {}),
        raw: json,
      });
    }

    if (!json.access_token) {
      throw new LazadaAuthError({
        code: "REFRESH_FAILED",
        type: "SDK",
        message: "Refresh response missing access_token",
        raw: json,
      });
    }

    const newState: TokenState = {
      accessToken: json.access_token,
      refreshToken: json.refresh_token ?? refreshToken,
      ...(typeof json.expires_in === "number"
        ? { expiresAt: Math.floor(Date.now() / 1000) + json.expires_in }
        : {}),
    };
    this.state = newState;

    if (this.opts.storage) {
      const key = this.opts.storageKey ?? "lazada:default";
      const stored: StoredToken = {
        accessToken: newState.accessToken!,
        ...(newState.refreshToken !== undefined ? { refreshToken: newState.refreshToken } : {}),
        ...(newState.expiresAt !== undefined ? { expiresAt: newState.expiresAt } : {}),
      };
      await this.opts.storage.set(key, stored);
    }

    return newState;
  }
}
