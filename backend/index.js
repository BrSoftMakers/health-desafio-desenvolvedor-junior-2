import express from "express";
import cors from "cors";
import petsRoutes from "./routes/pets.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", petsRoutes);

app.listen(3333);
