# Craft Motion Studio

# DA CRAFT MOTION — Static Website Build Prompt
*A master prompt for an AI coding tool (Claude Code, Cursor, v0, etc.) to generate a static, production-ready website.*

---

## 0. HOW TO USE THIS PROMPT

Paste this entire document into your AI coding assistant as the initial instruction. It is written to be handed to a code-generation model directly — it defines stack, design system, copy, motion, and page-by-page specs so nothing is left to guesswork. Where you must supply an asset (photo, video, logo file), a `[ASSET: ...]` placeholder is used — swap these before shipping.

**One flag before you build:** the brand PDF (`Da_Craft_Motion.pdf`) defines the official palette as **orange `#F07424`** and **cream `#FAF3E1`** — but the separate Wix prompt document describes a "dark theme with **red** accents." Your uploaded color-swatch image shows a 4-tone palette (cream → warm sand → orange → charcoal), which reads as a dark, premium orange system, not red. This prompt follows your **actual logo/brand assets** (orange + cream + charcoal) rather than the old "red" line from the Wix doc, since a live brand book should win over an early planning note. Say the word if you'd rather I rebuild it around red.

---

## 1. PROJECT SUMMARY

Build a **premium, cinematic, dark-theme static website** for **Da Craft Motion**, a full-service creative agency (photography, videography, editing, graphic design, branding, motion graphics, social content) based in Kolkata, India. Tagline: **"Create | Inspire | Elevate."**

The site must feel like a boutique global creative studio — closer to an editorial portfolio than a template-driven small-business site. Mature, confident, restrained use of motion; nothing gimmicky.

**Primary goal:** convert visitors into discovery-call bookings / WhatsApp conversations, while showcasing the portfolio beautifully enough that clients trust the work before they trust the pitch.

