

import bodyParser from "body-parser";
import express from "express"
import { AppDataSource } from './src/data-source';
import routes from './src/routes'
const path = require('path');
const cors = require('cors')

const PORT = process.env.PORT || 3001;

AppDataSource.initialize().then(() => {
    const app = express()

    // Body parser middleware
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors())

    app.use(express.json())

    app.use(routes)

    // Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('/*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

    return app.listen(PORT)
})