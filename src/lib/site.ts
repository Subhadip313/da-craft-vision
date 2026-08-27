/* ==========================================================================
   DA CRAFT MOTION — CENTRAL CONFIG + CONTENT
   Replace the PLACEHOLDER values below before shipping.
   ========================================================================== */

export const site = {
  name: "Da Craft Motion",
  tagline: "Create | Inspire | Elevate.",
  // PLACEHOLDER — replace with the real WhatsApp number (digits only, incl. country code)
  whatsappNumber: "916290044365",
  // PLACEHOLDER — replace with the real business email
  email: "subhadipdutta180@gmail.com",
  // PLACEHOLDER — replace with the real phone number
  phone: "+91 62900 44365",
  address: "B/32/A, Rabindrapally, Kolkata – 700086",
  hours: "Mon – Sat · 10:00 – 19:00 IST",
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/",
  },
  // PLACEHOLDER — Formspree / Netlify Forms endpoint. Empty string keeps the local success state + mailto fallback.
  formEndpoint: "https://formsubmit.co/ajax/subhadipdutta180@gmail.com",
  // PLACEHOLDER — analytics IDs
  googleAnalyticsId: "G-XXXXXXXXXX",
  metaPixelId: "0000000000000",
  mapEmbedSrc:
    //"https://www.google.com/maps?q=Baghajatin%20Station%20Road%2C%20Kolkata%20700032&output=embed",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.676017669713!2d88.38080457590087!3d22.478805986400264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027172e9ab5689%3A0xb366a5a73b3f4a64!2sRabindrapally%2C%20Garia%2C%20Kolkata%2C%20West%20Bengal%20700086!5e0!3m2!1sen!2sin!4v1787868919236!5m2!1sen!2sin",
} as const;

