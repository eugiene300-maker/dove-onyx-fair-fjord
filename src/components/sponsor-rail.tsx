import { Link } from "@tanstack/react-router";
import { SPONSOR } from "@/data/site";
import { SponsorLink } from "@/components/sponsor-link";

export function SponsorRail({ seed }: { seed: string }) {
  return (
    <aside className="border border-rule bg-paper-2 p-5">
      <p className="kicker">Presenting sponsor</p>
      <h2 className="mt-2 font-display text-2xl leading-tight font-bold text-ink">
        {SPONSOR.name}
      </h2>
      <p className="mt-1 text-sm text-ink-soft">{SPONSOR.legalName}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{SPONSOR.blurb}</p>
      <p className="mt-3 text-xs leading-relaxed text-muted">
        {SPONSOR.address}
        <br />
        {SPONSOR.phone} · {SPONSOR.hours}
        <br />
        License {SPONSOR.license}
      </p>
      <div className="mt-4 flex flex-col gap-2">
        <a
          href={SPONSOR.url}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center bg-forest px-4 text-sm font-semibold text-paper hover:bg-forest-2"
        >
          Shop the {SPONSOR.neighborhood.split("/")[0].trim()} menu
        </a>
        <Link
          to="/bx-buddiez"
          className="inline-flex min-h-11 items-center justify-center border border-rule px-4 text-sm font-semibold text-ink hover:border-ink"
        >
          Our sponsor page
        </Link>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        Looking for a <SponsorLink seed={seed} />? BX Buddiez is a licensed CAURD
        shop on 3rd Avenue — pickup or{" "}
        <SponsorLink seed={seed + "-d"} className="text-forest">
          Bronx weed delivery
        </SponsorLink>
        .
      </p>
    </aside>
  );
}
