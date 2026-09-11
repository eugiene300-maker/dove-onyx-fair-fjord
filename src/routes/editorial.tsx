import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/editorial")({
  head: () => ({
    meta: [
      { title: `Editorial guidelines — ${SITE.name}` },
      {
        name: "description",
        content:
          "How The Free Bronx Leaf reports on cannabis: corrections, sponsor wall, licensing, and what we will not do for a score.",
      },
    ],
  }),
  component: EditorialPage,
});

function EditorialPage() {
  return (
    <SiteShell seed="editorial">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-copper uppercase">
          Standards
        </p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">Editorial guidelines</h1>
        <p className="mt-4 text-lg text-ink-soft">
          Updated August 2026. These rules apply to every story, review,
          and cannabis-friendliness rating we publish.
        </p>
        <div className="mt-10 space-y-8 text-[1.05rem] leading-relaxed text-ink-soft">
          <section>
            <h2 className="font-display text-2xl text-ink">1. Who we are</h2>
            <p className="mt-3">
              The Free Bronx Leaf is an independent news magazine covering
              adult-use cannabis and cannabis-adjacent life in the Bronx. We are
              not a retailer. We do not sell flower. We are not the Office of
              Cannabis Management. Our{" "}
              <Link to="/about" className="underline">
                about page
              </Link>{" "}
              names the staff.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">2. The sponsor wall</h2>
            <p className="mt-3">
              BX Buddiez is the presenting sponsor. Their name appears on a
              banner across the site. That is advertising. It is labeled
              “Presented by.” They do not assign stories, kill stories, or see
              reviews before publication. If a review of BX Buddiez runs, it is
              reported like any other shop — in-store visit, ID check, scored
              rubric.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">3. Licensed vs. unlicensed</h2>
            <p className="mt-3">
              We do not treat unlicensed smoke shops as equivalent businesses.
              We will report raids, sealing orders, and neighborhood impact. We
              will not publish “menus” or directions that help an illegal shop
              sell. When we say legal weed in the Bronx, we mean an OCM license
              you can look up.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">4. Reviews and ratings</h2>
            <p className="mt-3">
              Dispensary reviews require an in-person visit by the critic.
              Cannabis-friendliness ratings for parks and venues are not
              invitations to break the Smoke-Free Air Act. Parks, beaches,
              playgrounds, the Zoo, NYBG, Wave Hill, and the MTA score low
              because smoking there is illegal. We print that in the legal note
              on every rating.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">5. Sources and social</h2>
            <p className="mt-3">
              Reddit, Facebook groups, and X are tips, not facts. When we
              round up neighborhood talk we say so. On-the-record names get
              asked. Anonymous quotes are for people who would lose housing or
              work.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">6. Corrections</h2>
            <p className="mt-3">
              Email {SITE.email}. We correct in the story, not buried in a
              footnote. License numbers, hours, and addresses are checked against
              public OCM data and the shop.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">7. Harm</h2>
            <p className="mt-3">
              Adults 21+ only. We do not give medical advice. If you are worried
              about your use, New York’s Hopeny line is 1-877-846-7369 or text
              HOPENY. Poison control: 1-800-222-1222.
            </p>
          </section>
        </div>
      </div>
    </SiteShell>
  );
}
