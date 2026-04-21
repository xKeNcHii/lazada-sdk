import { describe, expect, it } from "vitest";
import { parseParamBlock } from "../src/parse-docs.js";

describe("parseParamBlock", () => {
  it("parses a flat list", () => {
    const block = [
      "- `doc_type` · _String_ · **required** — doc type",
      "- `order_item_ids` · _String_ · **required** — ids",
    ].join("\n");
    const out = parseParamBlock(block);
    expect(out).toEqual([
      { name: "doc_type", type: "String", required: true },
      { name: "order_item_ids", type: "String", required: true },
    ]);
  });

  it("parses two-level nesting like order-api.md response", () => {
    const block = [
      "- `data` · _Object_ · **required** — resp",
      "  - `document` · _Object_ · **required** — doc",
      "    - `file` · _String_ · **required** — base64 data",
      "    - `mime_type` · _String_ · **required** — mime",
    ].join("\n");
    const out = parseParamBlock(block);
    expect(out).toEqual([
      {
        name: "data",
        type: "Object",
        required: true,
        children: [
          {
            name: "document",
            type: "Object",
            required: true,
            children: [
              { name: "file", type: "String", required: true },
              { name: "mime_type", type: "String", required: true },
            ],
          },
        ],
      },
    ]);
  });

  it("parses four-level nesting (future-proofing for deeper docs)", () => {
    const block = [
      "- `a` · _Object_ · **required** — a",
      "  - `b` · _Object_ · **required** — b",
      "    - `c` · _Object_ · **required** — c",
      "      - `d` · _String_ · **required** — d",
    ].join("\n");
    const [a] = parseParamBlock(block);
    expect(a!.children![0]!.children![0]!.children![0]).toMatchObject({
      name: "d",
      type: "String",
    });
  });

  it("dedents correctly back to sibling level", () => {
    const block = [
      "- `a` · _Object_ · **required** — a",
      "  - `a1` · _String_ · **required** — nested",
      "- `b` · _String_ · **required** — sibling of a",
    ].join("\n");
    const out = parseParamBlock(block);
    expect(out).toHaveLength(2);
    expect(out[0]!.name).toBe("a");
    expect(out[1]!.name).toBe("b");
    expect(out[0]!.children).toHaveLength(1);
  });

  it("handles Object[] arrays with nested shape (protects against silent drop)", () => {
    const block = [
      "- `items` · _Object[]_ · **required** — list",
      "  - `id` · _String_ · **required** — item id",
      "  - `qty` · _Number_ · **required** — qty",
    ].join("\n");
    const [items] = parseParamBlock(block);
    expect(items!.type).toBe("Object[]");
    expect(items!.children).toHaveLength(2);
  });

  it("skips non-matching lines (prose, tables, headings)", () => {
    const block = [
      "Some preamble prose.",
      "",
      "- `x` · _String_ · **required** — x",
      "| Code | Description |",
      "- `y` · _String_ · **optional** — y",
    ].join("\n");
    const out = parseParamBlock(block);
    expect(out.map((p) => p.name)).toEqual(["x", "y"]);
    expect(out[1]!.required).toBe(false);
  });
});
