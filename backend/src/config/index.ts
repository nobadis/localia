import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.string().transform(Number).default("8008"),
  DATABASE_URL: z.string().default("postgresql://localhost:5432/localia"),
  JWT_SECRET: z.string().default("dev-secret-min-32-chars-for-jwt"),
  CORS_ORIGINS: z.string().default("http://localhost:5008"),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("❌ Invalid environment variables:", parsed.error.flatten());
  process.exit(1);
}

export const config = {
  env: parsed.data.NODE_ENV,
  port: parsed.data.PORT,
  databaseUrl: parsed.data.DATABASE_URL,
  jwtSecret: parsed.data.JWT_SECRET ?? "dev-secret-change-in-production",
  corsOrigins: parsed.data.CORS_ORIGINS.split(",").map((o) => o.trim()),
  isDev: parsed.data.NODE_ENV === "development",
} as const;
