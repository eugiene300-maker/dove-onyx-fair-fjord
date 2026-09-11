import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SponsorLink, t as SiteShell } from "./site-shell-DEyZQk9c.mjs";
import { t as reviews } from "./reviews-BzbC4_tS.mjs";
import { t as SponsorRail } from "./sponsor-rail-YOt07okI.mjs";
import { t as ScoreBadge } from "./score-bar-CvQzQ3HB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reviews.index-atYUPpNA.js
var import_jsx_runtime = require_jsx_runtime();
function ReviewsPage() {
	const sorted = [...reviews].sort((a, b) => Number(b.featured) - Number(a.featured) || b.score - a.score);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		seed: "reviews",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-ink bg-paper-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold tracking-[0.22em] text-copper uppercase",
						children: "The critic"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl sm:text-5xl",
						children: "Licensed dispensary reviews"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 max-w-2xl text-ink-soft",
						children: [
							"Anthony Ruiz shops the store, ID in hand, then scores product, staff, value, vibe, and equity. We do not review unlicensed smoke shops, and we do not send you to another licensee's checkout. Our presenting sponsor is a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, {
								seed: "reviews-h",
								children: "dispensary in the Bronx"
							}),
							" — the review still has to earn its number."
						]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:col-span-8",
				children: sorted.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/reviews/$slug",
					params: { slug: r.slug },
					className: "group border border-rule bg-paper hover:border-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: r.image,
						alt: "",
						className: "aspect-[16/9] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl leading-tight group-hover:text-forest",
								children: r.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted",
								children: [r.neighborhood, r.featured ? " · Presenting sponsor" : ""]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBadge, { score: r.score })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-ink-soft",
							children: r.excerpt
						})]
					})]
				}, r.slug))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorRail, { seed: "reviews" })
			})]
		})]
	});
}
//#endregion
export { ReviewsPage as component };
