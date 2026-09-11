import type { Article } from "./types.ts";
import { partA } from "./stories/part-a.ts";
import { partB } from "./stories/part-b.ts";
import { partC } from "./stories/part-c.ts";
import { partD } from "./stories/part-d.ts";

export const articles: Article[] = [...partA, ...partB, ...partC, ...partD];
