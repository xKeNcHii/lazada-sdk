export interface StoredToken {
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number;
  accountId?: string;
  country?: string;
}

export interface TokenStorage {
  get(key: string): Promise<StoredToken | null>;
  set(key: string, token: StoredToken): Promise<void>;
  delete(key: string): Promise<void>;
}
