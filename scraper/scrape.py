"""
Scrape Lazada Open Platform API reference + guides into markdown.

Uses the site's JSON backend directly (no browser needed):

  - API tree   : https://isvconsole.lazada.com/handler/share/apidoc/getApiCategoryMixed.json
  - API detail : https://isvconsole.lazada.com/handler/share/apidoc/getApi.json?path=/foo/bar
  - Guide tree : https://open.lazada.com/handler/share/doc/getCategories.json?oeid=LZD_DOC&lang=en_US&typeId=6
  - Guide page : https://open.lazada.com/handler/share/doc/getDocDetail.json.json?oeid=LZD_DOC&lang=en_US&docId=<D>&nodeId=<N>

Output:
    ../docs/api/<category>.md       (one file per top-level API category)
    ../docs/guides/<category>.md    (one file per top-level guide section)
    ../README.md                    (table of contents)
    ../FAILURES.md                  (only if some pages failed)

Usage:
    python scrape.py
    python scrape.py --limit 5        # scrape only 5 per tree (smoke test)
"""
from __future__ import annotations

import argparse
import re
import sys
import time
from collections import defaultdict
from dataclasses import dataclass, field
from datetime import date
from pathlib import Path

import requests
from bs4 import BeautifulSoup
from markdownify import markdownify as md
from tenacity import retry, stop_after_attempt, wait_exponential
from tqdm import tqdm

ROOT = Path(__file__).resolve().parent.parent
DOCS_API = ROOT / "docs" / "api"
DOCS_GUIDES = ROOT / "docs" / "guides"
README_MD = ROOT / "README.md"
FAILURES_MD = ROOT / "FAILURES.md"

API_TREE_URL = "https://isvconsole.lazada.com/handler/share/apidoc/getApiCategoryMixed.json"
API_DETAIL_URL = "https://isvconsole.lazada.com/handler/share/apidoc/getApi.json"
GUIDE_TREE_URL = "https://open.lazada.com/handler/share/doc/getCategories.json"
GUIDE_DETAIL_URL = "https://open.lazada.com/handler/share/doc/getDocDetail.json.json"

UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
POLITE_DELAY = 0.2  # seconds between page requests

session = requests.Session()
session.headers.update({"User-Agent": UA, "Accept": "application/json,*/*"})


@retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, max=10))
def get_json(url: str, params: dict | None = None) -> dict:
    r = session.get(url, params=params, timeout=30)
    r.raise_for_status()
    data = r.json()
    if not data.get("success", True) and data.get("httpStatus") not in ("200", 200, None):
        raise RuntimeError(f"non-success: {url} {data.get('errorMessage')}")
    return data


def slugify(s: str) -> str:
    s = re.sub(r"[^a-zA-Z0-9]+", "-", (s or "").strip().lower())
    return s.strip("-") or "item"


# ---------------------------------------------------------------- rendering --


def render_param_rows(rows: list[dict], depth: int = 0) -> list[str]:
    """Render a parameter list (with nested children) as indented Markdown bullets."""
    out: list[str] = []
    for r in rows or []:
        name = r.get("name") or "(unnamed)"
        typ = r.get("type") or ""
        req = r.get("required")
        req_lbl = "required" if req is True else ("optional" if req is False else "")
        desc = (r.get("desc") or "").strip().replace("\n", " ")
        bits = [f"`{name}`"]
        if typ:
            bits.append(f"_{typ}_")
        if req_lbl:
            bits.append(f"**{req_lbl}**")
        line = "  " * depth + "- " + " · ".join(bits)
        if desc:
            line += f" — {desc}"
        out.append(line)
        kids = r.get("children") or []
        if kids:
            out.extend(render_param_rows(kids, depth + 1))
    return out


def render_param_block(title: str, block: dict | None) -> str:
    rows = (block or {}).get("data") or []
    if not rows:
        return ""
    lines = [f"**{title}**", ""]
    lines.extend(render_param_rows(rows))
    lines.append("")
    return "\n".join(lines)


def render_error_codes(block: dict | None) -> str:
    rows = (block or {}).get("data") or []
    if not rows:
        return ""
    lines = ["**Error codes**", "", "| Code | Description | Solution |", "| --- | --- | --- |"]
    for r in rows:
        code = (r.get("code") or "").replace("|", "\\|")
        desc = (r.get("codeDesc") or "").replace("|", "\\|").replace("\n", " ")
        sol = (r.get("solution") or "").replace("|", "\\|").replace("\n", " ")
        lines.append(f"| `{code}` | {desc} | {sol} |")
    lines.append("")
    return "\n".join(lines)


