import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";
import { AppError } from "../errors/AppError";

export const ensureDataIsValidMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.body = validatedData;

      return next();
    } catch (error) {
      throw new AppError(error.errors);
    }
  };
