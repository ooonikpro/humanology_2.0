FROM node:20-alpine AS builder
ENV NODE_ENV=PRODUCTION
WORKDIR /app
COPY . .
RUN corepack enable && corepack prepare yarn@stable --activate
RUN yarn install --frozen-lockfile
RUN yarn generate

# ---
FROM nginx:alpine

# Удаляем дефолтный конфиг Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Копируем сгенерированные файлы из builder-а
COPY --from=builder /app/.output/public /usr/share/nginx/html

# Копируем ваш конфиг
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
# Копируем SSL-сертификаты
COPY ./.nginx/certs/certificate.crt /etc/nginx/ssl/certificate.crt
COPY ./.nginx/certs/certificate.key /etc/nginx/ssl/certificate.key
# Открываем порты
EXPOSE 80 443

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
