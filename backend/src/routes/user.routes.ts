import { Router } from "express";
import { userController } from "../controllers/userController.js";
import { validateBody } from "../middleware/validateRequest.js";
import { createUserSchema } from "../validators/user.validators.js";

const userRouter = Router();

userRouter.post("/", validateBody(createUserSchema), userController.create);

export { userRouter };
