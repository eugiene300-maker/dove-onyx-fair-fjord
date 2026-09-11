import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteShell } from "./site-shell-DEyZQk9c.mjs";
import { t as articles } from "./articles-_p3BMe5Z.mjs";
import { t as reviews } from "./reviews-BzbC4_tS.mjs";
import { t as ratings } from "./ratings-BOF8cIsN.mjs";
import { t as ArticleCard } from "./article-card-ylZzYdpL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-Bs5fXgRE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SearchPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const query = q.trim().toLowerCase();
	const results = (0, import_react.useMemo)(() => {
		if (query.length < 2) return {
			articles: articles.slice(0, 6),
			reviews: [],
			ratings: []
		};
		return {
			articles: articles.filter((a) => (a.title + a.dek + a.tags.join(" ") + a.category).toLowerCase().includes(query)),
			reviews: reviews.filter((r) => (r.name + r.neighborhood + r.excerpt).toLowerCase().includes(query)),
			ratings: ratings.filter((p) => (p.name + p.neighborhood + p.summary).toLowerCase().includes(query))
		};
	}, [query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, {
		seed: "search",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl",
					children: "Search the Leaf"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-6 block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Search"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Try Melrose, delivery, Yankee Stadium, CAURD…",
						className: "min-h-12 w-full border-b-2 border-ink bg-transparent text-lg outline-none",
						autoFocus: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-8",
					children: [
						results.articles.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, {
							article: a,
							layout: "row"
						}, a.slug)),
						results.reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/reviews/$slug",
							params: { slug: r.slug },
							className: "block border-b border-rule py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] tracking-[0.16em] text-copper uppercase",
								children: "Review"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl",
								children: r.name
							})]
						}, r.slug)),
						results.ratings.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/ratings/$slug",
							params: { slug: p.slug },
							className: "block border-b border-rule py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] tracking-[0.16em] text-copper uppercase",
								children: "Rating"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl",
								children: p.name
							})]
						}, p.slug))
					]
				})
			]
		})
	});
}
//#endregion
export { SearchPage as component };
