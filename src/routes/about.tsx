import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { writers } from "@/data/writers";
import { SITE } from "@/data/site";
import { JsonLd } from "@/components/json-ld";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About the newsroom — ${SITE.name}` },
      {
        name: "description",
        content:
          "The Free Bronx Leaf is an independent cannabis news magazine based in Melrose. Meet the local writers, our sponsor wall, and why the magazine is free.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const people = writers.map((w) => ({
    "@type": "Person",
    name: w.name,
    jobTitle: w.role,
    address: w.neighborhood + ", Bronx, NY",
  }));

  return (
    <SiteShell seed="about">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: `About ${SITE.name}`,
          mainEntity: {
            "@type": "NewsMediaOrganization",
            name: SITE.name,
            employee: people,
          },
        }}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-copper uppercase">
          The newsroom
        </p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">
          A free paper for a borough that already knew the plant
        </h1>
        <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
          <p>
            The Free Bronx Leaf launched in 2026 from Melrose. We are not a
            brand blog, not a Manhattan cannabis newsletter with a Bronx
            paragraph, and not a shop masquerading as journalism. We are a small
            local magazine that covers licensed cannabis the way The Riverdale
            Press covers zoning and Bronx Times covers the precinct: named
            streets, named people, named licenses.
          </p>
          <p>
            “Free” is in the name on purpose. Paywalls do not belong on
            information about a market that was illegal on these same blocks for
            fifty years. The lights stay on because BX Buddiez, a licensed shop
            on 3rd Avenue in Melrose, is our presenting sponsor. They do not
            assign stories. They do not see copy before it runs. That wall is
            written down in our{" "}
            <Link to="/editorial" className="underline">
              editorial guidelines
            </Link>
            . Bronx businesses that want to underwrite a section can{" "}
            <Link to="/sponsorship" className="underline">
              inquire about sponsorship
            </Link>
            — that desk is advertising, not the newsroom.
          </p>
          <p>
            We rate parks and neighborhoods for cannabis friendliness because
            that is how people actually live. We also print the law: you cannot
            smoke in NYC parks, on the subway, in cars, or inside Yankee Stadium.
            Ordinary sidewalks generally follow the same rule as cigarettes.
            A high score is not a hall pass.
          </p>
          <p>
            Tips, corrections, and shop owners who want to be reviewed:{" "}
            <a href={`mailto:${SITE.tips}`} className="underline">
              {SITE.tips}
            </a>
            . Newsroom: {SITE.email}.
          </p>
        </div>
      </div>
      <section className="border-t border-ink bg-paper-2">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="font-display text-3xl">The staff</h2>
          <p className="mt-2 max-w-xl text-sm text-ink-soft">
            Every byline links here. If a story is wrong, email the writer.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {writers.map((w) => (
              <Link
                key={w.slug}
                to="/writers/$slug"
                params={{ slug: w.slug }}
                className="group bg-paper"
              >
                <img src={w.photo} alt={w.name} className="aspect-[3/4] w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-display text-2xl group-hover:text-forest">{w.name}</h3>
                  <p className="text-xs tracking-wide text-copper uppercase">
                    {w.role} · {w.neighborhood}
                  </p>
                  <p className="mt-2 line-clamp-4 text-sm text-ink-soft">{w.bio}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
