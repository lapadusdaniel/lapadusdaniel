# Daniel Lăpăduș Photography (Next.js)

Website portfolio modern pentru fotograf de eveniment (nuntă, botez, evenimente), optimizat SEO local pentru Cugir, Alba Iulia, Sebeș, Sibiu, Cluj-Napoca și Deva.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- `next/image` (optimizare imagini AVIF/WebP)
- Metadata API + JSON-LD (LocalBusiness + Photographer)

## Structură principală

```text
app/
  page.tsx                  # Home
  portfolio/page.tsx        # Portfolio
  services/page.tsx         # Services & Pricing
  about/page.tsx            # About
  contact/page.tsx          # Contact
  api/contact/route.ts      # Contact form endpoint + anti-spam
  sitemap.ts                # XML sitemap
  robots.ts                 # robots.txt
components/
  contact/contact-form.tsx
  layout/site-header.tsx
  layout/site-footer.tsx
  portfolio/portfolio-grid.tsx
  seo/schema-org.tsx
data/
  site.ts
  portfolio.ts
lib/
  seo.ts
```

## Funcționalități SEO incluse

- Metadata unică pe fiecare pagină
- Template dinamic pentru titluri
- Open Graph + Twitter cards
- JSON-LD:
  - `LocalBusiness`
  - `Photographer`
- Sitemap XML generat automat (`/sitemap.xml`)
- Robots TXT generat automat (`/robots.txt`)
- Headings semantice (H1-H3) + paragrafe locale orientate SEO

## Contact form + anti-spam

Formularul de contact include:

- validări server-side
- honeypot field
- time trap (trimiteri prea rapide)
- rate limiting per IP
- webhook opțional prin `CONTACT_WEBHOOK_URL`

Dacă `CONTACT_WEBHOOK_URL` nu este setat, formularul validează și răspunde cu mesaj de succes, fără integrare externă.

## Rulare locală

```bash
npm install
npm run dev
```

Build de producție:

```bash
npm run build
npm run start
```

## Deployment pe Vercel

1. Push proiectul într-un repository Git.
2. În Vercel: `Add New Project` -> import repository.
3. Framework detectat automat: `Next.js`.
4. Setează variabilele de mediu (opțional):
   - `CONTACT_WEBHOOK_URL`
5. Deploy.

## Setup domeniu custom

În Vercel (`Project -> Settings -> Domains`):

1. Adaugă `lapadusdaniel.photography` și `www.lapadusdaniel.photography`.
2. Dacă migrezi, adaugă și `lapadusdaniel.ro` + `www.lapadusdaniel.ro`.
3. Configurează DNS conform record-urilor afișate de Vercel.
4. Setează domeniul principal dorit (recomandat unul singur ca primary).
5. Dacă folosești două domenii, configurează redirect 301 către domeniul principal.

## Recomandări finale pentru SEO producție

- Păstrează un singur domeniu canonical activ (ex: `lapadusdaniel.ro` sau `.photography`).
- Activează redirect 301 pentru celelalte variante (`www` / non-`www`).
- Verifică indexarea în Google Search Console după deploy.
