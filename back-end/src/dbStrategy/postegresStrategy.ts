import { PrismaClient } from "@prisma/client";

export let client: PrismaClient;

export function connectDb() {
    client = new PrismaClient();
}

export async function disconnectDb() {
    await client.$disconnect();
}
