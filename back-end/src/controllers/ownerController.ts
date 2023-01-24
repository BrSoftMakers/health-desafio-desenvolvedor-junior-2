import { Request, Response } from "express";

import { service } from "../services/ownerService";

import { createOnwerProps } from "../repositories/ownerRepository";

async function post(req: Request, res: Response) {
    const ownerData: createOnwerProps = req.body;

    await service.post(ownerData);

    res.sendStatus(201);
}

export const controller = {
    post,
};
