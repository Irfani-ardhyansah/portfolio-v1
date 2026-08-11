# Deploy Portfolio

This site is Astro **static** — the build output lives in `dist/` and can be hosted on Vercel, Netlify, or Cloudflare Pages.

## Prerequisites

- Node.js **>= 22.12** (see `engines` in `package.json`)
- npm

```bash
cd portfolio
npm install
npm run build   # must succeed locally before deploy
```

## Option 1 — Vercel (recommended)

### Via dashboard

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Open [vercel.com/new](https://vercel.com/new) → import the repo.
3. Set **Root Directory** to `portfolio` if this is a monorepo.
4. Framework Preset: **Astro** (auto-detect is usually enough).
5. Build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Deploy.

### Via CLI

```bash
npm i -g vercel
cd portfolio
vercel
```

For production:

```bash
vercel --prod
```

## Option 2 — Netlify

### Via dashboard

1. Import the repo at [app.netlify.com](https://app.netlify.com).
2. Set root to `portfolio` if needed.
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy.

### Via `netlify.toml` (optional)

Create `netlify.toml` at the Astro project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

## Option 3 — Cloudflare Pages

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → connect the repo.
2. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `portfolio` (if monorepo)
3. Environment: use a Node version supported by Pages.
4. Deploy.

## Post-deploy checklist

- [ ] Homepage loads; terminal intro shows once per browser session
- [ ] Intro **skip** works
- [ ] Anchor nav: About / Work / Services / Contact
- [ ] Email & WhatsApp CTAs point to the correct URLs
- [ ] No client names in the page, meta tags, or image alt text

## Update content

Edit [`src/data/site.ts`](../src/data/site.ts):

- `contact.email`, `contact.whatsapp`, `contact.socials`
- About / Work / Beyond Code / Services copy
- `astro.config.mjs` → `site: 'https://your-real-domain.com'`

Replace placeholders in `public/images/` with publishable photos only. Do not put client names in filenames or alt text.

## Preview the production build locally

```bash
npm run build
npm run preview
```
