import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { Reveal } from "@/components/site/Reveal";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";
import { TestimonialCarousel } from "@/components/site/TestimonialCarousel";
import {
  DisciplineTicker,
  FinalCta,
  IndustryStrip,
  ProcessTimeline,
  SectionHead,
  ServiceCards,
  StatsBand,
  TrustedBy,
  WhyUsGrid,
} from "@/components/site/sections";
import { homeFilters, site, whatsappLink } from "@/lib/site";
import { projects } from "@/lib/projects";

const title = "Da Craft Motion — Creative Agency in Kolkata | Photography & Videography";
const description =
  "Full-service creative agency in Kolkata: commercial photography, videography, video editing, branding, motion graphics and social media content that drives business growth.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: site.name,
          description,
          telephone: site.phone,
          email: site.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "1/1, Baghajatin Station Road",
            addressLocality: "Kolkata",
            postalCode: "700032",
            addressCountry: "IN",
          },
          sameAs: Object.values(site.socials),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects.slice(0, 7);

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="noise relative flex min-h-svh items-end overflow-hidden">
        {/* Replace with a looping showreel: [ASSET: showreel-loop.mp4] */}
        <img
          src={heroImage}
          alt="Creative production agency film crew on a cinematic commercial shoot in Kolkata"
          width={1920}
          height={1080}
          className="grade absolute inset-0 size-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40" />

        <div className="gutter relative mx-auto w-full max-w-7xl pb-20 pt-36 md:pb-28">
          <p className="eyebrow rise">Full-service creative agency</p>
          <h1 className="h-display rise mt-5 max-w-4xl" style={{ animationDelay: "90ms" }}>
            Creative content that <span className="script text-orange">grows</span> your brand
          </h1>
          <p className="measure rise mt-6 text-lg text-sand/85" style={{ animationDelay: "180ms" }}>
            We help businesses stand out through photography, videography, branding, design and social media content
            that drives engagement and delivers real business growth.
          </p>
          <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "260ms" }}>
            <Link
              to="/booking"
              data-cursor="Book"
              className="rounded-sm bg-orange px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-orange-dim"
            >
              Book a Free Strategy Call
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Chat"
              className="inline-flex items-center gap-2 rounded-sm border border-cream/45 px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-cream hover:text-charcoal"
            >
              <MessageCircle className="size-4" /> Chat on WhatsApp
            </a>
          </div>
          <p className="mt-14 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-sand/60">
            <ArrowDown className="size-4 animate-bounce text-orange" /> Scroll
          </p>
        </div>
      </section>

      <TrustedBy />

      {/* ===================== SERVICES ===================== */}
      <section className="section-y">
        <div className="gutter mx-auto max-w-7xl">
          <SectionHead
            label="What we do"
            title="Every format your brand needs to be seen."
            intro="Nine disciplines under one roof, so your campaign never gets stitched together from four different vendors."
          />
          <div className="mt-12">
            <ServiceCards limit={8} />
          </div>
        </div>
      </section>

      <DisciplineTicker />

      {/* ===================== INDUSTRIES ===================== */}
      <section className="section-y">
        <div className="gutter mx-auto max-w-7xl">
          <SectionHead label="Industries we serve" title="Category knowledge, not generic content." />
          <div className="mt-12">
            <IndustryStrip />
          </div>
        </div>
      </section>

      {/* ===================== FEATURED PORTFOLIO ===================== */}
      <section className="hairline section-y bg-charcoal-2">
        <div className="gutter mx-auto max-w-7xl">
          <SectionHead label="Selected work" title="Work that earned its results." />
          <div className="mt-10">
            <PortfolioGrid items={featured} filters={homeFilters} />
          </div>
          <Reveal className="mt-12">
            <Link
              to="/portfolio"
              className="draw-underline inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-orange"
            >
              View full portfolio →
            </Link>
          </Reveal>
        </div>
      </section>

      <WhyUsGrid label="Why Da Craft Motion" heading="Eight reasons clients stay with us." />
      <ProcessTimeline />
      <StatsBand />

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="section-y">
        <div className="gutter mx-auto max-w-5xl">
          <SectionHead label="Client words" title="What working with us feels like." />
          <div className="mt-10">
            <TestimonialCarousel />
          </div>
          <Reveal className="mt-8">
            <Link
              to="/testimonials"
              className="draw-underline inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-orange"
            >
              Read all testimonials →
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
