import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SPONSOR, r as SITE } from "./writers-CtGcjvVD.mjs";
import { n as SponsorLink, t as SiteShell } from "./site-shell-DEyZQk9c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/editorial-DI2veQP1.js
var import_jsx_runtime = require_jsx_runtime();
function EditorialPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, {
		seed: "editorial",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold tracking-[0.22em] text-copper uppercase",
					children: "Standards"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl sm:text-5xl",
					children: "Editorial guidelines"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-ink-soft",
					children: "Updated September 2026. These rules apply to every story, review, and cannabis-friendliness rating we publish."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-8 text-[1.05rem] leading-relaxed text-ink-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-ink",
							children: "1. Who we are"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3",
							children: [
								"The Free Bronx Leaf is an independent news magazine covering adult-use cannabis and cannabis-adjacent life in the Bronx. We are not a retailer. We do not sell flower. We are not the Office of Cannabis Management. Our",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "underline",
									children: "about page"
								}),
								" ",
								"names the staff."
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-ink",
							children: "2. The sponsor wall"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, {
								seed: "ed-1",
								children: SPONSOR.legalName
							}), " is the presenting sponsor. Their logo and a link appear on every page. That is advertising. It is labeled “Presenting sponsor.” They do not assign stories, kill stories, or see reviews before publication. If a review of BX Buddiez runs, it is reported like any other shop — in-store visit, ID check, scored rubric."]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-ink",
							children: "3. Licensed vs. unlicensed"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3",
							children: [
								"We do not treat unlicensed smoke shops as equivalent businesses. We will report raids, sealing orders, and neighborhood impact. We will not publish “menus” or directions that help an illegal shop sell. When we say",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, {
									seed: "ed-2",
									children: "legal weed in the Bronx"
								}),
								", we mean an OCM license you can look up."
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-ink",
							children: "4. Reviews and ratings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3",
							children: "Dispensary reviews require an in-person visit by the critic. Cannabis-friendliness ratings for parks and venues are not invitations to break the Smoke-Free Air Act. Parks, beaches, playgrounds, the Zoo, NYBG, Wave Hill, and the MTA score low because smoking there is illegal. We print that in the legal note on every rating."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-ink",
							children: "5. Sources and social"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3",
							children: "Reddit, Facebook groups, and X are tips, not facts. When we round up neighborhood talk we say so. On-the-record names get asked. Anonymous quotes are for people who would lose housing or work."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-ink",
							children: "6. Corrections"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3",
							children: [
								"Email ",
								SITE.email,
								". We correct in the story, not buried in a footnote. License numbers, hours, and addresses are checked against public OCM data and the shop."
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-ink",
							children: "7. Harm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3",
							children: "Adults 21+ only. We do not give medical advice. If you are worried about your use, New York’s Hopeny line is 1-877-846-7369 or text HOPENY. Poison control: 1-800-222-1222."
						})] })
					]
				})
			]
		})
	});
}
//#endregion
export { EditorialPage as component };
