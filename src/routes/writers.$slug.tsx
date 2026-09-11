import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/data";
import { getWriter, writers } from "@/data/writers";
import { SITE } from "@/data/site";
import { JsonLd } from "@/components/json-ld";

export const Route = createFileRoute("/writers/$slug")({
  loader: ({ params }) => {
    const writer = getWriter(params.slug);
    if (!writer) throw notFound();
    return { writer };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.writer.name} — ${SITE.name}`
          : SITE.name,
      },
      { name: "description", content: loaderData?.writer.bio },
    ],
  }),
  component: WriterPage,
  notFoundComponent: () => (
    <SiteShell seed="404">
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="font-display text-4xl">Writer not found</h1>
        <Link to="/about" className="mt-4 inline-block text-forest underline">
          The newsroom
        </Link>
      </div>
    </SiteShell>
  ),
});

function WriterPage() {
  const { writer } = Route.useLoaderData();
  const bylines = articles.filter((a) => a.author === writer.slug);
  const others = writers.filter((w) => w.slug !== writer.slug);

  return (
    <SiteShell seed={writer.slug}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: writer.name,
          jobTitle: writer.role,
          email: writer.email,
          worksFor: { "@type": "NewsMediaOrganization", name: SITE.name },
          homeLocation: writer.neighborhood + ", Bronx, NY",
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <img src={writer.photo} alt={writer.name} className="w-full object-cover" />
          <h1 className="mt-4 font-display text-4xl">{writer.name}</h1>
          <p className="text-sm tracking-wide text-copper uppercase">
            {writer.role} · {writer.neighborhood}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">{writer.bio}</p>
          <p className="mt-3 text-sm">
            <a href={`mailto:${writer.email}`} className="underline">
              {writer.email}
            </a>
          </p>
          <p className="mt-2 text-xs text-muted">
            Bylines follow our{" "}
            <Link to="/editorial" className="underline">
              editorial guidelines
            </Link>
            .
          </p>
        </div>
        <div className="lg:col-span-5">
          <h2 className="font-display text-2xl">Stories</h2>
          {bylines.map((a) => (
            <ArticleCard key={a.slug} article={a} layout="row" />
          ))}
          {!bylines.length ? (
            <p className="mt-4 text-sm text-muted">More work from this desk soon.</p>
          ) : null}
          <div className="mt-8">
            <p className="text-[11px] tracking-[0.16em] text-muted uppercase">Also on staff</p>
            <ul className="mt-2 space-y-1 text-sm">
              {others.map((w) => (
                <li key={w.slug}>
                  <Link to="/writers/$slug" params={{ slug: w.slug }} className="hover:text-forest">
                    {w.name} — {w.role}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
