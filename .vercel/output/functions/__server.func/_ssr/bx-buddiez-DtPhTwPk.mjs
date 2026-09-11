import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SPONSOR } from "./writers-CtGcjvVD.mjs";
import { _ as Clock, a as ShieldCheck, s as Phone, u as MapPin } from "../_libs/lucide-react.mjs";
import { n as SponsorLink, t as SiteShell } from "./site-shell-DEyZQk9c.mjs";
import { t as JsonLd } from "./json-ld-2dnvi90N.mjs";
import { d as getReview } from "./router-B-dYI7Tg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bx-buddiez-DtPhTwPk.js
var import_jsx_runtime = require_jsx_runtime();
function SponsorPage() {
	const review = getReview("bx-buddiez");
	const local = {
		"@context": "https://schema.org",
		"@type": "Store",
		name: SPONSOR.legalName,
		url: SPONSOR.url,
		telephone: SPONSOR.phone,
		image: "/images/buddiez/counter.jpg",
		address: {
			"@type": "PostalAddress",
			streetAddress: "2935 3rd Avenue",
			addressLocality: "Bronx",
			addressRegion: "NY",
			postalCode: "10455",
			addressCountry: "US"
		},
		openingHours: ["Mo-Sa 09:00-20:00", "Su 10:00-19:00"],
		areaServed: "Bronx, NY",
		license: SPONSOR.license
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		seed: "bx-buddiez",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: local }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-h-[380px] overflow-hidden bg-ink text-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/buddiez/counter.jpg",
						alt: "The BX Buddiez checkout in Melrose, a licensed South Bronx sales floor",
						className: "absolute inset-0 h-full w-full object-cover opacity-70"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mx-auto flex min-h-[380px] max-w-6xl items-end px-4 py-10 sm:px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold tracking-[0.22em] text-copper uppercase",
								children: "Presenting sponsor"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-2 font-display text-5xl",
								children: "BX Buddiez"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-lg text-paper/90",
								children: "A licensed dispensary in the Bronx — Melrose, 3rd Avenue, CAURD equity license, pickup and delivery."
							})
						] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-3 px-4 py-6 sm:grid-cols-3 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/buddiez/counter.jpg",
						alt: "BX Buddiez checkout counter with a budtender and customer in Melrose",
						className: "aspect-[4/5] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "mt-2 text-xs text-muted",
						children: "The desk at 2935 3rd Avenue — ID, a question, a labeled jar. Photo from the shop floor."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/buddiez/neon-wall.jpg",
						alt: "Neon brand signs and Kraft boxes of RAW papers over the BX Buddiez checkout",
						className: "aspect-[4/5] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "mt-2 text-xs text-muted",
						children: "Honey King, To The Moon, RAW papers. The wall before the budtender talks."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/buddiez/hours-sign.jpg",
						alt: "BX Buddiez store hours: Sunday 10 to 7, Monday through Saturday 9 to 8",
						className: "aspect-[4/5] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "mt-2 text-xs text-muted",
						children: "Hours as posted: Mon–Sat 9am–8pm, Sunday 10am–7pm. A 9 a.m. open is a political choice."
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 text-[1.05rem] leading-relaxed text-ink-soft lg:col-span-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"The Free Bronx Leaf is an independent magazine. We still need the lights on.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SPONSOR.url,
								className: "font-semibold text-forest underline",
								rel: "sponsored",
								target: "_blank",
								children: "Buddiez Bronx Cannabis Dispensary"
							}),
							" ",
							"is our presenting sponsor because they are a real",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, {
								seed: "sponsor-1",
								children: "South Bronx dispensary"
							}),
							" — licensed, equity-coded, and on the same 3rd Avenue corridor our editor walks."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"BX Buddiez sits at 2935 3rd Avenue between East 152nd and East 153rd Streets, in Melrose. That is a short hop from The Hub, a 6-train ride from Pelham Bay, and close enough to Yankee Stadium that we get asked whether they are the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, {
								seed: "sponsor-2",
								children: "cannabis dispensary near Yankee Stadium"
							}),
							". (They are the South Bronx answer: a 4-train hop west of the ballpark, then smoke on the sidewalk, never in the building.)"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl text-ink",
							children: "What they sell"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Flower, pre-rolls, edibles, vapes, concentrates, tinctures, topicals, accessories — sourced from licensed New York brands. Adult-use: 21+ with government ID. No medical card required. Daily state limits still apply (three ounces of flower, 24 grams of concentrates)." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl text-ink",
							children: "Why the license matters"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"OCM-CAURD-25-000297 is not a sticker. CAURD is New York’s Conditional Adult-Use Retail Dispensary program, written for people and families hit hardest by prohibition. In the South Bronx that is not a branding story. It is the point. If you want a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, {
								seed: "sponsor-3",
								children: "CAURD dispensary Bronx"
							}),
							" ",
							"operators actually staffed by the borough, start here."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"We still review them. Anthony Ruiz’s score lives on our",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/reviews/$slug",
								params: { slug: "bx-buddiez" },
								className: "underline",
								children: "dedicated review"
							}),
							review ? ` (${review.score}/10)` : "",
							". Sponsorship buys the masthead rail. It does not buy the number."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl text-ink",
							children: "Pickup and delivery"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Order ahead at",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SPONSOR.url,
								className: "underline",
								rel: "sponsored",
								target: "_blank",
								children: "bxbuddiez.com"
							}),
							" ",
							"for pickup, or get",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, {
								seed: "sponsor-4",
								children: "Bronx weed delivery"
							}),
							" across NYC. Hours: Monday–Saturday 9am–8pm, Sunday 10am–7pm. Phone",
							" ",
							SPONSOR.phone,
							"."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Looking for the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, {
								seed: "sponsor-5",
								children: "best dispensary in the Bronx"
							}),
							", a ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, {
								seed: "sponsor-6",
								children: "Melrose cannabis shop"
							}),
							", or a place to",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, {
								seed: "sponsor-7",
								children: "pickup weed in the South Bronx"
							}),
							"? That is the shop. Read the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/editorial",
								className: "underline",
								children: "editorial guidelines"
							}),
							" ",
							"if you want to know how we keep the wall between ads and reporting."
						] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "space-y-4 lg:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-ink bg-paper-2 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl",
								children: "Visit the shop"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-forest" }), SPONSOR.address]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 size-4 shrink-0 text-forest" }), SPONSOR.hours]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-4 shrink-0 text-forest" }), SPONSOR.phone]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 size-4 shrink-0 text-forest" }),
											"License ",
											SPONSOR.license
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SPONSOR.url,
								target: "_blank",
								rel: "sponsored noopener noreferrer",
								className: "mt-5 flex min-h-11 items-center justify-center bg-forest text-sm font-semibold tracking-wide text-paper uppercase hover:bg-forest-2",
								children: "Shop BX Buddiez"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/reviews/$slug",
								params: { slug: "bx-buddiez" },
								className: "mt-2 flex min-h-11 items-center justify-center border border-ink/20 text-sm font-semibold tracking-wide uppercase",
								children: "Read the review"
							})
						]
					})
				})]
			})
		]
	});
}
//#endregion
export { SponsorPage as component };
