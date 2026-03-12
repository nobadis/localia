# Build (context: monorepo root)
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* ./
COPY frontend/package.json ./frontend/
RUN corepack enable pnpm && pnpm install --frozen-lockfile

COPY frontend ./frontend
ARG NEXT_PUBLIC_API_URL=http://localhost:8009/api
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
RUN pnpm --filter frontend build

# Run
FROM node:20-alpine
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5009

COPY --from=builder /app/frontend/.next/standalone ./
COPY --from=builder /app/frontend/.next/static ./.next/static
COPY --from=builder /app/frontend/public ./public

EXPOSE 5009
CMD ["node", "server.js"]
