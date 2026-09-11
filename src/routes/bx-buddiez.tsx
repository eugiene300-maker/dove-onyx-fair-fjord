import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Phone, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { SITE, SPONSOR } from "@/data/site";
import { getReview } from "@/data";

export const Route = createFileRoute("/bx-buddiez")({
  head: () => ({
    meta: [
      {
        title: `BX Buddiez — presenting sponsor, dispensary in the Bronx | ${SITE.name}`,
      },
      {
        name: "description",
        content:
          "BX Buddiez is a CAURD-licensed cannabis dispensary at 2935 3rd Avenue in the South Bronx. Hours, menu, delivery, and why The Free Bronx Leaf partnered with them.",
      },
    ],
  }),
  component: SponsorPage,
});

function SponsorPage() {
  const review = getReview("bx-buddiez");
  const local = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: SPONSOR.legalName,
    url: SPONSOR.url,
    telephone: SPONSOR.phone,
    image: "/images/buddiez/counter.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2935 3rd Avenue",
      addressLocality: "Bronx",
      addressRegion: "NY",
      postalCode: "10455",
      addressCountry: "US",
    },
    openingHours: ["Mo-Sa 09:00-20:00", "Su 10:00-19:00"],
    areaServed: "Bronx, NY",
    license: SPONSOR.license,
  };

  return (
    <SiteShell seed="bx-buddiez">
      <JsonLd data={local} />
      <div className="relative min-h-[380px] overflow-hidden bg-ink text-paper">
        <img
          src="/images/buddiez/counter.jpg"
          alt="The BX Buddiez checkout in Melrose, a licensed South Bronx sales floor"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <div className="relative mx-auto flex min-h-[380px] max-w-6xl items-end px-4 py-10 sm:px-6">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-copper uppercase">
              Presenting sponsor
            </p>
            <h1 className="mt-2 font-display text-5xl">BX Buddiez</h1>
            <p className="mt-3 max-w-xl text-lg text-paper/90">
              A licensed dispensary in the Bronx — Melrose, 3rd Avenue, CAURD
              equity license, pickup and delivery.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-3 px-4 py-6 sm:grid-cols-3 sm:px-6">
        <figure>
          <img
            src="/images/buddiez/counter.jpg"
            alt="BX Buddiez checkout counter with a budtender and customer in Melrose"
            className="aspect-[4/5] w-full object-cover"
          />
          <figcaption className="mt-2 text-xs text-muted">
            The desk at 2935 3rd Avenue — ID, a question, a labeled jar. Photo from the shop floor.
          </figcaption>
        </figure>
        <figure>
          <img
            src="/images/buddiez/neon-wall.jpg"
            alt="Neon brand signs and Kraft boxes of RAW papers over the BX Buddiez checkout"
            className="aspect-[4/5] w-full object-cover"
          />
          <figcaption className="mt-2 text-xs text-muted">
            Honey King, To The Moon, RAW papers. The wall before the budtender talks.
          </figcaption>
        </figure>
        <figure>
          <img
            src="/images/buddiez/hours-sign.jpg"
            alt="BX Buddiez store hours: Sunday 10 to 7, Monday through Saturday 9 to 8"
            className="aspect-[4/5] w-full object-cover"
          />
          <figcaption className="mt-2 text-xs text-muted">
            Hours as posted: Mon–Sat 9am–8pm, Sunday 10am–7pm. A 9 a.m. open is a political choice.
          </figcaption>
        </figure>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12">
        <div className="space-y-6 text-[1.05rem] leading-relaxed text-ink-soft lg:col-span-8">
          <p>
            The Free Bronx Leaf is an independent magazine. We still need the
            lights on. BX Buddiez is our presenting sponsor because they are a
            licensed shop we can walk to — CAURD equity, on 3rd Avenue in Melrose,
            the same corridor our editor uses to get to work.
          </p>
          <p>
            The store sits at 2935 3rd Avenue between East 152nd and East 153rd
            Streets. That is a short hop from The Hub, a 6-train ride from Pelham
            Bay, and a 4-train hop from Yankee Stadium. If you are going to a
            game: buy first, ride over, and put it out before Gate 8. You cannot
            smoke inside the Stadium, on the subway, or in Macombs Dam Park.
          </p>
          <h2 className="font-display text-3xl text-ink">What they sell</h2>
          <p>
            Flower, pre-rolls, edibles, vapes, concentrates, tinctures, topicals,
            accessories — sourced from licensed New York brands. Adult-use: 21+
            with government ID. No medical card required. Daily state limits
            still apply (three ounces of flower, 24 grams of concentrates).
          </p>
          <h2 className="font-display text-3xl text-ink">Why the license matters</h2>
          <p>
            OCM-CAURD-25-000297 is not a sticker. CAURD is New York’s Conditional
            Adult-Use Retail Dispensary program, written for people and families
            hit hardest by prohibition. In the South Bronx that is the point. If
            a shop cannot show you a number on the state site, it is not a
            dispensary.
          </p>
          <p>
            We still review them. Anthony Ruiz’s score lives on our{" "}
            <Link
              to="/reviews/$slug"
              params={{ slug: "bx-buddiez" }}
              className="underline"
            >
              dedicated review
            </Link>
            {review ? ` (${review.score}/10)` : ""}. Sponsorship buys the banner.
            It does not buy the number.
          </p>
          <h2 className="font-display text-3xl text-ink">Pickup and delivery</h2>
          <p>
            Order ahead at bxbuddiez.com for pickup, or ask the shop about NYC
            delivery. Hours: Monday–Saturday 9am–8pm, Sunday 10am–7pm. Phone{" "}
            {SPONSOR.phone}.
          </p>
          <p>
            Read the{" "}
            <Link to="/editorial" className="underline">
              editorial guidelines
            </Link>{" "}
            if you want to know how we keep the wall between ads and reporting.
          </p>
        </div>
        <aside className="space-y-4 lg:col-span-4">
          <div className="border border-ink bg-paper-2 p-5">
            <h2 className="font-display text-2xl">Visit the shop</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-forest" />
                {SPONSOR.address}
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-forest" />
                {SPONSOR.hours}
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-forest" />
                {SPONSOR.phone}
              </li>
              <li className="flex gap-3">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-forest" />
                License {SPONSOR.license}
              </li>
            </ul>
            <a
              href={SPONSOR.url}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="mt-5 flex min-h-11 items-center justify-center bg-forest text-sm font-semibold tracking-wide text-paper uppercase hover:bg-forest-2"
            >
              Shop BX Buddiez
            </a>
            <Link
              to="/reviews/$slug"
              params={{ slug: "bx-buddiez" }}
              className="mt-2 flex min-h-11 items-center justify-center border border-ink/20 text-sm font-semibold tracking-wide uppercase"
            >
              Read the review
            </Link>
          </div>
        </aside>
      </div>
    </SiteShell>
  );
}
