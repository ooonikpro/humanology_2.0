FROM node:20-alpine AS builder
ENV NODE_ENV=PRODUCTION
WORKDIR /app
COPY . .
RUN corepack enable && corepack prepare yarn@stable --activate
RUN yarn install --frozen-lockfile
RUN yarn generate

# ---
FROM nginx
WORKDIR /etc/nginx

# Копируем сгенерированные файлы из builder-а
COPY --from=builder /app/.output/public /html

# Открываем порты
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
