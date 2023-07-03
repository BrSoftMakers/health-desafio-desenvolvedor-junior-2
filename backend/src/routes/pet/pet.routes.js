const express = require('express');
const PetController = require('../../controller/pet.controller');
const { validatePet } = require('../../middleware/pet.middleware');

const router = express.Router();

router.get('/owner/:ownerId', PetController.getPetByOwnerId);
router.get('/:uniqueId', PetController.getPetUniqueId);
router.put('/:uniqueId', PetController.updatePet);
router.delete('/:uniqueId', PetController.deletePet);
router.get('/', PetController.getAllPets);
router.post('/', validatePet, PetController.createPet);

module.exports = router;
