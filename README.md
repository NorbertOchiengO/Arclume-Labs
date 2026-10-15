# ARCLUME LABS website

Marketing and portfolio site for **ARCLUME LABS — Where Ideas Become Infrastructure.**

Stack: React 19, Vite, Tailwind CSS v4, Motion for React (`motion/react`), React Router, Lucide React. JavaScript and JSX only. No TypeScript.

## Requirements

- Node.js 20.19 or newer
- npm

## Commands

```bash
npm install        # install dependencies
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## Project structure

```
src/
  components/
    layout/    Navbar, Footer, Container, LegalPage
    sections/  Hero, SelectedWork, Services, Process, About, Contact
    ui/        Button, HashLink, Reveal, SectionHeading, ProjectCard, ServiceItem, ContactLinks
  data/        projects.js, services.js (also process steps), navigation.js, business.js
  lib/         useActiveSection.js, contactConfig.js
  pages/       Home, Work, Privacy, Terms, Cookies, NotFound
  App.jsx      routes, per-page titles and meta descriptions
public/        favicon, apple-touch icon, brand mark (WebP), Open Graph image (JPEG), robots.txt
```

Design tokens (colors, fonts) live in `src/index.css` under `@theme`. Fonts are self-hosted through Fontsource, so there are no third-party font requests.

## Editing content

- **Business details:** `src/data/business.js` holds the studio email and phone numbers (used in the contact section, footer and legal pages). Optional fields (`legalName`, `registrationNumber`, `postalAddress`) appear on the legal pages only once filled in. Update `LEGAL_LAST_UPDATED` whenever you change a policy.
- **Projects:** `src/data/projects.js` is the single source of truth for the homepage grid, the `/work` page, the footer links and every external URL.
- **Services and process:** `src/data/services.js`.
- **Navigation, legal links and social links:** `src/data/navigation.js`. Social links render only when you add real URLs to `socialLinks`.
- **Page titles and descriptions:** `PAGE_META` in `src/App.jsx`.

### Portfolio labels (please review)

| Project | Label | Basis |
| --- | --- | --- |
| ARCLUME Freight | Portfolio demo | Page's Open Graph text calls it a portfolio demonstration by ARCLUME LABS |
| NovaCare Health Centre | Concept | Page describes itself as a fictional concept by ARCLUME LABS |
| Imara Impact Foundation | Concept | Page describes itself as a fictional nonprofit concept by ARCLUME LABS |
| Thousand Sunny Resort | Concept | Page describes itself as a fictional boutique resort concept by ARCLUME LABS |
| Wings of Freedom | Concept | **Assumed.** The page does not label itself |
| Winrose Pharma | Live website | **Assumed.** Shows a real-looking pharmacy; confirm before calling it client work |

Thousand Sunny Resort has two deployed URLs that are one project: `thousand-sunny-resort` (the labelled concept, main link) and `thousand-sunny-henna` (an earlier, longer version, linked as "Earlier version").

No screenshots are used. To add a genuine one, put it in `public/work/` and set `image` on the project.

## Contact form: how submission works

Required fields: name, valid email, service, and project details (at least 20 characters). The form never reports success unless something real happened.

| Configuration | What happens on submit |
| --- | --- |
| **Default (nothing set)** | Opens the visitor's email app with the enquiry pre-filled, addressed to the studio email. The message says nothing is sent until they send that email, and gives the address and a direct link in case no email app opened. |
| `VITE_FORM_ENDPOINT` set | Sends the enquiry as JSON with `POST` to that form service. Shows success only if the service replies OK, otherwise an error with the direct email. |

The mailto fallback depends on the visitor having an email app set up, which is why the direct email and phone numbers are shown beside the form. A form service is more reliable; set `VITE_FORM_ENDPOINT` in Vercel (Project Settings → Environment Variables) and redeploy. `VITE_*` values are public in the built site, so never put secrets there. The Privacy Policy changes wording automatically to match whichever mode is active.

## Privacy, cookies and tracking

- No cookies, no browser storage, no analytics, no advertising or tracking scripts, no embeds. Fonts are bundled. So no cookie banner is needed. If you add analytics or any tool that sets cookies later, add a consent mechanism first and update the Cookies and Privacy pages.
- Legal pages: `/privacy`, `/terms`, `/cookies`. They only state what the site does today. They are **not** legal advice. See "Items needing your confirmation" below.
- No refund/returns page: the site takes no payments. Terms say refunds and cancellation are agreed in writing per project.

## Deploying to Vercel

1. Push this folder to a Git repository.
2. Import it in Vercel. `vercel.json` sets the framework (Vite), build command, output directory (`dist`) and a rewrite so routes such as `/work` and `/privacy` work on refresh.
3. Optionally add `VITE_FORM_ENDPOINT`.
4. After you have a domain, change `og:image` in `index.html` to an absolute URL (`https://your-domain/og-image.jpg`) and add a `Sitemap:` line to `public/robots.txt`.

Page titles and descriptions are set in the browser after load. Search engines that run JavaScript will see them, but social link previews read the static tags in `index.html` (the home page values). This project has not been deployed from this environment.

## Items needing your confirmation

- Phone numbers use `+254` (Kenya) for `tel:` links. Confirm that is correct for all three.
- Privacy Policy statements to confirm are true for your business: you do not sell personal data, enquiries are kept only as long as needed (no fixed period is stated), and enquiries arrive at a Gmail address.
- Kenya's Data Protection Act, 2019: confirm whether you must register with the Office of the Data Protection Commissioner (small businesses below certain employee and turnover thresholds may be exempt; thresholds and rules can change), and whether you need anything further, such as a data-controller notice.
- Governing law and dispute resolution are deliberately not stated in the Terms. Add them with a lawyer if you want them.
- Optional business details (registered name, registration number, postal address) are not published until you add them in `business.js`.
- Budget ranges in `Contact.jsx` are in USD; change if you price in another currency.
- Have a lawyer review the three policy pages before relying on them.
