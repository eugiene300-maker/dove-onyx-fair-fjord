import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { ArticleCard } from "@/components/article-card";
import { latestArticles } from "@/data";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: `News — ${SITE.name}` },
      {
        name: "description",
        content:
          "Bronx cannabis news: licensed dispensaries, raids on unlicensed shops, CAURD equity, delivery, and borough culture.",
      },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  const all = latestArticles();
  return (
    <SiteShell seed="news">
      <div className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="kicker">The paper</p>
          <h1 className="lead-hed mt-2">Bronx cannabis news</h1>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Reported from Mott Haven to City Island. We cover licensed shops, the
            shops that should not be open, and everything cannabis-adjacent in the
            borough. Click any headline to read the full story.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-3xl">
          {all.map((a) => (
            <ArticleCard key={a.slug} article={a} layout="row" />
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
