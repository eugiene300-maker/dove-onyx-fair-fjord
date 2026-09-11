import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as writers, i as SPONSOR, r as SITE } from "./writers-CtGcjvVD.mjs";
import { t as SiteShell } from "./site-shell-DEyZQk9c.mjs";
import { t as JsonLd } from "./json-ld-2dnvi90N.mjs";
import { t as reviews } from "./reviews-BzbC4_tS.mjs";
import { t as ratings } from "./ratings-BOF8cIsN.mjs";
import { c as podcast, f as latestArticles, l as featuredArticles, s as episodes } from "./router-B-dYI7Tg.mjs";
import { t as ArticleCard } from "./article-card-ylZzYdpL.mjs";
import { t as SponsorRail } from "./sponsor-rail-YOt07okI.mjs";
import { n as RelatedList, t as LatestHeadlines } from "./latest-headlines-BWdNHdqp.mjs";
import { t as ScoreBadge } from "./score-bar-CvQzQ3HB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-QvG2-o67.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const featured = featuredArticles();
	const all = latestArticles();
	const hero = featured[0] ?? all[0];
	const used = new Set(hero ? [hero.slug] : []);
	const related = featured.filter((a) => !used.has(a.slug)).slice(0, 2);
	if (related.length < 2) for (const article of all) {
		if (used.has(article.slug) || related.some((r) => r.slug === article.slug)) continue;
		related.push(article);
		if (related.length === 2) break;
	}
	related.forEach((a) => used.add(a.slug));
	const headlines = all.filter((a) => !used.has(a.slug)).slice(0, 6);
	headlines.forEach((a) => used.add(a.slug));
	const photoPair = all.filter((a) => !used.has(a.slug)).slice(0, 2);
	photoPair.forEach((a) => used.add(a.slug));
	const more = all.filter((a) => !used.has(a.slug)).slice(0, 6);
	const topRatings = [...ratings].sort((a, b) => b.score - a.score).slice(0, 6);
	const topReviews = [...reviews].sort((a, b) => b.score - a.score).slice(0, 4);
	const latestShow = [...episodes].sort((a, b) => b.number - a.number).slice(0, 3);
	const org = {
		"@context": "https://schema.org",
		"@type": "NewsMediaOrganization",
		name: SITE.name,
		description: SITE.description,
		foundingDate: SITE.founded,
		email: SITE.email,
		address: {
			"@type": "PostalAddress",
			addressLocality: "Bronx",
			addressRegion: "NY",
			postalCode: "10455",
			addressCountry: "US"
		},
		ethicsPolicy: "/editorial",
		publishingPrinciples: "/editorial",
		sponsor: {
			"@type": "Store",
			name: SPONSOR.legalName,
			url: SPONSOR.url,
			telephone: SPONSOR.phone,
			address: SPONSOR.address
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		seed: "home",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: org }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 pt-6 pb-2 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-8",
						children: hero ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, {
								article: hero,
								layout: "hero"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedList, { articles: related })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/articles/$slug",
								params: { slug: hero.slug },
								className: "block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: hero.hero,
									alt: hero.heroAlt,
									className: "story-img h-full max-h-[420px] w-full object-cover"
								})
							})]
						}) : null
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LatestHeadlines, { articles: headlines })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-8 border-t border-rule pt-8 md:grid-cols-2 lg:grid-cols-12",
					children: [photoPair.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, {
							article,
							layout: "photo"
						})
					}, article.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorRail, { seed: "home-rail" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "Dispensary reviews"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-bold",
						children: "Where we actually shop"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/reviews",
						className: "hidden text-sm font-semibold tracking-wide uppercase sm:inline",
						children: "All reviews"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: topReviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/reviews/$slug",
						params: { slug: r.slug },
						className: "group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: r.image,
							alt: "",
							className: "story-img aspect-[16/10] w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "story-hed group-hover:text-forest",
									children: r.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBadge, { score: r.score })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted",
								children: r.neighborhood
							})]
						})]
					}, r.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-rule bg-paper-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "Cannabis-friendliness index"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 max-w-xl font-display text-3xl font-bold",
							children: "How green is the block — legally, not vibes"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/ratings",
							className: "hidden text-sm font-semibold tracking-wide uppercase sm:inline",
							children: "Full index"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
						children: topRatings.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/ratings/$slug",
							params: { slug: p.slug },
							className: "flex items-center gap-4 border border-rule bg-paper p-3 hover:border-ink",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: "",
									className: "size-16 object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate font-display text-lg leading-tight font-semibold",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: p.neighborhood
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBadge, { score: p.score })
							]
						}, p.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-ink bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/podcast",
							className: "block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: podcast.cover,
								alt: "The Free Bronx Leaf Podcast cover",
								className: "story-img aspect-square w-full object-cover"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "The podcast"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-3xl font-bold",
								children: podcast.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 max-w-2xl text-ink-soft",
								children: [podcast.tagline, " Same newsroom. Same wall between ads and reporting. New episodes drop with the paper."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 divide-y divide-rule border-y border-rule",
								children: latestShow.map((ep) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/podcast/$slug",
									params: { slug: ep.slug },
									className: "flex items-baseline justify-between gap-4 py-3 hover:text-forest",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-lg leading-snug font-semibold",
										children: [
											"Ep. ",
											String(ep.number).padStart(2, "0"),
											" — ",
											ep.title
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "shrink-0 text-xs text-muted",
										children: ep.duration
									})]
								}) }, ep.slug))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/podcast",
								className: "mt-4 inline-flex min-h-11 items-center text-sm font-semibold tracking-wide text-forest uppercase",
								children: "All episodes"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "From the newsroom"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: more.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, {
									article: a,
									layout: "row"
								}, a.slug))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/news",
								className: "mt-6 inline-flex min-h-11 items-center text-sm font-semibold tracking-wide text-forest uppercase",
								children: "All news"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "border border-rule p-5 lg:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "The newsroom"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-2xl font-bold",
								children: "Who writes this paper"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid grid-cols-3 gap-1",
								children: writers.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/writers/$slug",
									params: { slug: w.slug },
									className: "block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: w.photo,
										alt: w.name,
										className: "aspect-[3/4] w-full object-cover"
									})
								}, w.slug))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-ink-soft",
								children: "Six Bronx writers. Named streets. Named licenses. The sponsor does not assign stories."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "mt-3 block font-display text-lg leading-snug font-semibold hover:text-forest",
								children: "Meet the staff"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/editorial",
								className: "mt-1 block text-sm text-forest underline underline-offset-4",
								children: "Editorial guidelines"
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { Home as component };
