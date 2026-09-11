import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import { SiteShell } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { SITE, SPONSOR } from "@/data/site";

export const Route = createFileRoute("/sponsorship")({
  head: () => ({
    meta: [
      {
        title: `Sponsor the paper — advertising & underwriting | ${SITE.name}`,
      },
      {
        name: "description",
        content:
          "Inquire about sponsoring The Free Bronx Leaf. Presenting, section, and display packages for licensed Bronx businesses. Editorial wall in writing.",
      },
    ],
  }),
  component: SponsorshipPage,
});

const PACKAGES = [
  {
    name: "Presenting",
    price: "From $4,800 / month",
    note: "Currently held by BX Buddiez. Waitlist only.",
    items: [
      "Nameplate rail on every page",
      "Dedicated sponsor page",
      "Rotating keyword anchors",
      "One co-branded newsletter mention / month",
    ],
  },
  {
    name: "Section",
    price: "$1,800 / month",
    note: "Reviews, Delivery, or Local ratings.",
    items: [
      "Underwriter line at the top of one desk",
      "Logo on that section index",
      "Two in-story mentions per month, labeled advertised",
    ],
  },
  {
    name: "Display",
    price: "$650 / month",
    note: "Homepage and article-side rail.",
    items: [
      "300×600 rail, four weeks",
      "Mobile strip under the masthead, two days / week",
      "No copy approval. No score influence.",
    ],
  },
  {
    name: "Neighborhood card",
    price: "$275 / issue",
    note: "Single-issue, one ZIP.",
    items: [
      "Business card in the Local index",
      "One-week homepage footer",
      "Good for restaurants, events, services",
    ],
  },
] as const;

const BUSINESS_TYPES = [
  "Licensed cannabis retailer (OCM)",
  "Licensed cannabis brand / cultivator",
  "Restaurant or bar",
  "Event or venue",
  "Professional service (legal, accounting, design)",
  "Retail (non-cannabis)",
  "Delivery or logistics",
  "Community organization",
  "Other",
];

const BUDGETS = [
  "Under $500 / month",
  "$500–$1,500 / month",
  "$1,500–$4,000 / month",
  "$4,000+ / month",
  "Single-issue only",
  "Not sure — need a recommendation",
];

