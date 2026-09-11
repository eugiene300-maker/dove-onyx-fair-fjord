import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { NAV, TRENDING } from "@/data/site";
import { cn } from "@/lib/utils";
import { BronxWeather, BronxWeatherCompact } from "@/components/bronx-weather";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="bg-paper">
      <div className="border-b border-rule">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink"
            aria-label={open ? "Close sections" : "All sections"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
            <span>All Sections</span>
          </button>
          <div className="flex items-center gap-2">
            <a
              href="#subscribe"
              className="inline-flex min-h-11 items-center bg-forest px-4 text-sm font-semibold text-paper hover:bg-forest-2"
            >
              Subscribe
            </a>
            <Link
              to="/search"
              className="inline-flex min-h-11 min-w-11 items-center justify-center text-ink hover:text-forest"
              aria-label="Search"
            >
              <Search className="size-5" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-4 pb-3 sm:px-6">
        <div className="md:hidden">
          <BronxWeatherCompact />
          <Link to="/" className="mt-3 block" onClick={() => setOpen(false)}>
            <p className="masthead-title">
              The Free
              <span className="block">Bronx Leaf</span>
            </p>
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="mb-3 flex justify-center lg:hidden">
            <BronxWeatherCompact />
          </div>
          <div className="grid items-center gap-4 lg:grid-cols-12">
            <div className="hidden lg:col-span-3 lg:block">
              <BronxWeather />
            </div>
            <div className="lg:col-span-6">
              <Link to="/" className="block" onClick={() => setOpen(false)}>
                <p className="masthead-title">
                  The Free
                  <span className="block">Bronx Leaf</span>
                </p>
              </Link>
              <p className="mt-2 text-center text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
                The Bronx's free cannabis newspaper
              </p>
            </div>
            <div className="hidden lg:col-span-3 lg:block" />
          </div>
        </div>
      </div>

      <nav className="hidden md:block">
        <div className="double-rule" />
        <ul className="mx-auto flex max-w-6xl items-stretch justify-center gap-1 px-4 sm:px-6">
          {NAV.map((item) => {
            const current =
              pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "inline-flex min-h-11 items-center px-3 text-sm font-semibold text-ink hover:text-forest",
                    current && "nav-link-current",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="border-b border-ink" />
      </nav>

      {open ? (
        <nav className="border-b border-ink bg-paper">
          <ul className="mx-auto grid max-w-6xl gap-0 px-4 py-2 sm:grid-cols-2 sm:px-6 md:grid-cols-4">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="flex min-h-12 items-center text-sm font-semibold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/about"
                className="flex min-h-12 items-center text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex min-h-12 items-center text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/sponsorship"
                className="flex min-h-12 items-center text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                Sponsor the paper
              </Link>
            </li>
            <li>
              <Link
                to="/search"
                className="flex min-h-12 items-center text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                Search
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}

      <div className="border-b border-rule">
        <div className="mx-auto flex max-w-6xl items-center gap-4 overflow-x-auto px-4 py-2.5 sm:px-6">
          <p className="shrink-0 text-xs font-bold tracking-widest text-forest uppercase">
            Trending
          </p>
          <ul className="flex min-w-0 items-center gap-0">
            {TRENDING.map((item, i) => (
              <li key={item.slug} className="flex items-center">
                {i > 0 ? <span className="mx-3 h-3 w-px bg-rule" /> : null}
                <Link
                  to={item.to}
                  params={{ slug: item.slug }}
                  className="whitespace-nowrap text-sm text-ink hover:text-forest hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
