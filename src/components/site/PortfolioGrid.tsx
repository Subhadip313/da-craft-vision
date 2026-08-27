import { Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { BeforeAfter } from "./BeforeAfter";
import type { Project } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PortfolioGrid({
  items,
  filters,
  dense = false,
}: {
  items: Project[];
  filters: readonly string[];
  dense?: boolean;
}) {
  const [active, setActive] = useState<string>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const visible = active === "All" ? items : items.filter((p) => p.category === active || p.industry === active);

  return (
    <div>
      {/* FILTER TABS */}
      <div role="tablist" aria-label="Filter work by category" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={cn(
              "rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors",
              active === f
                ? "border-orange bg-orange text-primary-foreground"
                : "border-border text-foreground/75 hover:border-orange hover:text-orange",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* EDITORIAL GRID */}
      <div className={cn("mt-10 grid gap-4 sm:grid-cols-2", dense ? "lg:grid-cols-3" : "lg:grid-cols-3")}>
        {visible.map((p, i) => (
          <Reveal
            key={p.slug}
            delay={(i % 3) * 80}
            className={cn(p.ratio === "landscape" && !dense && i % 5 === 0 && "sm:col-span-2")}
          >
            <button
              onClick={() => setOpen(p)}
              data-cursor={p.isVideo ? "Play" : "View"}
              className="group zoom-crop relative block w-full overflow-hidden rounded-md border border-border text-left"
            >
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                className={cn("grade w-full object-cover", p.ratio === "portrait" ? "aspect-4/5" : "aspect-video")}
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />
              {p.isVideo ? (
                <span className="pointer-events-none absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-orange/90 text-primary-foreground">
                  <Play className="size-4" />
                </span>
              ) : null}
              <span className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-orange">
                  {p.category} · {p.industry}
                </span>
                <span className="mt-1 block font-display text-xl font-bold text-cream">{p.title}</span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {open ? <CaseStudyModal project={open} onClose={() => setOpen(null)} /> : null}
    </div>
  );
}

/* === CASE-STUDY LIGHTBOX (Escape to close, focus trapped) === */
function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const nodes = panelRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], input, [tabindex]:not([tabindex="-1"])',
        );
        if (!nodes.length) return;
        const first = nodes[0]!;
        const last = nodes[nodes.length - 1]!;
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      className="fixed inset-0 z-[95] flex items-start justify-center overflow-y-auto bg-charcoal/90 p-4 backdrop-blur-sm md:p-10"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={panelRef}
        className="rise relative w-full max-w-4xl overflow-hidden rounded-lg border border-border bg-charcoal-2"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close case study"
          className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-charcoal/80 text-cream transition-colors hover:bg-orange hover:text-primary-foreground"
        >
          <X className="size-4" />
        </button>

        <img src={project.image} alt={project.alt} className="grade aspect-video w-full object-cover" />

        <div className="p-6 md:p-10">
          <p className="eyebrow">
            {project.category} · {project.industry}
          </p>
          <h2 className="h-section mt-3">{project.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground">Client: {project.client}</p>

          {project.outcome ? (
            <p className="mt-6 inline-block rounded-sm bg-orange px-4 py-2 font-display text-sm font-bold uppercase tracking-[0.1em] text-primary-foreground">
              {project.outcome}
            </p>
          ) : null}

          <dl className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Challenge", project.challenge],
              ["Approach", project.approach],
              ["Result", project.result],
            ].map(([label, copy]) => (
              <div key={label}>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-orange">{label}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">{copy}</dd>
              </div>
            ))}
          </dl>

          {project.hasBeforeAfter ? (
            <div className="mt-10">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">Before / After</h3>
              <div className="mt-4">
                <BeforeAfter image={project.image} alt={project.title} />
              </div>
            </div>
          ) : null}

          <div className="mt-10 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((n) => (
              <img
                key={n}
                src={project.image}
                alt={`${project.title} — additional frame ${n + 1}`}
                loading="lazy"
                className="grade aspect-4/3 w-full rounded-sm border border-border object-cover"
                style={{ objectPosition: `${25 + n * 25}% center` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
