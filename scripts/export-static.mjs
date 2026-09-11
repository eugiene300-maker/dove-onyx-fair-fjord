/**
 * Writes a self-contained static HTML magazine into
 * artifacts/Backlinks Local Media Properties/The-Free-Bronx-Leaf
 * so it can be downloaded and copied to ~/Downloads.
 */
import { mkdirSync, cpSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out =
  process.env.EXPORT_OUT ||
  join(root, "artifacts", "Backlinks Local Media Properties", "The-Free-Bronx-Leaf");

const data = await import("../src/data/index.ts");
const {
  articles,
  reviews,
  ratings,
  deliveryServices,
  writers,
  SITE,
  SPONSOR,
  NAV,
  FOOTER_NAV,
  getWriter,
  latestArticles,
} = data;

const css = `/* The Free Bronx Leaf — static snapshot */
:root{--paper:#f4efe6;--paper-2:#ebe4d6;--ink:#1c1712;--ink-soft:#3a342c;--muted:#6b645a;--forest:#1f4a34;--forest-2:#2d6a4f;--copper:#c45c28;--rule:#d4cbb8}
*{box-sizing:border-box}html,body{margin:0;background:var(--paper);color:var(--ink);font-family:"Libre Franklin",Helvetica,sans-serif}
img{max-width:100%;display:block}a{color:inherit}
.wrap{max-width:1100px;margin:0 auto;padding:0 1.25rem}
.topbar{background:var(--forest);color:var(--paper);font-size:11px;letter-spacing:.14em;text-transform:uppercase;padding:.4rem 0}
.topbar .wrap{display:flex;justify-content:space-between;gap:1rem}
.mast{padding:1rem 0 .5rem;border-bottom:2px solid var(--ink)}
.kicker{font-size:10px;letter-spacing:.32em;text-transform:uppercase;color:var(--copper);font-weight:600}
.mast h1{font-family:Fraunces,Georgia,serif;font-size:clamp(1.8rem,6vw,3.2rem);margin:.15rem 0 0;line-height:.9}
nav{border-bottom:1px solid var(--ink);display:flex;flex-wrap:wrap}
nav a{padding:.75rem .9rem;font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;text-decoration:none}
nav a:hover{background:var(--paper-2)}
.hero{position:relative;min-height:420px;background:#1c1712;color:var(--paper)}
.hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.8}
.hero .copy{position:relative;min-height:420px;display:flex;flex-direction:column;justify-content:end;padding:2rem;background:linear-gradient(to top,#1c1712,transparent)}
.hero h2{font-family:Fraunces,Georgia,serif;font-size:clamp(1.8rem,4vw,3rem);margin:.4rem 0;line-height:1.05}
.grid{display:grid;gap:1.5rem;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));padding:2rem 0}
.card{text-decoration:none}
.card img{aspect-ratio:16/10;object-fit:cover}
.card h3{font-family:Fraunces,Georgia,serif;font-size:1.3rem;margin:.5rem 0 .25rem;line-height:1.2}
.muted{color:var(--muted);font-size:12px}
.article{max-width:720px;margin:0 auto;padding:2.5rem 1.25rem}
.article h1{font-family:Fraunces,Georgia,serif;font-size:clamp(2rem,5vw,3rem);line-height:1.05}
.article .dek{font-size:1.15rem;color:var(--ink-soft);line-height:1.5}
.prose p,.prose li{font-size:1.05rem;line-height:1.65;color:var(--ink-soft)}
.prose h2{font-family:Fraunces,Georgia,serif;color:var(--ink)}
.quote{border-left:2px solid var(--copper);padding-left:1rem;font-family:Fraunces,Georgia,serif;font-size:1.25rem}
.callout{border:1px solid var(--rule);background:var(--paper-2);padding:1rem;margin:1.25rem 0}
.sponsor{border:1px solid var(--rule);background:var(--paper-2);padding:1.25rem;margin:2rem 0}
.sponsor a.btn{display:inline-block;background:var(--forest);color:var(--paper);text-decoration:none;padding:.75rem 1rem;font-size:13px;letter-spacing:.12em;text-transform:uppercase;font-weight:600}
footer{border-top:2px solid var(--ink);margin-top:3rem;padding:2rem 0;font-size:14px;color:var(--ink-soft)}
.score{border:1px solid var(--forest);padding:.25rem .5rem;font-family:Fraunces,Georgia,serif;font-size:1.4rem;color:var(--forest)}
.row{display:grid;grid-template-columns:140px 1fr;gap:1rem;padding:1rem 0;border-bottom:1px solid var(--rule);text-decoration:none}
.row img{aspect-ratio:4/3;object-fit:cover}
@media(max-width:640px){.row{grid-template-columns:100px 1fr}nav a{flex:1}}
`;

function esc(s = "") {
  return String(s)
    .replaceAll("&", "\u0026amp;")
    .replaceAll("<", "\u0026lt;")
    .replaceAll(">", "\u0026gt;")
    .replaceAll('"', "\u0026quot;");
}

function shell(title, desc, body, pathPrefix = "") {
  const p = pathPrefix;
  const nav = NAV.map(
    (n) => `<a href="${p}${n.to === "/" ? "index.html" : n.to.replace(/^\//, "") + ".html"}">${esc(n.label)}</a>`,
  ).join("");
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}"/>
<link rel="icon" href="${p}favicon.svg"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=Libre+Franklin:wght@400;600&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="${p}magazine.css"/>
</head>
<body>
<div class="topbar"><div class="wrap"><span>${esc(SITE.kicker)}</span><a href="https://bxbuddiez.com/" rel="sponsored">Presented by BX Buddiez</a></div></div>
<header class="mast wrap">
  <a href="${p}index.html" style="text-decoration:none">
    <div class="kicker">The Bronx cannabis magazine</div>
    <h1>The Free Bronx Leaf</h1>
  </a>
</header>
<nav class="wrap">${nav}</nav>
${body}
<footer><div class="wrap">
  <p><strong>${esc(SITE.name)}</strong> — ${esc(SITE.tagline)}</p>
  <p>Presenting sponsor: <a href="https://bxbuddiez.com/" rel="sponsored">${esc(SPONSOR.legalName)}</a>, a licensed dispensary in the Bronx at ${esc(SPONSOR.address)}.</p>
  <p>${FOOTER_NAV.map((f) => `<a href="${p}${f.to.replace(/^\//, "")}.html">${esc(f.label)}</a>`).join(" · ")}</p>
  <p>${esc(SITE.copyright)} 21+ only.</p>
</div></footer>
</body></html>`;
}

function blocks(list, prefix = "") {
  return list
    .map((b) => {
      if (b.type === "p") return `<p>${esc(b.text)}</p>`;
      if (b.type === "h2") return `<h2>${esc(b.text)}</h2>`;
      if (b.type === "h3") return `<h3>${esc(b.text)}</h3>`;
      if (b.type === "quote")
        return `<blockquote class="quote">${esc(b.text)}${b.cite ? `<cite> — ${esc(b.cite)}</cite>` : ""}</blockquote>`;
      if (b.type === "list") return `<ul>${b.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
      if (b.type === "callout")
        return `<aside class="callout"><strong>${esc(b.title)}</strong><p>${esc(b.text)}</p></aside>`;
      if (b.type === "image")
        return `<figure><img src="${img(b.src, prefix)}" alt="${esc(b.alt)}"/>${b.caption ? `<figcaption class="muted">${esc(b.caption)}</figcaption>` : ""}</figure>`;
      return `<p>Presenting sponsor: <a href="https://bxbuddiez.com/" rel="sponsored">${esc(b.anchor)}</a> — licensed adult-use cannabis at 2935 3rd Avenue in Melrose.</p>`;
    })
    .join("\n");
}

