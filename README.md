# Roshan Hamid | Portfolio

React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

## Edit content (no UI code needed)
All content lives in `src/data/`:
`personal.ts` (name, contact, links, hero/about text, availability badge) · `skills.ts` · `projects.ts` · `experience.ts` · `services.ts` · `navigation.ts`

- **GitHub link:** set `github` in `personal.ts` (the icon is hidden while empty).
- **Photo:** replace `src/assets/profile.jpg`.
- **Resume:** replace `public/docs/Roshan-Hamid-Resume.pdf` (keep the filename, or update `personal.resume`).
- **Domain:** replace `https://your-domain.com` in `index.html`, `public/robots.txt`, `public/sitemap.xml`; add `public/og-image.png` (1200x630).

## Contact form (free email delivery)
1. Go to https://web3forms.com, enter roshanhamidnki@gmail.com and copy the access key they email you.
2. Copy `.env.example` to `.env` and set `VITE_WEB3FORMS_KEY=your-key`, then rebuild (`npm run build`).
Messages are then delivered to that inbox. Without a key the form just opens the visitor's email app (mailto).
Bot protection: hidden honeypot field, minimum-fill-time check, 30s cooldown, plus Web3Forms' own spam filter.

## Deploy
`npm run build`, then upload `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or your Apache/cPanel `public_html`).
For Netlify/Vercel: build command `npm run build`, output directory `dist`.
