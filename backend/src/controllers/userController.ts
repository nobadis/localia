import type { Request, Response, NextFunction } from "express";
import { userService } from "../services/userService.js";
import { AppError } from "../middleware/errorHandler.js";

export const userController = {
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user = await userService.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error && error.message.includes("Unique constraint")) {
        next(new AppError(409, "Email already registered"));
        return;
      }
      next(error);
    }
  },
};
