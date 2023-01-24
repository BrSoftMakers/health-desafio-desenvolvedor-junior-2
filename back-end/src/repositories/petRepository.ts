import { pets } from "@prisma/client";

import { client } from "../dbStrategy/postegresStrategy";

export type postPetProps = Omit<pets, "id">;
export type patchPetProps = Omit<pets, "id" | "ownerId">;
export type getPetProps = Omit<pets, "ownerId"> & {
    owner: {
        id: number;
        name: string;
        phoneNumber: string;
        CPF: string;
    };
};

async function create(petData: postPetProps) {
    await client.pets.create({ data: petData });
}

async function findAll() {
    return await client.pets.findMany({
        select: {
            age: true,
            breed: true,
            id: true,
            name: true,
            type: true,
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

async function removeById(id: number) {
    await client.pets.delete({ where: { id } });
}

async function findByOwnerCPF(CPF: string) {
    return await client.pets.findMany({
        where: { owner: { CPF: { contains: CPF } } },
        select: {
            age: true,
            breed: true,
            id: true,
            name: true,
            type: true,
            owner: true,
        },
    });
}

export const repository = {
    create,
    findAll,
    findById,
    findByOwnerCPF,
    updatePetData,
    removeById,
};
