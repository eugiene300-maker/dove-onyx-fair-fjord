import { Link } from "@tanstack/react-router";
import { FOOTER_NAV, SITE, SPONSOR } from "@/data/site";
import { writers } from "@/data/writers";
import { NewsletterForm } from "@/components/newsletter-form";

export function SiteFooter({ seed: _seed }: { seed: string }) {
  return (
    <footer className="mt-12 border-t-2 border-ink bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-display text-3xl font-bold tracking-tight">{SITE.name}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
            {SITE.tagline}. A local magazine covering licensed shops, delivery, equity,
            and the rest of Bronx life cannabis people actually live — Yankees
            nights, Arthur Avenue, the 6 train, City Island.
          </p>
          <p className="mt-4 text-sm text-ink-soft">
            Presented by {SPONSOR.name}, a licensed shop at {SPONSOR.address}.{" "}
            <Link to="/sponsorship" className="underline underline-offset-4 hover:text-forest">
              Advertise with us
            </Link>
            .
          </p>
        </div>
        <div className="lg:col-span-3">
          <p className="kicker">The paper</p>
          <ul className="mt-3 space-y-2">
            {FOOTER_NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-ink hover:text-forest">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-4" id="subscribe">
          <p className="kicker">The free dispatch</p>
          <p className="mt-2 text-sm text-ink-soft">
            New reviews, ratings, and borough news — no spam, no unlicensed shops.
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-rule">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            {SITE.copyright} Written in {SITE.address} by{" "}
            {writers.map((w) => w.name.split(" ")[0]).join(", ")}.
          </p>
          <p>Cannabis is for adults 21+. Consume legally and responsibly.</p>
        </div>
      </div>
    </footer>
  );
}
