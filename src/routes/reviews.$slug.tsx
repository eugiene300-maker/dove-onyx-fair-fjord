import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { ArticleBody } from "@/components/article-body";
import { ScoreBar, ScoreBadge } from "@/components/score-bar";
import { JsonLd } from "@/components/json-ld";
import { getReview } from "@/data";
import { getWriter } from "@/data/writers";
import { SITE, SPONSOR } from "@/data/site";

export const Route = createFileRoute("/reviews/$slug")({
  loader: ({ params }) => {
    const review = getReview(params.slug);
    if (!review) throw notFound();
    return { review };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.review.name} review — ${SITE.name}`
          : SITE.name,
      },
      { name: "description", content: loaderData?.review.excerpt },
    ],
  }),
  component: ReviewPage,
  notFoundComponent: () => (
    <SiteShell seed="404">
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="font-display text-4xl">Review not found</h1>
        <Link to="/reviews" className="mt-4 inline-block text-forest underline">
          All reviews
        </Link>
      </div>
    </SiteShell>
  ),
});

function ReviewPage() {
  const { review } = Route.useLoaderData();
  const writer = getWriter(review.author);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Store",
      name: review.name,
      address: review.address,
      telephone: review.phone,
      url: review.slug === "bx-buddiez" ? SPONSOR.url : undefined,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.score,
      bestRating: 10,
    },
    author: { "@type": "Person", name: writer?.name },
    publisher: { "@type": "NewsMediaOrganization", name: SITE.name },
    sponsor: { "@type": "Organization", name: SPONSOR.legalName, url: SPONSOR.url },
  };

  return (
    <SiteShell seed={review.slug}>
      <JsonLd data={schema} />
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-copper uppercase">
          Dispensary review · {review.neighborhood}
        </p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <h1 className="font-display text-4xl sm:text-5xl">{review.name}</h1>
          <ScoreBadge score={review.score} />
        </div>
        <p className="mt-3 max-w-2xl text-ink-soft">{review.excerpt}</p>
        <p className="mt-2 text-sm text-muted">
          {review.address}
          {review.phone ? ` · ${review.phone}` : ""} · {review.hours}
        </p>
      </div>
      <img
        src={review.image}
        alt={review.imageAlt}
        className="mx-auto mt-8 max-w-5xl px-4 sm:px-6"
      />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div>
          <dl className="mb-8 grid gap-3 sm:grid-cols-2">
            {Object.entries(review.scores).map(([k, v]) => (
              <div key={k} className="border border-rule p-3">
                <dt className="text-[11px] tracking-[0.14em] text-muted uppercase">{k}</dt>
                <dd className="mt-2">
                  <ScoreBar score={v} />
                </dd>
              </div>
            ))}
          </dl>
          <ArticleBody blocks={review.body} dropCap />
          {review.website && review.slug === "bx-buddiez" ? (
            <p className="mt-8 text-sm text-muted">
              Visit{" "}
              <a
                href={review.website}
                className="text-forest underline"
                rel="sponsored noopener noreferrer"
                target="_blank"
              >
                {review.name}
              </a>{" "}
              at 2935 3rd Avenue in Melrose. The shop is our presenting sponsor;
              the score is still the critic's.
            </p>
          ) : null}
        </div>
      </div>
    </SiteShell>
  );
}
