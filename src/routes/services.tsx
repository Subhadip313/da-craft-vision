import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta, SectionHead, ServiceCards } from "@/components/site/sections";
import { services } from "@/lib/site";
import { projects } from "@/lib/projects";

const title = "Creative Services — Photography, Videography & Branding | Da Craft Motion";
const description =
  "Photography, videography, video editing, graphic design, social media content, commercial production, branding, motion graphics and corporate films in Kolkata.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Nine disciplines, one accountable team"
        intro="Pick a single service or build a full content engine. Everything below is produced in-house, so quality and tone stay consistent across formats."
      />

      <section className="section-y">
        <div className="gutter mx-auto max-w-7xl">
          <SectionHead label="Overview" title="Jump straight to what you need." />
          <div className="mt-12">
            <ServiceCards />
          </div>
        </div>
      </section>

      {services.map((service, idx) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`section-y scroll-mt-24 ${idx % 2 === 1 ? "hairline bg-charcoal-2" : ""}`}
        >
          <div className="gutter mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
              <Reveal>
                <span className="font-display text-sm font-bold tracking-[0.2em] text-orange">{service.index}</span>
                <h2 className="h-section mt-4">{service.title}</h2>
                <p className="measure mt-5 text-muted-foreground">{service.description}</p>

                <h3 className="mt-10 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
                  What's included
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {service.included.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-orange" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-2">
                  {service.benefits.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-sand/80"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <Link
                  to="/booking"
                  className="mt-9 inline-flex rounded-sm bg-orange px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-orange-dim"
                >
                  Get a quote for {service.title}
                </Link>
              </Reveal>

              <Reveal delay={120}>
                <div className="grid grid-cols-2 gap-3">
                  {projects.slice(idx, idx + 4).map((p) => (
                    <img
                      key={p.slug}
                      src={p.image}
                      alt={`${service.title} portfolio example — ${p.alt}`}
                      loading="lazy"
                      className="grade aspect-4/5 w-full rounded-sm border border-border object-cover"
                    />
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">FAQs</h3>
                  <div className="mt-4 divide-y divide-border border-y border-border">
                    {service.faqs.map((faq) => (
                      <Accordion key={faq.q} q={faq.q} a={faq.a} />
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <FinalCta title="Not sure which service you need?" copy="Tell us the business goal — we'll recommend the shortest route to it." />
    </>
  );
}

function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-foreground"
      >
        {q}
        <span className="text-orange">{open ? "−" : "+"}</span>
      </button>
      {open ? <p className="pb-4 text-sm text-muted-foreground">{a}</p> : null}
    </div>
  );
}
