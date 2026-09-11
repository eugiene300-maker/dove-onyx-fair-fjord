import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteShell } from "@/components/site-shell";
import { SITE, SPONSOR } from "@/data/site";
import { writers } from "@/data/writers";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact & tips — ${SITE.name}` },
      { name: "description", content: "Send a tip, a correction, or a shop to review." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <SiteShell seed="contact">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-copper uppercase">
            Newsroom
          </p>
          <h1 className="mt-2 font-display text-4xl">Contact & tips</h1>
          <p className="mt-4 text-ink-soft">
            Unlicensed shop sealed on your block? New CAURD ribbon-cutting?
            Correction on a score? We read everything. We do not take product
            for coverage.
          </p>
          {sent ? (
            <p className="mt-8 border border-forest bg-paper-2 p-4 text-forest">
              Got it. If we can use this, a reporter will follow up. Shop questions
              go to BX Buddiez on 3rd Avenue, not the newsroom.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Neighborhood" name="nabe" />
              <label className="block text-sm font-medium">
                Tip or letter
                <textarea
                  name="body"
                  required
                  rows={6}
                  className="mt-1 w-full border border-ink/20 bg-paper px-3 py-2 text-sm outline-none focus:border-forest"
                />
              </label>
              <button
                type="submit"
                className="min-h-11 bg-ink px-5 text-sm font-semibold tracking-wide text-paper uppercase hover:bg-forest"
              >
                Send to the desk
              </button>
            </form>
          )}
        </div>
        <aside className="space-y-6 text-sm text-ink-soft lg:col-span-5">
          <div className="border border-rule p-5">
            <h2 className="font-display text-2xl text-ink">Direct lines</h2>
            <p className="mt-3">
              Newsroom · {SITE.email}
              <br />
              Tips · {SITE.tips}
              <br />
              {SITE.address}
            </p>
            <p className="mt-3">
              Presenting sponsor (not the newsroom): {SPONSOR.phone} ·{" "}
              <a href={SPONSOR.url} className="underline" rel="sponsored" target="_blank">
                bxbuddiez.com
              </a>
            </p>
          </div>
          <div className="border border-rule p-5">
            <h2 className="font-display text-2xl text-ink">Writers</h2>
            <ul className="mt-3 space-y-1">
              {writers.map((w) => (
                <li key={w.slug}>
                  {w.name}, {w.role} — {w.email}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </SiteShell>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <input
        name={name}
        type={type}
        required
        className="mt-1 min-h-11 w-full border border-ink/20 bg-paper px-3 text-sm outline-none focus:border-forest"
      />
    </label>
  );
}
