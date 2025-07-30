FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN corepack enable && corepack prepare yarn@stable --activate
RUN yarn install --frozen-lockfile
RUN yarn build

# ---
FROM node:20-alpine
WORKDIR /app
# Копируем сгенерированные файлы из builder-а
COPY --from=builder /app/.output /app/.output

EXPOSE 3000
CMD ["node", "/app/.output/server/index.mjs"]