const app = require('./app');
require('dotenv').config();

app.listen(3001, () => console.log(`server running on port ${process.env.PORT}`));