function img(src, prefix) {
  return src.startsWith("/") ? prefix + src.slice(1) : src;
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, "magazine.css"), css);
const imagesOut = join(out, "images");
if (!existsSync(join(imagesOut, "leaf-mark.jpg"))) {
  cpSync(join(root, "public/images"), imagesOut, { recursive: true });
}
if (existsSync(join(root, "public/favicon.svg"))) {
  cpSync(join(root, "public/favicon.svg"), join(out, "favicon.svg"));
}
if (existsSync(join(root, "public/og.jpg"))) {
  cpSync(join(root, "public/og.jpg"), join(out, "og.jpg"));
}
writeFileSync(
  join(out, "robots.txt"),
  "User-agent: *\nAllow: /\n\nSitemap: https://freebronxleaf.com/sitemap.xml\n",
);
writeFileSync(
  join(out, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://freebronxleaf.com/</loc>
  </url>
</urlset>
`,
);
writeFileSync(join(out, ".nojekyll"), "");

const latest = latestArticles();
const hero = latest[0];

writeFileSync(
  join(out, "index.html"),
  shell(
    `${SITE.name} — ${SITE.tagline}`,
    SITE.description,
    `<a class="hero" href="articles/${hero.slug}.html">
      <img src="${img(hero.hero, "")}" alt="${esc(hero.heroAlt)}"/>
      <div class="copy"><div class="kicker">${esc(hero.kicker || hero.category)}</div>
      <h2>${esc(hero.title)}</h2><p>${esc(hero.dek)}</p></div></a>
    <div class="wrap grid">${latest
      .slice(1, 7)
      .map(
        (a) => `<a class="card" href="articles/${a.slug}.html"><img src="${img(a.hero, "")}" alt=""/><div class="kicker">${esc(a.category)}</div><h3>${esc(a.title)}</h3><p class="muted">${esc(getWriter(a.author)?.name || "")}</p></a>`,
      )
      .join("")}</div>
    <div class="wrap sponsor"><p class="kicker">Presenting sponsor</p><h2>${esc(SPONSOR.name)}</h2>
    <p>${esc(SPONSOR.blurb)}</p>
    <p><a class="btn" href="https://bxbuddiez.com/" rel="sponsored">Shop a dispensary in the Bronx</a>
    <a class="btn" style="background:transparent;color:var(--ink);border:1px solid var(--ink);margin-left:.5rem" href="bx-buddiez.html">Sponsor page</a></p></div>`,
    "",
  ),
);

mkdirSync(join(out, "articles"), { recursive: true });
for (const a of articles) {
  const w = getWriter(a.author);
  writeFileSync(
    join(out, "articles", `${a.slug}.html`),
    shell(
      `${a.title} — ${SITE.name}`,
      a.dek,
      `<article class="article"><div class="kicker">${esc(a.category)}</div>
      <h1>${esc(a.title)}</h1><p class="dek">${esc(a.dek)}</p>
      <p class="muted">By ${esc(w?.name || "")} · ${esc(a.published)} · <a href="../editorial.html">Editorial guidelines</a></p>
      <img src="${img(a.hero, "../")}" alt="${esc(a.heroAlt)}"/>
      <div class="prose">${blocks(a.body, "../")}</div>
      <div class="sponsor"><p>Looking for a <a href="https://bxbuddiez.com/" rel="sponsored">licensed dispensary in the Bronx</a>? BX Buddiez, 2935 3rd Avenue.</p></div>
      </article>`,
      "../",
    ),
  );
}

function listPage(file, title, desc, items) {
  writeFileSync(
    join(out, file),
    shell(
      title,
      desc,
      `<div class="wrap" style="padding:2rem 1.25rem"><h1 style="font-family:Fraunces,Georgia,serif">${esc(title)}</h1>
      ${items}</div>`,
      "",
    ),
  );
}

listPage(
  "news.html",
  "Bronx cannabis news",
  "All stories from The Free Bronx Leaf.",
  latest
    .map(
      (a) =>
        `<a class="row" href="articles/${a.slug}.html"><img src="${img(a.hero, "")}" alt=""/><div><div class="kicker">${esc(a.category)}</div><h3>${esc(a.title)}</h3><p class="muted">${esc(a.dek)}</p></div></a>`,
    )
    .join(""),
);

mkdirSync(join(out, "reviews"), { recursive: true });
listPage(
  "reviews.html",
  "Licensed dispensary reviews",
  "Independent Bronx dispensary reviews.",
  reviews
    .map(
      (r) =>
        `<a class="row" href="reviews/${r.slug}.html"><img src="${img(r.image, "")}" alt=""/><div><h3>${esc(r.name)} <span class="score">${r.score}</span></h3><p class="muted">${esc(r.neighborhood)} · ${esc(r.excerpt)}</p></div></a>`,
    )
    .join(""),
);
for (const r of reviews) {
  writeFileSync(
    join(out, "reviews", `${r.slug}.html`),
    shell(
      `${r.name} review — ${SITE.name}`,
      r.excerpt,
      `<article class="article"><div class="kicker">Review</div><h1>${esc(r.name)}</h1>
      <p><span class="score">${r.score}/10</span></p><p class="dek">${esc(r.excerpt)}</p>
      <p class="muted">${esc(r.address)} · ${esc(r.hours)}</p>
      <img src="${img(r.image, "../")}" alt="${esc(r.imageAlt)}"/>
      <div class="prose">${blocks(r.body, "../")}</div>
      ${r.slug === "bx-buddiez" && r.website ? `<p><a href="${r.website}" rel="sponsored">${esc(r.name)}</a> — licensed dispensary in the Bronx.</p>` : `<p>Looking for a licensed <a href="https://bxbuddiez.com/" rel="sponsored">dispensary in the Bronx</a>? BX Buddiez, 2935 3rd Avenue.</p>`}
      </article>`,
      "../",
    ),
  );
}

mkdirSync(join(out, "ratings"), { recursive: true });
listPage(
  "ratings.html",
  "Bronx cannabis-friendliness index",
  "How green is the block — legally, not vibes.",
  [...ratings]
    .sort((a, b) => b.score - a.score)
    .map(
      (p) =>
        `<a class="row" href="ratings/${p.slug}.html"><img src="${img(p.image, "")}" alt=""/><div><h3>${esc(p.name)} <span class="score">${p.score}</span></h3><p class="muted">${esc(p.summary)}</p></div></a>`,
    )
    .join(""),
);
for (const p of ratings) {
  writeFileSync(
    join(out, "ratings", `${p.slug}.html`),
    shell(
      `${p.name} cannabis-friendliness — ${SITE.name}`,
      p.summary,
      `<article class="article"><div class="kicker">${esc(p.kind)}</div><h1>${esc(p.name)}</h1>
      <p><span class="score">${p.score}/10</span></p><p class="dek">${esc(p.summary)}</p>
      <img src="${img(p.image, "../")}" alt="${esc(p.imageAlt)}"/>
      <div class="prose">${blocks(p.body)}</div>
      <aside class="callout"><strong>Legal note</strong><p>${esc(p.legalNote)}</p></aside>
      <p>Stock up at a <a href="https://bxbuddiez.com/" rel="sponsored">weed dispensary Bronx</a>.</p>
      </article>`,
      "../",
    ),
  );
}

writeFileSync(
  join(out, "delivery.html"),
  shell(
    `Bronx weed delivery — ${SITE.name}`,
    "Licensed cannabis delivery in the Bronx.",
    `<div class="wrap" style="padding:2rem 1.25rem"><h1 style="font-family:Fraunces,Georgia,serif">Weed delivery in the Bronx</h1>
    ${deliveryServices
      .map(
        (d) =>
          `<article style="border-bottom:1px solid var(--rule);padding:1rem 0"><h2>${esc(d.name)}</h2>
          <p class="muted">${d.licensed ? "OCM licensed" : "Not licensed — avoid"} · ${esc(d.coverage)}</p>
          <p>${esc(d.notes)}</p>
          ${d.website && d.slug.includes("bx-buddiez") ? `<p><a href="${d.website}" rel="sponsored">Order licensed delivery from BX Buddiez</a></p>` : ""}</article>`,
      )
      .join("")}</div>`,
    "",
  ),
);

writeFileSync(
  join(out, "bx-buddiez.html"),
  shell(
    `BX Buddiez — presenting sponsor | ${SITE.name}`,
    SPONSOR.blurb,
    `<div class="hero"><img src="images/buddiez/store-hours.jpg" alt="BX Buddiez store hours over the Melrose sales floor"/>
    <div class="copy"><div class="kicker">Presenting sponsor</div><h2>BX Buddiez</h2>
    <p>A licensed dispensary in the Bronx — Melrose, 3rd Avenue, CAURD equity license.</p></div></div>
    <article class="article prose">
      <p><a href="https://bxbuddiez.com/" rel="sponsored">Buddiez Bronx Cannabis Dispensary</a> is our presenting sponsor: ${esc(SPONSOR.address)}. Hours ${esc(SPONSOR.hours)}. Phone ${esc(SPONSOR.phone)}. License ${esc(SPONSOR.license)}.</p>
      <p>Looking for a <a href="https://bxbuddiez.com/" rel="sponsored">South Bronx dispensary</a>, a <a href="https://bxbuddiez.com/" rel="sponsored">Melrose cannabis shop</a>, or <a href="https://bxbuddiez.com/" rel="sponsored">Bronx weed delivery</a>? That is the shop.</p>
      <p><a class="btn" href="https://bxbuddiez.com/" rel="sponsored">Shop BX Buddiez</a></p>
    </article>`,
    "",
  ),
);

const about = `<div class="article prose"><h1>About the newsroom</h1>
<p>The Free Bronx Leaf launched in 2026 from Melrose. Independent cannabis news, written by locals. Presenting sponsor: <a href="https://bxbuddiez.com/" rel="sponsored">a licensed dispensary in the Bronx</a>.</p>
${writers.map((w) => `<h2><a href="writers/${w.slug}.html">${esc(w.name)}</a></h2><p class="muted">${esc(w.role)} · ${esc(w.neighborhood)}</p><p>${esc(w.bio)}</p>`).join("")}</div>`;
writeFileSync(join(out, "about.html"), shell(`About — ${SITE.name}`, SITE.description, about, ""));

mkdirSync(join(out, "writers"), { recursive: true });
for (const w of writers) {
  const by = articles.filter((a) => a.author === w.slug);
  writeFileSync(
    join(out, "writers", `${w.slug}.html`),
    shell(
      `${w.name} — ${SITE.name}`,
      w.bio,
      `<article class="article"><img src="${img(w.photo, "../")}" alt="${esc(w.name)}" style="max-width:320px"/>
      <h1>${esc(w.name)}</h1><p class="muted">${esc(w.role)} · ${esc(w.neighborhood)}</p>
      <p>${esc(w.bio)}</p>
      <p><a href="mailto:${w.email}">${esc(w.email)}</a></p>
      ${by.map((a) => `<p><a href="../articles/${a.slug}.html">${esc(a.title)}</a></p>`).join("")}</article>`,
      "../",
    ),
  );
}

writeFileSync(
  join(out, "editorial.html"),
  shell(
    `Editorial guidelines — ${SITE.name}`,
    "How we report.",
    `<article class="article prose"><h1>Editorial guidelines</h1>
    <p>Updated August 2026. Sponsor wall: BX Buddiez is labeled advertising. They do not assign stories. We do not review unlicensed smoke shops as stores. Parks score low because smoking there is illegal. Corrections: ${esc(SITE.email)}.</p></article>`,
    "",
  ),
);
writeFileSync(
  join(out, "sponsorship.html"),
  shell(
    `Sponsor the paper — ${SITE.name}`,
    "Advertising and underwriting inquiries for The Free Bronx Leaf.",
    `<article class="article prose">
      <h1>Sponsor a free newspaper the Bronx actually reads</h1>
      <p>The Leaf is free because businesses underwrite it. Advertising replies within two business days from ${esc(SITE.advertising)}. Newsroom does not see the form. Unlicensed cannabis retail will be declined.</p>
      <h2>Packages</h2>
      <ul>
        <li>Presenting — from $4,800 / month. Currently held by BX Buddiez. Waitlist only.</li>
        <li>Section — $1,800 / month. Reviews, Delivery, or Local ratings.</li>
        <li>Display — $650 / month. Homepage and article-side rail.</li>
        <li>Neighborhood card — $275 / issue.</li>
      </ul>
      <h2>Inquire</h2>
      <p>Email <a href="mailto:${SITE.advertising}">${esc(SITE.advertising)}</a> with business name, type, neighborhood, OCM license if cannabis, package of interest, and a short note. Sponsorship buys space, not a score.</p>
      <p>Current presenting sponsor: <a href="https://bxbuddiez.com/" rel="sponsored">a licensed dispensary in the Bronx</a> at 2935 3rd Avenue.</p>
    </article>`,
    "",
  ),
);
writeFileSync(
  join(out, "privacy.html"),
  shell(
    `Privacy — ${SITE.name}`,
    "Privacy policy.",
    `<article class="article prose"><h1>Privacy policy</h1><p>We collect as little as we can. Age-gate flags stay on your device. We do not sell lists. Shop purchases happen on bxbuddiez.com under their policy.</p></article>`,
    "",
  ),
);
writeFileSync(
  join(out, "contact.html"),
  shell(
    `Contact — ${SITE.name}`,
    "Tips and letters.",
    `<article class="article prose"><h1>Contact & tips</h1><p>Newsroom: ${esc(SITE.email)} · Tips: ${esc(SITE.tips)}</p>
    <p>Presenting sponsor (not the newsroom): ${esc(SPONSOR.phone)}</p></article>`,
    "",
  ),
);
writeFileSync(
  join(out, "search.html"),
  shell(`Search — ${SITE.name}`, "Search.", `<article class="article"><h1>Search</h1><p>Use your browser find, or start at <a href="news.html">news</a>.</p></article>`, ""),
);

writeFileSync(
  join(out, "README.md"),
  `# The Free Bronx Leaf

Static site for the Bronx cannabis magazine. Drop this folder on GitHub Pages or any static host.

## GitHub Pages

1. Create a new repository.
2. Upload everything in this folder to the repo root (including \`.nojekyll\`).
3. Settings → Pages → Deploy from branch \`main\` / root.

Open \`index.html\` locally if you just want to browse.

## Notes

- Presenting sponsor is BX Buddiez (Melrose). Banner is labeled advertising.
- \`sitemap.xml\` lists the site root only — no article or section paths.
- Adults 21+. Independent newsroom.
`,
);

console.log("Wrote static magazine to", out);
