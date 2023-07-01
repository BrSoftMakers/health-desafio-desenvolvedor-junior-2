const express = require('express');
const OwnerController = require('../../controller/owner.controller');
const { validateOwner } = require('../../middleware/ower.middleware');

const router = express.Router();

router.post('/document', OwnerController.getOwnerByDocument);
router.post('/register', validateOwner, OwnerController.createOwner);

module.exports = router;
