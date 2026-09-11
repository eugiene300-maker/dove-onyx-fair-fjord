import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as getWriter } from "./writers-CtGcjvVD.mjs";
import { a as formatStoryDateShort, o as relativeTime, r as cn } from "./site-shell-DEyZQk9c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/article-card-ylZzYdpL.js
var import_jsx_runtime = require_jsx_runtime();
function ArticleCard({ article, layout = "grid" }) {
	const writer = getWriter(article.author);
	const date = formatStoryDateShort(article.published);
	if (layout === "hero") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "kicker",
			children: [article.kicker ?? article.category, article.neighborhood ? ` · ${article.neighborhood}` : ""]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "lead-hed mt-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/articles/$slug",
				params: { slug: article.slug },
				className: "hover:text-forest",
				children: article.title
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-base leading-relaxed text-ink-soft",
			children: article.dek
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-sm text-muted",
			children: [
				writer?.name,
				" · ",
				date,
				" · ",
				article.readMinutes,
				" min read"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/articles/$slug",
			params: { slug: article.slug },
			className: "mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-forest hover:underline",
			children: "Read the full story"
		})
	] });
	if (layout === "row") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/articles/$slug",
		params: { slug: article.slug },
		className: "group grid grid-cols-[110px_1fr] gap-4 border-b border-rule py-4 sm:grid-cols-[160px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: article.hero,
			alt: "",
			className: "story-img aspect-[4/3] h-full w-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: article.category
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "story-hed mt-1 text-ink group-hover:text-forest",
				children: article.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 hidden text-sm leading-relaxed text-ink-soft sm:block",
				children: article.dek
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs text-muted",
				children: [
					writer?.name,
					" · ",
					date
				]
			})
		] })]
	});
	if (layout === "photo") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/articles/$slug",
		params: { slug: article.slug },
		className: "group block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: article.hero,
				alt: article.heroAlt,
				className: "story-img aspect-[16/10] w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker mt-3",
				children: article.category
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "story-hed mt-1 group-hover:text-forest",
				children: article.title
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/articles/$slug",
		params: { slug: article.slug },
		className: cn("group flex flex-col"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: article.hero,
				alt: "",
				className: "story-img aspect-[16/10] w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "kicker mt-3",
				children: [article.category, article.neighborhood ? ` · ${article.neighborhood}` : ""]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "story-hed mt-1 text-ink group-hover:text-forest",
				children: article.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft",
				children: article.dek
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs text-muted",
				children: [
					writer?.name,
					" · ",
					relativeTime(article.published)
				]
			})
		]
	});
}
//#endregion
export { ArticleCard as t };
