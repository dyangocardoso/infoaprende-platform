# frontend/Dockerfile - build con Node y servir con Nginx
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Allow injecting the backend URL at build time so the static build targets the internal Docker network
# Use: docker build --build-arg VITE_API_URL=http://backend:4000 .
ARG VITE_API_URL=http://backend:4000
ENV VITE_API_URL=${VITE_API_URL}

# Build production (Vite will read VITE_API_URL at build time)
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# Copy custom nginx config to enable reverse-proxy for /api
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
