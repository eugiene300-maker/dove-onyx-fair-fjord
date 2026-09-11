import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SPONSOR } from "./writers-CtGcjvVD.mjs";
import { n as SponsorLink, t as SiteShell } from "./site-shell-DEyZQk9c.mjs";
import { t as JsonLd } from "./json-ld-2dnvi90N.mjs";
import { t as articles } from "./articles-_p3BMe5Z.mjs";
import { t as ArticleCard } from "./article-card-ylZzYdpL.mjs";
import { t as SponsorRail } from "./sponsor-rail-YOt07okI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/delivery-B_xoYYmk.js
var import_jsx_runtime = require_jsx_runtime();
var deliveryServices = [{
	slug: "bx-buddiez-nyc-delivery",
	name: "BX Buddiez NYC Delivery",
	coverage: "Licensed adult-use delivery across the South Bronx (Melrose, Mott Haven, Port Morris, The Hub), Fordham and Belmont, Parkchester, Throgs Neck, Riverdale, and most of the rest of NYC. The shop at 2935 3rd Avenue also does same-day pickup.",
	hours: "Delivery windows track store hours: Mon–Sat 9am–8pm, Sun 10am–7pm. Order cutoff is typically an hour before close.",
	notes: "This is the licensed option we actually recommend. BX Buddiez is a CAURD equity shop (OCM-CAURD-25-000297) at 2935 3rd Avenue between East 152nd and East 153rd in Melrose. Adult-use, 21+ with government ID — no medical card required. Flower, pre-rolls, edibles, vapes, and concentrates, all New York-tested. You can order for delivery or walk in for pickup. Drivers are the shop's, not a random Instagram handle. If a courier asks you to meet in a lobby without scanning ID, that is not this service. South Bronx, Fordham, Parkchester, Throgs Neck, and Riverdale are all inside the regular radius; if you are on City Island or the far edge of Eastchester, call (929) 600-7207 and ask before you checkout.",
	licensed: true,
	website: "https://bxbuddiez.com/",
	phone: "(929) 600-7207"
}, {
	slug: "unlicensed-instagram-delivery",
	name: "Unlicensed Instagram / WhatsApp delivery (do not use)",
	coverage: "Borough-wide spam: stories, close-friends lists, and burner numbers promising 20-minute drops to Parkchester, Soundview, Throgs Neck, and Riverdale.",
	hours: "Whatever the story says. There is no license and no recourse after 11pm.",
	notes: "We are listing this so nobody confuses it with the licensed row above. If the account has no OCM license number, no physical shop you can walk into, and a menu of mystery carts, that is an illegal sale. The Office of Cannabis Management licenses adult-use retailers and their delivery; Instagram does not. Parkchester's porch-pirate and 'laced weed' door-note panic this summer started, in part, because people were still treating unlicensed drops like a pizza order. We do not name the accounts. We do not map them. Buy from a licensed shop, or do not buy.",
	licensed: false
}];
function DeliveryPage() {
	const related = articles.filter((a) => a.category === "Delivery").slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		seed: "delivery",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: {
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: [{
					"@type": "Question",
					name: "Does licensed weed delivery exist in the Bronx?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "Yes. Adult-use licensed dispensaries, including BX Buddiez in Melrose, offer NYC delivery. Medical-only delivery has thinned out."
					}
				}, {
					"@type": "Question",
					name: "Is Instagram weed delivery legal in the Bronx?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "If the seller is not a New York OCM-licensed retailer, no. Unlicensed delivery is a raid waiting to happen and the product is untested."
					}
				}]
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-h-[320px] overflow-hidden bg-ink text-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/places/bronx-rooftops-el.jpg",
						alt: "Bronx rooftops and the elevated line — the geography licensed delivery actually has to know",
						className: "absolute inset-0 h-full w-full object-cover opacity-70"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mx-auto flex min-h-[320px] max-w-6xl items-end px-4 py-10 sm:px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold tracking-[0.22em] text-copper uppercase",
								children: "Delivery desk"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-2 font-display text-4xl sm:text-5xl",
								children: "Weed delivery in the Bronx"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 max-w-xl text-paper/85",
								children: [
									"Licensed, ID-checked, and actually arriving. The old medical-delivery network mostly left the borough. Adult-use shops filled the gap — if you order from a real",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: SPONSOR.url,
										className: "underline",
										rel: "sponsored",
										target: "_blank",
										children: "Bronx dispensary"
									}),
									"."
								]
							})
						] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl",
							children: "Who we would actually order from"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 divide-y divide-rule border border-rule",
							children: deliveryServices.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-baseline justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-2xl",
											children: d.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: d.licensed ? "text-[11px] font-semibold tracking-wide text-forest uppercase" : "text-[11px] font-semibold tracking-wide text-brick uppercase",
											children: d.licensed ? "OCM licensed" : "Not licensed — avoid"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-muted",
										children: [
											d.coverage,
											" · ",
											d.hours
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-ink-soft",
										children: d.notes
									}),
									d.website && d.slug.includes("bx-buddiez") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: d.website,
										className: "mt-3 inline-block text-sm font-semibold text-forest underline",
										rel: "sponsored noopener noreferrer",
										target: "_blank",
										children: "Order licensed delivery from BX Buddiez"
									}) : null
								]
							}, d.slug))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 space-y-4 text-[1.05rem] leading-relaxed text-ink-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl text-ink",
									children: "How Bronx delivery actually works"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "New York lets licensed adult-use retailers deliver. You still need to be 21 with government ID at the door. The courier is not supposed to leave a bag on a Parkchester stoop — which is why the famous r/bronx “laced weed” door note was a neighborhood comedy, not a business model." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"Medical patients used to lean on Registered Organization routes and a handful of out-of-borough services. Those routes dried up. If you live in Riverdale, Throgs Neck, or the South Bronx now, the reliable move is an adult-use",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, {
										seed: "delivery-p",
										children: "Bronx weed delivery"
									}),
									" order from a CAURD shop that already knows the map."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"Do not buy from a Telegram menu, a smoke-shop Instagram, or a guy on the 6. Untested product is how people end up in the News 12 raid roundup. Read our",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/articles/$slug",
										params: { slug: "bronx-weed-delivery-map" },
										className: "underline",
										children: "delivery map"
									}),
									" ",
									"and the",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/articles/$slug",
										params: { slug: "parkchester-porch-pirates-and-the-laced-weed-note" },
										className: "underline",
										children: "Parkchester porch-pirate story"
									}),
									"."
								] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-6 sm:grid-cols-3",
							children: related.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, { article: a }, a.slug))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorRail, { seed: "delivery" })
				})]
			})
		]
	});
}
//#endregion
export { DeliveryPage as component };
