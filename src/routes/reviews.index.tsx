import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { ScoreBadge } from "@/components/score-bar";
import { reviews } from "@/data";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/reviews/")({
  head: () => ({
    meta: [
      { title: `Dispensary reviews — ${SITE.name}` },
      {
        name: "description",
        content:
          "Independent review of BX Buddiez, a licensed CAURD cannabis dispensary in the South Bronx — product, staff, value, vibe, and equity.",
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const sorted = [...reviews].sort((a, b) => Number(b.featured) - Number(a.featured) || b.score - a.score);
  return (
    <SiteShell seed="reviews">
      <div className="border-b border-ink bg-paper-2">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-copper uppercase">
            The critic
          </p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl">
            Licensed dispensary reviews
          </h1>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Anthony Ruiz shops the store, ID in hand, then scores product, staff,
            value, vibe, and equity. We do not review unlicensed smoke shops. BX
            Buddiez is our presenting sponsor — the review still has to earn its
            number.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {sorted.map((r) => (
            <Link
              key={r.slug}
              to="/reviews/$slug"
              params={{ slug: r.slug }}
              className="group border border-rule bg-paper hover:border-ink"
            >
              <img src={r.image} alt="" className="aspect-[16/9] w-full object-cover" />
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-2xl leading-tight group-hover:text-forest">
                      {r.name}
                    </h2>
                    <p className="mt-1 text-xs text-muted">
                      {r.neighborhood}
                      {r.featured ? " · Presenting sponsor" : ""}
                    </p>
                  </div>
                  <ScoreBadge score={r.score} />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{r.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
