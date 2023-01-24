import { pets } from "@prisma/client";

import client from "../dbStrategy/postegresStrategy";

export type postPetProps = Omit<pets, "id">;

async function create(petData: postPetProps) {
    await client.pets.create({ data: petData });
}

export const repository = {
    create,
};
