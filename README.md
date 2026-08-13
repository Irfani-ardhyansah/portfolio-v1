# Portfolio

Single-page portfolio (Astro + Tailwind) — dark/techy wireframe untuk freelance & job opportunity.

## Quick start

```bash
npm install
npm run dev
```

Buka `http://localhost:4321`.

## Edit content (dummy)

Semua copy & link ada di [`src/data/site.ts`](src/data/site.ts).  
Gambar placeholder: `public/images/`.

## Commands

| Command           | Action                        |
| ----------------- | ----------------------------- |
| `npm run dev`     | Dev server                    |
| `npm run build`   | Production build → `dist/`    |
| `npm run preview` | Preview hasil build           |

## Base path (local vs server)

| Mode | Base | URL |
|------|------|-----|
| Local (`npm run dev`) | `/` | `http://localhost:4321/` |
| Docker / Nginx | `/portfolio` | `http://host/portfolio/` |

Docker sets `BASE_PATH=/portfolio` at **build** time (see `Dockerfile` / `docker-compose.yml`).

## Docker (small image for STB)

```bash
docker compose up -d --build
```

Via Nginx: `http://host/portfolio/` · direct container debug: `http://host:8080/portfolio/`  
Details: [`docs/DEPLOY.md`](docs/DEPLOY.md) (Option 4).

## Deploy

Full guide: [`docs/DEPLOY.md`](docs/DEPLOY.md).

## Spec

Wireframe asal: [`docs/pending/portfolio-wireframe-spec.md`](docs/pending/portfolio-wireframe-spec.md).
