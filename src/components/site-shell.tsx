import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SponsorBanner } from "@/components/sponsor-banner";

export function SiteShell({
  children,
  seed,
}: {
  children: ReactNode;
  seed: string;
}) {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader />
      <SponsorBanner />
      <main>{children}</main>
      <SiteFooter seed={seed} />
    </div>
  );
}
