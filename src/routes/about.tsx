import { createFileRoute } from "@tanstack/react-router";
import studio from "@/assets/studio.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta, SectionHead, StatsBand, WhyUsGrid } from "@/components/site/sections";
import { values } from "@/lib/site";

const title = "About Da Craft Motion | Creative Production Agency in Kolkata";
const description =
  "Meet Da Craft Motion — a Kolkata creative production agency built on strategy-led photography, videography, branding and content that grows brands.";

export const Route = createFileRoute("/about")({
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
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            We build brands that <span className="script text-orange">move</span>
          </>
        }
        intro="Da Craft Motion is a full-service creative agency in Kolkata. We exist to make sure good businesses stop losing attention to better-looking competitors."
      />

      {/* AGENCY STORY */}
      <section className="section-y">
        <div className="gutter mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="h-section mt-4">Started with one camera and a stubborn standard.</h2>
            <div className="measure mt-6 space-y-4 text-muted-foreground">
              <p>
                We began as a two-person crew shooting local brands who deserved better than stock photography. The
                brief never changed: make the work good enough that clients trust the craft before they hear the pitch.
              </p>
              <p>
                Today we're a full studio — direction, camera, design, motion and post — producing campaigns for
                fashion labels, hotels, developers, hospitals, manufacturers and fast-growing D2C brands.
              </p>
              <p>
                What hasn't changed is the way we work: small accountable teams, honest timelines, and content measured
                against business outcomes rather than applause.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={studio}
              alt="Da Craft Motion creative team editing video content in the Kolkata studio"
              loading="lazy"
              width={1440}
              height={960}
              className="grade w-full rounded-lg border border-border object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="panel-cream section-y">
        <div className="gutter mx-auto max-w-7xl">
          <SectionHead label="Mission & vision" title="Why we pick up the camera." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                h: "Mission",
                p: "To give ambitious businesses content that earns attention and converts it — produced with the craft standards of a boutique studio and the reliability of a partner.",
              },
              {
                h: "Vision",
                p: "To be eastern India's most trusted creative production partner, known equally for cinematic quality and measurable commercial results.",
              },
            ].map((card, i) => (
              <Reveal key={card.h} delay={i * 90}>
                <div className="h-full rounded-lg border border-border bg-card p-8">
                  <h3 className="font-display text-2xl font-bold">{card.h}</h3>
                  <p className="mt-4 text-sm/relaxed text-muted-foreground">{card.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section-y">
        <div className="gutter mx-auto max-w-7xl">
          <SectionHead label="Core values" title="The rules we don't bend." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 70}>
                <div className="h-full bg-card p-8">
                  <span className="font-display text-sm font-bold tracking-[0.2em] text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold">{v.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{v.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />
      <WhyUsGrid label="Why clients trust us" heading="Trust signals, not sales lines." />
      <FinalCta title="Let's build something worth watching." />
    </>
  );
}
