const express = require('express');
const router = express.Router();

const authRouter = require('../routes/AuthRoute');
const petsRouter = require('../routes/petsRoute');

router.use('/auth', authRouter)
router.use('/pets', petsRouter);

module.exports = router;