import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined; //começa undefined depois vira prisma client
}

export const prisma = global.prisma || new PrismaClient();
// se tiver global.prima usa ela. senao cria ela com new PrismaClient.

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;
