import { pets } from "@prisma/client";

import { client } from "../dbStrategy/postegresStrategy";
import { redis, cacheKeys, cachExpiration } from "../dbStrategy/redisStrategy";

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
    await redis.del(cacheKeys.pets);

    return await client.pets.create({
        data: petData,
        select: {
            id: true,
            name: true,
            type: true,
            breed: true,
            age: true,
            owner: true,
        },
    });
}

async function findAll() {
    let result;

    try {
        const cachedEvent = await redis.get(cacheKeys.pets);

        if (cachedEvent) {
            result = JSON.parse(cachedEvent);
        } else {
            result = await client.pets.findMany({
                select: {
                    id: true,
                    name: true,
                    age: true,
                    type: true,
                    breed: true,
                    owner: true,
                },
                orderBy: {
                    id: "desc",
                },
            });

            redis.setEx(cacheKeys.pets, cachExpiration, JSON.stringify(result));
        }

        return result;
    } catch (error) {
        console.log(error);
    }
}

async function findById(id: number) {
    return await client.pets.findUnique({ where: { id } });
}

async function updatePetData(id: number, petData: patchPetProps) {
    await redis.del(cacheKeys.pets);

    return await client.pets.update({
        data: petData,
        where: { id },
        select: {
            id: true,
            name: true,
            type: true,
            breed: true,
            age: true,
            owner: true,
        },
    });
}

async function removeById(id: number) {
    await client.pets.delete({ where: { id } });

    await redis.del(cacheKeys.pets);
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
