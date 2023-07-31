/**
 * @link https://prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices
 */
import {PrismaClient, type Prisma} from '@prisma/client';
import * as process from "process";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma: PrismaClient  =
    globalForPrisma.prisma || createClient()


function createClient(): PrismaClient {

    const temp: PrismaClient | undefined = new PrismaClient({
         log: process.env.PRISMA_LOG_QUERIES ? ['query'] : [],
    })

    console.log("Node Env: ", process.env.NODE_ENV)
    return temp
}

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma
}
