import {
    postPetProps,
    patchPetProps,
    repository as petRepository,
} from "../repositories/petRepository";
import { repository as ownerRepository } from "../repositories/ownerRepository";

import { error } from "../utils/errorTypes";

async function post(petData: postPetProps) {
    const isOwnerIdValid = !!(await ownerRepository.findById(petData.ownerId));

    if (isOwnerIdValid === false) {
        throw error.unauthorized("Id do dono inválido");
    }

    await petRepository.create(petData);
}

async function getAll() {
    return await petRepository.findAll();
}

async function getAllByCPF(ownerCPF: string) {
    return await petRepository.findByOwnerCPF(ownerCPF);
}

async function updatePetData(petId: number, petData: patchPetProps) {
    const isPetIdValid: boolean = !!(await petRepository.findById(petId));

    if (isPetIdValid === false) {
        throw error.notFound("Id inválido");
    }

    await petRepository.updatePetData(petId, petData);
}

async function removePetbyId(petId: number) {
    const isIdValid: boolean = !!(await petRepository.findById(petId));

    if (isIdValid === false) {
        throw error.notFound("Id inválido.");
    }

    await petRepository.removeById(petId);
}

export const service = {
    post,
    getAll,
    getAllByCPF,
    updatePetData,
    removePetbyId,
};
