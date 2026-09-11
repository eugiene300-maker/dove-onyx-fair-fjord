import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as getWriter, i as SPONSOR, r as SITE } from "./writers-CtGcjvVD.mjs";
import { i as formatStoryDate, n as SponsorLink, t as SiteShell } from "./site-shell-DEyZQk9c.mjs";
import { t as JsonLd } from "./json-ld-2dnvi90N.mjs";
import { t as articles } from "./articles-_p3BMe5Z.mjs";
import { f as latestArticles, o as Route$7 } from "./router-B-dYI7Tg.mjs";
import { t as ArticleBody } from "./article-body-SRmSnKid.mjs";
import { t as ArticleCard } from "./article-card-ylZzYdpL.mjs";
import { t as SponsorRail } from "./sponsor-rail-YOt07okI.mjs";
import { t as LatestHeadlines } from "./latest-headlines-BWdNHdqp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/articles._slug-A-Hww9Xf.js
var import_jsx_runtime = require_jsx_runtime();
function ArticlePage() {
	const { article } = Route$7.useLoaderData();
	const writer = getWriter(article.author);
	const date = formatStoryDate(article.published);
	const related = articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);
	const moreHeadlines = latestArticles().filter((a) => a.slug !== article.slug).slice(0, 6);
	const news = {
		"@context": "https://schema.org",
		"@type": "NewsArticle",
		headline: article.title,
		description: article.dek,
		image: article.hero,
		datePublished: article.published,
		author: {
			"@type": "Person",
			name: writer?.name,
			jobTitle: writer?.role,
			url: `/writers/${writer?.slug}`
		},
		publisher: {
			"@type": "NewsMediaOrganization",
			name: SITE.name
		},
		speakable: {
			"@type": "SpeakableSpecification",
			cssSelector: ["h1", ".article-drop"]
		},
		isAccessibleForFree: true,
		sponsor: {
			"@type": "Organization",
			name: SPONSOR.legalName,
			url: SPONSOR.url
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		seed: article.slug,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: news }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
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
									to: "/news",
									className: "hover:text-forest",
									children: "News"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-2",
									children: "/"
								}),
								article.category
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "kicker mt-4",
							children: [article.kicker ?? article.category, article.neighborhood ? ` · ${article.neighborhood}` : ""]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "lead-hed mt-3",
							children: article.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xl leading-relaxed text-ink-soft",
							children: article.dek
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center gap-3 border-y border-rule py-4",
							children: [writer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/writers/$slug",
								params: { slug: writer.slug },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: writer.photo,
									alt: "",
									className: "size-12 object-cover"
								})
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"By",
									" ",
									writer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/writers/$slug",
										params: { slug: writer.slug },
										className: "font-semibold text-forest underline-offset-2 hover:underline",
										children: writer.name
									}) : null
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-muted",
									children: [
										date,
										" · ",
										article.readMinutes,
										" min read ·",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/editorial",
											className: "underline underline-offset-2",
											children: "Editorial guidelines"
										})
									]
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "mx-auto mt-8 max-w-5xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: article.hero,
						alt: article.heroAlt,
						className: "story-img w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "mt-2 text-sm text-muted",
						children: article.heroAlt
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleBody, {
							blocks: article.body,
							seed: article.slug,
							dropCap: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-10 text-sm text-muted",
							children: [
								"This newsroom is free because",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, { seed: article.slug + "-end" }),
								" underwrites the work. Read our",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "underline",
									children: "about page"
								}),
								" ",
								"and",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/editorial",
									className: "underline",
									children: "editorial guidelines"
								}),
								"."
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-8 lg:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:sticky lg:top-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LatestHeadlines, { articles: moreHeadlines }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorRail, { seed: article.slug })
							})]
						})
					})]
				})
			] }),
			related.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-rule",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "kicker",
						children: ["More in ", article.category]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 grid gap-8 sm:grid-cols-3",
						children: related.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, { article: a }, a.slug))
					})]
				})
			}) : null
		]
	});
}
//#endregion
export { ArticlePage as component };
