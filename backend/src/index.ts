import express from "express";
import cors from "cors";

import getPetsRouter from "./routes/getPets.route";
import getPetRouter from "./routes/getPet.route";
import createPetRouter from "./routes/createPet.route";
import updatePetRouter from "./routes/update.route";
import deletePetRouter from "./routes/delete.route";

const app = express();
const port = 3333;

app.use(cors());

app.use(express.json());

app.use(getPetsRouter);
app.use(getPetRouter);
app.use(createPetRouter);
app.use(updatePetRouter);
app.use(deletePetRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
