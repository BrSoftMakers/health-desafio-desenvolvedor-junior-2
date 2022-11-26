import {Router} from "express";
import { CreatePetControllers } from './controllers/CreatePetController';
import { GetAllPetsController } from './controllers/GetAllPetsController';
import { GetOnePetController } from "./controllers/GetOnePetController";
import { DeletePetController } from './controllers/DeletePetController';
import { UpdatePetController } from './controllers/UpdatePetController';


const routes = Router()


routes.post("/pets", new CreatePetControllers().handle)
routes.get("/pets", new GetAllPetsController().handle)
routes.get("/pets/:id", new GetOnePetController().handle)
routes.delete("/pets/:id", new DeletePetController().handle)
routes.put("/pets/:id", new UpdatePetController().handle)


export default routes;