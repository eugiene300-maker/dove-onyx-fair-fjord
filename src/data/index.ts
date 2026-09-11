import { articles } from "./articles.ts";
import { reviews } from "./reviews.ts";
import { ratings } from "./ratings.ts";

export * from "./types.ts";
export * from "./site.ts";
export * from "./writers.ts";
export * from "./articles.ts";
export * from "./reviews.ts";
export * from "./ratings.ts";
export * from "./delivery.ts";

function byPublishedDesc<T extends { published: string }>(rows: T[]): T[] {
  return [...rows].sort((a, b) => (a.published < b.published ? 1 : a.published > b.published ? -1 : 0));
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getReview(slug: string) {
  return reviews.find((review) => review.slug === slug);
}

export function getRating(slug: string) {
  return ratings.find((rating) => rating.slug === slug);
}

export function featuredArticles() {
  return byPublishedDesc(articles.filter((article) => article.featured === true));
}

export function latestArticles() {
  return byPublishedDesc(articles);
}
