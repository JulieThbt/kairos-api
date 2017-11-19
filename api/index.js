var express = require('express');
var fetch = require('node-fetch');
var api_id = process.env.MYAPIID;
var api_key = process.env.MYAPIKEY;
var app = express();
var port = process.env.PORT || 8080;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/detect', function (req, res) {
    fetch('https://api.kairos.com/detect', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'app_id': api_id,
            'app_key': api_key,
        },
        body: JSON.stringify({
            'image': 'http://media.kairos.com/kairos-elizabeth.jpg',
            'selector': 'ROLL'
        })
    })
        .then(response => response.json())
        .then(response => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        });
});

app.listen(port);
console.log('Server started! At http://localhost:' + port);