import { Request, Response, NextFunction } from "express";

import { error } from "../utils/errorTypes";

export function validateHeader(req: Request, res: Response, next: NextFunction) {
    const header = req.headers;

    if (header.authorization !== process.env.AUTHORIZATION) {
        throw error.unauthorized("Autorização inválida.");
    }

    next();
}
