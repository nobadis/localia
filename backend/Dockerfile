# Build (context: monorepo root)
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* ./
COPY backend/package.json ./backend/
RUN corepack enable pnpm && pnpm install --frozen-lockfile

COPY backend ./backend
ENV DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy"
RUN pnpm --filter backend db:generate && pnpm --filter backend build

# Run
FROM node:20-alpine
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8008

COPY --from=builder /app/backend/dist ./dist
COPY --from=builder /app/backend/package.json ./
COPY --from=builder /app/backend/prisma ./prisma
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 8008
CMD ["node", "dist/index.js"]
