# Build stage
FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM node:22-alpine AS production

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4000

COPY --from=build /app/dist/fas-solutions ./dist/fas-solutions
COPY --from=build /app/public ./public

EXPOSE 4000

CMD ["node", "dist/fas-solutions/server/server.mjs"]
