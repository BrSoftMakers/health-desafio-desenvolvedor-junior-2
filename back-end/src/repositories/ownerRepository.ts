import { owners } from "@prisma/client";
import client from "../dbStrategy/postegresStrategy";

export type createOnwerProps = Omit<owners, "id">;

async function create(ownerData: createOnwerProps) {
    await client.owners.create({ data: ownerData });
}

async function findByCPF(CPF: string) {
    const dbUser = await client.owners.findUnique({ where: { CPF } });

    return dbUser;
}

export const repository = {
    findByCPF,
    create,
};
