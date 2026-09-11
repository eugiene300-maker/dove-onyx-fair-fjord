import { Link } from "@tanstack/react-router";
import type { Article } from "@/data/types";
import { relativeTime } from "@/lib/time";

export function LatestHeadlines({ articles }: { articles: Article[] }) {
  return (
    <aside>
      <h2 className="border-b-2 border-ink pb-2 font-sans text-sm font-bold tracking-[0.14em] text-ink uppercase">
        Latest Headlines
      </h2>
      <ol>
        {articles.map((article, i) => (
          <li key={article.slug} className="flex gap-3 border-b border-rule py-3.5">
            <span className="font-display w-6 shrink-0 text-xl leading-none font-bold text-muted">
              {i + 1}
            </span>
            <Link
              to="/articles/$slug"
              params={{ slug: article.slug }}
              className="block min-w-0 hover:text-forest"
            >
              <p className="font-display text-[1.05rem] leading-snug font-semibold">
                {article.title}
              </p>
              <p className="mt-1 text-sm text-muted">{relativeTime(article.published)}</p>
            </Link>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export function RelatedList({ articles }: { articles: Article[] }) {
  if (!articles.length) return null;
  return (
    <div className="mt-6 border-t border-rule pt-4">
      <p className="text-sm font-semibold tracking-wide text-ink uppercase">Related</p>
      <ul className="mt-2 space-y-2">
        {articles.map((article) => (
          <li key={article.slug} className="flex gap-2 text-sm">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ink" />
            <Link
              to="/articles/$slug"
              params={{ slug: article.slug }}
              className="leading-snug hover:text-forest hover:underline"
            >
              {article.title}
              <span className="ml-2 text-muted">{relativeTime(article.published)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
