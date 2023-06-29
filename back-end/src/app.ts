import express from "express";
import "express-async-errors";
import { handleError } from "./errors/handleError";
import cors from "cors";
import { petRoutes } from "./routes/pets.routes";

export const app = express();

app.use(express.json());
app.use(cors());

app.use("/pets", petRoutes);

app.use(handleError);
