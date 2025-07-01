import express from 'express';
import { configDotenv } from 'dotenv';
configDotenv();
import CORS from 'cors';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(CORS())
app.use(JSON.parse())

app.route('/',)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

