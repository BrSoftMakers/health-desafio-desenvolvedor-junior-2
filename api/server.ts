import express from "express";
import cors from "cors";
import { createRegisterUsers, deleteUsers, editUsers, searchAllUsers, searchUsers } from "./db/users";
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.post("/api/cadastrarUsuario", async (request, response) => {
    const {nome, telefone, endereco} = request.body;
    await createRegisterUsers(nome, telefone, endereco);
    response.json({
        createdUser: true
    });
    
});

app.post("/api/usuarios", async (request, response) => {
    if (!request.body.id) {
    
        const Users = await searchAllUsers();
        return response.json({Users});
    }
    else {
        const Users = await searchUsers(request.body.id);
        return response.json({Users});
    }
});

app.post("/api/editarUsuario", async (request, response) => {
    const {id, nome, telefone, endereco} = request.body;

    await editUsers(id, nome, telefone, endereco);

    return response.json({edit: true})
});


app.post("/api/deleteUser", async (request, response) => {
    const {id} = request.body;

    await deleteUsers(id);

    return response.json({deleted: true});
});



app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});