import { SPONSOR } from "@/data/site";

export function SponsorBanner() {
  return (
    <div className="border-b border-rule bg-paper-2">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-[12px] leading-snug text-ink-soft sm:px-6">
        <span className="font-semibold tracking-[0.16em] text-muted uppercase">
          Presented by
        </span>
        <a
          href={SPONSOR.url}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="font-semibold text-ink hover:text-forest"
        >
          {SPONSOR.name}
        </a>
        <span aria-hidden="true" className="hidden text-muted sm:inline">
          ·
        </span>
        <span>Licensed shop at 2935 3rd Avenue, Melrose</span>
      </div>
    </div>
  );
}
