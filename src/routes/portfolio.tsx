import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";
import { FinalCta, StatsBand } from "@/components/site/sections";
import { projects } from "@/lib/projects";

const filters = [
  "All",
  "Photography",
  "Videography",
  "Graphic Design",
  "Social Media",
  "Branding",
  "Fashion",
  "Food",
  "Real Estate",
  "Corporate",
] as const;

const title = "Portfolio — Commercial Photography & Video Case Studies | Da Craft Motion";
const description =
  "Case studies from Da Craft Motion: fashion photography, restaurant photography, real estate videography, branding and social media content with measurable outcomes.";

export const Route = createFileRoute("/portfolio")({
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
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected work, real outcomes"
        intro="Open any tile for the challenge, the approach and what it actually did for the client."
      />
      <section className="section-y">
        <div className="gutter mx-auto max-w-7xl">
          <PortfolioGrid items={projects} filters={filters} dense />
        </div>
      </section>
      <StatsBand />
      <FinalCta title="Want work like this for your brand?" />
    </>
  );
}
