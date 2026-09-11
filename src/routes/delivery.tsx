import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { deliveryServices, articles } from "@/data";
import { SITE, SPONSOR } from "@/data/site";
import { ArticleCard } from "@/components/article-card";
import { JsonLd } from "@/components/json-ld";

export const Route = createFileRoute("/delivery")({
  head: () => ({
    meta: [
      { title: `Bronx weed delivery — ${SITE.name}` },
      {
        name: "description",
        content:
          "Licensed cannabis delivery in the Bronx: who actually shows up, Parkchester porch pirates, and why Instagram menus are not the play.",
      },
    ],
  }),
  component: DeliveryPage,
});

function DeliveryPage() {
  const related = articles.filter((a) => a.category === "Delivery").slice(0, 3);
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does licensed weed delivery exist in the Bronx?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Adult-use licensed dispensaries, including BX Buddiez in Melrose, offer NYC delivery. Medical-only delivery has thinned out.",
        },
      },
      {
        "@type": "Question",
        name: "Is Instagram weed delivery legal in the Bronx?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If the seller is not a New York OCM-licensed retailer, no. Unlicensed delivery is a raid waiting to happen and the product is untested.",
        },
      },
    ],
  };

  return (
    <SiteShell seed="delivery">
      <JsonLd data={faq} />
      <div className="relative min-h-[320px] overflow-hidden bg-ink text-paper">
        <img
          src="/images/places/bronx-rooftops-el.jpg"
          alt="Bronx rooftops and the elevated line — the geography licensed delivery actually has to know"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="relative mx-auto flex min-h-[320px] max-w-6xl items-end px-4 py-10 sm:px-6">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-copper uppercase">
              Delivery desk
            </p>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl">
              Weed delivery in the Bronx
            </h1>
            <p className="mt-3 max-w-xl text-paper/85">
              Licensed, ID-checked, and actually arriving. The old medical-delivery
              network mostly left the borough. Adult-use shops filled the gap —
              if you order from a licensed shop that actually knows the Bronx map.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h2 className="font-display text-3xl">Who we would actually order from</h2>
          <div className="mt-6 divide-y divide-rule border border-rule">
            {deliveryServices.map((d) => (
              <article key={d.slug} className="p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl">{d.name}</h3>
                  <span
                    className={
                      d.licensed
                        ? "text-[11px] font-semibold tracking-wide text-forest uppercase"
                        : "text-[11px] font-semibold tracking-wide text-brick uppercase"
                    }
                  >
                    {d.licensed ? "OCM licensed" : "Not licensed — avoid"}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {d.coverage} · {d.hours}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{d.notes}</p>
                {d.website && d.slug.includes("bx-buddiez") ? (
                  <a
                    href={d.website}
                    className="mt-3 inline-block text-sm font-semibold text-forest underline"
                    rel="sponsored noopener noreferrer"
                    target="_blank"
                  >
                    Order licensed delivery from BX Buddiez
                  </a>
                ) : null}
              </article>
            ))}
          </div>

          <div className="mt-10 space-y-4 text-[1.05rem] leading-relaxed text-ink-soft">
            <h2 className="font-display text-2xl text-ink">How Bronx delivery actually works</h2>
            <p>
              New York lets licensed adult-use retailers deliver. You still need to
              be 21 with government ID at the door. The courier is not supposed to
              leave a bag on a Parkchester stoop — which is why the famous r/bronx
              “laced weed” door note was a neighborhood comedy, not a business model.
            </p>
            <p>
              Medical patients used to lean on Registered Organization routes and a handful of out-of-borough
              services. Those routes dried up. If you live in Riverdale, Throgs Neck,
              or the South Bronx now, the reliable move is licensed delivery from
              a CAURD shop that already knows the map. BX Buddiez in Melrose is
              the one we mention because they actually run it.
            </p>
            <p>
              Do not buy from a Telegram menu, a smoke-shop Instagram, or a guy on
              the 6. Untested product is how people end up in the News 12 raid roundup.
              Read our{" "}
              <Link to="/articles/$slug" params={{ slug: "bronx-weed-delivery-map" }} className="underline">
                delivery map
              </Link>{" "}
              and the{" "}
              <Link
                to="/articles/$slug"
                params={{ slug: "parkchester-porch-pirates-and-the-laced-weed-note" }}
                className="underline"
              >
                Parkchester porch-pirate story
              </Link>
              .
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
