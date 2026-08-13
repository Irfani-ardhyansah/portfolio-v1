# Multi-stage: build with Node, serve static with BusyBox (~few MB final image).
# Aimed at low-storage hosts (e.g. STB with ~1.5GB free).

# ---- build ----
FROM node:22-alpine AS build

WORKDIR /app

# Local npm run → base "/"
# Docker default → "/portfolio" (Nginx reverse proxy path)
ARG BASE_PATH=/portfolio
ENV BASE_PATH=$BASE_PATH

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build \
	&& rm -rf node_modules \
	&& npm cache clean --force

# ---- runtime (tiny) ----
FROM busybox:1.37.0-musl AS runtime

WORKDIR /www
COPY --from=build /app/dist/ ./

# Non-root; static files are world-readable
USER nobody

EXPOSE 8080

# Foreground httpd; bind all interfaces
CMD ["httpd", "-f", "-p", "0.0.0.0:8080", "-h", "/www"]