export const whatsappLink = `https://wa.me/${site.whatsappNumber}`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Industries", to: "/industries" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  description: string;
  included: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "photography",
    index: "01",
    title: "Photography",
    short: "Commercial stills that make products, spaces and people sell.",
    description:
      "Campaign, product, food, fashion, interior and corporate photography, art-directed to your brand guidelines. We shoot for the platforms you actually publish on — so every frame arrives crop-ready and conversion-ready.",
    included: [
      "Pre-production moodboard and shot list",
      "Studio or on-location shoot with full lighting kit",
      "Professional retouching and colour grade",
      "Web, print and social crops of every hero frame",
    ],
    benefits: [
      "Higher click-through on paid and organic placements",
      "One consistent visual language across every channel",
      "Asset library you can reuse for months",
    ],
    faqs: [
      {
        q: "How fast do we get the images?",
        a: "Selects within 48 hours, fully retouched delivery within 5–7 working days depending on volume.",
      },
      {
        q: "Do you shoot on location outside Kolkata?",
        a: "Yes. We travel across India regularly; travel and stay are quoted transparently up front.",
      },
    ],
  },
  {
    slug: "videography",
    index: "02",
    title: "Videography",
    short: "Cinematic films built around a story, not just a camera move.",
    description:
      "Brand films, product launches, event coverage and social-first verticals shot on cinema bodies with dedicated lighting and sound. Scripted, storyboarded and produced end-to-end by one team.",
    included: [
      "Concept, script and storyboard",
      "Full crew: DOP, gaffer, sound, direction",
      "Cinema-grade lighting and stabilisation",
      "Master film plus platform cutdowns",
    ],
    benefits: [
      "Stops the scroll in the first two seconds",
      "Premium perception that supports premium pricing",
      "One shoot, many deliverables",
    ],
    faqs: [
      {
        q: "Can you work from our existing script?",
        a: "Absolutely — we can produce from your script or write it with you from a single-line brief.",
      },
      {
        q: "Do you handle voice-over and music licensing?",
        a: "Yes, both. All music we deliver is commercially licensed for your intended use.",
      },
    ],
  },
  {
    slug: "video-editing",
    index: "03",
    title: "Video Editing",
    short: "Sharp, rhythm-led edits with grade, sound design and captions.",
    description:
      "Retainer or per-project post-production for footage you already own. Story-first editing, colour grading, sound design, subtitles and platform-specific versioning.",
    included: [
      "Story-led edit with two revision rounds",
      "Colour grade and audio clean-up",
      "Motion titles, captions and subtitles",
      "16:9, 4:5 and 9:16 versions",
    ],
    benefits: [
      "Turn dormant footage into publishable content",
      "Consistent pacing and tone across a campaign",
      "Faster publishing cadence",
    ],
    faqs: [
      {
        q: "How do we send footage?",
        a: "Any cloud drive link works. We handle proxies and archival on our side.",
      },
      { q: "Do you offer monthly retainers?", a: "Yes — fixed monthly output at a lower per-edit rate." },
    ],
  },
  {
    slug: "graphic-design",
    index: "04",
    title: "Graphic Design",
    short: "Design systems, campaigns and collateral that hold together.",
    description:
      "Key visuals, packaging, print collateral, pitch decks and campaign systems — designed once, documented so your team can extend it without losing the thread.",
    included: [
      "Key visual and layout system",
      "Print-ready and digital export sets",
      "Editable source files",
      "Usage guidelines",
    ],
    benefits: [
      "Instantly recognisable brand presence",
      "No more off-brand one-off designs",
      "Faster internal turnaround",
    ],
    faqs: [
      { q: "Do we own the source files?", a: "Yes, full source files and rights transfer on final payment." },
      {
        q: "Can you match an existing brand book?",
        a: "We work inside your guidelines and flag where they need extending.",
      },
    ],
  },
  {
    slug: "social-media-content",
    index: "05",
    title: "Social Media Content",
    short: "Monthly content engines built for reach and measurable engagement.",
    description:
      "Content calendars, reels, carousels, statics and copy — produced in batched shoot days so your feed stays consistent without emergency scrambles.",
    included: [
      "Monthly content calendar and hooks",
      "Batched shoot day (photo + video)",
      "12–30 finished posts per month",
      "Performance review and iteration",
    ],
    benefits: [
      "Predictable publishing rhythm",
      "Creative decisions driven by what performed",
      "Real growth in saves, shares and DMs",
    ],
    faqs: [
      { q: "Do you also post and caption?", a: "Yes, scheduling and copywriting can be bundled in." },
      { q: "What is the minimum commitment?", a: "Three months — enough time for the data to be meaningful." },
    ],
  },
  {
    slug: "commercial-production",
    index: "06",
    title: "Commercial Production",
    short: "Full-scale ad production, from treatment to final master.",
    description:
      "TVC and digital commercial production with casting, locations, art direction, permits and post — managed as a single accountable production.",
    included: [
      "Treatment, budget and production schedule",
      "Casting, locations and permissions",
      "Art direction, styling and set",
      "Full post: edit, grade, mix, delivery masters",
    ],
    benefits: ["One partner, one budget, one timeline", "Broadcast-ready quality", "Campaign-ready asset suite"],
    faqs: [
      { q: "How far ahead should we book?", a: "Four to six weeks is comfortable for a full commercial." },
      { q: "Do you handle talent contracts?", a: "Yes, including usage terms and buyout periods." },
    ],
  },
  {
    slug: "brand-identity",
    index: "07",
    title: "Brand Identity",
    short: "Positioning, logo systems and a brand book teams actually use.",
    description:
      "Naming support, positioning, logo suite, palette, typography, tone of voice and a practical brand book — built to survive contact with real marketing.",
    included: [
      "Discovery and positioning workshop",
      "Logo suite and responsive marks",
      "Colour, type and imagery system",
      "Brand guidelines PDF",
    ],
    benefits: ["Clear differentiation in a crowded market", "Trust at first glance", "Cheaper, faster future marketing"],
    faqs: [
      { q: "How long does a rebrand take?", a: "Typically four to eight weeks depending on scope and approvals." },
      { q: "Can you refresh instead of rebuild?", a: "Yes — evolution projects are often the smarter investment." },
    ],
  },
  {
    slug: "motion-graphics",
    index: "08",
    title: "Motion Graphics",
    short: "Animated explainers, logo stings and kinetic type that clarify.",
    description:
      "2D and 3D motion design for explainers, product demos, title sequences and social animation — built from your design system so it never looks bolted on.",
    included: [
      "Script and animated storyboard",
      "Custom illustration or 3D as needed",
      "Sound design and mix",
      "Animated brand toolkit assets",
    ],
    benefits: [
      "Explain complex offers in under 60 seconds",
      "Reusable animated brand assets",
      "Higher completion rates on paid video",
    ],
    faqs: [
      { q: "Do you animate our existing illustrations?", a: "Yes, if the files are layered and editable." },
      { q: "Can we get a corporate film out of this?", a: "Yes — motion plus footage is our most requested combination." },
    ],
  },
  {
    slug: "corporate-films",
    index: "09",
    title: "Corporate Films",
    short: "Culture, leadership and investor films that build credibility.",
    description:
      "Company profiles, CSR documentation, leadership interviews, plant walkthroughs and internal comms — calm, professional production that respects your team's time.",
    included: [
      "Interview direction and question design",
      "Multi-camera interview setup",
      "B-roll across sites and departments",
      "Subtitled, versioned deliverables",
    ],
    benefits: ["Stronger recruitment and investor conversations", "Reusable across sales decks and events", "One credible, human narrative"],
    faqs: [
      { q: "Can you shoot inside a live facility?", a: "Yes, with safety briefing and minimal-footprint crews." },
      { q: "Do you provide multilingual versions?", a: "Yes — subtitles and voice-over in Hindi, Bengali and English." },
    ],
  },
];

