# backend/Dockerfile - multi-stage minimal
# Builder stage (instala dependencias)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .

# Final image
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app /app
ENV NODE_ENV=production
EXPOSE 4000
# Healthcheck simple (requiere curl en la imagen; instalarlo)
RUN apk add --no-cache curl
HEALTHCHECK --interval=10s --timeout=3s --start-period=5s --retries=3 CMD curl -f http://localhost:4000/api/health || exit 1
CMD ["node", "index.js"]
