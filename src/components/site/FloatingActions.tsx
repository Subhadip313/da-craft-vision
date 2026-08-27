import { Link } from "@tanstack/react-router";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/site";

export function FloatingActions() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp — fixed on every page */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Da Craft Motion on WhatsApp"
        data-cursor="Chat"
        className="wa-pulse fixed bottom-24 right-5 z-[60] flex size-13 items-center justify-center rounded-full bg-orange text-primary-foreground shadow-lift transition-transform hover:scale-105 md:bottom-6 md:right-6 md:size-14"
      >
        <MessageCircle className="size-6" strokeWidth={2} />
      </a>

      {/* Back to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-24 left-5 z-[60] flex size-11 items-center justify-center rounded-full border border-border bg-charcoal-2/80 text-foreground backdrop-blur-md transition-all duration-500 hover:border-orange hover:text-orange md:bottom-6 md:left-6 ${
          scrolled ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="size-4" />
      </button>

      {/* Mobile sticky booking bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-[55] grid grid-cols-2 gap-2 border-t border-border bg-charcoal-2/95 p-3 backdrop-blur-md transition-transform duration-500 md:hidden ${
          scrolled ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Link
          to="/booking"
          className="flex items-center justify-center rounded-sm bg-orange px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground"
        >
          Book a Call
        </Link>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-sm border border-border px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-foreground"
        >
          WhatsApp
        </a>
      </div>
    </>
  );
}
