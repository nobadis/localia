import type { Request, Response, NextFunction } from "express";
import { config } from "../config/index.js";

export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public isOperational = true
  ) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ error: err.message });
    return;
  }

  // Log unexpected errors
  console.error("[ERROR]", err);

  const message = config.isDev ? err.message : "Internal server error";
  res.status(500).json({ error: message });
}
