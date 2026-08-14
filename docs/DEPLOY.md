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

## Option 4 — Docker (STB / low storage)

Static site served by **Nginx Alpine** (multi-stage build). Built with `BASE_PATH=/portfolio`.

### Correct URLs behind reverse proxy

| Wrong | Correct |
|-------|---------|
| `http://host/work` | `http://host/portfolio/work/` |
| `http://host:8080/work` | `http://host:8080/portfolio/work/` |

The edge Nginx must proxy the **whole** `/portfolio/` prefix (including `/portfolio/work/`), not only `/portfolio` homepage.

Recommended edge Nginx block:

```nginx
location = /portfolio {
    return 301 /portfolio/;
}

location /portfolio/ {
    proxy_pass http://portfolio:8080/;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

Then rebuild portfolio and reload edge Nginx:

```bash
cd portfolio
docker compose up -d --build
docker exec <edge-nginx> nginx -s reload
```

### Run with Compose

```bash
cd portfolio
docker compose up -d --build
```

Open `http://<host-ip>:8080/portfolio/` (direct) or `http://<host-ip>/portfolio/` (via edge Nginx).

Stop / remove:

```bash
docker compose down
```

### Run with Docker CLI

```bash
docker build -t portfolio:web .
docker run -d --name portfolio -p 8080:8080 --memory=64m --cpus=0.25 \
  --read-only \
  --tmpfs /tmp:size=8m \
  --tmpfs /var/cache/nginx:size=16m \
  --tmpfs /var/run:size=8m \
  portfolio:web
```

### STB / ARM notes

Build on the STB itself (slow but correct arch), or build for the device arch from a PC:

```bash
# 64-bit ARM (common on newer boxes)
docker buildx build --platform linux/arm64 -t portfolio:web --load .

# 32-bit ARM
docker buildx build --platform linux/arm/v7 -t portfolio:web --load .
```

Save image and copy to the STB (avoids `npm install` on the box):

```bash
docker save portfolio:web | gzip > portfolio-web.tar.gz
# copy file to STB, then:
gunzip -c portfolio-web.tar.gz | docker load
docker run -d --name portfolio -p 8080:8080 --memory=64m --cpus=0.25 \
  --read-only \
  --tmpfs /tmp:size=8m \
  --tmpfs /var/cache/nginx:size=16m \
  --tmpfs /var/run:size=8m \
  portfolio:web
```

Check size:

```bash
docker images portfolio:web
docker system df
```

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
