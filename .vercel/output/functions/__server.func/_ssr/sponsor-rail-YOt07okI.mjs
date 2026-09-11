import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SPONSOR } from "./writers-CtGcjvVD.mjs";
import { n as SponsorLink } from "./site-shell-DEyZQk9c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sponsor-rail-YOt07okI.js
var import_jsx_runtime = require_jsx_runtime();
function SponsorRail({ seed }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "border border-rule bg-paper-2 p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Presenting sponsor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-2xl leading-tight font-bold text-ink",
				children: SPONSOR.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-ink-soft",
				children: SPONSOR.legalName
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-ink-soft",
				children: SPONSOR.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-xs leading-relaxed text-muted",
				children: [
					SPONSOR.address,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					SPONSOR.phone,
					" · ",
					SPONSOR.hours,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"License ",
					SPONSOR.license
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: SPONSOR.url,
					target: "_blank",
					rel: "sponsored noopener noreferrer",
					className: "inline-flex min-h-11 items-center justify-center bg-forest px-4 text-sm font-semibold text-paper hover:bg-forest-2",
					children: [
						"Shop the ",
						SPONSOR.neighborhood.split("/")[0].trim(),
						" menu"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/bx-buddiez",
					className: "inline-flex min-h-11 items-center justify-center border border-rule px-4 text-sm font-semibold text-ink hover:border-ink",
					children: "Our sponsor page"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-xs leading-relaxed text-muted",
				children: [
					"Looking for a ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, { seed }),
					"? BX Buddiez is a licensed CAURD shop on 3rd Avenue — pickup or",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, {
						seed: seed + "-d",
						className: "text-forest",
						children: "Bronx weed delivery"
					}),
					"."
				]
			})
		]
	});
}
//#endregion
export { SponsorRail as t };
