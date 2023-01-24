const express = require('express');
const rescue = require('express-rescue');
const controller = require('../controllers/cliente.controller');

const router = express.Router();

router.post('/', rescue((req, res) => controller.registerClient(req, res)));

module.exports = router;
