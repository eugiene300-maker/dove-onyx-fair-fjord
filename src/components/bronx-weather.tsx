import { useEffect, useState } from "react";
import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Moon,
  Sun,
  Wind,
} from "lucide-react";
import type { WeatherIconName } from "@/lib/weather";
import { formatBronxDate, formatBronxTime } from "@/lib/time";
import { useBronxWeatherData } from "@/components/weather-provider";

const ICONS: Record<WeatherIconName, typeof Sun> = {
  "clear-day": Sun,
  "clear-night": Moon,
  "partly-cloudy-day": CloudSun,
  "partly-cloudy-night": Cloud,
  cloudy: Cloud,
  rain: CloudRain,
  snow: CloudSnow,
  fog: CloudFog,
  tstorm: CloudLightning,
  wind: Wind,
};

function useLiveClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const tick = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(tick);
  }, []);
  return now;
}

function WeatherGlyph({ name }: { name: WeatherIconName }) {
  const Icon = ICONS[name] ?? Sun;
  return <Icon className="size-7 text-ink" strokeWidth={1.5} aria-hidden />;
}

export function BronxWeather() {
  const now = useLiveClock();
  const weather = useBronxWeatherData();
  const dateLabel = now ? formatBronxDate(now) : "Bronx, NY";
  const timeLabel = now ? formatBronxTime(now) : "";

  return (
    <div className="flex items-start gap-2.5 text-ink">
      {weather ? (
        <div className="flex items-center gap-1.5 pt-0.5">
          <p className="font-display text-3xl leading-none font-semibold tabular-nums">
            {weather.tempF}°
          </p>
          <WeatherGlyph name={weather.icon} />
        </div>
      ) : (
        <div className="flex items-center gap-1.5 pt-0.5">
          <p className="font-display text-3xl leading-none font-semibold tabular-nums text-muted">
            —°
          </p>
          <Sun className="size-7 text-muted" strokeWidth={1.5} aria-hidden />
        </div>
      )}
      <div className="min-w-0 leading-tight">
        <p className="text-sm font-medium text-ink">{dateLabel}</p>
        <p className="mt-0.5 min-h-5 text-sm font-semibold tabular-nums text-ink">{timeLabel}</p>
        <p className="mt-0.5 text-xs text-muted">
          {weather ? (
            <span title={`Observed at ${weather.stationLabel}`}>
              {weather.condition} · Bronx, NY
            </span>
          ) : (
            "Bronx, NY"
          )}
        </p>
      </div>
    </div>
  );
}

export function BronxWeatherCompact() {
  const now = useLiveClock();
  const weather = useBronxWeatherData();
  const Icon = weather ? ICONS[weather.icon] : Sun;

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink">
      <span className="inline-flex items-center gap-1.5 font-semibold">
        {weather ? (
          <>
            <span className="tabular-nums">{weather.tempF}°</span>
            <Icon className="size-4" strokeWidth={1.75} aria-hidden />
          </>
        ) : null}
        Bronx, NY
      </span>
      {now ? <span className="text-muted">{formatBronxDate(now)}</span> : null}
      {now ? <span className="font-semibold tabular-nums">{formatBronxTime(now)}</span> : null}
    </div>
  );
}
