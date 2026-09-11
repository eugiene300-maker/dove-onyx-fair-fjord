import { useState, type FormEvent } from "react";

const KEY = "fbl-dispatch";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    try {
      localStorage.setItem(KEY, email);
    } catch {
      /* ignore */
    }
    setDone(true);
  }

  if (done) {
    return (
      <p className="mt-3 border border-forest/30 bg-paper-2 px-3 py-3 text-sm text-forest">
        You're on the list. We'll send the next issue to {email}.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-3 flex flex-col gap-2 sm:flex-row">
      <label className="sr-only" htmlFor="dispatch-email">
        Email
      </label>
      <input
        id="dispatch-email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@bronx.email"
        className="min-h-11 flex-1 border border-ink/20 bg-paper px-3 text-sm text-ink outline-none placeholder:text-muted focus:border-forest"
        suppressHydrationWarning
      />
      <button
        type="submit"
        className="min-h-11 bg-forest px-4 text-sm font-semibold text-paper hover:bg-forest-2"
      >
        Subscribe
      </button>
    </form>
  );
}
