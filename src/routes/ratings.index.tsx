import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { ScoreBadge } from "@/components/score-bar";
import { ratings } from "@/data";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/ratings/")({
  head: () => ({
    meta: [
      { title: `Bronx cannabis-friendliness index — ${SITE.name}` },
      {
        name: "description",
        content:
          "Cannabis-friendliness ratings for Bronx parks, neighborhoods, Yankee Stadium, Arthur Avenue, City Island, and the 6 train — scored against actual NY law.",
      },
    ],
  }),
  component: RatingsPage,
});

function RatingsPage() {
  const sorted = [...ratings].sort((a, b) => b.score - a.score);
  return (
    <SiteShell seed="ratings">
      <div className="border-b border-ink bg-paper-2">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-copper uppercase">
            The index
          </p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl">
            Cannabis-friendliness ratings
          </h1>
          <p className="mt-3 max-w-2xl text-ink-soft">
            This is not a permission slip. New York lets adults 21+ smoke cannabis
            where cigarette smoking is allowed — mostly ordinary sidewalks and
            private homes, if your lease says so. You cannot smoke in NYC parks,
            beaches, playgrounds, plazas, the subway, cars, or Yankee Stadium.
            A high score means the block is easy to get to, has licensed shops
            nearby, and feels like a place adults hang out. It does not mean light
            up on the lawn.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {sorted.map((p) => (
            <Link
              key={p.slug}
              to="/ratings/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden border border-rule hover:border-ink"
            >
              <img src={p.image} alt="" className="aspect-[16/8] w-full object-cover" />
              <div className="flex items-start justify-between gap-3 p-4">
                <div>
                  <p className="text-[10px] tracking-[0.16em] text-muted uppercase">{p.kind}</p>
                  <h2 className="font-display text-2xl leading-tight group-hover:text-forest">
                    {p.name}
                  </h2>
                  <p className="mt-1 text-sm text-ink-soft">{p.summary}</p>
                </div>
                <ScoreBadge score={p.score} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
