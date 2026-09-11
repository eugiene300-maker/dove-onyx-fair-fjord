import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as writers, i as SPONSOR, r as SITE } from "./writers-CtGcjvVD.mjs";
import { n as SponsorLink, t as SiteShell } from "./site-shell-DEyZQk9c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DvJF7nf7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, {
		seed: "contact",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold tracking-[0.22em] text-copper uppercase",
						children: "Newsroom"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl",
						children: "Contact & tips"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-ink-soft",
						children: "Unlicensed shop sealed on your block? New CAURD ribbon-cutting? Correction on a score? We read everything. We do not take product for coverage."
					}),
					sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 border border-forest bg-paper-2 p-4 text-forest",
						children: [
							"Got it. If we can use this, a reporter will follow up. For shop questions, go straight to the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, {
								seed: "contact-sent",
								children: "3rd Avenue dispensary"
							}),
							"."
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "mt-8 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								name: "name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								name: "email",
								type: "email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Neighborhood",
								name: "nabe"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm font-medium",
								children: ["Tip or letter", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "body",
									required: true,
									rows: 6,
									className: "mt-1 w-full border border-ink/20 bg-paper px-3 py-2 text-sm outline-none focus:border-forest"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "min-h-11 bg-ink px-5 text-sm font-semibold tracking-wide text-paper uppercase hover:bg-forest",
								children: "Send to the desk"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-6 text-sm text-ink-soft lg:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-rule p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-ink",
							children: "Direct lines"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3",
							children: [
								"Newsroom · ",
								SITE.email,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Tips · ",
								SITE.tips,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								SITE.address
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3",
							children: [
								"Presenting sponsor (not the newsroom): ",
								SPONSOR.phone,
								" ·",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: SPONSOR.url,
									className: "underline",
									rel: "sponsored",
									target: "_blank",
									children: "bxbuddiez.com"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-rule p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-ink",
						children: "Writers"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1",
						children: writers.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							w.name,
							", ",
							w.role,
							" — ",
							w.email
						] }, w.slug))
					})]
				})]
			})]
		})
	});
}
function Field({ label, name, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm font-medium",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required: true,
			className: "mt-1 min-h-11 w-full border border-ink/20 bg-paper px-3 text-sm outline-none focus:border-forest"
		})]
	});
}
//#endregion
export { ContactPage as component };