def render_endpoints(block: dict | None) -> str:
    rows = (block or {}).get("data") or []
    if not rows:
        return ""
    lines = ["**Endpoints**", ""]
    for r in rows:
        name = r.get("name") or ""
        desc = (r.get("desc") or "").strip()
        lines.append(f"- **{name}**: {desc}")
    lines.append("")
    return "\n".join(lines)


def render_examples(block: dict | None) -> str:
    rows = (block or {}).get("data") or []
    if not rows:
        return ""
    out = ["**Example**", ""]
    for i, ex in enumerate(rows, 1):
        out.append(f"Request sample {i}:")
        out.append("")
        out.append("```")
        for p in ex.get("input") or []:
            out.append(f'{p.get("paramName")}={p.get("demo")}')
        out.append("```")
        out.append("")
        if ex.get("output"):
            out.append(f"Response sample {i}:")
            out.append("")
            out.append("```")
            for p in ex.get("output") or []:
                out.append(f'{p.get("paramName")}={p.get("demo")}')
            out.append("```")
            out.append("")
    return "\n".join(out)


def render_api_section(api: dict) -> str:
    title = api.get("title") or api.get("path") or "(untitled)"
    path = api.get("path") or ""
    method = api.get("method") or api.get("methodType") or ""
    desc = (api.get("desc") or api.get("description") or "").strip()

    slug = slugify(path or title)
    lines = [f'## {title}', "", f'<a id="{slug}"></a>', ""]
    if path:
        lines.append(f"- **Path**: `{path}`")
    if method:
        lines.append(f"- **Method**: `{method}`")
    if api.get("lastModified"):
        lines.append(f"- **Last modified**: {api['lastModified']}")
    lines.append("")
    if desc:
        lines.append(desc)
        lines.append("")

    ep = render_endpoints(api.get("endpointParams"))
    if ep:
        lines.append(ep)
    rp = render_param_block("Request parameters", api.get("parameters"))
    if rp:
        lines.append(rp)
    op = render_param_block("Response parameters", api.get("outputParameters"))
    if op:
        lines.append(op)
    cp = render_param_block("Common parameters", api.get("commonParameters"))
    if cp:
        lines.append(cp)
    err = render_error_codes(api.get("errorCodes"))
    if err:
        lines.append(err)
    ex = render_examples(api.get("examples"))
    if ex:
        lines.append(ex)

    lines.append("---")
    lines.append("")
    return "\n".join(lines)


def html_to_md(html: str) -> str:
    if not html:
        return ""
    soup = BeautifulSoup(html, "html.parser")
    for tag in soup(["script", "style", "noscript"]):
        tag.decompose()
    for el in soup.find_all(True):
        for attr in list(el.attrs):
            if attr in ("style", "class", "onclick", "data-spm", "target"):
                del el.attrs[attr]
    text = md(str(soup), heading_style="ATX", bullets="-")
    text = re.sub(r"\n{3,}", "\n\n", text).strip()
    return text


# -------------------------------------------------------------- data classes --


@dataclass
class RunResult:
    api_by_category: dict[str, list[str]] = field(default_factory=lambda: defaultdict(list))
    guide_by_category: dict[str, list[str]] = field(default_factory=lambda: defaultdict(list))
    failures: list[tuple[str, str]] = field(default_factory=list)


# --------------------------------------------------------------------- API --


def scrape_api(result: RunResult, limit: int = 0) -> None:
    print("Fetching API category tree…", flush=True)
    tree = get_json(API_TREE_URL)["data"] or []
    # Flatten: [(category_name, api_summary), ...]
    jobs: list[tuple[str, dict]] = []
    for cat in tree:
        cat_name = cat.get("name") or f"category-{cat.get('id')}"
        for api in cat.get("apiList") or []:
            jobs.append((cat_name, api))
    print(f"  found {len(jobs)} endpoints across {len(tree)} categories", flush=True)

    if limit:
        jobs = jobs[:limit]

    for cat_name, summary in tqdm(jobs, desc="API", unit="endpoint"):
        path = summary.get("path")
        if not path:
            continue
        try:
            detail = get_json(API_DETAIL_URL, params={"path": path})
            data = detail.get("data") or {}
            api_list = data.get("apiList") or [summary]
            for api in api_list:
                # Merge summary info where detail is missing
                merged = {**summary, **api}
                result.api_by_category[cat_name].append(render_api_section(merged))
        except Exception as e:
            result.failures.append((f"API {path}", f"{type(e).__name__}: {e}"))
        time.sleep(POLITE_DELAY)


# ------------------------------------------------------------------- guides --


