const express = require('express');
const dotenv = require('dotenv/config')
const bodyParser = require('body-parser');
const cors = require('cors');
const routers = require('./routers')
const {sequelize} = require('./models/pet')
const PORT = process.env.PORT || 3030;
const app = express();

sequelize.sync();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(routers);


app.listen(PORT, () => {
  console.log(`App running at ${PORT} port.`)
})