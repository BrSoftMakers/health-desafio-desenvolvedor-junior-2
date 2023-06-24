const express = require('express');
const router = express.Router();
const {
  listPets,
  getPetDetails,
  createPet,
  updatePet,
  deletePet,
} = require('../controllers/petsControllers.js');

router.get('/pets', listPets);
router.get('/pets/:id', getPetDetails);
router.post('/pets', createPet);
router.put('/pets/:id', updatePet);
router.delete('/pets/:id', deletePet);

module.exports = router;