def _walk_guide_tree(node: dict, top_title: str | None = None) -> list[tuple[str, int, int, str]]:
    """Recursive walk. Returns [(category, nodeId, docId, title), ...]."""
    out: list[tuple[str, int, int, str]] = []
    this_title = node.get("enTitle") or node.get("cnTitle") or "Untitled"
    # At depth 1 (direct children of the root) this_title becomes the category
    category = top_title or this_title
    for d in node.get("currentDocList") or []:
        doc_id = d.get("id")
        title = d.get("enTitle") or d.get("cnTitle") or f"doc-{doc_id}"
        node_id = node.get("id")
        if doc_id and node_id:
            out.append((category, node_id, doc_id, title))
    for child in node.get("children") or []:
        out.extend(_walk_guide_tree(child, category))
    return out


def scrape_guides(result: RunResult, limit: int = 0) -> None:
    print("Fetching guide category tree…", flush=True)
    tree = get_json(
        GUIDE_TREE_URL,
        params={"oeid": "LZD_DOC", "lang": "en_US", "typeId": 6},
    )["data"] or {}

    jobs: list[tuple[str, int, int, str]] = []
    for child in tree.get("children") or []:
        jobs.extend(_walk_guide_tree(child, top_title=None))
    print(f"  found {len(jobs)} guide pages", flush=True)

    if limit:
        jobs = jobs[:limit]

    for category, node_id, doc_id, title in tqdm(jobs, desc="Guides", unit="page"):
        try:
            detail = get_json(
                GUIDE_DETAIL_URL,
                params={
                    "oeid": "LZD_DOC",
                    "lang": "en_US",
                    "docId": doc_id,
                    "nodeId": node_id,
                },
            )
            data = detail.get("data") or {}
            html_body = data.get("enContent") or data.get("cnContent") or ""
            title_final = data.get("enTitle") or data.get("cnTitle") or title
            body_md = html_to_md(html_body)
            slug = slugify(f"{title_final}-{doc_id}")
            source = (
                "https://open.lazada.com/apps/doc/doc"
                f"?nodeId={node_id}&docId={doc_id}&lang=en_US"
            )
            section = "\n".join(
                [
                    f"## {title_final}",
                    "",
                    f'<a id="{slug}"></a>',
                    "",
                    f"> Source: <{source}>",
                    "",
                    body_md or "_(no content)_",
                    "",
                    "---",
                    "",
                ]
            )
            result.guide_by_category[category].append(section)
        except Exception as e:
            result.failures.append((f"Guide {doc_id}", f"{type(e).__name__}: {e}"))
        time.sleep(POLITE_DELAY)


# ---------------------------------------------------------------- write out --


def write_category_file(base: Path, category: str, sections: list[str]) -> Path:
    base.mkdir(parents=True, exist_ok=True)
    out = base / f"{slugify(category)}.md"
    header = [f"# {category}", ""]
    out.write_text("\n".join(header) + "\n" + "\n".join(sections) + "\n", encoding="utf-8")
    return out


def write_readme(result: RunResult) -> None:
    today = date.today().isoformat()
    lines = [
        "# Lazada Open Platform docs (local mirror)",
        "",
        f"Scraped from <https://open.lazada.com/apps/doc/api> on {today}.",
        "",
        "## API Reference",
        "",
    ]
    for cat in sorted(result.api_by_category):
        lines.append(
            f"- [{cat}](docs/api/{slugify(cat)}.md) — "
            f"{len(result.api_by_category[cat])} endpoints"
        )
    lines += ["", "## Guides", ""]
    for cat in sorted(result.guide_by_category):
        lines.append(
            f"- [{cat}](docs/guides/{slugify(cat)}.md) — "
            f"{len(result.guide_by_category[cat])} pages"
        )
    README_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def write_failures(result: RunResult) -> None:
    if not result.failures:
        if FAILURES_MD.exists():
            FAILURES_MD.unlink()
        return
    lines = ["# Failures", ""]
    for key, reason in result.failures:
        lines.append(f"- **{key}** — {reason}")
    FAILURES_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


# ------------------------------------------------------------------- driver --


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=0, help="cap pages per tree (smoke test)")
    ap.add_argument("--skip-api", action="store_true")
    ap.add_argument("--skip-guides", action="store_true")
    args = ap.parse_args()

    result = RunResult()
    if not args.skip_api:
        scrape_api(result, limit=args.limit)
    if not args.skip_guides:
        scrape_guides(result, limit=args.limit)

    for cat, sections in result.api_by_category.items():
        out = write_category_file(DOCS_API, cat, sections)
        print(f"wrote {out.relative_to(ROOT)} ({len(sections)} endpoints)")
    for cat, sections in result.guide_by_category.items():
        out = write_category_file(DOCS_GUIDES, cat, sections)
        print(f"wrote {out.relative_to(ROOT)} ({len(sections)} pages)")

    write_readme(result)
    write_failures(result)
    print(f"wrote {README_MD.relative_to(ROOT)}")
    if result.failures:
        print(f"{len(result.failures)} failures → {FAILURES_MD.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except KeyboardInterrupt:
        sys.exit(130)
