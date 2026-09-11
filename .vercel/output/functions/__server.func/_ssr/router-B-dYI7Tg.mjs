import { i as __toESM } from "../_runtime.mjs";
import { B as notFound, V as require_react, _ as createRootRoute, b as require_jsx_runtime, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as getWriter, o as WeatherProvider, r as SITE, s as fetchBronxWeather } from "./writers-CtGcjvVD.mjs";
import { r as TriangleAlert } from "../_libs/lucide-react.mjs";
import { t as articles } from "./articles-_p3BMe5Z.mjs";
import { t as reviews } from "./reviews-BzbC4_tS.mjs";
import { t as ratings } from "./ratings-BOF8cIsN.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/data-vk6tGu4G.js
function byPublishedDesc(rows) {
	return [...rows].sort((a, b) => a.published < b.published ? 1 : a.published > b.published ? -1 : 0);
}
function getArticle(slug) {
	return articles.find((article) => article.slug === slug);
}
function getReview(slug) {
	return reviews.find((review) => review.slug === slug);
}
function getRating(slug) {
	return ratings.find((rating) => rating.slug === slug);
}
function featuredArticles() {
	return byPublishedDesc(articles.filter((article) => article.featured === true));
}
function latestArticles() {
	return byPublishedDesc(articles);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/podcast-DbrygQSs.js
var podcast = {
	name: "The Free Bronx Leaf Podcast",
	tagline: "The Bronx cannabis newspaper, in your ears.",
	description: "A weekly show from the Free Bronx Leaf newsroom: licensed shops, delivery, parks law, Yankee Stadium nights, and the rest of Bronx life cannabis people actually live. Hosted in Melrose. Free to hear.",
	cover: "/images/podcast-cover.jpg",
	email: "newsroom@freebronxleaf.com"
};
var episodes = [
	{
		slug: "ep-01-why-the-bronx-needed-this-paper",
		number: 1,
		title: "Why the Bronx needed a free cannabis magazine",
		dek: "Marisol Vega on starting a newspaper that names licenses, rates blocks, and will not send you to a smoke shop with a cut padlock.",
		published: "2026-09-04T08:00:00-04:00",
		duration: "38 min",
		hosts: ["marisol-vega", "anthony-ruiz"],
		image: "/images/bronx-sunset-6train.jpg",
		relatedArticle: "on-the-6-why-the-bronx-needed-a-free-cannabis-magazine",
		body: [
			{
				type: "p",
				text: "We launched this show the same week we launched the paper, because the Bronx still learns a lot of its news out loud. Group chats. The 6. A barber who has already heard the raid story before News 12 has a camera on the block. A magazine that only exists as text is half a newspaper in this borough. So once a week Marisol Vega sits down with whoever walked the story and we put the same reporting in your ears."
			},
			{
				type: "p",
				text: "Episode one is the origin. Why a free paper. Why we will not review unlicensed shops. Why the presenting sponsor is a CAURD counter on 3rd Avenue and not a Manhattan delivery app with a Bronx ZIP code on a spreadsheet. Anthony Ruiz explains the critic's wall: sponsorship buys the masthead rail, it does not buy the number. If you want the written version, it is on the site. If you want the version you can play on the 2/5 to 149th Street, it is this file."
			},
			{
				type: "h2",
				text: "What we actually cover"
			},
			{
				type: "p",
				text: "Licensed dispensaries, with one checkout we will name: BX Buddiez at 2935 3rd Avenue in Melrose. Weed delivery that scans ID at the door. Cannabis-friendliness ratings for Yankee Stadium, Arthur Avenue, Wave Hill, City Island, the 6, Orchard Beach. Policy: CAURD, school buffers, the sheriff's truck. Culture: murals, edibles etiquette, what Reddit is actually saying when you strip out the bots. We do not do strain-of-the-week as a content farm. We do the borough."
			},
			{
				type: "p",
				text: "If you only listen to one thing in this episode, listen to the stretch where Marisol reads the editorial guidelines out loud. It is not glamorous. It is the wall. After that, the show is just the paper with better room tone."
			},
			{
				type: "sponsor",
				anchor: "dispensary in the Bronx"
			}
		]
	},
	{
		slug: "ep-02-inside-bx-buddiez",
		number: 2,
		title: "Inside BX Buddiez, with the critic who shops it",
		dek: "Anthony Ruiz walked into 2935 3rd Avenue four times, ID in hand, and scored a 9.4. This is the tape from the Melrose floor.",
		published: "2026-09-08T09:00:00-04:00",
		duration: "44 min",
		hosts: ["anthony-ruiz", "marisol-vega"],
		image: "/images/buddiez/counter.jpg",
		relatedArticle: "bx-buddiez-inside-south-bronx-shop",
		body: [
			{
				type: "p",
				text: "The critic's episode. Anthony Ruiz lives six blocks from BX Buddiez. That is either a conflict or the entire point of a local paper. We put it on the table in minute four. He shopped the store four times on his own ID, including one delivery to a walk-up off 156th, before the 9.4 ran. Presenting-sponsor status did not set the number. If the eighth had been hay, the number would have said so."
			},
			{
				type: "p",
				text: "We talk about the white checkout counter, the neon over the RAW papers, the hours that open at 9 a.m. for people who work, and the difference between a CAURD number on the wall and a cartoon bag two avenues over. Anthony describes the budtender who asked how he actually smokes at home instead of selling him 'the loudest.' That is the whole review, in a sentence."
			},
			{
				type: "image",
				src: "/images/buddiez/neon-wall.jpg",
				alt: "Neon brand signs and Kraft boxes of RAW papers over the BX Buddiez checkout in Melrose.",
				caption: "The wall at 2935 3rd Avenue. Photo from the shop floor, September 2026."
			},
			{
				type: "h2",
				text: "Pickup versus delivery"
			},
			{
				type: "p",
				text: "Pickup is the better version of this shop because you can see the case. Delivery is the version for when you will be home with ID. Drivers are the shop's. If a courier asks you to meet in a lobby without scanning ID, that is not this service. Phone is (929) 600-7207. Site is bxbuddiez.com. License is OCM-CAURD-25-000297. We will keep saying the number until the borough can recite it."
			},
			{
				type: "sponsor",
				anchor: "Buddiez Bronx Cannabis Dispensary"
			}
		]
	},
	{
		slug: "ep-03-parks-and-sidewalks",
		number: 3,
		title: "Can you smoke weed in Bronx parks? A walk through the statute",
		dek: "Keisha Barnes and Lena Park take the Smoke-Free Air Act to Van Cortlandt, Pelham Bay, Orchard Beach, and the sidewalk outside the zoo.",
		published: "2026-09-05T10:00:00-04:00",
		duration: "41 min",
		hosts: ["keisha-barnes", "lena-park"],
		image: "/images/places/orchard-beach.jpg",
		relatedArticle: "can-you-smoke-weed-in-bronx-parks",
		body: [
			{
				type: "p",
				text: "The most-asked question in the newsroom is not a strain question. It is a geography question. Can I smoke in the park. The answer is no, and then a longer answer about sidewalks, playground buffers, the MTA, cars, and why Orchard Beach photographs like a loophole and is not one."
			},
			{
				type: "p",
				text: "Keisha walked Van Cortlandt. Lena walked the NYBG fence line and Wave Hill. We score places on discretion, legal clarity, seating, transit, crowd vibe, and enforcement risk — not on whether a photographer once caught haze. Parks property is a no. Many sidewalks are a maybe. The 6 is a no. Yankee Stadium inside is a no. The sidewalk on Gerard is a sidewalk."
			},
			{
				type: "p",
				text: "Buy licensed first. We send listeners to BX Buddiez in Melrose, then tell them where they can actually stand. A rating of 2 at Wave Hill is not an insult to the garden. It is a compliment to the lawn."
			},
			{
				type: "sponsor",
				anchor: "licensed dispensary in the Bronx"
			}
		]
	},
	{
		slug: "ep-04-what-caurd-means",
		number: 4,
		title: "What a CAURD license actually means in the Bronx",
		dek: "Jamal Wright translates Albany's equity class into a floor plan, a vault, and a Tuesday inventory on 3rd Avenue.",
		published: "2026-09-06T11:00:00-04:00",
		duration: "47 min",
		hosts: ["jamal-wright", "marisol-vega"],
		image: "/images/buddiez/counter.jpg",
		relatedArticle: "what-caurd-license-means-in-the-bronx",
		body: [
			{
				type: "p",
				text: "CAURD is a Conditional Adult-Use Retail Dispensary license. It is New York's equity class, written for people and families who paid for prohibition. It is not a medical card. It is not a vibe. It is a number on the wall and a set of conditions an operator had to meet to get a key."
			},
			{
				type: "p",
				text: "Jamal Wright spent years in reentry advocacy before this paper. He will not sand the Hub into a redemption reel. He will tell you which doors in this borough are CAURD doors, why that matters on 3rd Avenue, and why an unlicensed shop with a cut padlock is not 'the people's market' just because it is cheaper before you count the raid."
			},
			{
				type: "p",
				text: "BX Buddiez holds OCM-CAURD-25-000297. That is the number we print. Other CAURD numbers exist in the borough; we cover them as news. We do not print their checkouts. If you want to spend money after this episode, the rail goes to Melrose."
			},
			{
				type: "sponsor",
				anchor: "CAURD dispensary Bronx"
			}
		]
	},
	{
		slug: "ep-05-yankee-stadium-nights",
		number: 5,
		title: "Yankee Stadium nights: the sidewalk is a maybe, the bowl is a no",
		dek: "Keisha Barnes on jerseys, Gate 4, and why we will keep telling you to buy in Melrose and put it out before the magnetometer.",
		published: "2026-09-07T16:00:00-04:00",
		duration: "36 min",
		hosts: ["keisha-barnes", "darius-colon"],
		image: "/images/places/yankee-stadium-gate.jpg",
		relatedArticle: "yankee-stadium-cannabis-nights",
		body: [
			{
				type: "p",
				text: "There is a version of this story that pretends the Stadium smells like 2009 and calls it culture. We are not recording that version. The building is a no-smoking bowl, cannabis included. The sidewalks on Gerard and River are ordinary Bronx sidewalks. Between them is a 4-train ride to a Melrose CAURD counter and a walk back."
			},
			{
				type: "p",
				text: "Keisha talks game-day crush, the group chats that still treat Gate 8 like a lounge, and the ushers who have better things to do than debate the Smoke-Free Air Act with a man in a Soto jersey. Darius talks the licensed map: buy at 2935 3rd Avenue, ride, walk, put it out. Do not take a jar through security. Do not light up on the 4."
			},
			{
				type: "p",
				text: "Our friendliness score for the Stadium is a 5.2 because we averaged the bowl (1) and the sidewalk (7). That is how people actually use the place. It is also how you avoid a magnetometer argument."
			},
			{
				type: "sponsor",
				anchor: "cannabis dispensary near Yankee Stadium"
			}
		]
	},
	{
		slug: "ep-06-delivery-map",
		number: 6,
		title: "A Bronx delivery map that only includes people with licenses",
		dek: "Darius Colon on Parkchester porch pirates, the death of medical couriers, and why a licensed drop waits at the door.",
		published: "2026-09-09T12:00:00-04:00",
		duration: "42 min",
		hosts: ["darius-colon", "marisol-vega"],
		image: "/images/places/bronx-rooftops-el.jpg",
		relatedArticle: "bronx-weed-delivery-map",
		body: [
			{
				type: "p",
				text: "If you still think Bronx delivery means a medical courier from 2019, you have not been on Reddit. The medical desks mostly stopped coming. What filled the hole is adult-use: licensed shops with their own drivers, ID at the apartment door, and hours that end before the unlicensed Instagram stories even start."
			},
			{
				type: "p",
				text: "Darius walked Parkchester's ovals with last year's 'laced weed' door-note in his pocket. The lesson is boring. Licensed couriers do not leave a bag on a stoop. They wait. They scan ID. BX Buddiez runs NYC delivery out of Melrose. Order at bxbuddiez.com or call (929) 600-7207. If a courier asks you to meet in a lobby without scanning ID, that is not this service."
			},
			{
				type: "p",
				text: "City Island is a Bx29 after the 6. Riverdale is a doorman. A walk-up off 156th is a buzzer. Geography is not a vibe. It is whether the driver still knows which button works."
			},
			{
				type: "sponsor",
				anchor: "Bronx weed delivery"
			}
		]
	},
	{
		slug: "ep-07-licensed-vs-smoke-shop",
		number: 7,
		title: "Licensed vs. smoke shop: five checks at the door",
		dek: "Anthony Ruiz's field guide for anyone who still thinks a green LED cross is a dispensary.",
		published: "2026-09-03T14:00:00-04:00",
		duration: "33 min",
		hosts: ["anthony-ruiz", "jamal-wright"],
		image: "/images/places/mott-haven-138.jpg",
		relatedArticle: "licensed-vs-smoke-shop-bronx-how-to-tell",
		body: [
			{
				type: "p",
				text: "Five checks. An OCM number you can look up. Hours posted like a supermarket. ID at the door. Labeled, child-resistant product. A receipt. If a storefront fails any of those, you are not in a dispensary. You are in a raid waiting on a truck."
			},
			{
				type: "p",
				text: "Pelham Gardens had an unlicensed shop resealed in June with hundreds of pounds of mystery product. Gun Hill Road still has padlock scars. This episode is the public-service announcement we should not still have to record in year three of adult-use. We record it anyway."
			},
			{
				type: "p",
				text: "If you cannot find a boring licensed door from where you are standing, ride the 2/5 to 3rd Avenue–149th Street and walk north to 2935. That is the field guide as an errand."
			},
			{
				type: "sponsor",
				anchor: "best dispensary in the Bronx"
			}
		]
	},
	{
		slug: "ep-08-arthur-avenue-after",
		number: 8,
		title: "Arthur Avenue after the joint: dinner, pastry, and the manners code",
		dek: "Lena Park on Belmont dining rooms, why a gummy does not belong next to a cannoli, and the walk from a Melrose pickup.",
		published: "2026-09-02T15:00:00-04:00",
		duration: "39 min",
		hosts: ["lena-park", "keisha-barnes"],
		image: "/images/places/arthur-ave-flags.jpg",
		relatedArticle: "arthur-avenue-after-the-joint",
		body: [
			{
				type: "p",
				text: "Arthur Avenue is not a consumption lounge. It is a dining room street with Italian flags, pastry cases, and a manners code older than the Office of Cannabis Management. Lena's rule is simple: buy first, eat after, do not put the eighth on the table."
			},
			{
				type: "p",
				text: "The friendliness rating is about discretion and statute, not about whether Belmont 'seems chill.' Outdoor dining is still a dining room. Parks two blocks over are still parks. The walk from BX Buddiez in Melrose is the errand. The linguine is the point."
			},
			{
				type: "p",
				text: "We will keep printing that sentence until the group chats retire the idea that a legal bag is a reservation."
			},
			{
				type: "sponsor",
				anchor: "Melrose cannabis shop"
			}
		]
	}
];
function getEpisode(slug) {
	return episodes.find((episode) => episode.slug === slug);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-B-dYI7Tg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-vg1Sdc4x.css";
var Route$20 = createRootRoute({
	loader: async () => {
		try {
			return { weather: await Promise.race([fetchBronxWeather(), new Promise((resolve) => {
				setTimeout(() => resolve(null), 2500);
			})]) };
		} catch {
			return { weather: null };
		}
	},
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${SITE.name} — ${SITE.tagline}` },
			{
				name: "description",
				content: SITE.description
			},
			{
				name: "theme-color",
				content: "#1C3D3A"
			},
			{
				name: "robots",
				content: "index,follow"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	const { weather } = Route$20.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-paper font-sans text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeatherProvider, {
					initial: weather,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$19 = () => import("./routes-QvG2-o67.mjs");
var Route$19 = createFileRoute("/")({
	head: () => ({ meta: [{ title: `${SITE.name} — ${SITE.tagline}` }, {
		name: "description",
		content: SITE.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./about-BE_14qNY.mjs");
var Route$18 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: `About the newsroom — ${SITE.name}` }, {
		name: "description",
		content: "The Free Bronx Leaf is an independent cannabis news magazine based in Melrose. Meet the local writers, our sponsor wall, and why the magazine is free."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./bx-buddiez-DtPhTwPk.mjs");
var Route$17 = createFileRoute("/bx-buddiez")({
	head: () => ({ meta: [{ title: `BX Buddiez — presenting sponsor, dispensary in the Bronx | ${SITE.name}` }, {
		name: "description",
		content: "BX Buddiez is a CAURD-licensed cannabis dispensary at 2935 3rd Avenue in the South Bronx. Hours, menu, delivery, and why The Free Bronx Leaf partnered with them."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./contact-DvJF7nf7.mjs");
var Route$16 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: `Contact & tips — ${SITE.name}` }, {
		name: "description",
		content: "Send a tip, a correction, or a shop to review."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./delivery-B_xoYYmk.mjs");
var Route$15 = createFileRoute("/delivery")({
	head: () => ({ meta: [{ title: `Bronx weed delivery — ${SITE.name}` }, {
		name: "description",
		content: "Licensed cannabis delivery in the Bronx: who actually shows up, Parkchester porch pirates, and why Instagram menus are not the play."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./editorial-DI2veQP1.mjs");
var Route$14 = createFileRoute("/editorial")({
	head: () => ({ meta: [{ title: `Editorial guidelines — ${SITE.name}` }, {
		name: "description",
		content: "How The Free Bronx Leaf reports on cannabis: corrections, sponsor wall, licensing, and what we will not do for a score."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./news-BXlyMpMH.mjs");
var Route$13 = createFileRoute("/news")({
	head: () => ({ meta: [{ title: `News — ${SITE.name}` }, {
		name: "description",
		content: "Bronx cannabis news: licensed dispensaries, raids on unlicensed shops, CAURD equity, delivery, and borough culture."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./podcast-BjNor10Q.mjs");
var Route$12 = createFileRoute("/podcast")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./privacy-qE_HYe53.mjs");
var Route$11 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: `Privacy policy — ${SITE.name}` }, {
		name: "description",
		content: "How The Free Bronx Leaf handles newsletter emails, age-gate storage, and analytics."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./ratings-Bkojeb0u.mjs");
var Route$10 = createFileRoute("/ratings")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./reviews-DeHd-gT7.mjs");
var Route$9 = createFileRoute("/reviews")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./search-Bs5fXgRE.mjs");
var Route$8 = createFileRoute("/search")({
	head: () => ({ meta: [{ title: `Search — ${SITE.name}` }, {
		name: "description",
		content: "Search Bronx cannabis news, reviews, and ratings."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitNotFoundComponentImporter$4 = () => import("./articles._slug-BhETfEeY.mjs");
var $$splitComponentImporter$7 = () => import("./articles._slug-A-Hww9Xf.mjs");
var Route$7 = createFileRoute("/articles/$slug")({
	loader: ({ params }) => {
		const article = getArticle(params.slug);
		if (!article) throw notFound();
		return { article };
	},
	head: ({ loaderData }) => {
		const article = loaderData?.article;
		return { meta: [
			{ title: article ? `${article.title} — ${SITE.name}` : SITE.name },
			{
				name: "description",
				content: article?.dek ?? SITE.description
			},
			{
				name: "author",
				content: article ? getWriter(article.author)?.name : void 0
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$4, "notFoundComponent")
});
var $$splitComponentImporter$6 = () => import("./podcast.index-C6VBS_ps.mjs");
var Route$6 = createFileRoute("/podcast/")({
	head: () => ({ meta: [{ title: `${podcast.name} — ${SITE.name}` }, {
		name: "description",
		content: podcast.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitNotFoundComponentImporter$3 = () => import("./podcast._slug-BOnAMZF5.mjs");
var $$splitComponentImporter$5 = () => import("./podcast._slug-gWYjtalt.mjs");
var Route$5 = createFileRoute("/podcast/$slug")({
	loader: ({ params }) => {
		const episode = getEpisode(params.slug);
		if (!episode) throw notFound();
		return { episode };
	},
	head: ({ loaderData }) => {
		const episode = loaderData?.episode;
		return { meta: [{ title: episode ? `${episode.title} — ${podcast.name}` : SITE.name }, {
			name: "description",
			content: episode?.dek ?? podcast.description
		}] };
	},
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$3, "notFoundComponent")
});
var $$splitComponentImporter$4 = () => import("./ratings.index-DXq9OeVW.mjs");
var Route$4 = createFileRoute("/ratings/")({
	head: () => ({ meta: [{ title: `Bronx cannabis-friendliness index — ${SITE.name}` }, {
		name: "description",
		content: "Cannabis-friendliness ratings for Bronx parks, neighborhoods, Yankee Stadium, Arthur Avenue, City Island, and the 6 train — scored against actual NY law."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitNotFoundComponentImporter$2 = () => import("./ratings._slug-DCgjDZri.mjs");
var $$splitComponentImporter$3 = () => import("./ratings._slug-Bs1knzOa.mjs");
var Route$3 = createFileRoute("/ratings/$slug")({
	loader: ({ params }) => {
		const place = getRating(params.slug);
		if (!place) throw notFound();
		return { place };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.place.name} cannabis-friendliness — ${SITE.name}` : SITE.name }, {
		name: "description",
		content: loaderData?.place.summary
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$2, "notFoundComponent")
});
var $$splitComponentImporter$2 = () => import("./reviews.index-atYUPpNA.mjs");
var Route$2 = createFileRoute("/reviews/")({
	head: () => ({ meta: [{ title: `Dispensary reviews — ${SITE.name}` }, {
		name: "description",
		content: "Independent review of BX Buddiez, a licensed CAURD cannabis dispensary in the South Bronx — product, staff, value, vibe, and equity."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitNotFoundComponentImporter$1 = () => import("./reviews._slug-Bb35LF8p.mjs");
var $$splitComponentImporter$1 = () => import("./reviews._slug-DcMGOfhq.mjs");
var Route$1 = createFileRoute("/reviews/$slug")({
	loader: ({ params }) => {
		const review = getReview(params.slug);
		if (!review) throw notFound();
		return { review };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.review.name} review — ${SITE.name}` : SITE.name }, {
		name: "description",
		content: loaderData?.review.excerpt
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent")
});
var $$splitNotFoundComponentImporter = () => import("./writers._slug-BdyQb92z.mjs");
var $$splitComponentImporter = () => import("./writers._slug-C84RywFp.mjs");
var Route = createFileRoute("/writers/$slug")({
	loader: ({ params }) => {
		const writer = getWriter(params.slug);
		if (!writer) throw notFound();
		return { writer };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.writer.name} — ${SITE.name}` : SITE.name }, {
		name: "description",
		content: loaderData?.writer.bio
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
var IndexRoute = Route$19.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$20
});
var AboutRoute = Route$18.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$20
});
var BxBuddiezRoute = Route$17.update({
	id: "/bx-buddiez",
	path: "/bx-buddiez",
	getParentRoute: () => Route$20
});
var ContactRoute = Route$16.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$20
});
var DeliveryRoute = Route$15.update({
	id: "/delivery",
	path: "/delivery",
	getParentRoute: () => Route$20
});
var EditorialRoute = Route$14.update({
	id: "/editorial",
	path: "/editorial",
	getParentRoute: () => Route$20
});
var NewsRoute = Route$13.update({
	id: "/news",
	path: "/news",
	getParentRoute: () => Route$20
});
var PodcastRoute = Route$12.update({
	id: "/podcast",
	path: "/podcast",
	getParentRoute: () => Route$20
});
var PrivacyRoute = Route$11.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$20
});
var RatingsRoute = Route$10.update({
	id: "/ratings",
	path: "/ratings",
	getParentRoute: () => Route$20
});
var ReviewsRoute = Route$9.update({
	id: "/reviews",
	path: "/reviews",
	getParentRoute: () => Route$20
});
var SearchRoute = Route$8.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => Route$20
});
var ArticlesSlugRoute = Route$7.update({
	id: "/articles/$slug",
	path: "/articles/$slug",
	getParentRoute: () => Route$20
});
var PodcastIndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => PodcastRoute
});
var PodcastSlugRoute = Route$5.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => PodcastRoute
});
var RatingsIndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => RatingsRoute
});
var RatingsSlugRoute = Route$3.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => RatingsRoute
});
var ReviewsIndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => ReviewsRoute
});
var ReviewsSlugRoute = Route$1.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ReviewsRoute
});
var WritersSlugRoute = Route.update({
	id: "/writers/$slug",
	path: "/writers/$slug",
	getParentRoute: () => Route$20
});
var PodcastRouteChildren = {
	PodcastSlugRoute,
	PodcastIndexRoute
};
var PodcastRouteWithChildren = PodcastRoute._addFileChildren(PodcastRouteChildren);
var RatingsRouteChildren = {
	RatingsSlugRoute,
	RatingsIndexRoute
};
var RatingsRouteWithChildren = RatingsRoute._addFileChildren(RatingsRouteChildren);
var ReviewsRouteChildren = {
	ReviewsSlugRoute,
	ReviewsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BxBuddiezRoute,
	ContactRoute,
	DeliveryRoute,
	EditorialRoute,
	NewsRoute,
	PodcastRoute: PodcastRouteWithChildren,
	PrivacyRoute,
	RatingsRoute: RatingsRouteWithChildren,
	ReviewsRoute: ReviewsRoute._addFileChildren(ReviewsRouteChildren),
	SearchRoute,
	ArticlesSlugRoute,
	WritersSlugRoute
};
var routeTree = Route$20._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { Route$5 as a, podcast as c, getReview as d, latestArticles as f, Route$3 as i, featuredArticles as l, Route as n, Route$7 as o, Route$1 as r, episodes as s, router_exports as t, getArticle as u };
