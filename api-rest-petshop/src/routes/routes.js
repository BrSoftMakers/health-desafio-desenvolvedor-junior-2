import express from "express";
import cadastrarAnimal from "../controllers/cadastrarAnimal.js";
import buscarAnimais from "../controllers/buscarAnimais.js";
import buscarAnimal from "../controllers/buscarAnimal.js"
import editarAnimal from "../controllers/editarAnimal.js";
import deletarAnimal from "../controllers/deletarAnimal.js";

const router = express.Router();

router
    .get("/animais", buscarAnimais)
    .get("/animais/:id", buscarAnimal)
    .post("/animais", cadastrarAnimal)
    .put("/animais/:id", editarAnimal)
    .delete("/animais/:id", deletarAnimal)

export default router;