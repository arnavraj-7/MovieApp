import express from 'express';
import { configDotenv } from 'dotenv';
configDotenv();
import CORS from 'cors';
import router from './routes/fetch.routes.js';
import connectDB from './utils/db.js';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(CORS(
    {
        origin:'*',
    }
))
app.use(express.json());


app.use('/',router)

app.listen(PORT,async() => {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
});

