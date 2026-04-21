#!/usr/bin/env node
/**
 * Parse Lazada markdown docs into an OpenAPI 3.1 spec.
 *
 * Input:  docs/api/*.md (scraped Lazada API reference pages)
 * Output: spec/openapi/lazada.openapi.yaml
 *
 * The parser is deliberately regex-based against the rigid Lazada doc format:
 *   ## EndpointName
 *   - **Path**: `/x/y/z`
 *   - **Method**: `get|post|GET/POST`
 *   - **Last modified**: ...
 *   <description>
 *   **Endpoints**
 *     - **Region**: https://...
 *   **Request parameters**
 *     - `name` · _Type_ · **required|optional** — desc
 *   **Response parameters**
 *     - `name` · _Type_ · **required|optional** — desc
 *       - `nested` · _Type_ · ... (two-space-indented bullets == nested fields)
 *   **Common parameters** (skipped — emitted once globally)
 *   **Error codes** (skipped in v0.1)
 *   **Example** (skipped)
 *
 * Legal posture: descriptions are stripped on emit (kept only in debug).
 */
import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dump as yamlDump } from "js-yaml";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..", "..");
const DOCS_DIR = join(REPO_ROOT, "docs", "api");
const OUT_FILE = join(REPO_ROOT, "spec", "openapi", "lazada.openapi.yaml");

// --------------------------------------------------------------------------
// Types
// --------------------------------------------------------------------------

interface Param {
  name: string;
  type: string; // raw Lazada type
  required: boolean;
  children?: Param[]; // nested fields (indentation-based)
}

interface Endpoint {
  file: string; // api group file name (tag)
  title: string; // H2 heading text
  path: string;
  methods: Array<"get" | "post">;
  servers: string[]; // full base URLs
  request: Param[];
  response: Param[];
}

interface ParseStats {
  files: number;
  endpoints: number;
  skipped: number;
  dualMethod: number;
  authHost: number;
}

// --------------------------------------------------------------------------
// Type mapping
// --------------------------------------------------------------------------

function lazadaTypeToOpenApi(raw: string): Record<string, unknown> {
  const t = raw.trim();
  // Arrays: "Object[]", "String[]", "Number[]"
  if (t.endsWith("[]")) {
    return { type: "array", items: lazadaTypeToOpenApi(t.slice(0, -2)) };
  }
  switch (t.toLowerCase()) {
    case "string":
      return { type: "string" };
    case "number":
    case "long":
    case "int":
    case "integer":
      return { type: "integer" };
    case "double":
    case "float":
      return { type: "number" };
    case "boolean":
    case "bool":
      return { type: "boolean" };
    case "object":
    case "map":
      return { type: "object", additionalProperties: true };
    case "array":
      return { type: "array", items: {} };
    case "payload":
      // Lazada "Payload" = opaque JSON body
      return { type: "object", additionalProperties: true };
    default:
      // Unknown type — treat as string to avoid breaking the spec
      return { type: "string" };
  }
}

function paramsToSchema(
  params: Param[],
): { type: "object"; properties: Record<string, unknown>; required?: string[] } {
  const properties: Record<string, unknown> = {};
  const required: string[] = [];
  for (const p of params) {
    const base = lazadaTypeToOpenApi(p.type);
    if (p.children && p.children.length > 0) {
      // Nested params → inline object or array-of-object
      const nested = paramsToSchema(p.children);
      if ((base as { type: string }).type === "array") {
        properties[p.name] = { type: "array", items: nested };
      } else {
        // Replace object with its nested shape
        properties[p.name] = nested;
      }
    } else {
      properties[p.name] = base;
    }
    if (p.required) required.push(p.name);
  }
  const schema: {
    type: "object";
    properties: Record<string, unknown>;
    required?: string[];
  } = {
    type: "object",
    properties,
  };
  if (required.length > 0) schema.required = required;
  return schema;
}

// --------------------------------------------------------------------------
// Markdown parsing
// --------------------------------------------------------------------------

/**
 * Split a Lazada API file into per-endpoint chunks.
 * Each chunk starts at a `## ` line (not H1 `# `) and ends before the next `## ` or EOF.
 */
function splitEndpoints(md: string): string[] {
  const lines = md.split("\n");
  const chunks: string[] = [];
  let current: string[] = [];
  let inEndpoint = false;
  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (inEndpoint && current.length > 0) chunks.push(current.join("\n"));
      current = [line];
      inEndpoint = true;
    } else if (inEndpoint) {
      current.push(line);
    }
  }
  if (inEndpoint && current.length > 0) chunks.push(current.join("\n"));
  return chunks;
}

