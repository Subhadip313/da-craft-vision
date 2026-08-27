import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/sections";
import { industries } from "@/lib/site";
import { projects } from "@/lib/projects";

const title = "Industries We Serve — Fashion, Real Estate, Food & Corporate | Da Craft Motion";
const description =
  "Category-specific creative production: fashion photography, real estate videography, restaurant photography, hospitality, healthcare, corporate and e-commerce content.";

export const Route = createFileRoute("/industries")({
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
  component: Industries,
});

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Content built for your category"
        intro="Every industry has its own buying triggers. We shoot for those, not for a generic idea of 'good content'."
      />

      {industries.map((ind, idx) => (
        <section
          key={ind.slug}
          id={ind.slug}
          className={`section-y scroll-mt-24 ${idx % 2 === 1 ? "hairline bg-charcoal-2" : ""}`}
        >
          <div className="gutter mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <Reveal className={idx % 2 === 1 ? "lg:order-2" : ""}>
              <span className="font-display text-sm font-bold tracking-[0.2em] text-orange">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h2 className="h-section mt-4">{ind.name}</h2>
              <p className="measure mt-5 text-muted-foreground">{ind.blurb}</p>
              <Link
                to="/portfolio"
                className="draw-underline mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-orange"
              >
                See {ind.name} work →
              </Link>
            </Reveal>
            <Reveal delay={110} className={idx % 2 === 1 ? "lg:order-1" : ""}>
              <div className="grid grid-cols-3 gap-3">
                {projects.slice(idx % 12, (idx % 12) + 3).map((p) => (
                  <img
                    key={p.slug}
                    src={p.image}
                    alt={`${ind.name} creative work example — ${p.alt}`}
                    loading="lazy"
                    className="grade aspect-4/5 w-full rounded-sm border border-border object-cover"
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <FinalCta title="Let's talk about your category." />
    </>
  );
}
