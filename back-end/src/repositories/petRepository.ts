import { pets } from "@prisma/client";

import client from "../dbStrategy/postegresStrategy";

export type postPetProps = Omit<pets, "id">;
export type patchPetProps = Omit<pets, "id" | "ownerId">;

async function create(petData: postPetProps) {
    await client.pets.create({ data: petData });
}

async function findAll() {
    return await client.pets.findMany({
        include: {
            owner: true,
        },
    });
}

async function findById(id: number) {
    return await client.pets.findUnique({ where: { id } });
}

async function updatePetData(id: number, petData: patchPetProps) {
    await client.pets.update({ data: petData, where: { id } });
}

export const repository = {
    create,
    findAll,
    findById,
    updatePetData,
};