export const industries = [
  {
    slug: "fashion",
    name: "Fashion",
    blurb:
      "Lookbooks, campaign films and reel-first content that make collections feel desirable and drop-ready.",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    blurb:
      "Interior and exterior photography, walkthrough films and drone coverage that shorten site-visit cycles.",
  },
  {
    slug: "restaurants",
    name: "Food & Restaurants",
    blurb: "Menu photography, ambience films and short-form food content built to drive footfall and orders.",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    blurb: "Property films, room and suite stills and guest-experience storytelling for direct bookings.",
  },
  {
    slug: "retail",
    name: "Retail",
    blurb: "Product catalogues, in-store campaigns and seasonal content systems for every channel.",
  },
  {
    slug: "corporate",
    name: "Corporate",
    blurb: "Company profiles, leadership films, event coverage and internal communication content.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    blurb: "Sensitive facility photography, doctor profiles and trust-building patient-education video.",
  },
  {
    slug: "education",
    name: "Education",
    blurb: "Campus films, admission campaigns and faculty content that lift enquiry-to-admission rates.",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    blurb: "Plant documentation, process films and capability decks for B2B and export conversations.",
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    blurb: "High-volume product stills, marketplace-compliant crops and performance-tested ad creative.",
  },
] as const;

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  industry: string;
  ratio: "portrait" | "landscape";
  image: string;
  alt: string;
  challenge: string;
  approach: string;
  result: string;
  outcome?: string;
  hasBeforeAfter?: boolean;
  isVideo?: boolean;
};

export const projectCategories = [
  "All",
  "Photography",
  "Videography",
  "Graphic Design",
  "Social Media",
  "Branding",
] as const;

export const homeFilters = ["All", "Photography", "Videography", "Branding", "Social Media"] as const;

export const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Industries Served" },
  { value: 2, suffix: "M+", label: "Social Views Generated" },
] as const;

