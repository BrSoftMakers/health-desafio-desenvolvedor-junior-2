import { Router } from "express";

import onwerRoutes from "./ownerRoutes";
import petRoutes from "./petRoutes";

const routes = Router();

routes.use(onwerRoutes);
routes.use(petRoutes);

export { routes };
