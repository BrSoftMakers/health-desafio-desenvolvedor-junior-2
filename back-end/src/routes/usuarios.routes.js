const express = require('express');
const rescue = require('express-rescue');
const controller = require('../controllers/usuario.controller');

const router = express.Router();

router.post('/', rescue((req, res) => controller.registerUser(req, res)));

module.exports = router;
