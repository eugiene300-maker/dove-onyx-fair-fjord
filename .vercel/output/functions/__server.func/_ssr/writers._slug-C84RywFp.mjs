import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as writers, r as SITE } from "./writers-CtGcjvVD.mjs";
import { t as SiteShell } from "./site-shell-DEyZQk9c.mjs";
import { t as JsonLd } from "./json-ld-2dnvi90N.mjs";
import { t as articles } from "./articles-_p3BMe5Z.mjs";
import { n as Route } from "./router-B-dYI7Tg.mjs";
import { t as ArticleCard } from "./article-card-ylZzYdpL.mjs";
import { t as SponsorRail } from "./sponsor-rail-YOt07okI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/writers._slug-C84RywFp.js
var import_jsx_runtime = require_jsx_runtime();
function WriterPage() {
	const { writer } = Route.useLoaderData();
	const bylines = articles.filter((a) => a.author === writer.slug);
	const others = writers.filter((w) => w.slug !== writer.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		seed: writer.slug,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: {
			"@context": "https://schema.org",
			"@type": "Person",
			name: writer.name,
			jobTitle: writer.role,
			email: writer.email,
			worksFor: {
				"@type": "NewsMediaOrganization",
				name: SITE.name
			},
			homeLocation: writer.neighborhood + ", Bronx, NY"
		} }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: writer.photo,
							alt: writer.name,
							className: "w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-4xl",
							children: writer.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm tracking-wide text-copper uppercase",
							children: [
								writer.role,
								" · ",
								writer.neighborhood
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-ink-soft",
							children: writer.bio
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${writer.email}`,
								className: "underline",
								children: writer.email
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-muted",
							children: [
								"Bylines follow our",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/editorial",
									className: "underline",
									children: "editorial guidelines"
								}),
								"."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "Stories"
						}),
						bylines.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, {
							article: a,
							layout: "row"
						}, a.slug)),
						!bylines.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted",
							children: "More work from this desk soon."
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] tracking-[0.16em] text-muted uppercase",
								children: "Also on staff"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 space-y-1 text-sm",
								children: others.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/writers/$slug",
									params: { slug: w.slug },
									className: "hover:text-forest",
									children: [
										w.name,
										" — ",
										w.role
									]
								}) }, w.slug))
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorRail, { seed: writer.slug })
				})
			]
		})]
	});
}
//#endregion
export { WriterPage as component };
