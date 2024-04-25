import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { ReadmeGen } from './routes/readmeGen.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors());


app.use('/api', ReadmeGen);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/'));
})

if (process.env.PORT) {
    app.listen(process.env.PORT, () => console.log("SERVER STARTED!"));
} else {
    app.listen(5000, () => console.log("SERVER STARTED!"));
}