import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { ArticleCard } from "@/components/article-card";
import { articles, reviews, ratings } from "@/data";
import { SITE } from "@/data/site";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: `Search — ${SITE.name}` },
      { name: "description", content: "Search Bronx cannabis news, reviews, and ratings." },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const results = useMemo(() => {
    if (query.length < 2) return { articles: articles.slice(0, 6), reviews: [], ratings: [] };
    return {
      articles: articles.filter((a) =>
        (a.title + a.dek + a.tags.join(" ") + a.category).toLowerCase().includes(query),
      ),
      reviews: reviews.filter((r) =>
        (r.name + r.neighborhood + r.excerpt).toLowerCase().includes(query),
      ),
      ratings: ratings.filter((p) =>
        (p.name + p.neighborhood + p.summary).toLowerCase().includes(query),
      ),
    };
  }, [query]);

  return (
    <SiteShell seed="search">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-display text-4xl">Search the Leaf</h1>
        <label className="mt-6 block">
          <span className="sr-only">Search</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try Melrose, delivery, Yankee Stadium, CAURD…"
            className="min-h-12 w-full border-b-2 border-ink bg-transparent text-lg outline-none"
            autoFocus
          />
        </label>

        <div className="mt-10 space-y-8">
          {results.articles.map((a) => (
            <ArticleCard key={a.slug} article={a} layout="row" />
          ))}
          {results.reviews.map((r) => (
            <Link
              key={r.slug}
              to="/reviews/$slug"
              params={{ slug: r.slug }}
              className="block border-b border-rule py-3"
            >
              <p className="text-[10px] tracking-[0.16em] text-copper uppercase">Review</p>
              <p className="font-display text-xl">{r.name}</p>
            </Link>
          ))}
          {results.ratings.map((p) => (
            <Link
              key={p.slug}
              to="/ratings/$slug"
              params={{ slug: p.slug }}
              className="block border-b border-rule py-3"
            >
              <p className="text-[10px] tracking-[0.16em] text-copper uppercase">Rating</p>
              <p className="font-display text-xl">{p.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
