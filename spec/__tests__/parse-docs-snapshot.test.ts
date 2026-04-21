import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { parseEndpoint, splitEndpoints } from "../src/parse-docs.js";

/**
 * Freeze-frame test against a real scraped API doc.
 *
 * The synthetic fixture tests in parse-param-block.test.ts cover the
 * indentation logic on toy inputs. This test covers the end-to-end parser
 * against actual Lazada markdown, so we catch two classes of regression:
 *
 *  1. We break parse-docs.ts (refactor gone wrong, regex tightening, etc.).
 *  2. Lazada changes their HTML → scrape.py emits different markdown shape.
 *     When docs/api/order-api.md diverges from this snapshot, the
 *     "parse live docs" test fails and we know to update scrape.py +
 *     parse-docs.ts + refresh the snapshot.
 */

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const SNAPSHOT = readFileSync(
  join(__dirname, "..", "fixtures", "order-api.snapshot.md"),
  "utf8",
);

describe("parse-docs against frozen order-api.snapshot.md", () => {
  const chunks = splitEndpoints(SNAPSHOT);

  it("splits into the expected number of endpoints", () => {
    // order-api.md has 8 top-level endpoints as of 2026-04-21.
    expect(chunks.length).toBe(8);
  });

  it("parses the GetDocument endpoint with nested response", () => {
    const ep = parseEndpoint(chunks[0]!, "order-api.md");
    expect(ep).not.toBeNull();
    expect(ep!.path).toBe("/order/document/get");
    expect(ep!.methods).toEqual(["get"]);
    expect(ep!.title).toBe("GetDocument");
    expect(ep!.request).toEqual([
      { name: "doc_type", type: "String", required: true },
      { name: "order_item_ids", type: "String", required: true },
    ]);
    // Nested: data → document → {file, mime_type, document_type}
    expect(ep!.response).toHaveLength(1);
    const data = ep!.response[0]!;
    expect(data.name).toBe("data");
    expect(data.children).toHaveLength(1);
    const doc = data.children![0]!;
    expect(doc.name).toBe("document");
    expect(doc.children?.map((c) => c.name)).toEqual([
      "file",
      "mime_type",
      "document_type",
    ]);
  });

  it("parses regional base URLs, not the auth host", () => {
    const ep = parseEndpoint(chunks[0]!, "order-api.md");
    expect(ep!.servers).toHaveLength(6);
    expect(ep!.servers).toContain("https://api.lazada.sg/rest");
    expect(ep!.servers).not.toContain("https://auth.lazada.com/rest");
  });

  it("parses every endpoint successfully (no silent drops)", () => {
    const parsed = chunks.map((c) => parseEndpoint(c, "order-api.md"));
    expect(parsed.every((e) => e !== null)).toBe(true);
  });

  it("preserves method case — recognises `get` and `post` case-insensitively", () => {
    const parsed = chunks
      .map((c) => parseEndpoint(c, "order-api.md"))
      .filter((e): e is NonNullable<typeof e> => e !== null);
    for (const ep of parsed) {
      expect(ep.methods.length).toBeGreaterThan(0);
      for (const m of ep.methods) {
        expect(["get", "post"]).toContain(m);
      }
    }
  });
});

describe("parse-docs against LIVE docs/api/order-api.md", () => {
  // This mirrors the snapshot against the current live file. If Lazada
  // changes their markdown shape (or scrape.py changes output), this fails
  // while the snapshot test above still passes — telling us the parser is
  // fine but the upstream shape drifted.
  const LIVE = readFileSync(
    join(__dirname, "..", "..", "docs", "api", "order-api.md"),
    "utf8",
  );

  it("produces the same endpoint count as the snapshot", () => {
    const snap = splitEndpoints(SNAPSHOT).length;
    const live = splitEndpoints(LIVE).length;
    expect(live).toBe(snap);
  });
});
