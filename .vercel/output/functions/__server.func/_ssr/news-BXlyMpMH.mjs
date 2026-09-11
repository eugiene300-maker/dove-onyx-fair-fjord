import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteShell } from "./site-shell-DEyZQk9c.mjs";
import { f as latestArticles } from "./router-B-dYI7Tg.mjs";
import { t as ArticleCard } from "./article-card-ylZzYdpL.mjs";
import { t as SponsorRail } from "./sponsor-rail-YOt07okI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news-BXlyMpMH.js
var import_jsx_runtime = require_jsx_runtime();
function NewsPage() {
	const all = latestArticles();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		seed: "news",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-rule",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-8 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "The paper"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "lead-hed mt-2",
						children: "Bronx cannabis news"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-ink-soft",
						children: "Reported from Mott Haven to City Island. We cover licensed shops, the shops that should not be open, and everything cannabis-adjacent in the borough. Click any headline to read the full story."
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-8",
				children: all.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, {
					article: a,
					layout: "row"
				}, a.slug))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorRail, { seed: "news" })
			})]
		})]
	});
}
//#endregion
export { NewsPage as component };
