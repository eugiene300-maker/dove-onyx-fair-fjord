export function ScoreBar({ score, max = 10 }: { score: number; max?: number }) {
  const pct = Math.max(0, Math.min(100, (score / max) * 100));
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 flex-1 bg-paper-3">
        <div className="h-2 bg-forest" style={{ width: `${pct}%` }} />
      </div>
      <span className="font-display w-10 text-right text-lg leading-none tabular-nums">
        {score.toFixed(1).replace(/\.0$/, "")}
      </span>
    </div>
  );
}

export function ScoreBadge({ score }: { score: number }) {
  return (
    <div className="inline-flex items-baseline gap-1 border border-forest bg-paper px-2 py-1">
      <span className="font-display text-2xl leading-none tabular-nums text-forest">
        {score.toFixed(1)}
      </span>
      <span className="text-[10px] tracking-wide text-muted uppercase">/10</span>
    </div>
  );
}
