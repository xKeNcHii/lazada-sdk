/**
 * Async-iterator helper for Lazada list endpoints.
 *
 * Lazada uses two pagination conventions:
 *
 *   1. Offset/limit (most list APIs): request `{ offset, limit }`, response
 *      contains `{ count, total, <items> }`. We advance `offset += limit`
 *      until we've seen `total` items or a page comes back empty.
 *
 *   2. Cursor (some Logistics/Membership APIs): request `{ cursor, limit }`,
 *      response contains `{ items, next_cursor }`. We follow `next_cursor`
 *      until it's absent / empty.
 *
 * The helper auto-detects the convention from the response shape. Callers
 * only need to point it at the right `itemsKey` (which array in `data` to
 * iterate).
 */

export interface PaginateOptions {
  /** Page size. Default 50. */
  pageSize?: number;
  /**
   * Key under `data` that holds the items array.
   * For `/orders/get` this is `orders`; for `/products/get` it's `products`.
   */
  itemsKey: string;
  /** Cursor field name in the response. Default `"next_cursor"`. */
  nextCursorKey?: string;
  /** Hard cap on total items yielded, defense against runaway loops. */
  maxItems?: number;
}

type LazadaListResponse = {
  data?: {
    count?: number;
    total?: number;
    [k: string]: unknown;
  } | null;
};

type Fetcher<TParams> = (
  params: TParams,
) => Promise<{ data?: LazadaListResponse["data"] | null; error?: unknown }>;

export async function* paginate<TParams extends Record<string, unknown>, TItem>(
  fetcher: Fetcher<TParams>,
  initialParams: TParams,
  opts: PaginateOptions,
): AsyncGenerator<TItem, void, void> {
  const pageSize = opts.pageSize ?? 50;
  const nextCursorKey = opts.nextCursorKey ?? "next_cursor";
  const maxItems = opts.maxItems ?? Number.POSITIVE_INFINITY;

  let offset = typeof initialParams.offset === "number" ? initialParams.offset : 0;
  let cursor: string | undefined =
    typeof initialParams.cursor === "string" ? initialParams.cursor : undefined;
  let yielded = 0;
  let usesCursor: boolean | undefined;

  while (yielded < maxItems) {
    const params = {
      ...initialParams,
      limit: pageSize,
      ...(usesCursor === true || cursor !== undefined ? { cursor } : { offset }),
    } as TParams;

    const result = await fetcher(params);
    if (result.error) {
      // The fetcher's onResponse middleware already threw on non-zero codes,
      // so reaching here with `error` set means a transport-level problem.
      throw result.error;
    }
    const data = result.data;
    if (!data) return;

    const items = (data as Record<string, unknown>)[opts.itemsKey];
    if (!Array.isArray(items) || items.length === 0) return;

    for (const item of items as TItem[]) {
      if (yielded >= maxItems) return;
      yield item;
      yielded++;
    }

    const nextCursor = (data as Record<string, unknown>)[nextCursorKey];
    if (typeof nextCursor === "string" && nextCursor !== "") {
      usesCursor = true;
      cursor = nextCursor;
      continue;
    }
    if (usesCursor === true) {
      // Was cursor-based and no next_cursor → done.
      return;
    }

    // Offset-based: stop when total count reached or page was under-full.
    usesCursor = false;
    offset += (items as unknown[]).length;
    const total = typeof data.total === "number" ? data.total : undefined;
    if (total !== undefined && offset >= total) return;
    if ((items as unknown[]).length < pageSize) return;
  }
}
