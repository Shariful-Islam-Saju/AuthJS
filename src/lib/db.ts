/* eslint-disable @typescript-eslint/ban-ts-comment */
import { PrismaClient } from "@prisma/client";
declare global {
  const prisma: PrismaClient | undefined;
}
// @ts-expect-error
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  // @ts-expect-error
  globalThis.prisma = db;
}
