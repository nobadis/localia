import { Router } from "express";
import { healthController } from "../controllers/healthController.js";
import { healthRouter } from "./health.routes.js";
import { userRouter } from "./user.routes.js";

export const apiRouter = Router();

// Health (para load balancers / K8s)
apiRouter.get("/health", healthController.check);
apiRouter.use("/health", healthRouter);

// Feature routes
apiRouter.use("/users", userRouter);
