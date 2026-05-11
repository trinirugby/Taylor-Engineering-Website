# Taylor Engineering Agencies Limited — Website

Static marketing site for Taylor Engineering Agencies Limited (marine surveying & consultancy, Trinidad & Tobago, est. 1984).

**Live:** https://gleaming-pothos-8f5b10.netlify.app/
**Stack:** Plain HTML5 + CSS3 + vanilla JS. No build step. Deployed on Netlify.

---

## Run locally

```bash
npm install        # only needed once (installs sharp for image optimization)
npm run dev        # serves the site on http://localhost:3000
```

`npm run dev` shells out to `npx serve .` — no permanent dependency required.

---

## Project layout

```
/
├── index.html        ← Home
├── about.html        ← About + Our Story + Team
├── services.html     ← Services
├── coverage.html     ← Coverage
├── contact.html      ← Contact (Netlify Forms)
├── 404.html
├── css/
│   ├── base.css      ← tokens, reset, nav, footer, buttons, forms
│   └── <page>.css    ← page-specific styles
├── js/
│   ├── main.js       ← partial-include loader + mobile-nav toggle
│   └── …
├── partials/
│   ├── nav.html      ← shared nav (loaded via fetch)
│   └── footer.html   ← shared footer (loaded via fetch)
├── assets/
│   ├── images/       ← original source images (committed)
│   └── optimized/    ← AVIF + WebP + JPG @ 800w + 1600w (committed)
├── scripts/
│   └── optimize-images.mjs
├── package.json
├── netlify.toml
└── README.md
```

The shared nav and footer live in `partials/`. Each page includes them via:

```html
<header data-include="/partials/nav.html"></header>
…
<footer data-include="/partials/footer.html"></footer>
```

`js/main.js` fetches and injects the partials on page load. Edit nav or footer in one place; all pages pick up the change.

---

## Image optimization (fast hero loading)

Every hero / section-face image is served via `<picture>` with **AVIF + WebP** sources and a **JPG** fallback at 800w and 1600w. Above-the-fold heroes are preloaded (`<link rel="preload" as="image">`) and decoded with `fetchpriority="high"`.

To add a new image:

1. Drop the original into `assets/images/`.
2. Run:
   ```bash
   npm run optimize                          # optimize every image in assets/images/
   npm run optimize -- assets/images/foo.jpg # or just one
   ```
3. Reference it in HTML:
   ```html
   <picture>
     <source type="image/avif" srcset="/assets/optimized/foo-1600.avif 1600w, /assets/optimized/foo-800.avif 800w" sizes="100vw">
     <source type="image/webp" srcset="/assets/optimized/foo-1600.webp 1600w, /assets/optimized/foo-800.webp 800w" sizes="100vw">
     <img src="/assets/optimized/foo-1600.jpg" alt="…" width="1600" height="900" loading="lazy" decoding="async">
   </picture>
   ```

For above-the-fold heroes also add to `<head>`:
```html
<link rel="preload" as="image" href="/assets/optimized/foo-1600.avif" type="image/avif" fetchpriority="high">
```
…and use `loading="eager" fetchpriority="high"` on the `<img>`.

---

## Contact form (Netlify Forms)

`contact.html` posts to Netlify Forms — no third-party service needed. Submissions show up in the Netlify dashboard under **Forms**. The email subject of every submission begins with `Website Inquiry - {selected service}`.

To enable Netlify form notifications by email: Netlify dashboard → Site → Forms → Form notifications → add an email recipient.

---

## Deploy

This repo is Netlify-deployable as-is. `netlify.toml` configures:
- `publish = "."` — serve files straight from the repo root.
- Long cache headers on `/assets/optimized/`, `/assets/images/`, `/css/`, `/js/`.

Push to `main` → Netlify auto-deploys.
