#!/usr/bin/env node
/**
 * One-off bootstrap script: read the OpenAPI spec and emit a first draft of
 * each manager file under packages/sdk-ts/src/managers/<group>.manager.ts.
 *
 * Re-run with `--force` to overwrite existing files (e.g. after a monthly
 * spec refresh brings new endpoints). By default, files that already exist
 * are skipped so hand-polished managers aren't clobbered.
 *
 * Method naming heuristic (documented in CONTRIBUTING):
 *   - Method name = camelCased last path segment, verb-prefixed by method.
 *   - POST /order/cancel              → cancel
 *   - GET  /orders/get                → getOrders
 *   - POST /image/upload              → uploadImage
 *   - GET  /category/suggestion/get   → getCategorySuggestion
 *   - Collisions within a manager get a numeric suffix; human edits the name.
 */
import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { load as yamlLoad } from "js-yaml";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..", "..");
const SPEC_FILE = join(REPO_ROOT, "spec", "openapi", "lazada.openapi.yaml");
const MANAGERS_DIR = join(REPO_ROOT, "packages", "sdk-ts", "src", "managers");
const SDK_FILE = join(REPO_ROOT, "packages", "sdk-ts", "src", "sdk.ts");

interface SpecOperation {
  operationId: string;
  tags?: string[];
  parameters?: unknown[];
  requestBody?: unknown;
}
interface Spec {
  paths: Record<string, Record<string, SpecOperation>>;
}

const FORCE = process.argv.includes("--force");

function toPascal(seg: string): string {
  if (!seg) return "";
  return seg
    .replace(/[^A-Za-z0-9]+/g, "_")
    .split("_")
    .filter(Boolean)
    .map((w) => w[0]!.toUpperCase() + w.slice(1).toLowerCase())
    .join("");
}

function toCamel(pascal: string): string {
  if (!pascal) return pascal;
  return pascal[0]!.toLowerCase() + pascal.slice(1);
}

function methodName(path: string, method: "get" | "post"): string {
  const segs = path.split("/").filter(Boolean);
  const last = segs[segs.length - 1] ?? "";
  const rest = segs.slice(0, -1);

  // Common Lazada verbs appearing as last segment
  const verbs = new Set(["get", "create", "update", "cancel", "list", "delete", "upload", "search", "sync", "add", "remove", "set", "query"]);
  if (verbs.has(last.toLowerCase())) {
    // verb + remaining path as noun: e.g. ["orders","get"] → getOrders
    const noun = rest.map(toPascal).join("");
    return toCamel(toPascal(last) + noun);
  }
  // Fallback: verb from HTTP method + whole path as noun
  const verb = method === "post" ? "post" : "get";
  const noun = segs.map(toPascal).join("");
  return `${verb}${noun}`;
}

function managerClassName(tag: string): string {
  // tag like "order-api" → "OrderManager"
  const base = tag.replace(/-?api$/i, "");
  return toPascal(base) + "Manager";
}

function managerFileName(tag: string): string {
  return tag.replace(/-?api$/i, "") + ".manager.ts";
}

function sdkFieldName(tag: string): string {
  const base = tag.replace(/-?api$/i, "");
  return toCamel(toPascal(base));
}

interface ManagerMethod {
  name: string;
  path: string;
  httpMethod: "get" | "post";
  hasParams: boolean;
  hasBody: boolean;
}

