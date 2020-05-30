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

app.get('/api/books', (req, res) => {
    res.status(200).send({
        books: [{
            title: "Herry Potter",
            author: "JK"
        }, {
            title: "Book1",
            author: "JJ"
        },{
            title: "Book2",
            author: "JJ2"
        }],
        success: true
    });
});

app.listen(3000, (err) => {
    console.log('Server listen on port 3000...');
});

// for testing
module.exports = app