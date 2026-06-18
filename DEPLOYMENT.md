# TOWNX — Deployment Checklist

Static SPA (Vite + React + TS). Hash routing → **no server rewrite rules needed**, works on any static host.

## Build

```bash
npm install
npm run build      # outputs to dist/
npm run preview    # local smoke test of the production build
```

Build verified: `tsc --noEmit` clean, Vite build succeeds.
Bundle: ~263 KB JS (74 KB gz) · 35 KB CSS (7 KB gz) · hero 267 KB jpg.

## Deploy

Upload the **`dist/`** folder to any static host:

- **Vercel / Netlify**: framework preset = Vite, build cmd `npm run build`, output dir `dist`.
- **Cloudflare Pages / S3+CloudFront / Nginx**: serve `dist/` as static root.
- SPA fallback not required (hash routing). If a host forces it, point 404 → `/index.html`.

## Domain

- Point `townex.co` + `www.townex.co` DNS at the host.
- Force HTTPS.
- Canonical + OG URL already set to `https://www.townex.co/` in `index.html` — change if final domain differs.

## Routes (all hash-based)

| Route | Page |
|-------|------|
| `/` | Home |
| `/#about` | About |
| `/#services` | Services index |
| `/#services/{slug}` | Service detail — `real-estate-marketing`, `property-management`, `design-build`, `engineering-supervision` |
| `/#offers` | Properties listing |
| `/#property/{id}` | Property detail — 6 ids in `src/data/properties.ts` |
| `/#contact` | Contact |

Unknown hash → falls back to Home (no dead route).

## SEO assets (in `public/`, copied to `dist/`)

- `favicon.ico` (16/32/48), `favicon.png` (512), `apple-touch-icon.png`
- `robots.txt` → references sitemap
- `sitemap.xml` → update `<loc>` domains if not `townex.co`
- `<title>`, meta description, OG, Twitter card, canonical set in `index.html`

## Contact data (single source: `src/data/contact.ts`)

- Phone: `+966 50 100 0460` (`tel:`)
- WhatsApp: `https://wa.me/966501000460`
- TikTok: `https://www.tiktok.com/@vt.d2030_0`
- Email: `info@townx.sa` — **confirm real inbox exists before launch**.

## Pre-launch verify

- [ ] `npm run build` succeeds, `npm run preview` loads
- [ ] All 7 route types render (table above)
- [ ] Mobile drawer opens/closes; no horizontal scroll at 320/375/430
- [ ] Every CTA → WhatsApp/tel/mailto opens correctly
- [ ] Favicon shows in browser tab
- [ ] `robots.txt` + `sitemap.xml` reachable at domain root
- [ ] Replace placeholder Unsplash property/service images with real TOWNX photos
- [ ] Confirm `info@townx.sa` inbox live
- [ ] Submit sitemap in Google Search Console

## Known notes

- Property + service data is **hardcoded** in `src/data/`. Editing content = code change + redeploy. (Admin/Supabase backend not yet built.)
- Images are Unsplash placeholders except hero villa + logo.
