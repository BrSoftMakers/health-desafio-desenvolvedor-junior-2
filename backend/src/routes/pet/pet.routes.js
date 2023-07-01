const express = require('express');
const PetController = require('../../controller/pet.controller');
const { validatePet } = require('../../middleware/pet.middleware');

const router = express.Router();

router.get('/owner/:ownerId', PetController.getPetByOwnerId);
router.get('/:id', PetController.getPetById);
router.put('/:id', PetController.updatePet);
router.delete('/:id', PetController.deletePet);
router.get('/', PetController.getAllPets);
router.post('/', validatePet, PetController.createPet);

module.exports = router;
