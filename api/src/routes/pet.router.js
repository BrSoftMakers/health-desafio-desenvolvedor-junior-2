const express = require('express');

const validatePet = require('../middlewares/validatePet');
const PetController = require('../controllers/pet.controller');

const router = express.Router();

router.get('/', PetController.getAll);
router.get('/:id', PetController.getById);
router.post('/', validatePet, PetController.create);

module.exports = router;
