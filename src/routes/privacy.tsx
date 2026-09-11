import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy policy — ${SITE.name}` },
      {
        name: "description",
        content: "How The Free Bronx Leaf handles newsletter emails and analytics.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteShell seed="privacy">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-copper uppercase">
          Legal
        </p>
        <h1 className="mt-2 font-display text-4xl">Privacy policy</h1>
        <p className="mt-2 text-sm text-muted">Effective September 1, 2026</p>
        <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
          <p>
            The Free Bronx Leaf is a reader-supported, sponsor-underwritten
            magazine. We collect as little as we can.
          </p>
          <h2 className="font-display text-2xl text-ink">What stays on your device</h2>
          <p>
            The free dispatch form stores the email you typed in localStorage on
            this device only. Sponsorship inquiries stay on this device the same
            way — this preview does not email a server. Clear your browser data
            and they are gone.
          </p>
          <h2 className="font-display text-2xl text-ink">What we do not do</h2>
          <p>
            We do not sell lists. We do not run third-party ad exchanges. We do
            not ask for your ID. Buying cannabis happens on the sponsor’s own
            site, under their own policy, at{" "}
            <a href="https://bxbuddiez.com/" className="underline" rel="sponsored">
              bxbuddiez.com
            </a>
            .
          </p>
          <h2 className="font-display text-2xl text-ink">Outbound links</h2>
          <p>
            Stories link to News 12, OCM, Reddit, shops, and city agencies. Those
            sites have their own rules. Sponsored links are marked{" "}
            <code className="text-sm">rel="sponsored"</code>.
          </p>
          <h2 className="font-display text-2xl text-ink">Contact</h2>
          <p>
            Privacy questions: {SITE.email}. Melrose, Bronx, NY 10455.
          </p>
        </div>
      </div>
    </SiteShell>
  );
}
