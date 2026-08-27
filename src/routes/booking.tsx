import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Field, WhatsAppFallback, inputClass, useStaticForm } from "@/components/site/forms";
import { FinalCta } from "@/components/site/sections";
import { budgetOptions, industryOptions, serviceOptions } from "@/lib/site";

const title = "Book a Free Discovery Call | Da Craft Motion Creative Agency";
const description =
  "Book a free 15-minute discovery call with Da Craft Motion. Tell us your service, industry and budget and get real recommendations — zero pressure.";

export const Route = createFileRoute("/booking")({
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
  component: Booking,
});

function Booking() {
  const { errors, submitting, success, submit } = useStaticForm();

  return (
    <>
      <PageHero
        eyebrow="Booking"
        title="Book your free discovery call"
        intro="15 minutes, zero pressure, real recommendations — even if we're not the right fit."
      >
        <WhatsAppFallback label="Chat on WhatsApp instead" />
      </PageHero>

      <section className="section-y">
        <div className="gutter mx-auto max-w-3xl">
          {success ? (
            <Reveal>
              <div className="rounded-lg border border-orange bg-card p-10 text-center">
                <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-orange text-primary-foreground">
                  <Check className="size-6" />
                </span>
                <h2 className="h-section mt-6">Request received</h2>
                <p className="measure mx-auto mt-4 text-muted-foreground">
                  Thanks — we'll confirm your slot by email or phone within one working day.
                </p>
                <div className="mt-8 flex justify-center">
                  <WhatsAppFallback />
                </div>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <form
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();
                  void submit(e.currentTarget, ["service", "date", "businessName", "phone", "email"]);
                }}
                className="grid gap-6 rounded-lg border border-border bg-card p-7 md:grid-cols-2 md:p-10"
              >
                <Field label="Service needed" htmlFor="service" error={errors["service"]}>
                  <select id="service" name="service" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Industry" htmlFor="industry">
                  <select id="industry" name="industry" className={inputClass} defaultValue="">
                    <option value="">Select an industry</option>
                    {industryOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Preferred date" htmlFor="date" error={errors["date"]}>
                  <input id="date" name="date" type="date" className={inputClass} />
                </Field>

                <Field label="Preferred time" htmlFor="time">
                  <input id="time" name="time" type="time" className={inputClass} />
                </Field>

                <Field label="Budget range" htmlFor="budget">
                  <select id="budget" name="budget" className={inputClass} defaultValue="">
                    <option value="">Select a range</option>
                    {budgetOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Business name" htmlFor="businessName" error={errors["businessName"]}>
                  <input id="businessName" name="businessName" className={inputClass} placeholder="Your company" />
                </Field>

                <Field label="Phone number" htmlFor="phone" error={errors["phone"]}>
                  <input id="phone" name="phone" type="tel" className={inputClass} placeholder="+91 00000 00000" />
                </Field>

                <Field label="Email" htmlFor="email" error={errors["email"]}>
                  <input id="email" name="email" type="email" className={inputClass} placeholder="you@company.com" />
                </Field>

                <Field label="Project details" htmlFor="details" className="md:col-span-2">
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    className={inputClass}
                    placeholder="What are you launching, and what does success look like?"
                  />
                </Field>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-sm bg-orange px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-orange-dim disabled:opacity-60 sm:w-auto"
                  >
                    {submitting ? "Sending…" : "Request my call"}
                  </button>
                  <p className="mt-4 text-xs text-muted-foreground">
                    Prefer to talk now? Chat with us on WhatsApp instead.
                  </p>
                  <div className="mt-3">
                    <WhatsAppFallback label="Open WhatsApp" />
                  </div>
                </div>
              </form>
            </Reveal>
          )}
        </div>
      </section>

      <FinalCta title="Questions before booking?" copy="Send a message — we answer scoping and budget questions honestly, before any call." />
    </>
  );
}
