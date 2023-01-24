import { Request, Response } from "express";
import { pets } from "@prisma/client";

import { service } from "../services/petService";

import { patchPetProps } from "../repositories/petRepository";

async function post(req: Request, res: Response) {
    const petData: Omit<pets, "id"> = req.body;

    await service.post(petData);

    res.sendStatus(201);
}

async function getAll(req: Request, res: Response) {
    const pets: pets[] = await service.getAll();

    res.status(200).send(pets);
}

async function patch(req: Request, res: Response) {
    const petId: number = Number(req.params.petId);
    const petDataToUpdate: patchPetProps = req.body;

    await service.updatePetData(petId, petDataToUpdate);

    res.sendStatus(200);
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
