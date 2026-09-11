import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { ArticleBody } from "@/components/article-body";
import { ArticleCard } from "@/components/article-card";
import { JsonLd } from "@/components/json-ld";
import { LatestHeadlines } from "@/components/latest-headlines";
import { articles, getArticle, latestArticles } from "@/data";
import { getWriter } from "@/data/writers";
import { SITE, SPONSOR } from "@/data/site";
import { formatStoryDate } from "@/lib/time";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const article = loaderData?.article;
    return {
      meta: [
        { title: article ? `${article.title} — ${SITE.name}` : SITE.name },
        { name: "description", content: article?.dek ?? SITE.description },
        { name: "author", content: article ? getWriter(article.author)?.name : undefined },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <SiteShell seed="404">
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="font-display text-4xl font-bold">Story not found</h1>
        <Link to="/news" className="mt-4 inline-block text-forest underline">
          Back to news
        </Link>
      </div>
    </SiteShell>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const writer = getWriter(article.author);
  const date = formatStoryDate(article.published);
  const related = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);
  const moreHeadlines = latestArticles()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 6);

  const news = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.dek,
    image: article.hero,
    datePublished: article.published,
    author: {
      "@type": "Person",
      name: writer?.name,
      jobTitle: writer?.role,
      url: `/writers/${writer?.slug}`,
    },
    publisher: { "@type": "NewsMediaOrganization", name: SITE.name },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".article-drop"] },
    isAccessibleForFree: true,
    sponsor: { "@type": "Organization", name: SPONSOR.legalName, url: SPONSOR.url },
  };

  return (
    <SiteShell seed={article.slug}>
      <JsonLd data={news} />
      <article>
        <header className="mx-auto max-w-3xl px-4 pt-8 sm:px-6">
          <p className="text-sm text-muted">
            <Link to="/" className="hover:text-forest">
              Home
            </Link>
            <span className="px-2">/</span>
            <Link to="/news" className="hover:text-forest">
              News
            </Link>
            <span className="px-2">/</span>
            {article.category}
          </p>
          <p className="kicker mt-4">
            {article.kicker ?? article.category}
            {article.neighborhood ? ` · ${article.neighborhood}` : ""}
          </p>
          <h1 className="lead-hed mt-3">{article.title}</h1>
          <p className="mt-4 text-xl leading-relaxed text-ink-soft">{article.dek}</p>
          <div className="mt-6 flex items-center gap-3 border-y border-rule py-4">
            {writer ? (
              <Link to="/writers/$slug" params={{ slug: writer.slug }}>
                <img
                  src={writer.photo}
                  alt=""
                  className="size-12 object-cover"
                />
              </Link>
            ) : null}
            <div className="text-sm">
              <p>
                By{" "}
                {writer ? (
                  <Link
                    to="/writers/$slug"
                    params={{ slug: writer.slug }}
                    className="font-semibold text-forest underline-offset-2 hover:underline"
                  >
                    {writer.name}
                  </Link>
                ) : null}
              </p>
              <p className="text-muted">
                {date} · {article.readMinutes} min read ·{" "}
                <Link to="/editorial" className="underline underline-offset-2">
                  Editorial guidelines
                </Link>
              </p>
            </div>
          </div>
        </header>
        <figure className="mx-auto mt-8 max-w-5xl px-4 sm:px-6">
          <img
            src={article.hero}
            alt={article.heroAlt}
            className="story-img w-full object-cover"
          />
          <figcaption className="mt-2 text-sm text-muted">{article.heroAlt}</figcaption>
        </figure>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ArticleBody blocks={article.body} dropCap />
            <p className="mt-10 text-sm text-muted">
              The Free Bronx Leaf is reader-free because local businesses underwrite
              it. Read our{" "}
              <Link to="/about" className="underline">
                about page
              </Link>{" "}
              and{" "}
              <Link to="/editorial" className="underline">
                editorial guidelines
              </Link>
              .
            </p>
          </div>
          <div className="space-y-8 lg:col-span-4">
            <div className="lg:sticky lg:top-6">
              <LatestHeadlines articles={moreHeadlines} />
            </div>
          </div>
        </div>
      </article>
      {related.length ? (
        <section className="border-t border-rule">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <p className="kicker">More in {article.category}</p>
            <div className="mt-5 grid gap-8 sm:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </SiteShell>
  );
}