function SponsorshipPage() {
  const [sent, setSent] = useState<null | { ref: string; business: string }>(null);
  const [bizType, setBizType] = useState("");
  const cannabis = bizType.toLowerCase().includes("cannabis");

  const json = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `Sponsor ${SITE.name}`,
      description:
        "Advertising and underwriting inquiries for The Free Bronx Leaf, an independent Bronx cannabis newspaper.",
      publisher: { "@type": "NewsMediaOrganization", name: SITE.name },
    }),
    [],
  );

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const business = String(fd.get("business") || "your business");
    const ref = `FBL-${Date.now().toString(36).toUpperCase()}`;
    const record = {
      ref,
      at: new Date().toISOString(),
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      business,
      type: String(fd.get("type") || ""),
      package: String(fd.get("package") || ""),
    };
    try {
      const prev = JSON.parse(localStorage.getItem("fbl-sponsor-inquiries") || "[]") as unknown[];
      localStorage.setItem("fbl-sponsor-inquiries", JSON.stringify([record, ...prev].slice(0, 20)));
    } catch {
      /* ignore */
    }
    setSent({ ref, business });
  }

  return (
    <SiteShell seed="sponsorship">
      <JsonLd data={json} />
      <div className="border-b border-ink bg-paper-2">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <p className="kicker">Advertising desk</p>
          <h1 className="lead-hed mt-2 max-w-3xl">
            Sponsor a free newspaper the Bronx actually reads
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            The Leaf is free because businesses underwrite it — not because we
            sell scores. Fill in the inquiry. Advertising replies within two
            business days. Newsroom does not see the form.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((pkg) => (
            <article key={pkg.name} className="border border-rule bg-paper p-5">
              <p className="kicker">{pkg.name}</p>
              <p className="mt-2 font-display text-2xl font-bold">{pkg.price}</p>
              <p className="mt-1 text-sm text-muted">{pkg.note}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                {pkg.items.map((item) => (
                  <li key={item} className="border-t border-rule pt-2">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">
          Rates are a starting menu, not a contract. Cannabis advertisers must
          hold a current New York OCM license. Unlicensed retailers will be
          declined.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="font-display text-3xl font-bold">Business inquiry</h2>
          <p className="mt-2 text-ink-soft">
            Tell us who you are. We will send a one-page insert spec and
            available dates. Do not send product. Do not ask for a review.
          </p>

          {sent ? (
            <div className="mt-8 border border-forest bg-paper-2 p-6">
              <p className="kicker">Inquiry received</p>
              <h3 className="mt-2 font-display text-2xl">
                Reference {sent.ref}
              </h3>
              <p className="mt-3 text-ink-soft">
                The advertising desk has {sent.business}. A human will reply to
                the email on the form within two business days, usually from{" "}
                {SITE.advertising}. This does not book space and it does not
                change a score.
              </p>
              <p className="mt-4 text-sm">
                Questions in the meantime:{" "}
                <a href={`mailto:${SITE.advertising}`} className="text-forest underline">
                  {SITE.advertising}
                </a>
              </p>
              <button
                type="button"
                className="mt-6 min-h-11 border border-ink px-4 text-sm font-semibold uppercase"
                onClick={() => setSent(null)}
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
              <Field label="Your name" name="name" autoComplete="name" />
              <Field label="Title / role" name="title" />
              <Field label="Work email" name="email" type="email" autoComplete="email" />
              <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
              <div className="sm:col-span-2">
                <Field label="Business name" name="business" />
              </div>
              <label className="block text-sm font-medium">
                Type of business
                <select
                  name="type"
                  required
                  value={bizType}
                  onChange={(e) => setBizType(e.target.value)}
                  className="mt-1 min-h-11 w-full border border-ink/20 bg-paper px-3 text-sm outline-none focus:border-forest"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {BUSINESS_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>
              <Field label="Neighborhood / ZIP" name="nabe" placeholder="Melrose, 10455" />
              <Field label="Website" name="website" type="url" placeholder="https://" required={false} />
              {cannabis ? (
                <Field
                  label="OCM license number"
                  name="license"
                  placeholder="OCM-CAURD- or OCM-RETAIL-"
                />
              ) : (
                <Field
                  label="OCM license (if cannabis)"
                  name="license"
                  required={false}
                  placeholder="Leave blank if not a cannabis business"
                />
              )}
              <label className="block text-sm font-medium">
                Package of interest
                <select
                  name="package"
                  required
                  className="mt-1 min-h-11 w-full border border-ink/20 bg-paper px-3 text-sm outline-none focus:border-forest"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {PACKAGES.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name} — {p.price}
                    </option>
                  ))}
                  <option value="Not sure">Not sure — recommend one</option>
                </select>
              </label>
              <label className="block text-sm font-medium">
                Monthly budget
                <select
                  name="budget"
                  required
                  className="mt-1 min-h-11 w-full border border-ink/20 bg-paper px-3 text-sm outline-none focus:border-forest"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-medium sm:col-span-2">
                About the business, and what you want the Leaf to carry
                <textarea
                  name="about"
                  required
                  rows={6}
                  minLength={40}
                  placeholder="Who you are, who you serve in the Bronx, and whether you want a rail, a section, or a single issue."
                  className="mt-1 w-full border border-ink/20 bg-paper px-3 py-2 text-sm outline-none focus:border-forest"
                />
              </label>
              <label className="flex items-start gap-3 text-sm text-ink-soft sm:col-span-2">
                <input type="checkbox" name="wall" required className="mt-1 size-4" />
                <span>
                  I understand sponsorship buys space, not a score, and that the{" "}
                  <Link to="/editorial" className="underline">
                    editorial guidelines
                  </Link>{" "}
                  apply. Adults 21+ only. No unlicensed cannabis retail.
                </span>
              </label>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="min-h-11 bg-ink px-6 text-sm font-semibold tracking-wide text-paper uppercase hover:bg-forest"
                >
                  Send inquiry to advertising
                </button>
              </div>
            </form>
          )}
        </div>

        <aside className="space-y-5 lg:col-span-5">
          <div className="border border-ink p-5">
            <p className="kicker">The wall</p>
            <h2 className="mt-2 font-display text-2xl">
              Money does not assign the story
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Presenting-sponsor status is how the lights stay on. It does not
              set a review number, a friendliness rating, or a headline. If you
              need a guaranteed rave, this is the wrong paper. Read the{" "}
              <Link to="/editorial" className="underline">
                guidelines
              </Link>
              .
            </p>
          </div>
          <div className="border border-rule p-5 text-sm text-ink-soft">
            <h2 className="font-display text-2xl text-ink">Who we take</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Licensed New York cannabis businesses with a number on the wall</li>
              <li>Bronx restaurants, venues, services, and events that want 21+ readers</li>
              <li>Agencies placing for a local client — name the client on the form</li>
            </ul>
            <h2 className="mt-6 font-display text-2xl text-ink">Who we will not</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Unlicensed smoke shops, Instagram menus, or “delivery” with no OCM number</li>
              <li>Anyone asking us to bury a raid or inflate an eighth</li>
            </ul>
          </div>
          <div className="border border-rule bg-paper-2 p-5 text-sm">
            <p className="kicker">Current presenting sponsor</p>
            <p className="mt-2 font-display text-xl">{SPONSOR.name}</p>
            <p className="mt-1 text-ink-soft">
              BX Buddiez at 2935 3rd Avenue currently holds presenting. That seat
              is filled. Section and display inventory is open.
            </p>
            <p className="mt-4 text-xs text-muted">
              Advertising desk · {SITE.advertising}
              <br />
              Newsroom (not for ads) · {SITE.email}
            </p>
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
  required = true,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-1 min-h-11 w-full border border-ink/20 bg-paper px-3 text-sm outline-none placeholder:text-muted focus:border-forest"
      />
    </label>
  );
}
