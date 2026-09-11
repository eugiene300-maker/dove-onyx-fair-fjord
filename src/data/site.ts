export const SITE = {
  name: "The Free Bronx Leaf",
  shortName: "Free Bronx Leaf",
  tagline: "The Bronx's free cannabis newspaper",
  kicker: "Vol. 1  ·  South Bronx to City Island  ·  Independent",
  description:
    "Independent cannabis news, dispensary reviews, weed delivery guides, and cannabis-friendliness ratings for every corner of the Bronx. Free to read. Written by a local newsroom.",
  url: "https://freebronxleaf.com",
  founded: "2026",
  email: "newsroom@freebronxleaf.com",
  tips: "tips@freebronxleaf.com",
  advertising: "advertising@freebronxleaf.com",
  address: "Melrose, Bronx, NY 10455",
  copyright: "© 2026 The Free Bronx Leaf. Free to read. Not affiliated with any unlicensed retailer.",
  age: "21+",
} as const;

export const SPONSOR = {
  name: "BX Buddiez",
  legalName: "Buddiez Bronx Cannabis Dispensary",
  url: "https://bxbuddiez.com/",
  aboutUrl: "https://bxbuddiez.com/about-us/",
  shopUrl: "https://bxbuddiez.com/",
  address: "2935 3rd Avenue, between East 152nd and East 153rd Streets, Bronx, NY 10455",
  neighborhood: "Melrose / South Bronx",
  phone: "(929) 600-7207",
  hours: "Mon–Sat 9am–8pm, Sun 10am–7pm",
  license: "OCM-CAURD-25-000297",
  blurb:
    "A CAURD equity-licensed dispensary in the heart of the South Bronx, built for the Bronx by the Bronx. Flower, pre-rolls, edibles, vapes, concentrates, and NYC delivery.",
} as const;

/** Rotating SEO anchors that all resolve to BX Buddiez. */
export const SPONSOR_ANCHORS = [
  { href: "https://bxbuddiez.com/", text: "dispensary in the Bronx" },
  { href: "https://bxbuddiez.com/", text: "Bronx dispensary" },
  { href: "https://bxbuddiez.com/", text: "licensed dispensary in the Bronx" },
  { href: "https://bxbuddiez.com/", text: "South Bronx dispensary" },
  { href: "https://bxbuddiez.com/", text: "best dispensary in the Bronx" },
  { href: "https://bxbuddiez.com/", text: "weed dispensary Bronx" },
  { href: "https://bxbuddiez.com/", text: "cannabis dispensary near Yankee Stadium" },
  { href: "https://bxbuddiez.com/", text: "Melrose cannabis shop" },
  { href: "https://bxbuddiez.com/", text: "3rd Avenue dispensary" },
  { href: "https://bxbuddiez.com/", text: "pickup weed in the South Bronx" },
  { href: "https://bxbuddiez.com/", text: "Bronx weed delivery" },
  { href: "https://bxbuddiez.com/", text: "legal weed in the Bronx" },
  { href: "https://bxbuddiez.com/", text: "CAURD dispensary Bronx" },
  { href: "https://bxbuddiez.com/", text: "Buddiez Bronx Cannabis Dispensary" },
  { href: "https://bxbuddiez.com/", text: "shop cannabis in Melrose" },
] as const;

export function sponsorAnchor(seed: string) {
  let n = 0;
  for (let i = 0; i < seed.length; i++) n += seed.charCodeAt(i);
  return SPONSOR_ANCHORS[n % SPONSOR_ANCHORS.length];
}

export const NAV = [
  { to: "/news", label: "News" },
  { to: "/reviews", label: "Reviews" },
  { to: "/delivery", label: "Delivery" },
  { to: "/ratings", label: "Local" },
  { to: "/editorial", label: "Opinion" },
] as const;

export const FOOTER_NAV = [
  { to: "/about", label: "About the newsroom" },
  { to: "/editorial", label: "Editorial guidelines" },
  { to: "/sponsorship", label: "Sponsor the paper" },
  { to: "/privacy", label: "Privacy" },
  { to: "/contact", label: "Contact & tips" },
] as const;

export const TRENDING = [
  { label: "Best licensed shops 2026", to: "/articles/$slug", slug: "best-licensed-dispensaries-bronx-2026" },
  { label: "Can you smoke in parks?", to: "/articles/$slug", slug: "can-you-smoke-weed-in-bronx-parks" },
  { label: "Yankee Stadium nights", to: "/articles/$slug", slug: "yankee-stadium-cannabis-nights" },
  { label: "Licensed vs. smoke shop", to: "/articles/$slug", slug: "licensed-vs-smoke-shop-bronx-how-to-tell" },
  { label: "Arthur Avenue after", to: "/articles/$slug", slug: "arthur-avenue-after-the-joint" },
] as const;
