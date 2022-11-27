import {Router} from "express";
import { CreatePetControllers } from './controllers/CreatePetController';
import { GetAllPetsController } from './controllers/GetAllPetsController';
import { GetOnePetController } from "./controllers/GetOnePetController";
import { DeletePetController } from './controllers/DeletePetController';
import { UpdatePetController } from './controllers/UpdatePetController';

const path = require('path');

const api = "/api"
const routes = Router()

routes.post(`${api}/pets/`, new CreatePetControllers().handle)
routes.get(`${api}/pets`, new GetAllPetsController().handle)
routes.get(`${api}/pets/pets/:id`, new GetOnePetController().handle)
routes.delete(`${api}/pets/pets/:id`, new DeletePetController().handle)
routes.put(`${api}/pets/pets/:id`, new UpdatePetController().handle)

// Todas as outras solicitações GET não tratadas retornarão nosso app em React
routes.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});


export default routes;