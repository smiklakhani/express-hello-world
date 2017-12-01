const express = require('express');
const request = require('request');

const config = require('./config');

const app = express();
const router = express.Router();

router
    .get('/', (req, res) => {
        res.send(200);
    })
    .get('/helloWorld/:name', (req, res) => {
        request(`${config.API_ENDPOINT_URL}/hello/${req.params.name}`, (err, response, body) => {
            let message = JSON.parse(response.body).message;
            res.json({message});
        });
    });

app.use('/express', router);

app.listen(3000, () => console.log('Express app listening on port 3000!'));