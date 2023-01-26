import { Request, Response } from "express";

import { service } from "../services/ownerService";

import { createOnwerProps } from "../repositories/ownerRepository";

async function post(req: Request, res: Response) {
    const ownerData: createOnwerProps = req.body;

    const savedOwnerData = await service.post(ownerData);

    res.status(201).send(savedOwnerData);
}

export const controller = {
    post,
};
