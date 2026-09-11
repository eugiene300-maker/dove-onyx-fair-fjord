import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/weather-DCPhoVRs.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
var getBronxWeather_createServerFn_handler = createServerRpc({
	id: "b51ba868b218cc266648b121a37dc5b8a9fb44d85d3c0fd04cd14b98de306b51",
	name: "getBronxWeather",
	filename: "src/lib/weather.ts"
}, (opts) => getBronxWeather.__executeServer(opts));
var getBronxWeather = createServerFn({ method: "GET" }).handler(getBronxWeather_createServerFn_handler, async () => fetchBronxWeather());
//#endregion
export { getBronxWeather_createServerFn_handler };
