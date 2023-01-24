import { Request, Response } from "express";
import { pets } from "@prisma/client";

import { service } from "../services/petService";

async function post(req: Request, res: Response) {
    const petData: Omit<pets, "id"> = req.body;

    await service.post(petData);

    res.sendStatus(201);
}

export const controller = {
    post,
};
