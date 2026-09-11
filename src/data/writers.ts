import type { Writer } from "./types.ts";

export const writers: Writer[] = [
  {
    slug: "marisol-vega",
    name: "Marisol Vega",
    role: "Editor-in-Chief",
    neighborhood: "Mott Haven",
    photo: "/images/writers/marisol-vega.jpg",
    email: "marisol@freebronxleaf.com",
    bio: "Marisol grew up on East 138th Street and spent a decade covering housing, small business, and the South Bronx waterfront for bilingual weeklies before founding The Free Bronx Leaf in 2026. She still walks the 6 train corridor to the newsroom two mornings a week. Her beat: how legal cannabis actually lands in the neighborhoods that paid the highest price for prohibition.",
  },
  {
    slug: "darius-colon",
    name: "Darius Colon",
    role: "Senior Reporter",
    neighborhood: "Fordham",
    photo: "/images/writers/darius-colon.jpg",
    email: "darius@freebronxleaf.com",
    bio: "Darius covers the street-level story: raids on unlicensed shops, delivery culture, Reddit threads, and the gap between Albany policy and what you actually see on Fordham Road. He previously reported nightlife and transit for Bronx community papers and still rides the B/D to work.",
  },
  {
    slug: "keisha-barnes",
    name: "Keisha Barnes",
    role: "Culture Editor",
    neighborhood: "Soundview",
    photo: "/images/writers/keisha-barnes.jpg",
    email: "keisha@freebronxleaf.com",
    bio: "Keisha writes about music, murals, Yankee Stadium nights, and the social rituals around cannabis in the Bronx. Before the Leaf she programmed community radio out of a studio above a beauty supply on Westchester Avenue.",
  },
  {
    slug: "anthony-ruiz",
    name: "Anthony Ruiz",
    role: "Dispensary Critic",
    neighborhood: "Melrose",
    photo: "/images/writers/anthony-ruiz.jpg",
    email: "anthony@freebronxleaf.com",
    bio: "Anthony reviews licensed dispensaries the way a restaurant critic reviews kitchens: product, staff, value, vibe, and whether the shop is actually of the neighborhood. He lives six blocks from 3rd Avenue and will not score a store he has not shopped himself, ID in hand.",
  },
  {
    slug: "lena-park",
    name: "Lena Park",
    role: "Food & Place Writer",
    neighborhood: "Belmont",
    photo: "/images/writers/lena-park.jpg",
    email: "lena@freebronxleaf.com",
    bio: "Lena maps the Bronx as a cannabis-adjacent city: Arthur Avenue dinners, City Island docks, Wave Hill lawns, and which bakeries will side-eye a bag of legal flower. She treats friendliness ratings as reporting, not a vibe check.",
  },
  {
    slug: "jamal-wright",
    name: "Jamal Wright",
    role: "Policy & Equity Editor",
    neighborhood: "Highbridge",
    photo: "/images/writers/jamal-wright.jpg",
    email: "jamal@freebronxleaf.com",
    bio: "Jamal spent years in reentry advocacy before cannabis legalization. He explains CAURD licenses, school-buffer fights, and the Bronx Cannabis Hub without the Albany jargon. If a story is about who gets to own a shop, it crosses his desk.",
  },
];

export function getWriter(slug: string) {
  return writers.find((w) => w.slug === slug);
}