export const processSteps = [
  { step: "01", title: "Discovery Call", copy: "Fifteen minutes to understand the business goal behind the content." },
  { step: "02", title: "Planning", copy: "Moodboards, scripts, shot lists and a schedule everyone signs off on." },
  { step: "03", title: "Production", copy: "Calm, well-crewed shoot days that protect your team's time." },
  { step: "04", title: "Editing", copy: "Story-led post with grade, sound design and two revision rounds." },
  { step: "05", title: "Delivery", copy: "Platform-ready masters, crops and an organised asset library." },
  { step: "06", title: "Growth", copy: "We review performance and feed the learnings into the next batch." },
];

export const whyUs = [
  { title: "Creative Strategy", copy: "Every shoot starts with the commercial outcome, not the camera." },
  { title: "Premium Quality", copy: "Cinema bodies, real lighting, proper sound. No shortcuts." },
  { title: "Fast Delivery", copy: "Selects in 48 hours, finished work inside a week." },
  { title: "Professional Team", copy: "One accountable crew — direction, camera, design and post." },
  { title: "Tailored Solutions", copy: "Scoped to your category, budget and publishing cadence." },
  { title: "Results-Oriented", copy: "We measure saves, shares, enquiries — not just likes." },
  { title: "Affordable Packages", copy: "Transparent, tiered pricing with no surprise line items." },
  { title: "Dedicated Support", copy: "A single point of contact from brief to final delivery." },
];

export const values = [
  { title: "Creativity", copy: "Ideas that earn attention instead of buying it." },
  { title: "Integrity", copy: "Honest scopes, honest timelines, honest feedback." },
  { title: "Excellence", copy: "Craft standards that hold up frame by frame." },
  { title: "Collaboration", copy: "We work with your team, not around it." },
  { title: "Consistency", copy: "The hundredth deliverable matches the first." },
  { title: "Elevation", copy: "Every project should move a real business number." },
];

export const testimonials = [
  {
    name: "Ananya Sen",
    role: "Marketing Head",
    company: "Silverline Realty",
    quote:
      "Our site-visit enquiries went up noticeably within a month of publishing their walkthrough films. The team is calm, organised and genuinely creative.",
    rating: 5,
  },
  {
    name: "Rohit Malhotra",
    role: "Founder",
    company: "Bistro Nine",
    quote:
      "They understood our menu better than we did. The food and ambience content lifted weekend footfall and gave us six months of posts.",
    rating: 5,
  },
  {
    name: "Priya Raghavan",
    role: "Brand Manager",
    company: "Kora Label",
    quote:
      "The campaign films felt international but stayed true to us. Reels engagement grew about 40% in the first 30 days.",
    rating: 5,
  },
  {
    name: "Debashish Roy",
    role: "Director",
    company: "Meridian Industries",
    quote:
      "Our corporate film is now the first thing we send to overseas buyers. Professional crew, zero disruption to the plant.",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    role: "Head of Growth",
    company: "Nuvo Care",
    quote:
      "Sensitive, careful work inside a clinical space — and the patient-education videos are still our best-performing assets.",
    rating: 5,
  },
  {
    name: "Arjun Bhattacharya",
    role: "CEO",
    company: "Lumen Studios",
    quote:
      "The rebrand gave us language, not just a logo. Sales conversations got easier the week we launched it.",
    rating: 5,
    isVideo: true,
  },
];

/** PLACEHOLDER client names — swap for real client logo SVGs in /public or src/assets. */
export const clientLogos = [
  "SILVERLINE",
  "BISTRO NINE",
  "KORA LABEL",
  "MERIDIAN",
  "NUVO CARE",
  "LUMEN",
  "ATRIA HOTELS",
  "VERTEX RETAIL",
];

export const serviceOptions = services.map((s) => s.title);
export const industryOptions = industries.map((i) => i.name);
export const budgetOptions = [
  "Under ₹50,000",
  "₹50,000 – ₹1,50,000",
  "₹1,50,000 – ₹5,00,000",
  "₹5,00,000+",
  "Not sure yet",
];
