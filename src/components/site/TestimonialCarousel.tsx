import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/site";

export function TestimonialCarousel() {
  const items = testimonials.slice(0, 3);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % items.length), 7000);
    return () => window.clearInterval(id);
  }, [paused, items.length]);

  const current = items[i]!;

  return (
    <div
      className="rounded-lg border border-border bg-card p-8 md:p-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-live="polite"
    >
      <span className="script block text-6xl leading-none text-orange">&ldquo;</span>
      <blockquote className="measure mt-2 font-display text-xl leading-snug text-foreground md:text-2xl">
        {current.quote}
      </blockquote>
      <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="flex gap-1">
            {Array.from({ length: current.rating }).map((_, s) => (
              <Star key={s} className="size-3.5 fill-orange text-orange" />
            ))}
          </div>
          <p className="mt-3 font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground">
            {current.name}
          </p>
          <p className="text-sm text-muted-foreground">
            {current.role}, {current.company}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
            aria-label="Previous testimonial"
            className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-orange hover:text-orange"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            onClick={() => setI((v) => (v + 1) % items.length)}
            aria-label="Next testimonial"
            className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-orange hover:text-orange"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
