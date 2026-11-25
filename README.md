# Trukkings website

A multi-page marketing site built with Next.js (App Router, TypeScript), exported as static files.

## Pages

| Page | Path |
| --- | --- |
| Home | `/` |
| Platform overview | `/platform` |
| Freight marketplace | `/marketplace` |
| Operations & TMS | `/operations` |
| AI assistant | `/ai-assistant` |
| Solutions overview | `/solutions` |
| Carriers & fleets | `/solutions/carriers` |
| Owner-operators & drivers | `/solutions/owner-operators` |
| Shippers & brokers | `/solutions/shippers-brokers` |
| How it works | `/how-it-works` |
| About | `/about` |
| Partners & investors | `/partners` |
| FAQ | `/faq` |
| Contact / early access | `/contact` |
| Privacy, Terms | `/privacy`, `/terms` |

It also includes a 404 page, `sitemap.xml` and `robots.txt`.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build for hosting

```bash
npm run build      # creates the static site in ./out
```

Upload `out/` to any static host, or import the project into Vercel or Netlify and they will build it for you.

## Edit the content

All copy lives in `src/content/`:

- `site.ts` : site name, contact email, site URL, menu and footer links
- `home.ts` : home page
- `platform.ts` : platform, marketplace, operations and AI assistant pages
- `solutions.ts` : solutions overview and the three role pages
- `company.ts` : how it works, about, partners, FAQ, contact, privacy, terms

Change text there; you don't need to touch the components. No country or region is named anywhere.

## Before launch

- Set `contactEmail` and `url` in `src/content/site.ts`.
- Fill the `[EFFECTIVE DATE]`, `[LEGAL ENTITY NAME]`, `[GOVERNING LAW]` and `[JURISDICTION]` placeholders in `src/content/company.ts` (privacy and terms), and have a lawyer review those two pages.
- The contact form opens the visitor's email app (no backend yet). To collect submissions directly, connect it to a form service in `src/components/ContactForm.tsx`.
- Check every product claim against what the product actually does today and cut anything that isn't true yet.

## Look and feel

Fonts are Archivo (headlines) and Instrument Sans (body), self-hosted through `@fontsource-variable`, so there is no external font request. Colors and spacing are CSS variables at the top of `src/app/globals.css`.
