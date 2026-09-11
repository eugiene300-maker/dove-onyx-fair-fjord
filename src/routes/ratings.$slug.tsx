import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { ArticleBody } from "@/components/article-body";
import { ScoreBar, ScoreBadge } from "@/components/score-bar";
import { getRating } from "@/data";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/ratings/$slug")({
  loader: ({ params }) => {
    const place = getRating(params.slug);
    if (!place) throw notFound();
    return { place };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.place.name} cannabis-friendliness — ${SITE.name}`
          : SITE.name,
      },
      { name: "description", content: loaderData?.place.summary },
    ],
  }),
  component: RatingPage,
  notFoundComponent: () => (
    <SiteShell seed="404">
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="font-display text-4xl">Place not found</h1>
        <Link to="/ratings" className="mt-4 inline-block text-forest underline">
          Full index
        </Link>
      </div>
    </SiteShell>
  ),
});

function RatingPage() {
  const { place } = Route.useLoaderData();
  return (
    <SiteShell seed={place.slug}>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-copper uppercase">
          {place.kind} · {place.neighborhood}
        </p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <h1 className="font-display text-4xl sm:text-5xl">{place.name}</h1>
          <ScoreBadge score={place.score} />
        </div>
        <p className="mt-3 max-w-2xl text-lg text-ink-soft">{place.summary}</p>
      </div>
      <img
        src={place.image}
        alt={place.imageAlt}
        className="mx-auto mt-8 w-full max-w-5xl px-4 sm:px-6"
      />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="mb-8 space-y-3 border border-rule p-4">
            {place.criteria.map((c) => (
              <div key={c.label}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-medium">{c.label}</span>
                  <span className="tabular-nums text-muted">{c.score}/10</span>
                </div>
                <ScoreBar score={c.score} />
                <p className="mt-1 text-xs text-muted">{c.note}</p>
              </div>
            ))}
        </div>
        <ArticleBody blocks={place.body} />
        <aside className="mt-8 border border-brick/30 bg-paper-2 p-4 text-sm text-ink-soft">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-brick uppercase">
            Legal note
          </p>
          <p className="mt-2">{place.legalNote}</p>
        </aside>
      </div>
    </SiteShell>
  );
}
