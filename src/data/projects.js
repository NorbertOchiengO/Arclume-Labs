// Single source of truth for the portfolio.
//
// Every entry below was checked against the live URL (page title, meta description and
// visible content). Descriptions only state what those pages show.
//
// `type` is an honest label for how the work should be read:
//   - "Concept"        a fictional brand/organisation designed as a portfolio piece
//   - "Portfolio demo" a demonstration the live page itself labels as a demo
//   - "Live website"   a website for a real-looking organisation. Confirm whether this
//                      was client work before describing it as such.
//
// `palette` uses each site's own declared theme colour so previews keep a hint of its identity.
// `image` is optional. Add a genuine screenshot path (e.g. '/work/novacare.webp') to replace
// the typographic preview. If the file fails to load the card falls back automatically.
// `technologies` is intentionally omitted: the stacks have not been verified.

export const projects = [
  {
    id: 'arclume-freight',
    title: 'ARCLUME Freight',
    category: 'Logistics & Transport',
    type: 'Portfolio demo',
    description:
      'A freight and logistics website covering transportation, warehousing, cargo handling and last-mile delivery, with an online shipping-quote request.',
    url: 'https://arclume-freight.vercel.app/',
    featured: true,
    image: null,
    palette: { bg: '#14263D', fg: '#F6F5F1', accent: '#8FA7FF' },
  },
  {
    id: 'novacare-health-centre',
    title: 'NovaCare Health Centre',
    category: 'Healthcare',
    type: 'Concept',
    description:
      'A healthcare website for a fictional health centre: services, sample clinicians and a demonstration appointment request.',
    url: 'https://nova-care-health-center.vercel.app/',
    featured: true,
    image: null,
    palette: { bg: '#176B61', fg: '#F6F5F1', accent: '#BFEBE3' },
  },
  {
    id: 'imara-impact-foundation',
    title: 'Imara Impact Foundation',
    category: 'Nonprofit & Impact',
    type: 'Concept',
    description:
      'A nonprofit website for a fictional foundation focused on youth empowerment, education access and sustainable livelihoods, with programs and ways to get involved.',
    url: 'https://imara-impact-foundation.vercel.app/',
    featured: true,
    image: null,
    palette: { bg: '#173C2B', fg: '#F6F5F1', accent: '#C9E7B4' },
  },
  {
    id: 'thousand-sunny-resort',
    title: 'Thousand Sunny Resort',
    category: 'Hospitality & Resorts',
    type: 'Concept',
    description:
      'A fictional boutique resort: sample rooms, experiences and dining, with a demonstration stay enquiry.',
    url: 'https://thousand-sunny-resort.vercel.app/',
    // The same project exists as an earlier, more expansive version (suites, weddings,
    // meetings, experiences and wellness). It is linked as a secondary reference, not
    // listed as a separate project.
    altUrl: 'https://thousand-sunny-henna.vercel.app/',
    altLabel: 'Earlier version',
    featured: true,
    image: null,
    palette: { bg: '#123B36', fg: '#F6F5F1', accent: '#E8C88A' },
  },
  {
    id: 'wings-of-freedom',
    title: 'Wings of Freedom',
    category: 'Aviation & Travel',
    type: 'Concept',
    description:
      'An airline website built around flight search, fare deals, destinations, cabin classes and a loyalty program.',
    url: 'https://wings-of-freedom-lovat.vercel.app/',
    featured: false,
    image: null,
    palette: { bg: '#101A2E', fg: '#F6F5F1', accent: '#8FA7FF' },
  },
  {
    id: 'winrose-pharma',
    title: 'Winrose Pharma',
    category: 'Pharmacy & Healthcare',
    type: 'Live website',
    description:
      'A website for a community pharmacy in Utawala, Nairobi: services, opening hours, location, and medicine requests sent through WhatsApp.',
    url: 'https://winrose-pharma.vercel.app/',
    featured: false,
    image: null,
    palette: { bg: '#0F6B58', fg: '#F6F5F1', accent: '#BFEBE3' },
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
