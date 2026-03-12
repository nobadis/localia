import { Router } from "express";
import { prisma } from "../lib/prisma.js";

const healthRouter = Router();

/** Liveness: proceso vivo */
healthRouter.get("/live", (_req, res) => {
  res.json({ status: "ok" });
});

/** Readiness: listo para recibir tráfico (DB conectada) */
healthRouter.get("/ready", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: "ok", db: "connected" });
  } catch {
    res.status(503).json({ status: "degraded", db: "disconnected" });
  }
});

export { healthRouter };
