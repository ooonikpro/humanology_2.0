FROM node:20-alpine AS builder
ENV NODE_ENV=PRODUCTION
WORKDIR /app
COPY . .
RUN corepack enable && corepack prepare yarn@stable --activate
RUN yarn install --frozen-lockfile
RUN yarn generate

# ---
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Копируем сгенерированные файлы из builder-а
COPY --from=builder /app/.output/public .

# Копируем конфигурацию Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем SSL сертификаты
#COPY ssl/fullchain.pem /etc/nginx/ssl/fullchain.pem
#COPY ssl/privkey.pem /etc/nginx/ssl/privkey.pem

# Открываем порты
EXPOSE 443

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
