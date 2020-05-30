const express = require('express');
const bodyParser = require('body-parser');

var app = express();

// parse setting
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api', (req, res) => {
    res.status(200).send({
        message: "Welcome to CI/CD!",
        success: true
    });
});

app.get('/api/train', (req, res) => {
    res.status(200).send({
        train: [{
            train: "Purushottam Express",
            number: "12448"
        }, {
            train: "Prayag Raj",
            number: "12417"
        },{
            train: "Reewa Express",
            number: "12428"
        }],
        success: true
    });
});

app.listen(3000, (err) => {
    console.log('Server listen on port 3000...');
});

// for testing
module.exports = app
