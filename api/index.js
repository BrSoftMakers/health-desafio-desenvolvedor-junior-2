const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db');
const routes = require('./routes/routes');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/', routes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
