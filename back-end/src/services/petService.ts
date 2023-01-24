import { pets } from "@prisma/client";

import { patchPetProps, repository as petRepository } from "../repositories/petRepository";
import { repository as ownerRepository } from "../repositories/ownerRepository";

import { error } from "../utils/errorTypes";

async function post(petData: Omit<pets, "id">) {
    const isOwnerIdValid = !!(await ownerRepository.findById(petData.ownerId));

    if (isOwnerIdValid === false) {
        throw error.unauthorized();
    }

    await petRepository.create(petData);
}

async function getAll() {
    return await petRepository.findAll();
}

async function updatePetData(petId: number, petData: patchPetProps) {
    const isPetIdValid: boolean = !!(await petRepository.findById(petId));

    if (isPetIdValid === false) {
        throw error.notFound("Id inválido");
    }

    await petRepository.updatePetData(petId, petData);
}

export const service = {
    post,
    getAll,
    updatePetData,
};
