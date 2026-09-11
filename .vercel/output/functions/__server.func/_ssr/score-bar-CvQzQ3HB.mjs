import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/score-bar-CvQzQ3HB.js
var import_jsx_runtime = require_jsx_runtime();
function ScoreBar({ score, max = 10 }) {
	const pct = Math.max(0, Math.min(100, score / max * 100));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-2 flex-1 bg-paper-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-2 bg-forest",
				style: { width: `${pct}%` }
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display w-10 text-right text-lg leading-none tabular-nums",
			children: score.toFixed(1).replace(/\.0$/, "")
		})]
	});
}
function ScoreBadge({ score }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex items-baseline gap-1 border border-forest bg-paper px-2 py-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-2xl leading-none tabular-nums text-forest",
			children: score.toFixed(1)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[10px] tracking-wide text-muted uppercase",
			children: "/10"
		})]
	});
}
//#endregion
export { ScoreBar as n, ScoreBadge as t };
