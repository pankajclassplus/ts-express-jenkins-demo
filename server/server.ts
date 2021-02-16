import express = require('express');

const app: express.Application = express();

app.get('/', function (req, res) {
    res.send('Hello World got pushed ---!');
});

app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});