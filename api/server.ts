import express, { response } from "express";
import cors from "cors";
import { createRegisterUsers, searchUsers } from "./db/users";
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.post("/api/cadastrarUsuario", async (request, response) => {
    const requestDatas = request.body;
    await createRegisterUsers(requestDatas.nome, requestDatas.telefone, requestDatas.endereco);
    response.json({
        createdUser: true
    });
    
});

app.post("/api/usuarios", async (_request, response) => {
    const Users = await searchUsers();
    response.json({Users});
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});