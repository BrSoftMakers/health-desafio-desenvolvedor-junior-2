import express  from "express";
import { database } from "./database";
import "dotenv/config";
import { router } from "./routes/routes";


const server = express();
server.use(express.json());
server.use(router);


const port = process.env.SERVER_PORT

server.listen(port || 3001, async()=>{
    await database.sync();
    console.log("Servidor rodando...")
});
