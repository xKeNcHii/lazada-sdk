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
    // Insert a boundary before runs of caps or lowercase→cap transitions so
    // that embedded camelCase path segments like "createWithOpenId" or
    // "startExportByDataset" split into Create/With/Open/Id rather than
    // collapsing to Createwithopenid.
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
    .split("_")
    .filter(Boolean)
    .map((w) => w[0]!.toUpperCase() + w.slice(1).toLowerCase())
    .join("");
}

function toCamel(pascal: string): string {
  if (!pascal) return pascal;
  return pascal[0]!.toLowerCase() + pascal.slice(1);
}

// Last-segment verbs that name the method on their own; noun comes from parent segments.
// Expanded to cover the common Lazada action vocabulary.
const LAST_SEG_VERBS = new Set([
  "get", "create", "update", "cancel", "list", "delete", "upload", "search",
  "sync", "add", "remove", "set", "query", "confirm", "submit", "approve",
  "reject", "dispatch", "pack", "ship", "bind", "unbind", "activate",
  "deactivate", "send", "reply", "close", "open", "find", "apply", "renew",
  "refund", "print", "save", "enable", "disable", "check", "verify", "refresh",
]);

/**
 * If `seg` is a compound camelCase like "createWithOpenId", return the leading
 * verb ("create") iff it's in our known verb set, plus the trailing pascal
 * words ("WithOpenId"). Otherwise null.
 */
function splitCompoundVerb(seg: string): { verb: string; noun: string } | null {
  // toPascal handles the camelCase split; we re-split its output.
  const words = toPascal(seg).match(/[A-Z][a-z0-9]*/g);
  if (!words || words.length < 2) return null;
  const head = words[0]!.toLowerCase();
  if (!LAST_SEG_VERBS.has(head)) return null;
  return { verb: head, noun: words.slice(1).join("") };
}

function methodName(path: string, method: "get" | "post"): string {
  const segs = path.split("/").filter(Boolean);
  const last = segs[segs.length - 1] ?? "";
  const rest = segs.slice(0, -1);
  if (LAST_SEG_VERBS.has(last.toLowerCase())) {
    const noun = rest.map(toPascal).join("");
    return toCamel(toPascal(last) + noun);
  }
  // Compound camelCase like "createWithOpenId" → "createParentsWithOpenId"
  const compound = splitCompoundVerb(last);
  if (compound) {
    const parentNoun = rest.map(toPascal).join("");
    return toCamel(toPascal(compound.verb) + parentNoun + compound.noun);
  }
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

/**
 * Produce a collision-free list of method names within a single manager.
 *
 * Strategy: start with the short name from `methodName()`. If two methods
 * share it, extend each colliding name by folding in the next parent path
 * segment (most-specific-first). Repeat until unique. This yields readable
 * disambiguated names like `cancelOrder` / `cancelRma` rather than `cancel_2`.
 */
function disambiguate(methods: ManagerMethod[]): ManagerMethod[] {
  const working = methods.map((m) => ({
    m,
    segs: m.path.split("/").filter(Boolean),
    // How many parent segments have been folded into the name so far.
    depth: 0,
    name: m.name,
  }));

  const countByName = () => {
    const c = new Map<string, number>();
    for (const w of working) c.set(w.name, (c.get(w.name) ?? 0) + 1);
    return c;
  };

  // Iteratively extend colliding names. Bounded by longest path depth.
  for (let iter = 0; iter < 10; iter++) {
    const counts = countByName();
    const colliding = working.filter((w) => (counts.get(w.name) ?? 0) > 1);
    if (colliding.length === 0) break;

    for (const w of colliding) {
      const last = w.segs[w.segs.length - 1] ?? "";
      const isVerbLast = LAST_SEG_VERBS.has(last.toLowerCase());
      // Which segment to pull next as a disambiguating noun. For verb-last
      // paths, parents are segs[0..len-2]; we've already consumed `depth` of
      // them from the tail end. Pull the next one (from the tail moving left).
      const parentSegs = isVerbLast ? w.segs.slice(0, -1) : w.segs;
      const idx = parentSegs.length - 1 - w.depth;
      if (idx < 0) continue; // exhausted — fall through to numeric suffix below
      const extra = toPascal(parentSegs[idx] ?? "");
      if (!extra) continue;
      // For verb-last: verb + extra + existing-noun-tail. For non-verb-last
      // (already `get/post + full path`), the base name already contains all
      // segments, so extension is a no-op — numeric suffix will handle it.
      if (isVerbLast) {
        // Rebuild: verb + (parentSegs[idx..end]).map(toPascal)
        const noun = parentSegs.slice(idx).map(toPascal).join("");
        w.name = toCamel(toPascal(last) + noun);
        w.depth++;
      } else {
        w.depth++; // nothing to extend; will fall into numeric suffix
      }
    }
  }

  // Final numeric-suffix fallback for any residual collisions.
  const finalCounts = countByName();
  const seen = new Map<string, number>();
  return working.map(({ m, name }) => {
    const total = finalCounts.get(name) ?? 1;
    if (total === 1) return { ...m, name };
    const n = (seen.get(name) ?? 0) + 1;
    seen.set(name, n);
    return { ...m, name: n === 1 ? name : `${name}${n}` };
  });
}

async function main(): Promise<void> {
  const spec = yamlLoad(await readFile(SPEC_FILE, "utf8")) as Spec;
  const byTag = new Map<string, ManagerMethod[]>();

  for (const [path, methods] of Object.entries(spec.paths)) {
    // Lazada registers many endpoints as both GET (small payloads via query)
    // and POST (same semantics, form-encoded body for larger payloads). The
    // two variants have identical meaning, so we expose only one method per
    // path. POST wins when both exist: it handles arbitrarily large payloads
    // and the signing middleware treats GET/POST payloads identically. Users
    // who specifically need the GET transport can reach for the raw
    // `sdk.client.GET(path, ...)` escape hatch.
    const httpMethods: Array<"get" | "post"> = [];
    if ("post" in methods) httpMethods.push("post");
    else if ("get" in methods) httpMethods.push("get");

    for (const httpMethod of httpMethods) {
      const op = methods[httpMethod];
      if (!op) continue;
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
    // Dedupe method names within this manager by folding in the next parent
    // path segment until names are unique. Falls back to numeric suffix only
    // if even the full pascal-cased path collides (shouldn't happen in
    // practice — the full-path name is inherently unique per method).
    const methods = disambiguate(rawMethods);

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
