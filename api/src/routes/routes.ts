import { Router } from "express";
import DataHandler from "../middlewares/dataHandler";
import Pet from "./pet.routes";

const router = Router();

router.use("/pet", Pet);
router.use(DataHandler);

export default router;
