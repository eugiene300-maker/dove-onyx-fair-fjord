import { createServerFn } from "@tanstack/react-start";

export type WeatherIconName =
  | "clear-day"
  | "clear-night"
  | "partly-cloudy-day"
  | "partly-cloudy-night"
  | "cloudy"
  | "rain"
  | "snow"
  | "fog"
  | "tstorm"
  | "wind";

export type BronxWeather = {
  tempF: number;
  feelsLikeF: number | null;
  condition: string;
  icon: WeatherIconName;
  humidity: number | null;
  windMph: number | null;
  observedAt: string;
  stationLabel: string;
};

const UA = "TheFreeBronxLeaf/1.0 (newsroom@freebronxleaf.com)";
const TTL_MS = 5 * 60 * 1000;

let cache: { at: number; data: BronxWeather } | null = null;

function cToF(c: number) {
  return Math.round((c * 9) / 5 + 32);
}

function kmhToMph(kmh: number) {
  return Math.round(kmh * 0.621371);
}

function iconFromNws(iconUrl: string, text: string): WeatherIconName {
  const lower = `${iconUrl} ${text}`.toLowerCase();
  const night = iconUrl.includes("/night/");
  if (/(tsra|tstorm|thunder)/.test(lower)) return "tstorm";
  if (/(snow|sleet|blizzard)/.test(lower)) return "snow";
  if (/(rain|shower|drizzle)/.test(lower)) return "rain";
  if (/(fog|haze|mist)/.test(lower)) return "fog";
  if (/(wind)/.test(lower)) return "wind";
  if (/(ovc|overcast|bkn|cloudy)/.test(lower) && !/(few|sct|partly)/.test(lower)) {
    return "cloudy";
  }
  if (/(sct|few|partly|mostly)/.test(lower)) {
    return night ? "partly-cloudy-night" : "partly-cloudy-day";
  }
  return night ? "clear-night" : "clear-day";
}

async function fetchJson(url: string) {
  const res = await fetch(url, {
    headers: { "User-Agent": UA, Accept: "application/geo+json, application/json" },
  });
  if (!res.ok) throw new Error(`${url} ${res.status}`);
  return res.json() as Promise<Record<string, unknown>>;
}

async function fromNwsObservation(): Promise<BronxWeather> {
  const data = await fetchJson(
    "https://api.weather.gov/stations/KLGA/observations/latest",
  );
  const props = (data.properties ?? {}) as Record<string, unknown>;
  const temp = props.temperature as { value: number | null } | undefined;
  if (temp?.value == null) throw new Error("nws missing temp");
  const feels = props.heatIndex as { value: number | null } | undefined;
  const wind = props.windSpeed as { value: number | null } | undefined;
  const humidity = props.relativeHumidity as { value: number | null } | undefined;
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
    observedAt: String(props.timestamp || new Date().toISOString()),
    stationLabel: "LaGuardia",
  };
}

async function fromNwsHourly(): Promise<BronxWeather> {
  const data = await fetchJson(
    "https://api.weather.gov/gridpoints/OKX/37,49/forecast/hourly",
  );
  const props = (data.properties ?? {}) as Record<string, unknown>;
  const periods = (props.periods ?? []) as Array<Record<string, unknown>>;
  const first = periods[0];
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
    observedAt: String(first.startTime || new Date().toISOString()),
    stationLabel: "Bronx forecast",
  };
}

async function fromWttr(): Promise<BronxWeather> {
  const res = await fetch("https://wttr.in/Bronx?format=j1", {
    headers: { "User-Agent": UA },
  });
  if (!res.ok) throw new Error(`wttr ${res.status}`);
  const data = (await res.json()) as {
    current_condition?: Array<Record<string, unknown>>;
  };
  const cur = data.current_condition?.[0];
  if (!cur) throw new Error("wttr empty");
  const tempF = Number(cur.temp_F);
  const desc = Array.isArray(cur.weatherDesc)
    ? String((cur.weatherDesc[0] as { value?: string })?.value ?? "Clear")
    : "Clear";
  return {
    tempF: Number.isFinite(tempF) ? tempF : 72,
    feelsLikeF: Number(cur.FeelsLikeF) || tempF,
    condition: desc.trim(),
    icon: iconFromNws("", desc),
    humidity: Number(cur.humidity) || null,
    windMph: Number(cur.windspeedMiles) || null,
    observedAt: new Date().toISOString(),
    stationLabel: "Bronx",
  };
}

export async function fetchBronxWeather(): Promise<BronxWeather> {
  if (cache && Date.now() - cache.at < TTL_MS) return cache.data;
  const errors: string[] = [];
  for (const fn of [fromNwsObservation, fromNwsHourly, fromWttr]) {
    try {
      const data = await fn();
      cache = { at: Date.now(), data };
      return data;
    } catch (err) {
      errors.push(err instanceof Error ? err.message : String(err));
    }
  }
  throw new Error(errors.join(" | ") || "weather unavailable");
}

export const getBronxWeather = createServerFn({ method: "GET" }).handler(
  async (): Promise<BronxWeather> => fetchBronxWeather(),
);
