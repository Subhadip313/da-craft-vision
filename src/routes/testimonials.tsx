import { createFileRoute } from "@tanstack/react-router";
import { Play, Star } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta, StatsBand } from "@/components/site/sections";
import { testimonials } from "@/lib/site";

const title = "Client Testimonials | Da Craft Motion Creative Agency";
const description =
  "What brands say about working with Da Craft Motion — photography, videography, branding and social media content clients across Kolkata and India.";

export const Route = createFileRoute("/testimonials")({
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
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Trust, in their words"
        intro="Marketing heads, founders and brand managers on what changed after we started working together."
      />

      <section className="section-y">
        <div className="gutter mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 80}>
                <figure className="flex h-full flex-col rounded-lg border border-border bg-card p-7">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="size-3.5 fill-orange text-orange" />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-sm/relaxed text-muted-foreground">
                    <span className="script mr-1 text-3xl leading-none text-orange">&ldquo;</span>
                    {t.quote}
                  </blockquote>
                  {t.isVideo ? (
                    <button
                      data-cursor="Play"
                      className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-orange"
                    >
                      <span className="flex size-8 items-center justify-center rounded-full bg-orange text-primary-foreground">
                        <Play className="size-3.5" />
                      </span>
                      Watch video testimonial
                    </button>
                  ) : null}
                  <figcaption className="mt-6 border-t border-border pt-5">
                    <p className="font-display text-sm font-bold uppercase tracking-[0.12em]">{t.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.role}, {t.company}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />
      <FinalCta title="Become the next case study." />
    </>
  );
}
