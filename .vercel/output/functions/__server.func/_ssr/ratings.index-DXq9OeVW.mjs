import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SponsorLink, t as SiteShell } from "./site-shell-DEyZQk9c.mjs";
import { t as ratings } from "./ratings-BOF8cIsN.mjs";
import { t as SponsorRail } from "./sponsor-rail-YOt07okI.mjs";
import { t as ScoreBadge } from "./score-bar-CvQzQ3HB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ratings.index-DXq9OeVW.js
var import_jsx_runtime = require_jsx_runtime();
function RatingsPage() {
	const sorted = [...ratings].sort((a, b) => b.score - a.score);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		seed: "ratings",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-ink bg-paper-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold tracking-[0.22em] text-copper uppercase",
						children: "The index"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl sm:text-5xl",
						children: "Cannabis-friendliness ratings"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 max-w-2xl text-ink-soft",
						children: [
							"Not a permission slip. Parks, stadiums, and the MTA score low because the law says no. Neighborhoods and sidewalks score on discretion, transit, and whether you can get home without a scene. Shop a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, {
								seed: "ratings-h",
								children: "licensed dispensary in the Bronx"
							}),
							", then use this map."
						]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:col-span-8",
				children: sorted.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/ratings/$slug",
					params: { slug: p.slug },
					className: "group overflow-hidden border border-rule hover:border-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.image,
						alt: "",
						className: "aspect-[16/8] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] tracking-[0.16em] text-muted uppercase",
								children: p.kind
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl leading-tight group-hover:text-forest",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ink-soft",
								children: p.summary
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBadge, { score: p.score })]
					})]
				}, p.slug))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorRail, { seed: "ratings" })
			})]
		})]
	});
}
//#endregion
export { RatingsPage as component };