async function main(): Promise<void> {
  const spec = yamlLoad(await readFile(SPEC_FILE, "utf8")) as Spec;
  const byTag = new Map<string, ManagerMethod[]>();

  for (const [path, methods] of Object.entries(spec.paths)) {
    for (const [httpMethod, op] of Object.entries(methods)) {
      if (httpMethod !== "get" && httpMethod !== "post") continue;
      const tag = op.tags?.[0];
      if (!tag) continue;
      const params = op.parameters as unknown[] | undefined;
      const hasParams = Array.isArray(params) && params.length > 0;
      const hasBody = op.requestBody != null;
      const list = byTag.get(tag) ?? [];
      list.push({
        name: methodName(path, httpMethod),
        path,
        httpMethod,
        hasParams,
        hasBody,
      });
      byTag.set(tag, list);
    }
  }

  await mkdir(MANAGERS_DIR, { recursive: true });

  const indexEntries: Array<{ tag: string; file: string; className: string; field: string }> = [];
  let wrote = 0;
  let skipped = 0;

  for (const [tag, rawMethods] of Array.from(byTag.entries()).sort()) {
    // Dedupe method names within this manager
    const seen = new Map<string, number>();
    const methods = rawMethods.map((m) => {
      const count = (seen.get(m.name) ?? 0) + 1;
      seen.set(m.name, count);
      return count > 1 ? { ...m, name: `${m.name}_${count}` } : m;
    });

    const fileName = managerFileName(tag);
    const className = managerClassName(tag);
    const fieldName = sdkFieldName(tag);
    const outPath = join(MANAGERS_DIR, fileName);
    indexEntries.push({ tag, file: fileName, className, field: fieldName });

    if (existsSync(outPath) && !FORCE) {
      skipped++;
      continue;
    }

    const lines: string[] = [];
    lines.push(`import { BaseManager } from "./base.manager.js";`);
    lines.push(`import type { paths } from "../schemas/generated.js";`);
    lines.push(``);
    lines.push(`type Q<P extends keyof paths, M extends keyof paths[P]> =`);
    lines.push(`  paths[P][M] extends { parameters: { query?: infer X } } ? X : never;`);
    lines.push(`type B<P extends keyof paths, M extends keyof paths[P]> =`);
    lines.push(`  paths[P][M] extends { requestBody: { content: { "application/json": infer X } } } ? X : never;`);
    lines.push(``);
    lines.push(`/**`);
    lines.push(` * Auto-generated manager for \`${tag}\`. Method names follow the path-segment`);
    lines.push(` * heuristic; rename as needed. Do not hand-edit the imports section —`);
    lines.push(` * bootstrap --force will rewrite this file.`);
    lines.push(` */`);
    lines.push(`export class ${className} extends BaseManager {`);

    for (const m of methods) {
      const mu = m.httpMethod.toUpperCase();
      if (m.httpMethod === "get") {
        if (m.hasParams) {
          lines.push(`  ${m.name}(params: Q<"${m.path}", "get">) {`);
          lines.push(`    return this.client.GET("${m.path}", { params: { query: params } });`);
          lines.push(`  }`);
        } else {
          lines.push(`  ${m.name}() {`);
          lines.push(`    return this.client.GET("${m.path}", {});`);
          lines.push(`  }`);
        }
      } else {
        if (m.hasBody) {
          lines.push(`  ${m.name}(body: B<"${m.path}", "post">) {`);
          lines.push(`    return this.client.POST("${m.path}", { body });`);
          lines.push(`  }`);
        } else {
          lines.push(`  ${m.name}() {`);
          lines.push(`    return this.client.${mu}("${m.path}", {});`);
          lines.push(`  }`);
        }
      }
      lines.push(``);
    }
    lines.push(`}`);
    lines.push(``);
    await writeFile(outPath, lines.join("\n"), "utf8");
    wrote++;
  }

  // Emit / update sdk.ts facade
  const sdkLines: string[] = [];
  sdkLines.push(`import { createLazadaClient, type LazadaClient } from "./client.js";`);
  sdkLines.push(`import type { LazadaConfig } from "./config.js";`);
  for (const e of indexEntries) {
    sdkLines.push(`import { ${e.className} } from "./managers/${e.file.replace(/\.ts$/, ".js")}";`);
  }
  sdkLines.push(``);
  sdkLines.push(`export class LazadaSDK {`);
  sdkLines.push(`  readonly client: LazadaClient;`);
  for (const e of indexEntries) {
    sdkLines.push(`  readonly ${e.field}: ${e.className};`);
  }
  sdkLines.push(``);
  sdkLines.push(`  constructor(public readonly config: LazadaConfig) {`);
  sdkLines.push(`    this.client = createLazadaClient(config);`);
  for (const e of indexEntries) {
    sdkLines.push(`    this.${e.field} = new ${e.className}(this.client);`);
  }
  sdkLines.push(`  }`);
  sdkLines.push(`}`);
  sdkLines.push(``);
  await writeFile(SDK_FILE, sdkLines.join("\n"), "utf8");

  // Update index.ts re-exports
  const indexFile = join(REPO_ROOT, "packages", "sdk-ts", "src", "index.ts");
  const existingIndex = await readFile(indexFile, "utf8").catch(() => "");
  const staticBlock = existingIndex
    .split("\n")
    .filter((l) => !l.includes("/managers/") || l.includes("base.manager"))
    .join("\n")
    .trim();
  const managerExports = indexEntries
    .map((e) => `export { ${e.className} } from "./managers/${e.file.replace(/\.ts$/, ".js")}";`)
    .join("\n");
  await writeFile(indexFile, `${staticBlock}\n${managerExports}\n`, "utf8");

  // eslint-disable-next-line no-console
  console.log(
    `Bootstrapped ${wrote} manager file(s), skipped ${skipped} (use --force to overwrite). ` +
      `Facade written to sdk.ts with ${indexEntries.length} manager(s).`,
  );
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});

// Silence unused-import warnings when this file is typechecked without being invoked.
void readdir;
