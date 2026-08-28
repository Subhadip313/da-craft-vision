# Da Craft Motion

Da Craft Motion is a responsive creative production agency website for a Kolkata-based studio. It presents the studio's services, industries, selected work, testimonials, contact information, and discovery-call booking flow in a cinematic editorial interface.

## Overview

The site is designed to help prospective clients:

- Understand the studio's photography, video, design, branding, and content services
- Browse selected portfolio work by category
- Explore service and industry-specific information
- Read client testimonials
- Start a project conversation through the booking or contact forms
- Reach the studio through phone, email, WhatsApp, social links, or the office map

The application uses server-rendered TanStack Start routes with a Vite development workflow and Nitro production output. It does not require a database or authentication service.

## Features

- Responsive navigation with a mobile full-screen menu
- Scroll-aware header with desktop and mobile layouts
- Route-level page titles and descriptions
- Open Graph and Twitter metadata on the main routes
- LocalBusiness structured data on the contact page
- Editorial portfolio grid with category filtering
- Before-and-after comparison component
- Testimonial carousel
- Animated counters, marquee content, and scroll reveals
- Reduced-motion support for users who request less animation
- Custom cursor behavior on pointer devices
- Floating WhatsApp and back-to-top actions
- Cookie consent banner
- Booking and contact forms with validation and a static success state
- Mailto and WhatsApp fallbacks for local development
- Favicon served from `public/favicon.png`
- `robots.txt` in the public directory

## Tech Stack

- React 19
- TypeScript
- TanStack Start and TanStack Router
- Vite
- Nitro
- Tailwind CSS 4
- Radix UI primitives
- Lucide React icons
- React Hook Form and Zod-compatible form utilities
- ESLint and Prettier

## Requirements

- Node.js 18 or newer
- npm

## Getting Started

From the project directory:

```sh
npm install
npm run dev
```

Vite normally starts at `http://localhost:8080`. If that port is already in use, it selects the next available port and prints the URL in the terminal.

### Preview on a phone

To test on a phone over the same local network, expose Vite on the network:

```sh
npm run dev -- --host 0.0.0.0
```

Then open the displayed network URL on a phone connected to the same Wi-Fi. For access from another network, use a tunnel such as ngrok:

```sh
ngrok http 8081
```

Use the port printed by Vite. The ngrok hostname must be included in `server.allowedHosts` in `vite.config.ts` while that hostname is active.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create the production client, SSR, and Nitro output |
| `npm run build:dev` | Create a development-mode build |
| `npm run preview` | Preview the built application locally |
| `npm run lint` | Run ESLint across the project |
| `npm run format` | Format the project with Prettier |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home page with hero, services, industries, selected work, process, stats, testimonials, and CTA |
| `/about` | Studio story, values, approach, and trust signals |
| `/services` | Complete service list with details, benefits, FAQs, and CTAs |
| `/portfolio` | Filterable portfolio grid and project presentation |
| `/industries` | Industry-specific creative production information |
| `/testimonials` | Client testimonial collection |
| `/booking` | Discovery-call booking form |
| `/contact` | Contact form, direct details, social links, and map |

## Project Structure

```text
src/
  components/
    site/       Site-specific layout, content, forms, motion, and navigation
    ui/         Reusable Radix and Tailwind UI primitives
  hooks/        Shared React hooks, including mobile detection
  lib/          Site content, project data, utilities, and error handling
  routes/       TanStack file-based route components
  router.tsx    Router creation and shared query context
  server.ts     Server entry and SSR error handling
  start.ts      Application start entry
  styles.css    Design tokens, base styles, utilities, and animations
public/         Static files served from the site root
```

## Content and Configuration

Central site details live in [src/lib/site.ts](src/lib/site.ts). Update these values before launch:

- WhatsApp number, including the country code and digits only
- Business email and phone number
- Office address and opening hours
- Social profile URLs
- Form submission endpoint, if using Formspree, Netlify Forms, or another provider
- Google Analytics and Meta Pixel IDs
- Google Maps embed URL

Project and portfolio content is also maintained in `src/lib/projects.ts`. Images and other imported assets live under `src/assets/` and are bundled by Vite.

## Design System

The visual system is defined in [src/styles.css](src/styles.css):

- Charcoal backgrounds for the cinematic base
- Cream and sand panels for contrast
- Orange for calls to action, active states, and highlights
- Jost for display typography
- Manrope for body and interface text
- Parisienne for the limited script accent
- Shared responsive spacing through the `gutter` and `section-y` utilities
- Shared reveal, marquee, underline, and image treatment utilities

Responsive behavior is mobile-first. The header switches to the mobile menu below the large-screen breakpoint, and grids, forms, typography, and media layouts progressively adapt to narrow viewports.

## Forms and Integrations

Forms currently support a local success state and fallback contact behavior. To connect production submissions, set `formEndpoint` in `src/lib/site.ts` and update the form provider configuration as needed.

The contact page includes JSON-LD structured data for the local business. Replace all placeholder business values before publishing so search engines and visitors receive accurate information.

## Production Build

Build the application with:

```sh
npm run build
```

The generated client and server output is written to `.output/`. Preview the build with:

```sh
npm run preview
```

The Vite configuration uses the project's TanStack Start and Nitro setup. Deployment settings can be adjusted in `vite.config.ts` and the hosting provider configuration without changing route components.

### GitHub Pages

GitHub Pages cannot run the TanStack server used by `npm run dev`, so this project builds a static SPA artifact for Pages. The workflow in `.github/workflows/deploy-pages.yml` publishes `dist/client` and runs whenever changes are pushed to `main`.

In the repository settings, open **Pages** and set **Source** to **GitHub Actions**. Do not use **Deploy from a branch** with the repository root, because that publishes `README.md` instead of the built website.

## Accessibility and Performance

- Semantic landmarks and route-level headings are used throughout the site
- Interactive icon buttons include accessible labels
- Visible focus styles are defined globally
- Navigation closes with Escape and locks background scrolling while open
- Images are loaded through the asset pipeline and use descriptive alternative text
- Motion can be reduced through the `prefers-reduced-motion` media preference
- Mobile navigation remains scrollable on short screens and devices with safe-area insets
- `robots.txt` is available from the public root

## Before Launch

1. Replace placeholder contact, WhatsApp, social, analytics, map, and form values in `src/lib/site.ts`.
2. Review every portfolio image, caption, and alternative text.
3. Connect and test the production form endpoint.
4. Verify all social links, phone links, WhatsApp links, and map details.
5. Run `npm run build` and test the production preview on desktop and mobile.
6. Configure the production domain and update metadata or sitemap settings if required by the host.
