import { describe, expect, it } from "vitest";
import { paginate } from "../pagination.js";

function mkOffsetFetcher(allItems: unknown[], itemsKey: string) {
  return async (params: { offset?: number; limit?: number }) => {
    const offset = params.offset ?? 0;
    const limit = params.limit ?? 50;
    const slice = allItems.slice(offset, offset + limit);
    return {
      data: {
        total: allItems.length,
        count: slice.length,
        [itemsKey]: slice,
      },
    };
  };
}

function mkCursorFetcher(pages: Record<string, { items: unknown[]; next?: string }>, itemsKey: string) {
  return async (params: { cursor?: string }) => {
    const key = params.cursor ?? "start";
    const page = pages[key]!;
    return {
      data: {
        [itemsKey]: page.items,
        ...(page.next !== undefined ? { next_cursor: page.next } : {}),
      },
    };
  };
}

describe("paginate", () => {
  it("walks offset-style pagination to completion", async () => {
    const all = Array.from({ length: 125 }, (_, i) => ({ id: i }));
    const fetcher = mkOffsetFetcher(all, "orders");
    const collected: unknown[] = [];
    for await (const item of paginate(fetcher, {}, { pageSize: 50, itemsKey: "orders" })) {
      collected.push(item);
    }
    expect(collected).toHaveLength(125);
    expect(collected[0]).toEqual({ id: 0 });
    expect(collected[124]).toEqual({ id: 124 });
  });

  it("walks cursor-style pagination to completion", async () => {
    const pages = {
      start: { items: [1, 2, 3], next: "cursor-a" },
      "cursor-a": { items: [4, 5], next: "cursor-b" },
      "cursor-b": { items: [6] },
    };
    const fetcher = mkCursorFetcher(pages, "items");
    const collected: number[] = [];
    for await (const n of paginate<{ cursor?: string }, number>(
      fetcher,
      {},
      { itemsKey: "items" },
    )) {
      collected.push(n);
    }
    expect(collected).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("stops early when maxItems is hit", async () => {
    const all = Array.from({ length: 100 }, (_, i) => i);
    const fetcher = mkOffsetFetcher(all, "xs");
    const collected: unknown[] = [];
    for await (const item of paginate(fetcher, {}, { itemsKey: "xs", maxItems: 7 })) {
      collected.push(item);
    }
    expect(collected).toHaveLength(7);
  });

  it("yields nothing for an empty first page", async () => {
    const fetcher = async () => ({ data: { total: 0, count: 0, orders: [] } });
    const out: unknown[] = [];
    for await (const x of paginate(fetcher, {}, { itemsKey: "orders" })) out.push(x);
    expect(out).toEqual([]);
  });

  it("respects honors a start offset passed in initial params", async () => {
    const all = Array.from({ length: 30 }, (_, i) => i);
    const fetcher = mkOffsetFetcher(all, "xs");
    const out: number[] = [];
    for await (const n of paginate<{ offset?: number }, number>(
      fetcher,
      { offset: 25 },
      { itemsKey: "xs", pageSize: 10 },
    )) {
      out.push(n);
    }
    expect(out).toEqual([25, 26, 27, 28, 29]);
  });

  it("propagates fetcher errors", async () => {
    const err = new Error("boom");
    const fetcher = async () => ({ error: err });
    const gen = paginate(fetcher, {}, { itemsKey: "x" });
    await expect(gen.next()).rejects.toBe(err);
  });
});
