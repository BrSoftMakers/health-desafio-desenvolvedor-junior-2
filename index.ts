import express from 'express';
import router from './src/routes/routes';
import cors from 'cors';


const app = express();

app.use(cors())

app.use(express.json());


app.use(router);
const PORT = 2780;


app.listen(PORT, () => {
    console.log('Server is running on ' + PORT);
})