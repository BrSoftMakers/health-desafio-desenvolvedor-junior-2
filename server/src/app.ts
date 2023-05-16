import express from "express";
import { Request, Response, NextFunction } from 'express';
import cors from "cors"
import { routers } from "./routes/routes";
import { ZodError } from "zod";
import { env } from "./env";


export const app = express();

app.use(express.json());
app.use(cors())
app.use(routers)
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof ZodError) {
        return res.status(400).json({ message: 'Erro de validação', issues: error.issues });
    }
    if (env.NODE_ENV !== 'production') {
        console.error(error);
    }
    return res.status(500).json({ message: 'Erro interno do servidor.' });
});