//IMPORTANDO O CLIENT PARA CONEXÃO COM O DB
import { cliente } from './db.js';
//IMPORTANDO EXPRESS
import express from "express";
//IMPORTANDO CORS PARA EVITAR CONFLITOS LOCAIS
import cors from "cors";
//IMPORTANDO ROTAS
import userRoutes from "./routes/users.js"

//INICIANDO EXPRESS
const app = express();

//HABILITANDO JSON 
app.use(express.json());

//HABILITANDO CORS PARA EVITAR CONFLITOS LOCAIS
app.use(cors());

//PARA APP CAMINHO INICIAL "/" PEGAR A ROTA USER ROUTES
app.use("/", userRoutes);

//DEFININDO ROTA QUE SERÁ ABERTA
app.listen(8800, ( ) => {
    console.log('Server running.')
});


