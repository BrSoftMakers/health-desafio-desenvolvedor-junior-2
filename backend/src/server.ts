import express  from "express";
import { database } from "./database";
import "dotenv/config";


const server = express();
server.use(express.json());


const port = process.env.SERVER_PORT

server.listen(port || 3001, async()=>{
    await database.sync();
    console.log("Servidor rodando...")
});
