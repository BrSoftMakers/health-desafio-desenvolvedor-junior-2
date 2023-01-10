//IMPORTANDO EXPRESS
import express from "express";
//IMPORTANDO CONTROLERS
import {
     getUsers, 
     addUser, 
     updateUser, 
     deleteUser } 
     from "../controllers/user.js";

const router = express.Router();

//ROTA GET
router.get("/", getUsers);
//ROTA POST
router.post("/", addUser);
//ROTA PUT
router.put("/:id", updateUser);
//ROTA DELETE
router.delete("/:id", deleteUser);

export default router;


// //CRIANDO UMA CONST PARA INDICAR QUE É UMA ROTA
// const router = express.Router();

// //ATRIBUINDO METODO GET PARA A VARIAVEL ROUTE
// router.get("/", getUsers);

// //Exportando a variavel por default
// export default router;

