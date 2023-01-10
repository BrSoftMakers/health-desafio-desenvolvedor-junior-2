const express = require("express")
const controllerPets = require('./controllers/controller')
const petRoutes = express.Router()

//Create 
petRoutes.post("/pets", controllerPets.Create)
//Read
petRoutes.get("/pets", controllerPets.Get)
//Update
petRoutes.put("/pets", controllerPets.Put)
//Delete
petRoutes.delete("/pets/:Id", controllerPets.Delete)

module.exports = petRoutes