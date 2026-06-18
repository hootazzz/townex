# TOWNX — تاونكس للتطوير العقاري

Premium Saudi real estate company website. Arabic-first, RTL, fully responsive.

**Stack:** React 18 · TypeScript · Vite 5 · Tailwind CSS 3 · lucide-react

## Local development

```bash
npm install
npm run dev        # dev server (http://localhost:5173)
npm run build      # type-check (tsc) + production build -> dist/
npm run preview    # serve the production build locally
```

Node: see `.nvmrc` (20).

## Project structure

```
src/
  App.tsx              # hash router (no react-router; switch on location.hash)
  pages/               # HomePage, AboutPage, ServicesPage, ServiceDetailPage,
                       # PropertiesPage, PropertyDetailPage, ContactPage
  sections/            # Home page sections (Hero, Services, LatestProperties, ...)
  components/          # Navbar, SolidNavbar, MobileDrawer, Footer, Logo, icons/
  data/                # Single source of truth:
                       #   contact.ts    phone / WhatsApp / TikTok / email / address
                       #   properties.ts property listings + helpers
                       #   services.ts   service definitions + helpers
  assets/              # hero-villa.jpg, townex-logo.png
public/                # favicons, robots.txt, sitemap.xml, _redirects, _headers
```

## Routing

Hash-based (`location.hash`), so the app is a single static `index.html` — no
server rewrite rules required.

| Route | Page |
|-------|------|
| `/` | Home |
| `/#about` | About |
| `/#services` | Services index |
| `/#services/{slug}` | Service detail (`real-estate-marketing`, `property-management`, `design-build`, `engineering-supervision`) |
| `/#offers` | Properties listing (filter / search / sort) |
| `/#property/{id}` | Property detail (6 listings) |
| `/#contact` | Contact |

Unknown hash falls back to Home.

## Editing content

All content is data-driven — no component edits needed:

- **Contact info** → `src/data/contact.ts`
- **Property listings** → `src/data/properties.ts` (`PROPERTIES` array)
- **Services** → `src/data/services.ts`

Property types: `فيلا · شقة · دور · أرض · مكتب · عمارة · مشروع استثماري`.

After editing, run `npm run build` and redeploy.

## Deployment (Cloudflare Pages)

- Build command: `npm run build`
- Build output directory: `dist`
- `public/_redirects` → SPA catch-all (`/* /index.html 200`)
- `public/_headers` → asset caching + security headers

See `DEPLOYMENT.md` for the full checklist and manual steps.

## Contact channels

- Phone: `+966 50 100 0460`
- WhatsApp: <https://wa.me/966501000460>
- TikTok: <https://www.tiktok.com/@vt.d2030_0>
- Email: `info@townx.sa`
- Address: حي البيان، الرياض، المملكة العربية السعودية

## Known limitations

- Content is hardcoded in `src/data/` — edits require a rebuild + redeploy (no CMS/admin backend).
- Contact form is client-side only (simulated submit) — wire to a backend/email service before relying on it.
- Property & service images are Unsplash placeholders except the hero villa + logo.
