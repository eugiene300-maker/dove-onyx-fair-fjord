import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as relativeTime } from "./site-shell-DEyZQk9c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/latest-headlines-BWdNHdqp.js
var import_jsx_runtime = require_jsx_runtime();
function LatestHeadlines({ articles }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "border-b-2 border-ink pb-2 font-sans text-sm font-bold tracking-[0.14em] text-ink uppercase",
		children: "Latest Headlines"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: articles.map((article, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex gap-3 border-b border-rule py-3.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display w-6 shrink-0 text-xl leading-none font-bold text-muted",
			children: i + 1
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/articles/$slug",
			params: { slug: article.slug },
			className: "block min-w-0 hover:text-forest",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-[1.05rem] leading-snug font-semibold",
				children: article.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: relativeTime(article.published)
			})]
		})]
	}, article.slug)) })] });
}
function RelatedList({ articles }) {
	if (!articles.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 border-t border-rule pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-semibold tracking-wide text-ink uppercase",
			children: "Related"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-2 space-y-2",
			children: articles.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-ink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/articles/$slug",
					params: { slug: article.slug },
					className: "leading-snug hover:text-forest hover:underline",
					children: [article.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-muted",
						children: relativeTime(article.published)
					})]
				})]
			}, article.slug))
		})]
	});
}
//#endregion
export { RelatedList as n, LatestHeadlines as t };
