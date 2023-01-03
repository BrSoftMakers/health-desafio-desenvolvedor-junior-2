import express from "express";
import cors from "cors";
import * as pets from "./db/pets";
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.post("/api/cadastrarPet", async (request, response) => {

    await pets.createRegisterPets(request.body);
    response.json({
        createdUser: true
    });
    
});

app.post("/api/pets", async (request, response) => {
    if (!request.body.id) {
    
        const Users = await pets.searchAllPets();
        return response.json({Users});
    }
    else {
        const Users = await pets.searchPets(request.body.id);
        return response.json({Users});
    }
});

app.post("/api/editarPet", async (request, response) => {

    await pets.editPets(request.body);

    return response.json({edit: true})
});


app.post("/api/deletePet", async (request, response) => {
    const {id} = request.body;

    await pets.deletePets(id);

    return response.json({deleted: true});
});



app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});