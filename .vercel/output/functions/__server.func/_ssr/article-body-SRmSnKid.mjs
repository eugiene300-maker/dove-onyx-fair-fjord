import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SponsorLink } from "./site-shell-DEyZQk9c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/article-body-SRmSnKid.js
var import_jsx_runtime = require_jsx_runtime();
function ArticleBody({ blocks, seed, dropCap = false }) {
	let pIndex = 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "article-prose text-lg leading-[1.7] text-ink",
		children: blocks.map((block, i) => {
			if (block.type === "p") {
				const isFirst = pIndex === 0;
				pIndex += 1;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: dropCap && isFirst ? "article-drop" : void 0,
					children: block.text
				}, i);
			}
			if (block.type === "h2") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 mb-3 font-display text-2xl leading-snug font-bold text-ink",
				children: block.text
			}, i);
			if (block.type === "h3") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 mb-2 font-display text-xl font-bold text-ink",
				children: block.text
			}, i);
			if (block.type === "quote") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "my-6 border-l-4 border-forest py-1 pl-4 font-display text-xl leading-snug text-ink",
				children: [block.text, block.cite ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("cite", {
					className: "mt-2 block font-sans text-sm text-muted not-italic",
					children: ["— ", block.cite]
				}) : null]
			}, i);
			if (block.type === "list") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mb-5 list-disc space-y-2 pl-5",
				children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
			}, i);
			if (block.type === "callout") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "my-6 border border-rule bg-paper-2 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: block.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-base text-ink",
					children: block.text
				})]
			}, i);
			if (block.type === "image") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "my-8 -mx-2 sm:mx-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: block.src,
					alt: block.alt,
					className: "w-full border border-rule object-cover"
				}), block.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-2 text-sm text-muted",
					children: block.caption
				}) : null]
			}, i);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "my-5 border-l-4 border-forest pl-4",
				children: [
					"Presenting sponsor:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, {
						seed: seed + i,
						children: block.anchor
					}),
					" — licensed adult-use cannabis at 2935 3rd Avenue in Melrose."
				]
			}, i);
		})
	});
}
//#endregion
export { ArticleBody as t };
