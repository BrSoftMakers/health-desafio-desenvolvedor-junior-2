const express = require('express');
const router = express.Router();

const petsController = require('../controllers/petsController');

router.get('/', petsController.getAllPets);
router.get('/:petId', petsController.getPetByPetId);
router.post('/', petsController.createPet);
router.put('/:petId', petsController.updatePet);
router.delete('/:petId', petsController.deletePet);

module.exports = router;