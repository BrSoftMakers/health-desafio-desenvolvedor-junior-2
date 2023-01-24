import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

import { error as errorHandler } from "../utils/errorTypes";

export function validateBody(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const body: object = req.body;

        const { error } = schema.validate(body, { abortEarly: false });

        if (error) {
            throw errorHandler.unprocessableEntityError(error);
        }

        next();
    };
}
