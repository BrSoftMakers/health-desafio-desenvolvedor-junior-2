import { Request, Response } from "express";
import { pets } from "@prisma/client";

import { service } from "../services/petService";

import { postPetProps, patchPetProps, getPetProps } from "../repositories/petRepository";

async function post(req: Request, res: Response) {
    const petData: postPetProps = req.body;

    await service.post(petData);

    res.sendStatus(201);
}

async function getAll(req: Request, res: Response) {
    const ownerCPF = req.query.CPF;

    if (ownerCPF) {
        const petsFilteredByOwnerCPF: getPetProps[] = await service.getAllByCPF(String(ownerCPF));

        res.status(200).send(petsFilteredByOwnerCPF);
    } else {
        const pets: getPetProps[] = await service.getAll();

        res.status(200).send(pets);
    }
}

async function patch(req: Request, res: Response) {
    const petId: number = Number(req.params.petId);
    const petDataToUpdate: patchPetProps = req.body;

    const updatedPetData = await service.updatePetData(petId, petDataToUpdate);

    res.status(200).send(updatedPetData);
}

async function remove(req: Request, res: Response) {
    const petId: number = Number(req.params.petId);

    await service.removePetbyId(petId);

    res.sendStatus(204);
}

export const controller = {
    post,
    getAll,
    patch,
    remove,
};