**Design references (study these, don't copy them):**
- **designpinata.com/works** — full-bleed editorial project grid, oversized typography, generous whitespace, category-driven filtering, understated hover reveals, a serious/gallery tone rather than "salesy" agency tone.
- **quicktimeproduction.com** — cinematic looping video hero, animated stat counters, service cards with numbered indices (01, 02, 03…), scrolling client-logo marquee, case-study thumbnail grid.

Blend Design Piñata's **editorial restraint and typographic confidence** with Quicktime's **motion-forward, video-led storytelling** — filtered through Da Craft Motion's own orange/cream/charcoal identity.

---

## 2. TECH STACK

- **HTML5 + CSS3 + vanilla JavaScript** (or Tailwind CSS if the tool defaults to it — utility classes are fine, but write custom CSS for anything bespoke like the marquee, custom cursor, and reveal animations).
- **GSAP (with ScrollTrigger)** for scroll-driven reveals, pinned sections, and the stat counters — loaded via CDN.
- **Lenis** (or a lightweight equivalent) for smooth/inertia scrolling.
- No backend/CMS — this is a static site. Forms (booking, contact, newsletter) should be wired to a static form handler (Formspree, Netlify Forms, or a simple `mailto:` fallback) — use a clearly marked placeholder endpoint.
- Fully responsive, mobile-first breakpoints: 375 / 768 / 1024 / 1440 / 1920.
- Semantic HTML, one `<h1>` per page, proper landmark tags (`<header>`, `<nav>`, `<main>`, `<footer>`).
- Lazy-load all images/videos below the fold (`loading="lazy"`, `preload="metadata"`).

---

## 3. DESIGN SYSTEM

### 3.1 Color Palette
```
--color-charcoal:      #1C1B19   /* primary dark background */
--color-charcoal-2:    #242220   /* elevated surface / cards */
--color-cream:         #FAF3E1   /* primary light text / light backgrounds */
--color-sand:          #F0E4C8   /* secondary text, muted panels, tints */
--color-orange:        #F07424   /* primary accent — CTAs, highlights, hover states */
--color-orange-dim:    #C75E19   /* pressed/hover state, darker accent */
--color-line:          rgba(250,243,225,0.12)  /* hairline dividers on dark bg */
```
- **Base mode:** dark. `--color-charcoal` is the dominant background across ~80% of the site (hero, services, portfolio, footer). Use `--color-cream` as a light "breather" section background 1–2 times per page (e.g., the About/Values section, a testimonial block) to create rhythm — mirrors Design Piñata's contrast panels.
- Orange is a **precision accent**: CTA buttons, link underlines, active nav state, numbered indices, hover glows, the cursive "da" logotype. Never use orange as a large background fill except in small tags/badges or a single bold panel (e.g., the Final CTA band).
- Never place orange text directly on cream, or cream text on orange, without checking contrast — prefer charcoal text on orange, and orange text on charcoal/cream.

### 3.2 Typography
- **Display / Headings:** Futura Black (or nearest available: Futura Extra Bold / Century Gothic Bold as fallback). Wide tracking, all-caps for section labels, sentence-case for hero headlines.
- **Script accent:** "Above the Beyond" script font — used *only* for the small "da" mark before "Craft Motion" in the logo lockup and as a rare decorative flourish (e.g., a handwritten-style word in the hero, used sparingly, max once per page).
- **Body / UI:** TT Norms (or Inter/Neue Montreal as a close free fallback) — clean grotesque for paragraphs, nav, buttons, forms.
- **Scale (desktop):** H1 clamp(48px, 6vw, 96px) · H2 clamp(32px, 4vw, 56px) · H3 24–28px · Body 16–18px · Micro-label (eyebrow tags) 12px uppercase, letter-spacing 0.15em.
- Keep line-length on body copy under ~65 characters for readability.

### 3.3 Layout & Spacing
- Full-width, edge-to-edge sections (no boxed 1200px container feel except for body copy blocks).
- Generous vertical rhythm: 120–160px section padding on desktop, 64–80px on mobile.
- 12-column grid, 24px gutters desktop / 16px mobile.
- Use asymmetric grids for the portfolio and services sections (mixed 1x1 / 2x1 tile ratios) rather than a rigid uniform grid — this is what gives Design Piñata its editorial feel.

### 3.4 Motion Language ("engaging but mature")
Motion should read as *confident and unhurried*, not flashy. Rules:
- **Page load:** logo mark does a brief, elegant reveal (mask-wipe or fade+rise), then hero content staggers in (headline words fade/rise 20px, 60–80ms stagger).
- **Scroll reveals:** all sections use a single consistent reveal — opacity 0→1 + translateY(24px)→0, 0.8–1s, ease `cubic-bezier(0.16, 1, 0.3, 1)`, triggered at 15–20% viewport entry. No bouncing, no rotation, no more than one motion "signature" per project.
- **Hero:** looped, muted, cinematic background video (or a slow Ken-Burns image crossfade if no video asset yet) with a subtle dark gradient overlay for text legibility.
- **Custom cursor (desktop only):** a small circular cursor that expands and shows "View" / "Play" / "Book" text when hovering portfolio tiles, CTA buttons, and the WhatsApp icon. Disable on touch devices.
- **Hover micro-interactions:** service cards lift 4–8px with a soft shadow and the accent-orange underline draws left-to-right beneath the title; portfolio tiles scale image 1.0→1.05 inside a fixed-ratio crop (never resize the container).
- **Marquee:** client-logo strip and/or a "Photography · Videography · Branding · Motion Graphics ·" text ticker scrolls infinitely, pausing on hover.
- **Stat counters:** animate from 0 to target value once, triggered on scroll-into-view (GSAP ScrollTrigger + a simple `requestAnimationFrame` tween).
- **Sticky elements:** nav bar transitions from transparent-on-hero to a solid `--color-charcoal-2` bar with a blur backdrop once scrolled past the hero; the "Book a Call" button and floating WhatsApp icon stay fixed bottom-right at all times, with a small pulse/glow animation every ~6s on the WhatsApp icon (subtle, not distracting).
- Respect `prefers-reduced-motion`: disable parallax/marquee/cursor effects and fall back to simple fades.

### 3.5 Imagery Treatment
- All photography/video gets a very slight desaturation + warm grade so cream/orange tones in the brand feel native to the imagery (avoid cold blue casts).
- Portfolio thumbnails: consistent aspect ratio per grid row (mix of 4:5 portrait and 16:9 landscape tiles), rounded corners 4–8px, subtle 1px `--color-line` border.
- Use duotone charcoal/cream treatment on any placeholder/team photography if final assets aren't ready.

---

## 4. GLOBAL COMPONENTS (present on every page)

1. **Header/Nav** — logo (left), nav links (center or right): Home / About / Services / Portfolio / Industries / Testimonials / Contact, plus a filled orange "Book a Call" button (far right). Transparent over hero, solid+blurred on scroll. Mobile: hamburger → full-screen dark overlay menu with large stacked links and the same CTA.
2. **Floating WhatsApp button** — bottom-right, circular, orange, fixed across all pages, opens `https://wa.me/[PHONE_NUMBER]` in a new tab.
3. **Sticky "Book a Call" micro-bar** — appears on mobile as a bottom fixed bar after scrolling past the hero (two buttons: "Book a Call" / "WhatsApp").
4. **Back-to-top button** — appears after 1 viewport of scroll, bottom-left, minimal circular arrow.
5. **Footer** — dark charcoal, contains: logo + tagline, sitemap columns (Services / Company / Legal), office address (1/1, Baghajatin Station Road, Kolkata: 700032), phone/email, social icons (Instagram, Facebook, LinkedIn, YouTube), newsletter signup (email input + submit), small print (© year, privacy/terms links), and a subtle "Back to top."
6. **Cookie consent banner** — bottom bar, dismissible, minimal.

---

## 5. PAGE-BY-PAGE SPEC

### 5.1 HOME

**Hero**
- Full-viewport section, background: looping muted cinematic showreel video `[ASSET: showreel-loop.mp4]` (fallback: slow-crossfading image set of past work) with a charcoal gradient overlay (stronger at bottom for text legibility).
- Eyebrow label (small, orange, uppercase, letter-spaced): "FULL-SERVICE CREATIVE AGENCY"
- H1: **"Creative Content That Grows Your Brand"**
- Subhead: "We help businesses stand out through photography, videography, branding, design and social media content that drives engagement and delivers real business growth."
- Two CTAs: `Book a Free Strategy Call` (filled orange) and `Chat on WhatsApp` (outline cream, WhatsApp icon).
- Small scroll-cue at the bottom (animated downward chevron or "Scroll" text rotated 90°).

**Trusted By**
- Thin section, cream or charcoal-2 background, small label "Trusted by brands across industries," then an infinite-scroll logo marquee. `[ASSET: client-logos/*.svg]` (use greyscale/monochrome-cream treatment, full color on hover).

**Services Overview**
- Section label: "WHAT WE DO." H2: "Every format your brand needs to be seen."
- Numbered service cards (01–08) in a responsive grid (4 cols desktop / 2 tablet / 1 mobile): Photography, Videography, Video Editing, Graphic Design, Social Media Content, Branding, Motion Graphics, Commercial Production. Each card: number, icon (line-style, cream/orange), title, 1-line description, "Learn More →" link with the draw-underline hover.

**Industries We Serve**
- Horizontal scroll-snap row (or wrapped grid on mobile) of industry chips/cards with a background photo + industry name overlay: Fashion, Real Estate, Food & Restaurants, Hospitality, Retail, Corporate, Healthcare, Education, Startups, E-commerce.

**Featured Portfolio**
- Section label "SELECTED WORK." Asymmetric editorial grid (Design Piñata style) of 6–8 project tiles mixing image and video-preview tiles. Filter tabs above the grid: All / Photography / Videography / Branding / Social Media (JS-based show/hide filter, animated fade). Each tile on hover: slight zoom + a caption slide-up showing project name + category. Click → opens a case-study detail (can be a modal/lightbox for a static site, or a dedicated project page — pick modal for simplicity unless full project pages are wanted).
- Section CTA: "View Full Portfolio →" linking to the Portfolio page.

**Why Choose Da Craft Motion**
- Cream (light) background panel for contrast. 8-point checklist grid (2 cols mobile / 4 desktop) with minimal icons: Creative Strategy, Premium Quality, Fast Delivery, Professional Team, Tailored Solutions, Results-Oriented Approach, Affordable Packages, Dedicated Client Support.

**Process**
- Horizontal (desktop) / vertical (mobile) timeline with 6 numbered steps and a connecting animated line that draws in on scroll: Discovery Call → Planning → Production → Editing → Delivery → Growth. Each step: short 1-liner.

**Statistics**
- Full-bleed charcoal band, 4 large animated counters: `500+` Projects Delivered, `100+` Happy Clients, `10+` Industries Served, `2M+` Social Media Views Generated. Large Futura numerals in orange, label in small cream caps beneath.

**Testimonials (preview)**
- 2–3 rotating testimonial cards (carousel with subtle auto-advance + manual arrows), client name/company/photo, quote in large serif-adjacent or script-accent styling for the opening quotation mark only.

**Final CTA**
- Bold full-bleed orange (or charcoal-with-orange-glow) band. H2: "Ready to Elevate Your Brand?" Two buttons: `Book a Call` / `WhatsApp Us`.

---

### 5.2 ABOUT US
- Intro/hero band: H1 "About Da Craft Motion," short mission statement.
- **Agency Story** — narrative block, paired with a studio/team photo `[ASSET: studio-photo.jpg]`.
- **Mission / Vision** — two-column cards, light cream panel.
- **Core Values** — icon grid (Creativity, Integrity, Excellence, Collaboration — adapt to 4–6 values).
- **Why Clients Trust Us** — reuse the "Why Choose" checklist style from Home but framed as trust signals, optionally with a short team photo strip or grid.

### 5.3 SERVICES (index + detail pattern)
- **Services index:** repeat the numbered-card layout from Home but full list (8 services), each linking to an anchor or detail section on the same page (`#photography`, `#videography`, etc.) to keep it a true static single-build.
- **Each service block includes:** service name + icon, 2–3 sentence description, "What's Included" bullet list (deliverables), a benefits strip, 3–4 portfolio thumbnails specific to that service, a short FAQ accordion (2–3 Q&As), and a mid-page CTA ("Get a Quote for [Service]").
- Services to cover: Photography, Videography, Graphic Design, Video Editing, Social Media Content, Commercial Production, Brand Identity, Motion Graphics, Corporate Films.

### 5.4 PORTFOLIO
- H1 + filter bar (All / Photography / Videography / Graphic Design / Social Media / Branding / Fashion / Food / Real Estate / Corporate).
- Full masonry/editorial grid (denser than the Home preview — aim for 12–18 tiles).
- Each tile opens a **case-study lightbox/modal**: hero image or video, project title, client, industry tag, a short "Challenge → Approach → Result" narrative, a small image carousel, and where relevant a **before/after slider** component (draggable divider, CSS clip-path based).
- Add a "Client Outcome" callout stat where available (e.g., "+40% engagement in 30 days").

### 5.5 INDUSTRIES
- H1 + intro line.
- One expandable/dedicated block per industry (Fashion, Real Estate, Restaurants, Hotels, Retail, Healthcare, Corporate, Education, Manufacturing, E-commerce): background image, short paragraph on how Da Craft Motion's services specifically help that industry, 2–3 relevant portfolio thumbnails, CTA "See [Industry] Work."

### 5.6 TESTIMONIALS
- H1 + intro.
- Full grid/masonry of testimonial cards (photo/logo, name, role, company, quote, optional star rating).
- Optional: 1–2 embedded video-testimonial tiles (play-on-click, custom cursor "Play" state).

### 5.7 BOOKING PAGE (high priority)
- H1: "Book Your Free Discovery Call."
- Short reassurance line ("15 minutes, zero pressure, real recommendations.").
- **Form fields:** Service Needed (select), Industry (select), Preferred Date, Preferred Time, Budget Range (select), Business Name, Phone Number, Email, Project Details (textarea).
- Style the form as a clean, dark, multi-step or single-scroll form with orange focus states and inline validation. Since this is static, wire submission to the chosen static form handler and show a success state (confirmation message + a WhatsApp fallback: "Prefer to talk now? Chat with us on WhatsApp instead.").
- Prominent WhatsApp button repeated near the form.

### 5.8 CONTACT
- Split layout: left = contact form (Name, Email, Phone, Message) + direct details (phone, email, business hours); right = embedded Google Map (Kolkata office pin) and address: **1/1, Baghajatin Station Road, Kolkata – 700032**.
- WhatsApp chat button, social links row (Instagram, Facebook, LinkedIn, YouTube).

---

## 6. SEO & TECHNICAL REQUIREMENTS
- Unique `<title>` and meta description per page using the supplied keyword set: Creative Agency, Photography Services, Videography Services, Video Editing, Graphic Design, Branding Agency, Content Creation, Social Media Marketing Content, Commercial Photography, Corporate Videography, Real Estate Photography, Fashion Photography, Restaurant Photography, Creative Production Agency.
- Open Graph + Twitter Card meta tags on every page (use a representative brand image for OG image).
- `schema.org` JSON-LD for `LocalBusiness`/`ProfessionalService` (name, address, phone, socials) on the Contact/Home page.
- Descriptive `alt` text on every image, tied to the SEO keyword set where natural.
- Compress/optimize all images (WebP with fallback), lazy-load below-the-fold media.
- `sitemap.xml` and `robots.txt`.
- Google Analytics + Meta Pixel script placeholders (clearly commented, ready to drop in an ID).
- Accessibility: sufficient color contrast (double-check orange-on-charcoal for small text), visible focus states, `aria-label`s on icon-only buttons (WhatsApp, back-to-top, hamburger, social icons), keyboard-navigable filter tabs and modals (Escape closes lightboxes, focus trap while open).

---

## 7. TONE OF COPY (for any AI-generated filler text)
Professional, friendly, confident, premium, conversion-focused, trust-building, clear and concise. Frame everything around **business growth and results**, not just "creative services" — e.g., prefer "content that drives measurable engagement" over "beautiful photos."

---

## 8. DELIVERABLE FORMAT
Produce the site as a clean static project:
```
/index.html
/about.html
/services.html
/portfolio.html
/industries.html
/testimonials.html
/booking.html
/contact.html
/css/style.css
/js/main.js          (nav, filters, marquee, counters, lightbox, form handling)
/assets/images/...
/assets/video/...
/assets/fonts/...
```
Keep CSS organized with the design tokens from Section 3.1–3.3 defined once at the top as CSS custom properties on `:root`, so colors/fonts/spacing can be tuned globally later. Comment each major section of HTML/CSS clearly (`<!-- HERO -->`, `/* === SERVICES CARDS === */`) so the file is easy to hand off to another developer.


IMPORTANT IMPLEMENTATION NOTES FOR LOVABLE:
- Build the full website now as a polished production-quality implementation, not merely a plan or wireframe.
- Keep it static: do not add authentication, database tables, server functions, or other backend dependencies.
- Lovable's React/TypeScript/Tailwind stack is acceptable; implement the requested pages as routes and reusable components.
- Use high-quality, license-safe placeholder imagery where supplied brand assets are missing, and preserve clear replacement points.
- Use placeholder values for the WhatsApp phone number, contact email, analytics IDs, Meta Pixel ID, and static-form endpoint, clearly centralized for later replacement.
- Ensure all navigation links, mobile menu, filters, modals/lightboxes, testimonial carousel, accordions, form validation/success state, cookie banner, reduced-motion behavior, and buttons function.
- Include the complete page set: Home, About, Services, Portfolio, Industries, Testimonials, Booking, and Contact.
- Prioritize a cinematic, editorial finish and responsive quality across mobile and desktop.
- When complete, summarize what was built and any placeholders the owner still needs to replace.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/84f52433-69cb-436d-85c5-5f02c0ec3394).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
