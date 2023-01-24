const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');

const { pet } = require('./models')

const app = express();

app.use(cors());
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.get('/pets', async (_req, res) => {
    const pets = await pet.findAll();

    return res.status(200).json(pets)
})

app.post('/pets', async (req, res) => {
    const n = await pet.create(req.body);

    return res.status(201).json(n);
})


app.use(routes);

module.exports = app;

