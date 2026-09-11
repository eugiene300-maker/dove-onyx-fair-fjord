import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as writers, r as SITE } from "./writers-CtGcjvVD.mjs";
import { n as SponsorLink, t as SiteShell } from "./site-shell-DEyZQk9c.mjs";
import { t as JsonLd } from "./json-ld-2dnvi90N.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BE_14qNY.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const people = writers.map((w) => ({
		"@type": "Person",
		name: w.name,
		jobTitle: w.role,
		address: w.neighborhood + ", Bronx, NY"
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		seed: "about",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: {
				"@context": "https://schema.org",
				"@type": "AboutPage",
				name: `About ${SITE.name}`,
				mainEntity: {
					"@type": "NewsMediaOrganization",
					name: SITE.name,
					employee: people
				}
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold tracking-[0.22em] text-copper uppercase",
						children: "The newsroom"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl sm:text-5xl",
						children: "A free paper for a borough that already knew the plant"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The Free Bronx Leaf launched in 2026 from Melrose. We are not a brand blog, not a Manhattan cannabis newsletter with a Bronx paragraph, and not a shop masquerading as journalism. We are a small local magazine that covers licensed cannabis the way The Riverdale Press covers zoning and Bronx Times covers the precinct: named streets, named people, named licenses." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"“Free” is in the name on purpose. Paywalls do not belong on information about a market that was illegal on these same blocks for fifty years. The lights stay on because",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, {
									seed: "about-1",
									children: "BX Buddiez"
								}),
								" is our presenting sponsor — a",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, {
									seed: "about-2",
									children: "licensed dispensary in the Bronx"
								}),
								" ",
								"on 3rd Avenue. They do not assign stories. They do not see copy before it runs. That wall is written down in our",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/editorial",
									className: "underline",
									children: "editorial guidelines"
								}),
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We rate parks and restaurants for cannabis friendliness because that is how people actually live. We also print the law: you cannot smoke in NYC parks, on the MTA, or inside Yankee Stadium. A high score is not a hall pass." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Tips, corrections, and shop owners who want to be reviewed:",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${SITE.tips}`,
									className: "underline",
									children: SITE.tips
								}),
								". Newsroom: ",
								SITE.email,
								"."
							] })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-ink bg-paper-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl",
							children: "The staff"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl text-sm text-ink-soft",
							children: "Every byline links here. If a story is wrong, email the writer."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
							children: writers.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/writers/$slug",
								params: { slug: w.slug },
								className: "group bg-paper",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: w.photo,
									alt: w.name,
									className: "aspect-[3/4] w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-2xl group-hover:text-forest",
											children: w.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs tracking-wide text-copper uppercase",
											children: [
												w.role,
												" · ",
												w.neighborhood
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 line-clamp-4 text-sm text-ink-soft",
											children: w.bio
										})
									]
								})]
							}, w.slug))
						})
					]
				})
			})
		]
	});
}
//#endregion
export { AboutPage as component };
