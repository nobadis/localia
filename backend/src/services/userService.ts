import { prisma } from "../lib/prisma.js";
import bcrypt from "bcryptjs";

const SALT_ROUNDS = 12;

export const userService = {
  async create(data: { email: string; name?: string; password: string }) {
    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);

    const user = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });

    return user;
  },
};
