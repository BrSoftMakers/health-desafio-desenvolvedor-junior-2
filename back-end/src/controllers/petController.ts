import { Request, Response } from "express";
import { pets } from "@prisma/client";

import { service } from "../services/petService";

async function post(req: Request, res: Response) {
    const petData: Omit<pets, "id"> = req.body;

    await service.post(petData);

    res.sendStatus(201);
}

async function getAll(req: Request, res: Response) {
    const pets: pets[] = await service.getAll();

    res.status(200).send(pets);
}

export const controller = {
    post,
    getAll,
};
