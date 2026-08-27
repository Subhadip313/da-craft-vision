import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileLinkClassName =
    "w-fit max-w-full py-1 font-display text-[clamp(2rem,9vw,2.75rem)] font-bold leading-tight uppercase tracking-tight text-foreground/85 transition-colors hover:text-orange sm:text-4xl";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
        menuOpen
          ? "border-b border-border bg-charcoal"
          : scrolled
            ? "border-b border-border bg-charcoal-2/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="gutter flex h-18 items-center justify-between md:h-20">
        <Logo animate />

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="draw-underline text-[13px] font-medium uppercase tracking-[0.14em] text-foreground/75 transition-colors hover:text-foreground"
              activeProps={{ className: "text-orange" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/booking"
            data-cursor="Book"
            className="hidden rounded-sm bg-orange px-5 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-orange-dim sm:inline-flex"
          >
            Book a Call
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex size-11 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay menu */}
      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-x-0 bottom-0 top-18 z-[90] isolate overflow-y-auto overscroll-contain bg-charcoal transition-[opacity,visibility] duration-400 lg:hidden md:top-20 ${
          menuOpen
            ? "visible pointer-events-auto opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="gutter relative z-10 flex min-h-full flex-col items-start gap-0.5 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:justify-center sm:py-12"
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={mobileLinkClassName}
              activeProps={{ className: `${mobileLinkClassName} text-orange` }}
              activeOptions={{ exact: link.to === "/" }}
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/booking"
            onClick={() => setMenuOpen(false)}
            className="mt-6 inline-flex min-h-12 w-fit max-w-full items-center rounded-sm bg-orange px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground sm:mt-8 sm:px-6 sm:py-4"
          >
            Book a Free Call
          </Link>
        </nav>
      </div>
    </header>
  );
}
