import { createFileRoute } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Field, WhatsAppFallback, inputClass, useStaticForm } from "@/components/site/forms";
import { FinalCta } from "@/components/site/sections";
import { site } from "@/lib/site";

const title = "Contact Da Craft Motion | Creative Agency in Kolkata";
const description =
  "Talk to Da Craft Motion — 1/1 Baghajatin Station Road, Kolkata 700032. Call, email or WhatsApp us about photography, videography, branding and content production.";

export const Route = createFileRoute("/contact")({
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
          "@type": "LocalBusiness",
          name: site.name,
          image: "/favicon.ico",
          telephone: site.phone,
          email: site.email,
          openingHours: "Mo-Sa 10:00-19:00",
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
  component: Contact,
});

function Contact() {
  const { errors, submitting, success, submit } = useStaticForm();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start a conversation"
        intro="Tell us what you're planning. We'll reply the same working day with next steps or an honest referral."
      />

      <section className="section-y">
        <div className="gutter mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          {/* FORM + DETAILS */}
          <Reveal>
            {success ? (
              <div className="rounded-lg border border-orange bg-card p-8">
                <h2 className="font-display text-2xl font-bold">Message sent</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Thanks for reaching out — we'll be in touch shortly.
                </p>
                <div className="mt-6">
                  <WhatsAppFallback />
                </div>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();
                  void submit(e.currentTarget, ["name", "email", "message"], "New contact enquiry - Da Craft Motion");
                }}
                className="grid gap-5 rounded-lg border border-border bg-card p-7 md:p-9"
              >
                <Field label="Name" htmlFor="name" error={errors["name"]}>
                  <input id="name" name="name" className={inputClass} placeholder="Your name" />
                </Field>
                <Field label="Email" htmlFor="email" error={errors["email"]}>
                  <input id="email" name="email" type="email" className={inputClass} placeholder="you@company.com" />
                </Field>
                <Field label="Phone" htmlFor="phone" error={errors["phone"]}>
                  <input id="phone" name="phone" type="tel" className={inputClass} placeholder="+91 00000 00000" />
                </Field>
                <Field label="Message" htmlFor="message" error={errors["message"]}>
                  <textarea id="message" name="message" rows={5} className={inputClass} placeholder="How can we help?" />
                </Field>
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-sm bg-orange px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-orange-dim disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send message"}
                </button>
              </form>
            )}

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-orange" />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="draw-underline">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-orange" />
                <a href={`mailto:${site.email}`} className="draw-underline">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Clock className="mt-0.5 size-4 shrink-0 text-orange" />
                {site.hours}
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <WhatsAppFallback label="Chat on WhatsApp" />
              {[
                { Icon: Instagram, href: site.socials.instagram, label: "Instagram" },
                { Icon: Facebook, href: site.socials.facebook, label: "Facebook" },
                { Icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
                { Icon: Youtube, href: site.socials.youtube, label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Da Craft Motion on ${label}`}
                  className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-orange hover:text-orange"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* MAP + ADDRESS */}
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                title="Da Craft Motion studio location in Kolkata"
                src={site.mapEmbedSrc}
                loading="lazy"
                className="h-100 w-full border-0 md:h-140"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-6 rounded-lg border border-border bg-card p-7">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-orange">Studio address</h2>
              <p className="mt-3 flex gap-3 font-display text-lg font-bold">
                <MapPin className="mt-1 size-5 shrink-0 text-orange" />
                {site.address}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta title="Rather just book the call?" copy="Pick a slot that suits you and we'll come prepared with ideas for your category." />
    </>
  );
}
