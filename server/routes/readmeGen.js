import express from 'express';
import fs from 'fs';

const router = express.Router();

router.post('/readme', (req, res) => {
    console.log(req.body);
    res.send('Readme Created');
});

export { router as ReadmeGen };