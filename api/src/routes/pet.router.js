const express = require('express');

const PetController = require('../controllers/pet.controller');

const router = express.Router();

router.get('/', PetController.getAll);
router.get('/:id', PetController.getById);

module.exports = router;
