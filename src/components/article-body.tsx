import type { Block } from "@/data/types";

export function ArticleBody({
  blocks,
  dropCap = false,
}: {
  blocks: Block[];
  seed?: string;
  dropCap?: boolean;
}) {
  let pIndex = 0;
  return (
    <div className="article-prose text-lg leading-[1.7] text-ink">
      {blocks.map((block, i) => {
        if (block.type === "p") {
          const isFirst = pIndex === 0;
          pIndex += 1;
          return (
            <p key={i} className={dropCap && isFirst ? "article-drop" : undefined}>
              {block.text}
            </p>
          );
        }
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="mt-8 mb-3 font-display text-2xl leading-snug font-bold text-ink"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={i} className="mt-6 mb-2 font-display text-xl font-bold text-ink">
              {block.text}
            </h3>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={i}
              className="my-6 border-l-4 border-forest py-1 pl-4 font-display text-xl leading-snug text-ink"
            >
              {block.text}
              {block.cite ? (
                <cite className="mt-2 block font-sans text-sm text-muted not-italic">
                  — {block.cite}
                </cite>
              ) : null}
            </blockquote>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="mb-5 list-disc space-y-2 pl-5">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "callout") {
          return (
            <aside key={i} className="my-6 border border-rule bg-paper-2 p-4">
              <p className="kicker">{block.title}</p>
              <p className="mt-2 text-base text-ink">{block.text}</p>
            </aside>
          );
        }
        if (block.type === "image") {
          return (
            <figure key={i} className="my-8 -mx-2 sm:mx-0">
              <img
                src={block.src}
                alt={block.alt}
                className="w-full border border-rule object-cover"
              />
              {block.caption ? (
                <figcaption className="mt-2 text-sm text-muted">
                  {block.caption}
                </figcaption>
              ) : null}
            </figure>
          );
        }
        return null;
      })}
    </div>
  );
}
