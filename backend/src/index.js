const dotenv = require('dotenv');
const app = require('./app');
dotenv.config();

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
