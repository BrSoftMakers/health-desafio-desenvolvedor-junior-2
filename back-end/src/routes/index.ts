import { Router } from "express";

import onwerRoutes from "./ownerRoutes";

const routes = Router();

routes.use(onwerRoutes);

export { routes };
