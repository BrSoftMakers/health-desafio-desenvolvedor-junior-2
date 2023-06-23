require('dotenv').config();

const express = require('express');
const cors = require('cors');
const petsRoute = require('./routes/petsRoute');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/pets-handler', petsRoute);
app.use(errorHandler);

const PORT = process.env.API_PORT || 3001;
app.listen(PORT, () => console.log('online na porta: ', PORT));
