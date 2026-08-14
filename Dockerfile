# Multi-stage: build with Node, serve static with Nginx Alpine.
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

# ---- runtime ----
# nginx handles /work and /work/ (try_files) better than BusyBox httpd
FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
