import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, b as require_jsx_runtime, d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as TRENDING, d as writers, i as SPONSOR, l as sponsorAnchor, n as NAV, r as SITE, t as FOOTER_NAV, u as useBronxWeatherData } from "./writers-CtGcjvVD.mjs";
import { c as Moon, d as Cloud, f as CloudSun, g as CloudFog, h as CloudLightning, i as Sun, l as Menu, m as CloudRain, n as Wind, o as Search, p as CloudSnow, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-DEyZQk9c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KEY$1 = "fbl-age-ok";
function AgeGate() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			if (localStorage.getItem(KEY$1) === "1") return;
		} catch {}
		setOpen(true);
	}, []);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b border-rule bg-paper-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-ink-soft",
				children: "Adult-use cannabis coverage. Confirm you are 21 or older."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 bg-forest px-4 text-sm font-semibold text-paper hover:bg-forest-2",
					onClick: () => {
						try {
							localStorage.setItem(KEY$1, "1");
						} catch {}
						setOpen(false);
					},
					children: "I am 21+"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://www.google.com",
					className: "inline-flex min-h-11 items-center border border-rule px-4 text-sm font-semibold text-ink",
					children: "Exit"
				})]
			})]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var TZ = "America/New_York";
function bronxParts(date) {
	const fmt = new Intl.DateTimeFormat("en-US", {
		timeZone: TZ,
		weekday: "long",
		month: "long",
		day: "numeric",
		year: "numeric",
		hour: "numeric",
		minute: "2-digit",
		second: "2-digit",
		hour12: true
	});
	const bag = {};
	for (const part of fmt.formatToParts(date)) if (part.type !== "literal") bag[part.type] = part.value;
	const dayNum = Number(bag.day ?? "1");
	return {
		weekday: bag.weekday ?? "",
		month: bag.month ?? "",
		day: dayNum,
		year: bag.year ?? "",
		hour: bag.hour ?? "",
		minute: bag.minute ?? "00",
		second: bag.second ?? "00",
		dayPeriod: (bag.dayPeriod ?? "AM").toUpperCase()
	};
}
function ordinal(n) {
	const v = n % 100;
	if (v >= 11 && v <= 13) return `${n}th`;
	switch (n % 10) {
		case 1: return `${n}st`;
		case 2: return `${n}nd`;
		case 3: return `${n}rd`;
		default: return `${n}th`;
	}
}
/** Thursday, September 10th 2026 */
function formatBronxDate(date) {
	const p = bronxParts(date);
	return `${p.weekday}, ${p.month} ${ordinal(p.day)} ${p.year}`;
}
/** 7:44:12 PM */
function formatBronxTime(date) {
	const p = bronxParts(date);
	return `${p.hour}:${p.minute}:${p.second} ${p.dayPeriod}`;
}
function parsePublished(published) {
	if (published.includes("T")) return new Date(published);
	return /* @__PURE__ */ new Date(`${published}T08:00:00-04:00`);
}
function formatStoryDate(published) {
	return new Intl.DateTimeFormat("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
		timeZone: TZ
	}).format(parsePublished(published));
}
function formatStoryDateShort(published) {
	return new Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
		timeZone: TZ
	}).format(parsePublished(published));
}
function relativeTime(published, now = /* @__PURE__ */ new Date()) {
	const then = parsePublished(published);
	const mins = Math.max(0, Math.round((now.getTime() - then.getTime()) / 6e4));
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
var ICONS = {
	"clear-day": Sun,
	"clear-night": Moon,
	"partly-cloudy-day": CloudSun,
	"partly-cloudy-night": Cloud,
	cloudy: Cloud,
	rain: CloudRain,
	snow: CloudSnow,
	fog: CloudFog,
	tstorm: CloudLightning,
	wind: Wind
};
function useLiveClock() {
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setNow(/* @__PURE__ */ new Date());
		const tick = window.setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
		return () => window.clearInterval(tick);
	}, []);
	return now;
}
function WeatherGlyph({ name }) {
	const Icon = ICONS[name] ?? Sun;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		className: "size-7 text-ink",
		strokeWidth: 1.5,
		"aria-hidden": true
	});
}
function BronxWeather() {
	const now = useLiveClock();
	const weather = useBronxWeatherData();
	const dateLabel = now ? formatBronxDate(now) : "Bronx, NY";
	const timeLabel = now ? formatBronxTime(now) : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-2.5 text-ink",
		children: [weather ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5 pt-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-display text-3xl leading-none font-semibold tabular-nums",
				children: [weather.tempF, "°"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeatherGlyph, { name: weather.icon })]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5 pt-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl leading-none font-semibold tabular-nums text-muted",
				children: "—°"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
				className: "size-7 text-muted",
				strokeWidth: 1.5,
				"aria-hidden": true
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 leading-tight",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-ink",
					children: dateLabel
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 min-h-5 text-sm font-semibold tabular-nums text-ink",
					children: timeLabel
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs text-muted",
					children: weather ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						title: `Observed at ${weather.stationLabel}`,
						children: [weather.condition, " · Bronx, NY"]
					}) : "Bronx, NY"
				})
			]
		})]
	});
}
function BronxWeatherCompact() {
	const now = useLiveClock();
	const weather = useBronxWeatherData();
	const Icon = weather ? ICONS[weather.icon] : Sun;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1.5 font-semibold",
				children: [weather ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "tabular-nums",
					children: [weather.tempF, "°"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-4",
					strokeWidth: 1.75,
					"aria-hidden": true
				})] }) : null, "Bronx, NY"]
			}),
			now ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted",
				children: formatBronxDate(now)
			}) : null,
			now ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold tabular-nums",
				children: formatBronxTime(now)
			}) : null
		]
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "bg-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-rule",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink",
						"aria-label": open ? "Close sections" : "All sections",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "All Sections" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#subscribe",
							className: "inline-flex min-h-11 items-center bg-forest px-4 text-sm font-semibold text-paper hover:bg-forest-2",
							children: "Subscribe"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/search",
							className: "inline-flex min-h-11 min-w-11 items-center justify-center text-ink hover:text-forest",
							"aria-label": "Search",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								className: "size-5",
								strokeWidth: 1.75
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 pt-4 pb-3 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BronxWeatherCompact, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "mt-3 block",
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "masthead-title",
							children: ["The Free", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: "Bronx Leaf"
							})]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 flex justify-center lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BronxWeatherCompact, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-4 lg:grid-cols-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden lg:col-span-3 lg:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BronxWeather, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "block",
									onClick: () => setOpen(false),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "masthead-title",
										children: ["The Free", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block",
											children: "Bronx Leaf"
										})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-center text-[11px] font-semibold tracking-[0.18em] text-muted uppercase",
									children: "The Bronx's free cannabis newspaper"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden lg:col-span-3 lg:block" })
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "hidden md:block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "double-rule" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mx-auto flex max-w-6xl items-stretch justify-center gap-1 px-4 sm:px-6",
						children: NAV.map((item) => {
							const current = pathname === item.to || pathname.startsWith(`${item.to}/`);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: cn("inline-flex min-h-11 items-center px-3 text-sm font-semibold text-ink hover:text-forest", current && "nav-link-current"),
								children: item.label
							}) }, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-b border-ink" })
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "border-b border-ink bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mx-auto grid max-w-6xl gap-0 px-4 py-2 sm:grid-cols-2 sm:px-6 md:grid-cols-4",
					children: [
						NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "flex min-h-12 items-center text-sm font-semibold",
							onClick: () => setOpen(false),
							children: item.label
						}) }, item.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "flex min-h-12 items-center text-sm font-semibold",
							onClick: () => setOpen(false),
							children: "About"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "flex min-h-12 items-center text-sm font-semibold",
							onClick: () => setOpen(false),
							children: "Contact"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/search",
							className: "flex min-h-12 items-center text-sm font-semibold",
							onClick: () => setOpen(false),
							children: "Search"
						}) })
					]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-rule",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center gap-4 overflow-x-auto px-4 py-2.5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "shrink-0 text-xs font-bold tracking-widest text-forest uppercase",
						children: "Trending"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex min-w-0 items-center gap-0",
						children: TRENDING.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center",
							children: [i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-3 h-3 w-px bg-rule" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								params: { slug: item.slug },
								className: "whitespace-nowrap text-sm text-ink hover:text-forest hover:underline",
								children: item.label
							})]
						}, item.slug))
					})]
				})
			})
		]
	});
}
function SponsorLink({ seed, className, children }) {
	const a = sponsorAnchor(seed);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: SPONSOR.url,
		target: "_blank",
		rel: "sponsored noopener noreferrer",
		className: cn("underline decoration-copper/70 decoration-1 underline-offset-4 transition-colors hover:text-forest hover:decoration-forest", className),
		children: children ?? a.text
	});
}
var KEY = "fbl-dispatch";
function NewsletterForm() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		if (!email.includes("@")) return;
		try {
			localStorage.setItem(KEY, email);
		} catch {}
		setDone(true);
	}
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-3 border border-forest/30 bg-paper-2 px-3 py-3 text-sm text-forest",
		children: [
			"You're on the list. We'll send the next issue to ",
			email,
			"."
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "mt-3 flex flex-col gap-2 sm:flex-row",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "sr-only",
				htmlFor: "dispatch-email",
				children: "Email"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "dispatch-email",
				type: "email",
				required: true,
				autoComplete: "email",
				value: email,
				onChange: (e) => setEmail(e.target.value),
				placeholder: "you@bronx.email",
				className: "min-h-11 flex-1 border border-ink/20 bg-paper px-3 text-sm text-ink outline-none placeholder:text-muted focus:border-forest",
				suppressHydrationWarning: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "min-h-11 bg-forest px-4 text-sm font-semibold text-paper hover:bg-forest-2",
				children: "Subscribe"
			})
		]
	});
}
function SiteFooter({ seed }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-12 border-t-2 border-ink bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl font-bold tracking-tight",
							children: SITE.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 max-w-md text-sm leading-relaxed text-ink-soft",
							children: [SITE.tagline, ". A local newsroom covering licensed shops, delivery, equity, and the rest of Bronx life that cannabis people actually live — Yankees nights, Arthur Avenue, the 6 train, City Island."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-ink-soft",
							children: [
								"Presenting sponsor:",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: SPONSOR.url,
									className: "font-semibold text-forest underline underline-offset-4",
									rel: "sponsored noopener noreferrer",
									target: "_blank",
									children: SPONSOR.legalName
								}),
								", a",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorLink, { seed: seed + "-ft" }),
								" at ",
								SPONSOR.address,
								"."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "The paper"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: FOOTER_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "text-sm text-ink hover:text-forest",
							children: item.label
						}) }, item.to))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					id: "subscribe",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "The free dispatch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-ink-soft",
							children: "New reviews, ratings, and borough news — no spam, no unlicensed shops."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterForm, {})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-rule",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					SITE.copyright,
					" Written in ",
					SITE.address,
					" by",
					" ",
					writers.map((w) => w.name.split(" ")[0]).join(", "),
					"."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Cannabis is for adults 21+. Consume legally and responsibly." })]
			})
		})]
	});
}
function SiteShell({ children, seed }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgeGate, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, { seed })
		]
	});
}
//#endregion
export { formatStoryDateShort as a, formatStoryDate as i, SponsorLink as n, relativeTime as o, cn as r, SiteShell as t };
