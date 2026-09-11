import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { getBronxWeather, type BronxWeather } from "@/lib/weather";

const WeatherContext = createContext<BronxWeather | null>(null);

export function WeatherProvider({
  children,
  initial,
}: {
  children: ReactNode;
  initial: BronxWeather | null;
}) {
  const [weather, setWeather] = useState<BronxWeather | null>(initial);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const data = await getBronxWeather();
        if (!cancelled) setWeather(data);
      } catch {
        /* keep last good reading */
      }
    }
    if (!initial) load();
    const refresh = window.setInterval(load, 10 * 60 * 1000);
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

  return <WeatherContext.Provider value={weather}>{children}</WeatherContext.Provider>;
}

export function useBronxWeatherData() {
  return useContext(WeatherContext);
}
