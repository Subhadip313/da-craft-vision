import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        scrolled || menuOpen
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
        className={`fixed inset-0 top-18 z-[75] bg-charcoal transition-[opacity,visibility] duration-400 lg:hidden md:top-20 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="gutter flex h-full flex-col justify-center gap-1 pb-32">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="font-display text-4xl font-bold uppercase tracking-tight text-foreground/85 transition-colors hover:text-orange"
              activeProps={{ className: "text-orange" }}
              activeOptions={{ exact: link.to === "/" }}
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/booking"
            onClick={() => setMenuOpen(false)}
            className="mt-8 inline-flex w-fit rounded-sm bg-orange px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground"
          >
            Book a Free Call
          </Link>
        </nav>
      </div>
    </header>
  );
}
