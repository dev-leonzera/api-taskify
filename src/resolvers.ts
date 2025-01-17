import { prisma } from './prismaClient';
import bcrypt from 'bcrypt';  // Para fazer o hash das senhas

export const root = {
  clients: async () => {
    return await prisma.client.findMany();
  },
  users: async () => {
    return await prisma.user.findMany();
  },
  createClient: async ({ name, email, userId }: { name: string; email: string; userId: number }) => {
    return await prisma.client.create({
      data: {
        name,
        email,
        userId,
      },
    });
  },
  createUser: async ({ name, email, password }: { name: string; email: string; password: string }) => {
    const hashedPassword = await bcrypt.hash(password, 10);  // Fazer o hash da senha
    return await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  },
};
