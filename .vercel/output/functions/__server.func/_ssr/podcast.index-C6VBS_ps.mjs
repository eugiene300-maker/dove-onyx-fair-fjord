import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as getWriter, r as SITE } from "./writers-CtGcjvVD.mjs";
import { i as formatStoryDate, t as SiteShell } from "./site-shell-DEyZQk9c.mjs";
import { t as JsonLd } from "./json-ld-2dnvi90N.mjs";
import { c as podcast, s as episodes } from "./router-B-dYI7Tg.mjs";
import { t as SponsorRail } from "./sponsor-rail-YOt07okI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/podcast.index-C6VBS_ps.js
var import_jsx_runtime = require_jsx_runtime();
function PodcastIndex() {
	const sorted = [...episodes].sort((a, b) => b.number - a.number);
	const series = {
		"@context": "https://schema.org",
		"@type": "PodcastSeries",
		name: podcast.name,
		description: podcast.description,
		image: podcast.cover,
		url: "/podcast",
		webFeed: "/podcast",
		author: {
			"@type": "NewsMediaOrganization",
			name: SITE.name
		},
		sponsor: {
			"@type": "Organization",
			name: "BX Buddiez",
			url: "https://bxbuddiez.com/"
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		seed: "podcast",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: series }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-ink bg-paper-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: podcast.cover,
							alt: "The Free Bronx Leaf Podcast cover: masthead over a 6-train photograph",
							className: "story-img aspect-square w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "The newsroom, in your ears"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "lead-hed mt-2",
								children: podcast.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft",
								children: [podcast.description, " Hosted by the same six Bronx writers who put their names on the stories. New episodes drop with the paper."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-sm text-muted",
								children: [episodes.length, " episodes · Free · 21+"]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: sorted.map((ep) => {
						const host = getWriter(ep.hosts[0]);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-b border-rule py-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/podcast/$slug",
								params: { slug: ep.slug },
								className: "group grid gap-4 sm:grid-cols-[160px_1fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: ep.image,
									alt: "",
									className: "story-img aspect-[4/3] w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "kicker",
										children: [
											"Episode ",
											String(ep.number).padStart(2, "0"),
											" · ",
											ep.duration
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "story-hed mt-1 group-hover:text-forest",
										children: ep.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-ink-soft",
										children: ep.dek
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-xs text-muted",
										children: [
											host?.name,
											" · ",
											formatStoryDate(ep.published)
										]
									})
								] })]
							})
						}, ep.slug);
					}) })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorRail, { seed: "podcast" })
				})]
			})
		]
	});
}
//#endregion
export { PodcastIndex as component };
