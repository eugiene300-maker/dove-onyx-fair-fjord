import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteShell } from "./site-shell-DEyZQk9c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/writers._slug-BdyQb92z.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, {
	seed: "404",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-4 py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "Writer not found"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/about",
			className: "mt-4 inline-block text-forest underline",
			children: "The newsroom"
		})]
	})
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
