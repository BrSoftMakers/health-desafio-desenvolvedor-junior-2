"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pet_controller_1 = require("../controllers/pet.controller");
const petsRoutes = (0, express_1.Router)();
petsRoutes.post('', pet_controller_1.createPetsController);
petsRoutes.get('', pet_controller_1.listPetsController);
petsRoutes.get('/:id', pet_controller_1.listPetByIdController);
petsRoutes.patch('/:id', pet_controller_1.updatedPetsController);
petsRoutes.delete('/:id', pet_controller_1.deletePetsController);
exports.default = petsRoutes;
//# sourceMappingURL=petsRoutes.js.map