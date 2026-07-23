# Nelson Adarmes — Portfolio

Bilingual portfolio (ES/EN) built with **Next.js 15**, TypeScript, Tailwind CSS, Framer Motion, and Lenis.

## Features

- Single-page landing with sections: Hero, About, Stack, Projects, Experience, Contact
- Project detail pages at `/projects/[slug]` with transition video
- i18n (ES default + EN toggle)
- Contact form (EmailJS + reCAPTCHA + Lottie)
- Smooth scroll (Lenis), section reveal animations (Framer Motion)
- Custom cursor (desktop), animated HUD hero, scroll progress line
- SEO: sitemap, robots, Open Graph metadata
- Accessibility: skip link, focus rings, reduced-motion support, ARIA labels

## Getting started

This project uses **pnpm**. Do not use npm or yarn.

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production URL for sitemap/SEO |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Google reCAPTCHA v2 site key |

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | ESLint |

## Deploy

Configured for **Vercel**. Set all `NEXT_PUBLIC_*` env vars in the Vercel dashboard.

## Adding a project

Edit `lib/projects.ts` and add images + description `.txt` files under `public/projectsFiles/`.
