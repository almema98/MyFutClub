// File that implements a Prisma instance to connect once in the proyect.

const { PrismaClient } = require('../app/generated/prisma')

const globalForPrisma = global

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = new PrismaClient()
}

const prisma = globalForPrisma.prisma

module.exports = prisma
