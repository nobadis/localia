import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().email("Invalid email format"),
  name: z.string().min(1).max(100).optional(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
