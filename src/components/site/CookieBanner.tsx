import { useEffect, useState } from "react";

const KEY = "dcm-cookie-consent";

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem(KEY)) setOpen(true);
  }, []);

  if (!open) return null;

  const dismiss = (value: string) => {
    window.localStorage.setItem(KEY, value);
    setOpen(false);
  };

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-border bg-charcoal-2/95 px-5 py-4 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          We use minimal cookies to understand how the site performs. No ad tracking without your consent.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => dismiss("declined")}
            className="rounded-sm border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-muted"
          >
            Decline
          </button>
          <button
            onClick={() => dismiss("accepted")}
            className="rounded-sm bg-orange px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-orange-dim"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
