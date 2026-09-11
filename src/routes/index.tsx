import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { ArticleCard } from "@/components/article-card";
import { ScoreBadge } from "@/components/score-bar";
import { JsonLd } from "@/components/json-ld";
import { LatestHeadlines, RelatedList } from "@/components/latest-headlines";
import { SITE, SPONSOR } from "@/data/site";
import { reviews, ratings, featuredArticles, latestArticles, writers } from "@/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = featuredArticles();
  const all = latestArticles();
  const hero = featured[0] ?? all[0];
  const used = new Set(hero ? [hero.slug] : []);
  const related = featured.filter((a) => !used.has(a.slug)).slice(0, 2);
  if (related.length < 2) {
    for (const article of all) {
      if (used.has(article.slug) || related.some((r) => r.slug === article.slug)) continue;
      related.push(article);
      if (related.length === 2) break;
    }
  }
  related.forEach((a) => used.add(a.slug));
  const headlines = all.filter((a) => !used.has(a.slug)).slice(0, 6);
  headlines.forEach((a) => used.add(a.slug));
  const photoPair = all.filter((a) => !used.has(a.slug)).slice(0, 2);
  photoPair.forEach((a) => used.add(a.slug));
  const more = all.filter((a) => !used.has(a.slug)).slice(0, 6);
  const topRatings = [...ratings].sort((a, b) => b.score - a.score).slice(0, 6);
  const topReviews = [...reviews].sort((a, b) => b.score - a.score).slice(0, 4);

  const org = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: SITE.name,
    description: SITE.description,
    foundingDate: SITE.founded,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bronx",
      addressRegion: "NY",
      postalCode: "10455",
      addressCountry: "US",
    },
    ethicsPolicy: "/editorial",
    publishingPrinciples: "/editorial",
    sponsor: {
      "@type": "Store",
      name: SPONSOR.legalName,
      url: SPONSOR.url,
      telephone: SPONSOR.phone,
      address: SPONSOR.address,
    },
  };

  return (
    <SiteShell seed="home">
      <JsonLd data={org} />

      <div className="mx-auto max-w-6xl px-4 pt-6 pb-2 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {hero ? (
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <ArticleCard article={hero} layout="hero" />
                  <RelatedList articles={related} />
                </div>
                <Link
                  to="/articles/$slug"
                  params={{ slug: hero.slug }}
                  className="block"
                >
                  <img
                    src={hero.hero}
                    alt={hero.heroAlt}
                    className="story-img h-full max-h-[420px] w-full object-cover"
                  />
                </Link>
              </div>
            ) : null}
          </div>
          <div className="lg:col-span-4">
            <LatestHeadlines articles={headlines} />
          </div>
        </div>

        <div className="mt-8 grid gap-8 border-t border-rule pt-8 md:grid-cols-2 lg:grid-cols-12">
          {photoPair.map((article) => (
            <div key={article.slug} className="lg:col-span-6">
              <ArticleCard article={article} layout="photo" />
            </div>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="kicker">Dispensary reviews</p>
            <h2 className="mt-2 font-display text-3xl font-bold">Where we actually shop</h2>
          </div>
          <Link
            to="/reviews"
            className="hidden text-sm font-semibold tracking-wide uppercase sm:inline"
          >
            All reviews
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topReviews.map((r) => (
            <Link
              key={r.slug}
              to="/reviews/$slug"
              params={{ slug: r.slug }}
              className="group"
            >
              <img src={r.image} alt="" className="story-img aspect-[16/10] w-full object-cover" />
              <div className="pt-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="story-hed group-hover:text-forest">{r.name}</h3>
                  <ScoreBadge score={r.score} />
                </div>
                <p className="mt-1 text-xs text-muted">{r.neighborhood}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-rule bg-paper-2">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="kicker">Cannabis-friendliness index</p>
              <h2 className="mt-2 max-w-xl font-display text-3xl font-bold">
                How green is the block — legally, not vibes
              </h2>
            </div>
            <Link
              to="/ratings"
              className="hidden text-sm font-semibold tracking-wide uppercase sm:inline"
            >
              Full index
            </Link>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {topRatings.map((p) => (
              <Link
                key={p.slug}
                to="/ratings/$slug"
                params={{ slug: p.slug }}
                className="flex items-center gap-4 border border-rule bg-paper p-3 hover:border-ink"
              >
                <img src={p.image} alt="" className="size-16 object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-display text-lg leading-tight font-semibold">
                    {p.name}
                  </p>
                  <p className="text-xs text-muted">{p.neighborhood}</p>
                </div>
                <ScoreBadge score={p.score} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="kicker">From the newsroom</p>
            <div className="mt-4">
              {more.map((a) => (
                <ArticleCard key={a.slug} article={a} layout="row" />
              ))}
            </div>
            <Link
              to="/news"
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold tracking-wide text-forest uppercase"
            >
              All news
            </Link>
          </div>
          <aside className="border border-rule p-5 lg:col-span-4">
            <p className="kicker">The newsroom</p>
            <h2 className="mt-2 font-display text-2xl font-bold">Who writes this paper</h2>
            <div className="mt-4 grid grid-cols-3 gap-1">
              {writers.map((w) => (
                <Link
                  key={w.slug}
                  to="/writers/$slug"
                  params={{ slug: w.slug }}
                  className="block"
                >
                  <img
                    src={w.photo}
                    alt={w.name}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </Link>
              ))}
            </div>
            <p className="mt-3 text-sm text-ink-soft">
              Six Bronx writers. Named streets. Named licenses. The sponsor does
              not assign stories.
            </p>
            <Link
              to="/about"
              className="mt-3 block font-display text-lg leading-snug font-semibold hover:text-forest"
            >
              Meet the staff
            </Link>
            <Link
              to="/editorial"
              className="mt-1 block text-sm text-forest underline underline-offset-4"
            >
              Editorial guidelines
            </Link>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
