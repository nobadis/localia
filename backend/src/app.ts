import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";

import { config } from "./config/index.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { requestLogger } from "./middleware/requestLogger.js";
import { apiRouter } from "./routes/index.js";

const app = express();

// Security & performance
app.use(helmet());
app.use(compression());
app.use(
  cors({
    origin: config.corsOrigins,
    credentials: true,
  })
);

// Body parsing
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Request logging
app.use(requestLogger);

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// API routes
app.use("/api", apiRouter);

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Error handler (must be last)
app.use(errorHandler);

export { app };
