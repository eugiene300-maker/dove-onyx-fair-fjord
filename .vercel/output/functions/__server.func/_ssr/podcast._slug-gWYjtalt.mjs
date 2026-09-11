import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as getWriter } from "./writers-CtGcjvVD.mjs";
import { i as formatStoryDate, t as SiteShell } from "./site-shell-DEyZQk9c.mjs";
import { t as JsonLd } from "./json-ld-2dnvi90N.mjs";
import { a as Route$5, c as podcast, f as latestArticles, u as getArticle } from "./router-B-dYI7Tg.mjs";
import { t as ArticleBody } from "./article-body-SRmSnKid.mjs";
import { t as SponsorRail } from "./sponsor-rail-YOt07okI.mjs";
import { t as LatestHeadlines } from "./latest-headlines-BWdNHdqp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/podcast._slug-gWYjtalt.js
var import_jsx_runtime = require_jsx_runtime();
function EpisodePage() {
	const { episode } = Route$5.useLoaderData();
	const host = getWriter(episode.hosts[0]);
	const related = episode.relatedArticle ? getArticle(episode.relatedArticle) : void 0;
	const more = latestArticles().slice(0, 6);
	const data = {
		"@context": "https://schema.org",
		"@type": "PodcastEpisode",
		name: episode.title,
		description: episode.dek,
		image: episode.image,
		datePublished: episode.published,
		timeRequired: episode.duration,
		episodeNumber: episode.number,
		partOfSeries: {
			"@type": "PodcastSeries",
			name: podcast.name
		},
		author: {
			"@type": "Person",
			name: host?.name
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		seed: episode.slug,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mx-auto max-w-3xl px-4 pt-8 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-forest",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-2",
								children: "/"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/podcast",
								className: "hover:text-forest",
								children: "Podcast"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "kicker mt-4",
						children: [
							"Episode ",
							String(episode.number).padStart(2, "0"),
							" · ",
							episode.duration
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "lead-hed mt-3",
						children: episode.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xl leading-relaxed text-ink-soft",
						children: episode.dek
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 border-y border-rule py-4 text-sm",
						children: [
							"Hosted by",
							" ",
							episode.hosts.map((slug, i) => {
								const w = getWriter(slug);
								return w ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [i > 0 ? " and " : "", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/writers/$slug",
									params: { slug: w.slug },
									className: "font-semibold text-forest hover:underline",
									children: w.name
								})] }, slug) : null;
							}),
							" · ",
							formatStoryDate(episode.published)
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "mx-auto mt-8 max-w-5xl px-4 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: episode.image,
					alt: "",
					className: "story-img w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleBody, {
						blocks: episode.body,
						seed: episode.slug,
						dropCap: true
					}), related ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 border-t border-rule pt-6 text-sm",
						children: [
							"Read the print version:",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/articles/$slug",
								params: { slug: related.slug },
								className: "font-semibold text-forest underline",
								children: related.title
							})
						]
					}) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LatestHeadlines, { articles: more }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorRail, { seed: episode.slug })
					})]
				})]
			})
		] })]
	});
}
//#endregion
export { EpisodePage as component };