const PARAM_LINE = /^(\s*)-\s+`([^`]+)`\s*·\s*_([^_]+)_\s*·\s*\*\*(required|optional)\*\*/;

/**
 * Parse a bullet-list of params where indentation controls nesting.
 *
 * Each param line has a leading-whitespace width. A line with *greater* indent
 * than the previous one becomes a child of the previous param. Equal indent is
 * a sibling. Lesser indent pops back up the tree to the matching level.
 *
 * Each container (root + each param's `children`) is tagged with its "own
 * indent" in `containerIndent`. Siblings at indent N live in the container
 * tagged with indent N.
 */
export function parseParamBlock(block: string): Param[] {
  const matches: Array<{ indent: number; param: Param }> = [];
  for (const line of block.split("\n")) {
    const m = PARAM_LINE.exec(line);
    if (!m) continue;
    matches.push({
      indent: m[1]!.length,
      param: { name: m[2]!, type: m[3]!, required: m[4] === "required" },
    });
  }
  if (matches.length === 0) return [];

  const root: Param[] = [];
  // stack[i] is the list to push into for indent == stack[i].indent
  const stack: Array<{ indent: number; list: Param[] }> = [
    { indent: matches[0]!.indent, list: root },
  ];

  for (const { indent, param } of matches) {
    // Pop any frames whose indent is greater than current (we've dedented).
    while (stack.length > 1 && stack[stack.length - 1]!.indent > indent) {
      stack.pop();
    }

    const top = stack[stack.length - 1]!;
    if (indent === top.indent) {
      top.list.push(param);
    } else if (indent > top.indent) {
      // New deeper level: attach as children of the last sibling on top.
      const last = top.list[top.list.length - 1];
      if (!last) {
        // No sibling to parent under — anomalous input, treat as sibling.
        top.list.push(param);
        continue;
      }
      last.children ??= [];
      last.children.push(param);
      stack.push({ indent, list: last.children });
    } else {
      // indent < top.indent after popping — shouldn't happen, but be resilient.
      top.list.push(param);
    }
  }
  return root;
}

/**
 * Extract a labeled section between a `**Label**` heading and the next `**...**` heading or EOF.
 */
function extractSection(chunk: string, label: string): string | null {
  const headings = Array.from(chunk.matchAll(/^\*\*([^*]+)\*\*\s*$/gm));
  for (let i = 0; i < headings.length; i++) {
    const h = headings[i]!;
    if (h[1]!.trim() === label) {
      const start = h.index! + h[0].length;
      const nextIdx = i + 1 < headings.length ? headings[i + 1]!.index! : chunk.length;
      return chunk.slice(start, nextIdx);
    }
  }
  return null;
}

function parseEndpoint(chunk: string, file: string): Endpoint | null {
  const titleMatch = /^##\s+(.+?)\s*$/m.exec(chunk);
  const pathMatch = /^-\s+\*\*Path\*\*:\s*`([^`]+)`/m.exec(chunk);
  const methodMatch = /^-\s+\*\*Method\*\*:\s*`([^`]+)`/m.exec(chunk);
  if (!titleMatch || !pathMatch || !methodMatch) return null;

  const title = titleMatch[1]!.trim();
  const path = pathMatch[1]!.trim();
  const methodRaw = methodMatch[1]!.trim().toUpperCase();
  const methods: Array<"get" | "post"> = [];
  if (/GET/.test(methodRaw)) methods.push("get");
  if (/POST/.test(methodRaw)) methods.push("post");
  if (methods.length === 0) return null;

  // Endpoints (regional base URLs)
  const endpointsBlock = extractSection(chunk, "Endpoints") ?? "";
  const servers: string[] = [];
  for (const m of endpointsBlock.matchAll(/https?:\/\/\S+/g)) {
    const url = m[0].replace(/[).,;]+$/, "");
    servers.push(url);
  }

  const requestBlock = extractSection(chunk, "Request parameters") ?? "";
  const responseBlock = extractSection(chunk, "Response parameters") ?? "";
  const request = parseParamBlock(requestBlock);
  const response = parseParamBlock(responseBlock);

  return { file, title, path, methods, servers, request, response };
}

// --------------------------------------------------------------------------
// OpenAPI emission
// --------------------------------------------------------------------------

const REGIONAL_SERVERS = [
  { url: "https://api.lazada.sg/rest", description: "Singapore" },
  { url: "https://api.lazada.vn/rest", description: "Vietnam" },
  { url: "https://api.lazada.com.ph/rest", description: "Philippines" },
  { url: "https://api.lazada.com.my/rest", description: "Malaysia" },
  { url: "https://api.lazada.co.th/rest", description: "Thailand" },
  { url: "https://api.lazada.co.id/rest", description: "Indonesia" },
];
const AUTH_SERVER = { url: "https://auth.lazada.com/rest", description: "Auth (all regions)" };

function operationId(ep: Endpoint, method: string): string {
  // Include path to guarantee uniqueness — some Lazada endpoints reuse titles across paths.
  const pathPart = ep.path
    .replace(/^\/+/, "")
    .split("/")
    .map((seg) => seg.replace(/[^A-Za-z0-9]/g, ""))
    .filter(Boolean)
    .map((seg) => seg[0]!.toUpperCase() + seg.slice(1))
    .join("");
  return `${method}${pathPart}`;
}

function fileNameToTag(file: string): string {
  return file.replace(/\.md$/, "");
}

function buildOpenApi(endpoints: Endpoint[]): Record<string, unknown> {
  const paths: Record<string, Record<string, unknown>> = {};

  for (const ep of endpoints) {
    const isAuthHost = ep.servers.some((s) => /auth\.lazada\.com/.test(s));
    const serversOverride = isAuthHost ? [AUTH_SERVER] : undefined;
    const tag = fileNameToTag(ep.file);

    for (const method of ep.methods) {
      const op: Record<string, unknown> = {
        operationId: operationId(ep, method),
        summary: ep.title,
        tags: [tag],
      };
      if (serversOverride) op.servers = serversOverride;

      // We deliberately do NOT emit common auth params (app_key, timestamp,
      // sign_method, sign, access_token) on each operation. They are handled
      // transparently by the signing middleware. The `security` block at root
      // declares that every op uses `lazadaSignature` (documented, not typed).

      if (method === "get") {
        op.parameters = ep.request.map((p) => ({
          name: p.name,
          in: "query",
          required: p.required,
          schema: lazadaTypeToOpenApi(p.type),
        }));
      } else if (ep.request.length > 0) {
        // POST: business payload as JSON body.
        op.requestBody = {
          required: true,
          content: {
            "application/json": {
              schema: paramsToSchema(ep.request),
            },
          },
        };
      }

      const responseSchema =
        ep.response.length > 0
          ? paramsToSchema(ep.response)
          : { type: "object", additionalProperties: true };
      op.responses = {
        "200": {
          description: "Success",
          content: { "application/json": { schema: responseSchema } },
        },
      };

      paths[ep.path] ??= {};
      paths[ep.path]![method] = op;
    }
  }

  return {
    openapi: "3.1.0",
    info: {
      title: "Lazada Open Platform API",
      version: "0.0.1",
      description:
        "Unofficial OpenAPI description of the Lazada Open Platform API, derived from public documentation. Not affiliated with Lazada.",
    },
    servers: REGIONAL_SERVERS,
    tags: Array.from(new Set(endpoints.map((e) => fileNameToTag(e.file)))).sort().map((t) => ({
      name: t,
    })),
    paths,
    security: [{ lazadaSignature: [] }],
    components: {
      securitySchemes: {
        lazadaSignature: {
          type: "apiKey",
          in: "query",
          name: "sign",
          description:
            "HMAC-SHA256 signature computed over sorted request parameters + body, keyed on the app secret. See docs/guides/developer-s-guide.md#signature-algorithm.",
        },
      },
    },
  };
}

// --------------------------------------------------------------------------
// Main
// --------------------------------------------------------------------------

async function main(): Promise<void> {
  const files = (await readdir(DOCS_DIR)).filter((f) => f.endsWith(".md")).sort();
  const endpoints: Endpoint[] = [];
  const stats: ParseStats = {
    files: files.length,
    endpoints: 0,
    skipped: 0,
    dualMethod: 0,
    authHost: 0,
  };

  for (const file of files) {
    const md = await readFile(join(DOCS_DIR, file), "utf8");
    const chunks = splitEndpoints(md);
    for (const chunk of chunks) {
      const ep = parseEndpoint(chunk, file);
      if (!ep) {
        stats.skipped++;
        continue;
      }
      endpoints.push(ep);
      stats.endpoints++;
      if (ep.methods.length > 1) stats.dualMethod++;
      if (ep.servers.some((s) => /auth\.lazada\.com/.test(s))) stats.authHost++;
    }
  }

  const spec = buildOpenApi(endpoints);
  await mkdir(dirname(OUT_FILE), { recursive: true });
  const yaml = yamlDump(spec, { noRefs: true, lineWidth: 120 });
  await writeFile(OUT_FILE, yaml, "utf8");

  // eslint-disable-next-line no-console
  console.log(
    `Parsed ${stats.endpoints} endpoints from ${stats.files} files ` +
      `(${stats.dualMethod} dual-method, ${stats.authHost} on auth host, ${stats.skipped} skipped).`,
  );
  // eslint-disable-next-line no-console
  console.log(`Wrote ${OUT_FILE}`);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
