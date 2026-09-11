import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { WeatherProvider } from "@/components/weather-provider";
import { fetchBronxWeather, type BronxWeather } from "@/lib/weather";
import { SITE } from "@/data/site";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  loader: async (): Promise<{ weather: BronxWeather | null }> => {
    try {
      const weather = await Promise.race([
        fetchBronxWeather(),
        new Promise<null>((resolve) => {
          setTimeout(() => resolve(null), 2500);
        }),
      ]);
      return { weather };
    } catch {
      return { weather: null };
    }
  },
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { name: "theme-color", content: "#1C3D3A" },
      { name: "robots", content: "index,follow" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap",
      },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  const { weather } = Route.useLoaderData();
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-paper font-sans text-ink">
        <PreviewHostBridge />
        <AuthProvider>
          <WeatherProvider initial={weather}>
            <Outlet />
          </WeatherProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
