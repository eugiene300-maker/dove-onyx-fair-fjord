import { Link } from "@tanstack/react-router";
import type { Article } from "@/data/types";
import { getWriter } from "@/data/writers";
import { cn } from "@/lib/utils";
import { formatStoryDateShort, relativeTime } from "@/lib/time";

export function ArticleCard({
  article,
  layout = "grid",
}: {
  article: Article;
  layout?: "grid" | "row" | "hero" | "photo";
}) {
  const writer = getWriter(article.author);
  const date = formatStoryDateShort(article.published);

  if (layout === "hero") {
    return (
      <article>
        <p className="kicker">
          {article.kicker ?? article.category}
          {article.neighborhood ? ` · ${article.neighborhood}` : ""}
        </p>
        <h2 className="lead-hed mt-2">
          <Link
            to="/articles/$slug"
            params={{ slug: article.slug }}
            className="hover:text-forest"
          >
            {article.title}
          </Link>
        </h2>
        <p className="mt-3 text-base leading-relaxed text-ink-soft">{article.dek}</p>
        <p className="mt-3 text-sm text-muted">
          {writer?.name} · {date} · {article.readMinutes} min read
        </p>
        <Link
          to="/articles/$slug"
          params={{ slug: article.slug }}
          className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-forest hover:underline"
        >
          Read the full story
        </Link>
      </article>
    );
  }

  if (layout === "row") {
    return (
      <Link
        to="/articles/$slug"
        params={{ slug: article.slug }}
        className="group grid grid-cols-[110px_1fr] gap-4 border-b border-rule py-4 sm:grid-cols-[160px_1fr]"
      >
        <img
          src={article.hero}
          alt=""
          className="story-img aspect-[4/3] h-full w-full object-cover"
        />
        <div>
          <p className="kicker">{article.category}</p>
          <h3 className="story-hed mt-1 text-ink group-hover:text-forest">{article.title}</h3>
          <p className="mt-1 hidden text-sm leading-relaxed text-ink-soft sm:block">
            {article.dek}
          </p>
          <p className="mt-2 text-xs text-muted">
            {writer?.name} · {date}
          </p>
        </div>
      </Link>
    );
  }

  if (layout === "photo") {
    return (
      <Link to="/articles/$slug" params={{ slug: article.slug }} className="group block">
        <img
          src={article.hero}
          alt={article.heroAlt}
          className="story-img aspect-[16/10] w-full object-cover"
        />
        <p className="kicker mt-3">{article.category}</p>
        <h3 className="story-hed mt-1 group-hover:text-forest">{article.title}</h3>
      </Link>
    );
  }

  return (
    <Link
      to="/articles/$slug"
      params={{ slug: article.slug }}
      className={cn("group flex flex-col")}
    >
      <img
        src={article.hero}
        alt=""
        className="story-img aspect-[16/10] w-full object-cover"
      />
      <p className="kicker mt-3">
        {article.category}
        {article.neighborhood ? ` · ${article.neighborhood}` : ""}
      </p>
      <h3 className="story-hed mt-1 text-ink group-hover:text-forest">{article.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">{article.dek}</p>
      <p className="mt-2 text-xs text-muted">
        {writer?.name} · {relativeTime(article.published)}
      </p>
    </Link>
  );
}
