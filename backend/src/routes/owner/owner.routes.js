const express = require('express');
const OwnerController = require('../../controller/owner.controller');

const router = express.Router();

router.post('/', OwnerController.createOwner);

module.exports = router;
