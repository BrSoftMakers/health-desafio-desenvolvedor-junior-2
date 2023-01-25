/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const helmet = require('helmet');
const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const routes = require('./routes/routes');
const auth = require('./middlewares/auth');

const app = express();
app.use(cookieParser());
app.use(compression());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
  methods: 'GET,PUT,POST,OPTIONS, DELETE',
}));
app.use(helmet());
app.use(express.json());

app.all(`${process.env.API_BASE}*`, (req, res, next) => {
  const publicRoutes = ['/', '/api/usuarios', '/api/usuarios/login'];
  for (let i = 0; i < publicRoutes.length; i += 1) {
    if (req.path === publicRoutes[i]) {
      return next();
    }
  }
  auth(req, res, next);
});

app.use(process.env.API_BASE, routes);

module.exports = app;
