import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/writers-CtGcjvVD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var UA = "TheFreeBronxLeaf/1.0 (newsroom@freebronxleaf.com)";
var TTL_MS = 3e5;
var cache = null;
function cToF(c) {
	return Math.round(c * 9 / 5 + 32);
}
function kmhToMph(kmh) {
	return Math.round(kmh * .621371);
}
function iconFromNws(iconUrl, text) {
	const lower = `${iconUrl} ${text}`.toLowerCase();
	const night = iconUrl.includes("/night/");
	if (/(tsra|tstorm|thunder)/.test(lower)) return "tstorm";
	if (/(snow|sleet|blizzard)/.test(lower)) return "snow";
	if (/(rain|shower|drizzle)/.test(lower)) return "rain";
	if (/(fog|haze|mist)/.test(lower)) return "fog";
	if (/(wind)/.test(lower)) return "wind";
	if (/(ovc|overcast|bkn|cloudy)/.test(lower) && !/(few|sct|partly)/.test(lower)) return "cloudy";
	if (/(sct|few|partly|mostly)/.test(lower)) return night ? "partly-cloudy-night" : "partly-cloudy-day";
	return night ? "clear-night" : "clear-day";
}
async function fetchJson(url) {
	const res = await fetch(url, { headers: {
		"User-Agent": UA,
		Accept: "application/geo+json, application/json"
	} });
	if (!res.ok) throw new Error(`${url} ${res.status}`);
	return res.json();
}
async function fromNwsObservation() {
	const props = (await fetchJson("https://api.weather.gov/stations/KLGA/observations/latest")).properties ?? {};
	const temp = props.temperature;
	if (temp?.value == null) throw new Error("nws missing temp");
	const feels = props.heatIndex;
	const wind = props.windSpeed;
	const humidity = props.relativeHumidity;
	const text = String(props.textDescription || "Clear");
	const iconUrl = String(props.icon || "");
	const feelsC = feels?.value;
	return {
		tempF: cToF(temp.value),
		feelsLikeF: feelsC == null ? cToF(temp.value) : cToF(feelsC),
		condition: text.trim(),
		icon: iconFromNws(iconUrl, text),
		humidity: humidity?.value == null ? null : Math.round(humidity.value),
		windMph: wind?.value == null ? null : kmhToMph(wind.value),
		observedAt: String(props.timestamp || (/* @__PURE__ */ new Date()).toISOString()),
		stationLabel: "LaGuardia"
	};
}
async function fromNwsHourly() {
	const first = (((await fetchJson("https://api.weather.gov/gridpoints/OKX/37,49/forecast/hourly")).properties ?? {}).periods ?? [])[0];
	if (!first) throw new Error("nws hourly empty");
	const temp = Number(first.temperature);
	const text = String(first.shortForecast || "Clear");
	const iconUrl = String(first.icon || "");
	const windSpeed = String(first.windSpeed || "");
	const windMph = Number.parseInt(windSpeed, 10);
	return {
		tempF: Number.isFinite(temp) ? temp : 72,
		feelsLikeF: Number.isFinite(temp) ? temp : 72,
		condition: text.trim(),
		icon: iconFromNws(iconUrl, text),
		humidity: null,
		windMph: Number.isFinite(windMph) ? windMph : null,
		observedAt: String(first.startTime || (/* @__PURE__ */ new Date()).toISOString()),
		stationLabel: "Bronx forecast"
	};
}
async function fromWttr() {
	const res = await fetch("https://wttr.in/Bronx?format=j1", { headers: { "User-Agent": UA } });
	if (!res.ok) throw new Error(`wttr ${res.status}`);
	const cur = (await res.json()).current_condition?.[0];
	if (!cur) throw new Error("wttr empty");
	const tempF = Number(cur.temp_F);
	const desc = Array.isArray(cur.weatherDesc) ? String(cur.weatherDesc[0]?.value ?? "Clear") : "Clear";
	return {
		tempF: Number.isFinite(tempF) ? tempF : 72,
		feelsLikeF: Number(cur.FeelsLikeF) || tempF,
		condition: desc.trim(),
		icon: iconFromNws("", desc),
		humidity: Number(cur.humidity) || null,
		windMph: Number(cur.windspeedMiles) || null,
		observedAt: (/* @__PURE__ */ new Date()).toISOString(),
		stationLabel: "Bronx"
	};
}
async function fetchBronxWeather() {
	if (cache && Date.now() - cache.at < TTL_MS) return cache.data;
	const errors = [];
	for (const fn of [
		fromNwsObservation,
		fromNwsHourly,
		fromWttr
	]) try {
		const data = await fn();
		cache = {
			at: Date.now(),
			data
		};
		return data;
	} catch (err) {
		errors.push(err instanceof Error ? err.message : String(err));
	}
	throw new Error(errors.join(" | ") || "weather unavailable");
}
var getBronxWeather = createServerFn({ method: "GET" }).handler(createSsrRpc("b51ba868b218cc266648b121a37dc5b8a9fb44d85d3c0fd04cd14b98de306b51"));
var WeatherContext = (0, import_react.createContext)(null);
function WeatherProvider({ children, initial }) {
	const [weather, setWeather] = (0, import_react.useState)(initial);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		async function load() {
			try {
				const data = await getBronxWeather();
				if (!cancelled) setWeather(data);
			} catch {}
		}
		if (!initial) load();
		const refresh = window.setInterval(load, 6e5);
		const onVis = () => {
			if (document.visibilityState === "visible") load();
		};
		document.addEventListener("visibilitychange", onVis);
		return () => {
			cancelled = true;
			window.clearInterval(refresh);
			document.removeEventListener("visibilitychange", onVis);
		};
	}, [initial]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeatherContext.Provider, {
		value: weather,
		children
	});
}
function useBronxWeatherData() {
	return (0, import_react.useContext)(WeatherContext);
}
var SITE = {
	name: "The Free Bronx Leaf",
	shortName: "Free Bronx Leaf",
	tagline: "The Bronx's free cannabis newspaper",
	kicker: "Vol. 1  ·  South Bronx to City Island  ·  Independent",
	description: "Independent cannabis news, dispensary reviews, weed delivery guides, and cannabis-friendliness ratings for every corner of the Bronx. Free to read. Written by a local newsroom.",
	url: "https://freebronxleaf.com",
	founded: "2026",
	email: "newsroom@freebronxleaf.com",
	tips: "tips@freebronxleaf.com",
	address: "Melrose, Bronx, NY 10455",
	copyright: "© 2026 The Free Bronx Leaf. Free to read. Not affiliated with any unlicensed retailer.",
	age: "21+"
};
var SPONSOR = {
	name: "BX Buddiez",
	legalName: "Buddiez Bronx Cannabis Dispensary",
	url: "https://bxbuddiez.com/",
	aboutUrl: "https://bxbuddiez.com/about-us/",
	shopUrl: "https://bxbuddiez.com/",
	address: "2935 3rd Avenue, between East 152nd and East 153rd Streets, Bronx, NY 10455",
	neighborhood: "Melrose / South Bronx",
	phone: "(929) 600-7207",
	hours: "Mon–Sat 9am–8pm, Sun 10am–7pm",
	license: "OCM-CAURD-25-000297",
	blurb: "A CAURD equity-licensed dispensary in the heart of the South Bronx, built for the Bronx by the Bronx. Flower, pre-rolls, edibles, vapes, concentrates, and NYC delivery."
};
/** Rotating SEO anchors that all resolve to BX Buddiez. */
var SPONSOR_ANCHORS = [
	{
		href: "https://bxbuddiez.com/",
		text: "dispensary in the Bronx"
	},
	{
		href: "https://bxbuddiez.com/",
		text: "Bronx dispensary"
	},
	{
		href: "https://bxbuddiez.com/",
		text: "licensed dispensary in the Bronx"
	},
	{
		href: "https://bxbuddiez.com/",
		text: "South Bronx dispensary"
	},
	{
		href: "https://bxbuddiez.com/",
		text: "best dispensary in the Bronx"
	},
	{
		href: "https://bxbuddiez.com/",
		text: "weed dispensary Bronx"
	},
	{
		href: "https://bxbuddiez.com/",
		text: "cannabis dispensary near Yankee Stadium"
	},
	{
		href: "https://bxbuddiez.com/",
		text: "Melrose cannabis shop"
	},
	{
		href: "https://bxbuddiez.com/",
		text: "3rd Avenue dispensary"
	},
	{
		href: "https://bxbuddiez.com/",
		text: "pickup weed in the South Bronx"
	},
	{
		href: "https://bxbuddiez.com/",
		text: "Bronx weed delivery"
	},
	{
		href: "https://bxbuddiez.com/",
		text: "legal weed in the Bronx"
	},
	{
		href: "https://bxbuddiez.com/",
		text: "CAURD dispensary Bronx"
	},
	{
		href: "https://bxbuddiez.com/",
		text: "Buddiez Bronx Cannabis Dispensary"
	},
	{
		href: "https://bxbuddiez.com/",
		text: "shop cannabis in Melrose"
	}
];
function sponsorAnchor(seed) {
	let n = 0;
	for (let i = 0; i < seed.length; i++) n += seed.charCodeAt(i);
	return SPONSOR_ANCHORS[n % SPONSOR_ANCHORS.length];
}
var NAV = [
	{
		to: "/news",
		label: "News"
	},
	{
		to: "/reviews",
		label: "Reviews"
	},
	{
		to: "/delivery",
		label: "Delivery"
	},
	{
		to: "/ratings",
		label: "Local"
	},
	{
		to: "/podcast",
		label: "Podcast"
	},
	{
		to: "/bx-buddiez",
		label: "BX Buddiez"
	}
];
var FOOTER_NAV = [
	{
		to: "/about",
		label: "About the newsroom"
	},
	{
		to: "/editorial",
		label: "Editorial guidelines"
	},
	{
		to: "/podcast",
		label: "The podcast"
	},
	{
		to: "/privacy",
		label: "Privacy"
	},
	{
		to: "/contact",
		label: "Contact & tips"
	},
	{
		to: "/bx-buddiez",
		label: "Presenting sponsor"
	}
];
var TRENDING = [
	{
		label: "Best licensed shops 2026",
		to: "/articles/$slug",
		slug: "best-licensed-dispensaries-bronx-2026"
	},
	{
		label: "Can you smoke in parks?",
		to: "/articles/$slug",
		slug: "can-you-smoke-weed-in-bronx-parks"
	},
	{
		label: "Yankee Stadium nights",
		to: "/articles/$slug",
		slug: "yankee-stadium-cannabis-nights"
	},
	{
		label: "Licensed vs. smoke shop",
		to: "/articles/$slug",
		slug: "licensed-vs-smoke-shop-bronx-how-to-tell"
	},
	{
		label: "Arthur Avenue after",
		to: "/articles/$slug",
		slug: "arthur-avenue-after-the-joint"
	}
];
var writers = [
	{
		slug: "marisol-vega",
		name: "Marisol Vega",
		role: "Editor-in-Chief",
		neighborhood: "Mott Haven",
		photo: "/images/writers/marisol-vega.jpg",
		email: "marisol@freebronxleaf.com",
		bio: "Marisol grew up on East 138th Street and spent a decade covering housing, small business, and the South Bronx waterfront for bilingual weeklies before founding The Free Bronx Leaf in 2026. She still walks the 6 train corridor to the newsroom two mornings a week. Her beat: how legal cannabis actually lands in the neighborhoods that paid the highest price for prohibition."
	},
	{
		slug: "darius-colon",
		name: "Darius Colon",
		role: "Senior Reporter",
		neighborhood: "Fordham",
		photo: "/images/writers/darius-colon.jpg",
		email: "darius@freebronxleaf.com",
		bio: "Darius covers the street-level story: raids on unlicensed shops, delivery culture, Reddit threads, and the gap between Albany policy and what you actually see on Fordham Road. He previously reported nightlife and transit for Bronx community papers and still rides the B/D to work."
	},
	{
		slug: "keisha-barnes",
		name: "Keisha Barnes",
		role: "Culture Editor",
		neighborhood: "Soundview",
		photo: "/images/writers/keisha-barnes.jpg",
		email: "keisha@freebronxleaf.com",
		bio: "Keisha writes about music, murals, Yankee Stadium nights, and the social rituals around cannabis in the Bronx. Before the Leaf she programmed community radio out of a studio above a beauty supply on Westchester Avenue."
	},
	{
		slug: "anthony-ruiz",
		name: "Anthony Ruiz",
		role: "Dispensary Critic",
		neighborhood: "Melrose",
		photo: "/images/writers/anthony-ruiz.jpg",
		email: "anthony@freebronxleaf.com",
		bio: "Anthony reviews licensed dispensaries the way a restaurant critic reviews kitchens: product, staff, value, vibe, and whether the shop is actually of the neighborhood. He lives six blocks from 3rd Avenue and will not score a store he has not shopped himself, ID in hand."
	},
	{
		slug: "lena-park",
		name: "Lena Park",
		role: "Food & Place Writer",
		neighborhood: "Belmont",
		photo: "/images/writers/lena-park.jpg",
		email: "lena@freebronxleaf.com",
		bio: "Lena maps the Bronx as a cannabis-adjacent city: Arthur Avenue dinners, City Island docks, Wave Hill lawns, and which bakeries will side-eye a bag of legal flower. She treats friendliness ratings as reporting, not a vibe check."
	},
	{
		slug: "jamal-wright",
		name: "Jamal Wright",
		role: "Policy & Equity Editor",
		neighborhood: "Highbridge",
		photo: "/images/writers/jamal-wright.jpg",
		email: "jamal@freebronxleaf.com",
		bio: "Jamal spent years in reentry advocacy before cannabis legalization. He explains CAURD licenses, school-buffer fights, and the Bronx Cannabis Hub without the Albany jargon. If a story is about who gets to own a shop, it crosses his desk."
	}
];
function getWriter(slug) {
	return writers.find((w) => w.slug === slug);
}
//#endregion
export { TRENDING as a, getWriter as c, writers as d, SPONSOR as i, sponsorAnchor as l, NAV as n, WeatherProvider as o, SITE as r, fetchBronxWeather as s, FOOTER_NAV as t, useBronxWeatherData as u };
