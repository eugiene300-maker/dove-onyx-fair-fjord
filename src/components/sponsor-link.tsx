import { SPONSOR, sponsorAnchor } from "@/data/site";
import { cn } from "@/lib/utils";

export function SponsorLink({
  seed,
  className,
  children,
}: {
  seed: string;
  className?: string;
  children?: string;
}) {
  const a = sponsorAnchor(seed);
  return (
    <a
      href={SPONSOR.url}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={cn(
        "underline decoration-copper/70 decoration-1 underline-offset-4 transition-colors hover:text-forest hover:decoration-forest",
        className,
      )}
    >
      {children ?? a.text}
    </a>
  );
}

export function SponsorChip({ seed }: { seed: string }) {
  const a = sponsorAnchor(seed);
  return (
    <a
      href={SPONSOR.url}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className="inline-flex min-h-11 items-center border border-forest bg-forest px-3 py-2 text-[11px] font-semibold tracking-[0.14em] text-paper uppercase transition-colors hover:bg-forest-2"
    >
      {a.text}
    </a>
  );
}
