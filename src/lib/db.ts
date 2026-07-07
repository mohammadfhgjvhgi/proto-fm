import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Only log queries in development — never in production (audit D.3)
const logLevel = process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error', 'warn']

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: logLevel as ('query' | 'error' | 'warn')[],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
