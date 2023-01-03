import express from "express";
import cors from "cors";
import cadastrarPetRoute from "./routes/cadastrarPetRoute";
import petsRoute from "./routes/petsRoute";
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use("/", cadastrarPetRoute);

app.use("/", petsRoute);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});