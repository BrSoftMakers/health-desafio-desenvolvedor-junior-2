import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log("Servidor rodando na porta", PORT);
});
