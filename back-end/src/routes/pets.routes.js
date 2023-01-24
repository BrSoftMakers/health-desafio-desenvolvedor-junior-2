const express = require('express');
const rescue = require('express-rescue');
const controller = require('../controllers/pet.controller');

const router = express.Router();

router.post('/', rescue((req, res) => controller.registerPet(req, res)));
router.get('/', rescue((req, res) => controller.getAllPets(req, res)));
router.get('/:id', rescue((req, res) => controller.getAPet(req, res)));
router.put('/:id', rescue((req, res) => controller.updatePet(req, res)));
router.delete('/:id', rescue((req, res) => controller.removePet(req, res)));

module.exports = router;