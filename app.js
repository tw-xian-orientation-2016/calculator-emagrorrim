'use strict'
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let api = require('./api');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api);

app.get('/', (req, res) => {
  res.sendfile('./public/html/calculator.html');
});

app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});