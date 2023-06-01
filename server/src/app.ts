import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { routers } from "./routes/routes";
import { ZodError } from "zod";
import { env } from "./env";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routers);

app.use((error: any, _: Request, res: Response, next: NextFunction) => {
    if (error instanceof ZodError) {
        return res.status(400).json({ message: 'Validation error', issues: error.issues });
    }

    next(error);
});

// Middleware para tratamento de erros genéricos
app.use((error: any, _: Request, res: Response,) => {
    if (env.NODE_ENV !== 'production') {
        console.error(error);
    }

    res.status(500).json({ message: 'Internal server error.' });
});

export { app };