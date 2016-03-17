'use strict'
let request = require('supertest');
let express = require('express');
let bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

request(app)
  .post('/minus', {number:'1'})
  .expect(function(res) {
        res.body = -1;
        console.log('OK');
      });
