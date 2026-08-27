import { Link } from "@tanstack/react-router";
import { ArrowUp, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { services, site, whatsappLink } from "@/lib/site";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="hairline bg-charcoal">
      <div className="gutter mx-auto max-w-7xl py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="script mt-4 text-2xl text-orange">Create | Inspire | Elevate.</p>
            <p className="measure mt-4 text-sm text-muted-foreground">
              A full-service creative agency in Kolkata producing photography, film, design and social content that
              moves real business numbers.
            </p>
            <div className="mt-6 flex gap-3">
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
                  className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:border-orange hover:text-orange"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Services">
            {services.slice(0, 6).map((s) => (
              <Link key={s.slug} to="/services" hash={s.slug} className="draw-underline w-fit">
                {s.title}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            <Link to="/about" className="draw-underline w-fit">
              About
            </Link>
            <Link to="/portfolio" className="draw-underline w-fit">
              Portfolio
            </Link>
            <Link to="/industries" className="draw-underline w-fit">
              Industries
            </Link>
            <Link to="/testimonials" className="draw-underline w-fit">
              Testimonials
            </Link>
            <Link to="/booking" className="draw-underline w-fit">
              Book a Call
            </Link>
            <Link to="/contact" className="draw-underline w-fit">
              Contact
            </Link>
          </FooterColumn>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">Studio</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-orange" />
                <span>{site.address}</span>
              </li>
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
            </ul>

            <form
              className="mt-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
                setEmail("");
              }}
            >
              <label htmlFor="footer-newsletter" className="text-xs uppercase tracking-[0.16em] text-foreground/70">
                Newsletter
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  id="footer-newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="min-w-0 flex-1 rounded-sm border border-input bg-transparent px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-orange focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-sm bg-orange px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-orange-dim"
                >
                  Join
                </button>
              </div>
              {subscribed ? (
                <p className="mt-2 text-xs text-orange">Thanks — you're on the list.</p>
              ) : null}
            </form>
          </div>
        </div>

        <div className="hairline mt-14 flex flex-col gap-4 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Da Craft Motion. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="draw-underline">
              WhatsApp
            </a>
            <Link to="/contact" className="draw-underline">
              Privacy
            </Link>
            <Link to="/contact" className="draw-underline">
              Terms
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 uppercase tracking-[0.14em] text-foreground/80 transition-colors hover:text-orange"
            >
              Back to top <ArrowUp className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">{title}</h3>
      <div className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
