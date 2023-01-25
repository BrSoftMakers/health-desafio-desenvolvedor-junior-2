import express, { Express } from "express";
import "express-async-errors";
import cors from "cors";

import { loadEnv } from "./loadEnv";

import { connectDb } from "./dbStrategy/postegresStrategy";
import { redisConnect } from "./dbStrategy/redisStrategy";

import { validateHeader } from "./middlewares/headerMiddleware";
import errorHandler from "./middlewares/errorMiddleware";

import { routes } from "./routes";

loadEnv();

const app = express();

app.use(cors());
app.use(express.json());

app.use(validateHeader);
app.use(routes);
app.use(errorHandler);

export async function init(): Promise<Express> {
    connectDb();
    await redisConnect();

    return Promise.resolve(app);
}

export default app;
