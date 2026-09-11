import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SponsorLink, t as SiteShell } from "./site-shell-DEyZQk9c.mjs";
import { i as Route$3 } from "./router-B-dYI7Tg.mjs";
import { t as ArticleBody } from "./article-body-SRmSnKid.mjs";
import { t as SponsorRail } from "./sponsor-rail-YOt07okI.mjs";
import { n as ScoreBar, t as ScoreBadge } from "./score-bar-CvQzQ3HB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ratings._slug-Bs1knzOa.js
var import_jsx_runtime = require_jsx_runtime();
function RatingPage() {
	const { place } = Route$3.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		seed: place.slug,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 pt-10 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] font-semibold tracking-[0.22em] text-copper uppercase",
						children: [
							place.kind,
							" · ",
							place.neighborhood
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl sm:text-5xl",
							children: place.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBadge, { score: place.score })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-lg text-ink-soft",
						children: place.summary
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: place.image,
				alt: place.imageAlt,
				className: "mx-auto mt-8 w-full max-w-5xl px-4 sm:px-6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-8 space-y-3 border border-rule p-4",
							children: place.criteria.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-1 flex justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: c.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums text-muted",
										children: [c.score, "/10"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, { score: c.score }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: c.note
								})
							] }, c.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleBody, {
							blocks: place.body,
							seed: place.slug
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "mt-8 border border-brick/30 bg-paper-2 p-4 text-sm text-ink-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold tracking-[0.16em] text-brick uppercase",
								children: "Legal note"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2",
								children: place.legalNote
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-sm",
							children: [
								"Stock up first at a",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, {
									seed: place.slug,
									children: "weed dispensary Bronx"
								}),
								" — then stay on the right side of the Smoke-Free Air Act."
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorRail, { seed: place.slug })
				})]
			})
		]
	});
}
//#endregion
export { RatingPage as component };
