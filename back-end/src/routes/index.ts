import { Router } from "express";
import PetRoutes from "./pet";

const routes = Router();

routes.use(PetRoutes);

export default routes;
