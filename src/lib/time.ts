const TZ = "America/New_York";

export function bronxParts(date: Date) {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  const bag: Record<string, string> = {};
  for (const part of fmt.formatToParts(date)) {
    if (part.type !== "literal") bag[part.type] = part.value;
  }
  const dayNum = Number(bag.day ?? "1");
  return {
    weekday: bag.weekday ?? "",
    month: bag.month ?? "",
    day: dayNum,
    year: bag.year ?? "",
    hour: bag.hour ?? "",
    minute: bag.minute ?? "00",
    second: bag.second ?? "00",
    dayPeriod: (bag.dayPeriod ?? "AM").toUpperCase(),
  };
}

function ordinal(n: number) {
  const v = n % 100;
  if (v >= 11 && v <= 13) return `${n}th`;
  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
    default:
      return `${n}th`;
  }
}

/** Thursday, September 10th 2026 */
export function formatBronxDate(date: Date) {
  const p = bronxParts(date);
  return `${p.weekday}, ${p.month} ${ordinal(p.day)} ${p.year}`;
}

/** 7:44:12 PM */
export function formatBronxTime(date: Date) {
  const p = bronxParts(date);
  return `${p.hour}:${p.minute}:${p.second} ${p.dayPeriod}`;
}

export function parsePublished(published: string) {
  if (published.includes("T")) return new Date(published);
  return new Date(`${published}T08:00:00-04:00`);
}

export function formatStoryDate(published: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: TZ,
  }).format(parsePublished(published));
}

export function formatStoryDateShort(published: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: TZ,
  }).format(parsePublished(published));
}

export function relativeTime(published: string, now = new Date()) {
  const then = parsePublished(published);
  const mins = Math.max(0, Math.round((now.getTime() - then.getTime()) / 60000));
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} minute${mins === 1 ? "" : "s"} ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.round(hours / 24);
  if (days === 1) return "1 day ago";
  if (days < 7) return `${days} days ago`;
  const weeks = Math.round(days / 7);
  if (weeks < 8) return `${weeks} week${weeks === 1 ? "" : "s"} ago`;
  return formatStoryDateShort(published);
}
