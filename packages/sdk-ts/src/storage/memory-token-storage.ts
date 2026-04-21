import type { StoredToken, TokenStorage } from "./token-storage.interface.js";

export class MemoryTokenStorage implements TokenStorage {
  private readonly store = new Map<string, StoredToken>();

  async get(key: string): Promise<StoredToken | null> {
    return this.store.get(key) ?? null;
  }
  async set(key: string, token: StoredToken): Promise<void> {
    this.store.set(key, token);
  }
  async delete(key: string): Promise<void> {
    this.store.delete(key);
  }
}
