export type Category =
  | "News"
  | "Reviews"
  | "Delivery"
  | "Ratings"
  | "Culture"
  | "Policy"
  | "Guides"
  | "The Roundup";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "sponsor"; anchor: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export type Writer = {
  slug: string;
  name: string;
  role: string;
  neighborhood: string;
  bio: string;
  photo: string;
  email: string;
};

export type Article = {
  slug: string;
  title: string;
  dek: string;
  category: Category;
  author: string;
  published: string;
  hero: string;
  heroAlt: string;
  readMinutes: number;
  tags: string[];
  neighborhood?: string;
  featured?: boolean;
  kicker?: string;
  body: Block[];
};

export type Criterion = { label: string; score: number; note: string };

export type PlaceRating = {
  slug: string;
  name: string;
  kind: "park" | "venue" | "neighborhood" | "restaurant" | "transit" | "attraction";
  neighborhood: string;
  score: number;
  image: string;
  imageAlt: string;
  summary: string;
  legalNote: string;
  criteria: Criterion[];
  body: Block[];
};

export type DispensaryReview = {
  slug: string;
  name: string;
  address: string;
  phone?: string;
  hours: string;
  neighborhood: string;
  license?: string;
  website?: string;
  score: number;
  scores: { product: number; staff: number; value: number; vibe: number; equity: number };
  image: string;
  imageAlt: string;
  excerpt: string;
  delivery: boolean;
  featured?: boolean;
  body: Block[];
  published: string;
  author: string;
};

export type DeliveryService = {
  slug: string;
  name: string;
  coverage: string;
  hours: string;
  notes: string;
  licensed: boolean;
  website?: string;
  phone?: string;
};
