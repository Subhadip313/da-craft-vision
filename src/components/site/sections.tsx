import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import { Marquee } from "./Marquee";
import { Counter } from "./Counter";
import { clientLogos, industries, processSteps, services, stats, whyUs, whatsappLink } from "@/lib/site";

export function SectionHead({
  label,
  title,
  intro,
  className,
}: {
  label: string;
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <p className="eyebrow">{label}</p>
      <h2 className="h-section mt-4 max-w-3xl">{title}</h2>
      {intro ? <p className="measure mt-5 text-muted-foreground">{intro}</p> : null}
    </Reveal>
  );
}

/* === TRUSTED BY === */
export function TrustedBy() {
  return (
    <section className="hairline bg-charcoal-2 py-10">
      <p className="gutter text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        Trusted by brands across industries
      </p>
      <Marquee
        items={clientLogos}
        className="mt-6"
        itemClassName="px-10 font-display text-lg font-bold uppercase tracking-[0.2em] text-sand/45 transition-colors hover:text-orange"
        separator="·"
      />
    </section>
  );
}

/* === SERVICES CARDS === */
export function ServiceCards({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {list.map((s, i) => (
        <Reveal key={s.slug} delay={(i % 4) * 70}>
          <Link
            to="/services"
            hash={s.slug}
            className="group flex h-full flex-col bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-charcoal-2 hover:shadow-lift"
          >
            <span className="font-display text-sm font-bold tracking-[0.2em] text-orange">{s.index}</span>
            <h3 className="group-draw mt-6 w-fit font-display text-xl font-bold group-hover:after:scale-x-100">
              {s.title}
            </h3>
            <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.short}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-orange">
              Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

/* === INDUSTRIES STRIP === */
export function IndustryStrip() {
  const stripRef = useRef<HTMLDivElement>(null);

  const scrollStrip = (direction: "next" | "previous") => {
    stripRef.current?.scrollBy({
      left: direction === "next" ? 280 : -280,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div className="mb-4 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Show previous industries"
          title="Previous industries"
          onClick={() => scrollStrip("previous")}
          className="hidden size-10 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-orange hover:text-orange focus-visible:border-orange md:flex"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Show more industries"
          title="Next industries"
          onClick={() => scrollStrip("next")}
          className="hidden size-10 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-orange hover:text-orange focus-visible:border-orange md:flex"
        >
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>
      <div
        ref={stripRef}
        tabIndex={0}
        aria-label="Industries we serve"
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {industries.map((ind) => (
          <Link
            key={ind.slug}
            to="/industries"
            hash={ind.slug}
            className="group relative flex h-56 w-64 shrink-0 snap-start flex-col justify-end overflow-hidden rounded-md border border-border bg-charcoal-2 p-5"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-90"
              style={{
                background:
                  "linear-gradient(160deg, color-mix(in oklab, var(--orange) 22%, transparent), transparent 60%)",
              }}
            />
            <span className="relative font-display text-xl font-bold">{ind.name}</span>
            <span className="relative mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-orange">
              See work
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* === WHY CHOOSE US === */
export function WhyUsGrid({ heading, label }: { heading: string; label: string }) {
  return (
    <section className="panel-cream section-y">
      <div className="gutter mx-auto max-w-7xl">
        <SectionHead label={label} title={heading} />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 70}>
              <div className="flex size-9 items-center justify-center rounded-full bg-orange text-primary-foreground">
                <Check className="size-4" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* === PROCESS TIMELINE === */
export function ProcessTimeline() {
  return (
    <section className="section-y">
      <div className="gutter mx-auto max-w-7xl">
        <SectionHead label="How we work" title="Six steps from first call to measurable growth." />
        <div className="relative mt-14">
          <div aria-hidden="true" className="absolute left-4 top-0 h-full w-px bg-border lg:left-0 lg:top-6 lg:h-px lg:w-full" />
          <ol className="grid gap-10 lg:grid-cols-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 70} as="li" className="relative pl-12 lg:pl-0">
                <span className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full border border-orange bg-charcoal font-display text-[11px] font-bold text-orange lg:static lg:mb-6">
                  {step.step}
                </span>
                <h3 className="font-display text-lg font-bold lg:mt-0">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* === STATS BAND === */
export function StatsBand() {
  return (
    <section className="noise hairline bg-charcoal-2 py-16 md:py-24">
      <div className="gutter mx-auto grid max-w-7xl grid-cols-2 gap-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="text-center">
            <p className="font-display text-5xl font-bold text-orange md:text-6xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* === FINAL CTA BAND === */
export function FinalCta({
  title = "Ready to Elevate Your Brand?",
  copy = "Book a free 15-minute discovery call, or send us a message on WhatsApp and we'll reply the same working day.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="noise bg-orange py-20 text-primary-foreground md:py-28">
      <div className="gutter mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="h-section">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm/relaxed opacity-85">{copy}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/booking"
              data-cursor="Book"
              className="rounded-sm bg-charcoal px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-charcoal-2"
            >
              Book a Call
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-charcoal px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:bg-charcoal hover:text-cream"
            >
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* === SERVICE / TEXT TICKER === */
export function DisciplineTicker() {
  return (
    <div className="hairline border-b border-border py-5">
      <Marquee
        items={["Photography", "Videography", "Branding", "Motion Graphics", "Social Content", "Commercial Production"]}
        itemClassName="font-display text-2xl font-bold uppercase tracking-[0.12em] text-foreground/80"
        separator="·"
        speed={38}
      />
    </div>
  );
}
