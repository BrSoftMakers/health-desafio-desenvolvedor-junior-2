import { owners } from "@prisma/client";
import { client } from "../dbStrategy/postegresStrategy";

export type createOnwerProps = Omit<owners, "id">;

async function create(ownerData: createOnwerProps) {
    return await client.owners.create({ data: ownerData });
}

async function findByCPF(CPF: string) {
    const dbUser = await client.owners.findUnique({ where: { CPF } });

    return dbUser;
}

async function findById(id: number) {
    return await client.owners.findUnique({ where: { id } });
}

export const repository = {
    findByCPF,
    findById,
    create,
};
