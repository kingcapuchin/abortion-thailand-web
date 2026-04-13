# Abortion Thailand Website

Next.js 14 website for abortionthailand.com with TH/EN language support, SEO optimization, and Schema.org markup.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Languages:** TypeScript
- **Fonts:** Inter (EN), Prompt & Sarabun (TH)
- **Deployment:** Vercel-ready

## Project Structure

```
/src
├── app/
│   ├── [lang]/           # Dynamic i18n routes (th/en)
│   │   ├── page.tsx      # Landing page
│   │   ├── services/     # Services page
│   │   ├── faq/          # FAQ page
│   │   ├── international/ # International patients page
│   │   └── about/        # About page
│   ├── layout.tsx        # Root layout with GTM
│   ├── sitemap.ts       # Sitemap.xml
│   └── robots.ts        # robots.txt
├── components/           # Reusable UI components
├── content/              # TH/EN translations
└── lib/                  # Utilities (GTM config)
```

## Features

- ✅ TH (primary) + EN language toggle
- ✅ Schema.org FAQPage markup (for featured snippets)
- ✅ Schema.org Organization markup
- ✅ hreflang tags for SEO
- ✅ Sitemap.xml and robots.txt
- ✅ Mobile-first responsive design
- ✅ GTM/GA4 ready (needs ID in .env)
- ✅ Medical disclaimer on every page
- ✅ No government/hospital logos
- ✅ Privacy-first (no data collection forms)

## Environment Variables

```bash
# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXX
```

## Deployment to Vercel

1. Create a new Vercel project:
```bash
vercel login
vercel new
```

2. Set environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_GTM_ID`
   - `NEXT_PUBLIC_GA_ID`

3. Connect your GitHub repo or deploy directly:
```bash
vercel --prod
```

4. Add custom domain `abortionthailand.com` in Vercel dashboard

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
```

## Git Push

```bash
# Add remote if not set
git remote add origin https://github.com/kingcapuchin/abortion-thailand-web.git

# Push
git push -u origin master
```

**Note:** Repository must be created on GitHub first.

## Content Notes

- All medical information is for educational purposes only
- Partner disclosure: Klongtun Hospital (text only, no logos)
- Emergency hotline: 1663
- LINE contact: @emmy (placeholder link)
