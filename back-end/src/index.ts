import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";

import { routes } from "./routes";
import errorHandler from "./middlewares/errorMiddleware";

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.use(routes);
server.use(errorHandler);

const PORT: number = Number(process.env.PORT) || 8080;

server.listen(PORT, () => {
    console.log("Servidor rodando na porta", PORT);
});
