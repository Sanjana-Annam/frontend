# ---- Build Stage ----
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ---- Production Stage ----
FROM nginx:alpine

# Copy nginx template config
COPY nginx/default.conf.template /etc/nginx/conf.d/default.conf.template

# Copy build output to nginx folder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["sh", "-c", "envsubst < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
