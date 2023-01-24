import { pets } from "@prisma/client";

import client from "../dbStrategy/postegresStrategy";

export type postPetProps = Omit<pets, "id">;

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

export const repository = {
    create,
    findAll,
};
