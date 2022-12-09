const express = require('express');

const PetController = require('../controllers/pet.controller');

const router = express.Router();

router.get('/', PetController.getAll);

module.exports = router;
