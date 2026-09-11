import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as getWriter, i as SPONSOR, r as SITE } from "./writers-CtGcjvVD.mjs";
import { n as SponsorLink, t as SiteShell } from "./site-shell-DEyZQk9c.mjs";
import { t as JsonLd } from "./json-ld-2dnvi90N.mjs";
import { r as Route$1 } from "./router-B-dYI7Tg.mjs";
import { t as ArticleBody } from "./article-body-SRmSnKid.mjs";
import { t as SponsorRail } from "./sponsor-rail-YOt07okI.mjs";
import { n as ScoreBar, t as ScoreBadge } from "./score-bar-CvQzQ3HB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reviews._slug-DcMGOfhq.js
var import_jsx_runtime = require_jsx_runtime();
function ReviewPage() {
	const { review } = Route$1.useLoaderData();
	const writer = getWriter(review.author);
	const schema = {
		"@context": "https://schema.org",
		"@type": "Review",
		itemReviewed: {
			"@type": "Store",
			name: review.name,
			address: review.address,
			telephone: review.phone,
			url: review.slug === "bx-buddiez" ? SPONSOR.url : void 0
		},
		reviewRating: {
			"@type": "Rating",
			ratingValue: review.score,
			bestRating: 10
		},
		author: {
			"@type": "Person",
			name: writer?.name
		},
		publisher: {
			"@type": "NewsMediaOrganization",
			name: SITE.name
		},
		sponsor: {
			"@type": "Organization",
			name: SPONSOR.legalName,
			url: SPONSOR.url
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		seed: review.slug,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: schema }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 pt-10 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] font-semibold tracking-[0.22em] text-copper uppercase",
						children: ["Dispensary review · ", review.neighborhood]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl sm:text-5xl",
							children: review.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBadge, { score: review.score })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-ink-soft",
						children: review.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							review.address,
							review.phone ? ` · ${review.phone}` : "",
							" · ",
							review.hours
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: review.image,
				alt: review.imageAlt,
				className: "mx-auto mt-8 max-w-5xl px-4 sm:px-6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mb-8 grid gap-3 sm:grid-cols-2",
							children: Object.entries(review.scores).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-rule p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[11px] tracking-[0.14em] text-muted uppercase",
									children: k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, { score: v })
								})]
							}, k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleBody, {
							blocks: review.body,
							seed: review.slug,
							dropCap: true
						}),
						review.website && review.slug === "bx-buddiez" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 text-sm",
							children: [
								"Visit",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: review.website,
									className: "text-forest underline",
									rel: "sponsored noopener noreferrer",
									target: "_blank",
									children: review.name
								}),
								" ",
								"— our presenting ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, {
									seed: review.slug,
									children: "Bronx dispensary"
								}),
								"."
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 text-sm",
							children: [
								"Looking for a licensed",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, {
									seed: review.slug + "-cta",
									children: "dispensary in the Bronx"
								}),
								"? Shop BX Buddiez at 2935 3rd Avenue in Melrose."
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorRail, { seed: review.slug })
				})]
			})
		]
	});
}
//#endregion
export { ReviewPage as component };
