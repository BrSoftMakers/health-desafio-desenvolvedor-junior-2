import { Request, Response, NextFunction } from "express";

interface IError {
    code: number;
    message: String;
}

export default function errorHandlerMiddleware(
    err: IError,
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (err.code) {
        res.status(err.code).send(err.message);
        return;
    }

    console.log(err);
    res.sendStatus(500);
}
