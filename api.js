'use strict'
let express = require('express');

let router = express.Router();

router.post('/negative',  (req, res) => {
  let number = parseFloat(req.body.number);
  let minus = -number;
  res.send('' + minus);
});

router.post('/percentage',  (req, res) => {
  let number = parseFloat(req.body.number);
  let percentage = number / 100;
  res.send('' + percentage);
});

router.post('/sum',  (req, res) => {
  let number1 = parseFloat(req.body.number1);
  let number2 = parseFloat(req.body.number2);
  let sum = number1 + number2;
  res.send('' + sum);
});

router.post('/difference',  (req, res) => {
  let number1 = parseFloat(req.body.number1);
  let number2 = parseFloat(req.body.number2);
  let difference = number1 - number2;
  res.send('' + difference);
});

router.post('/product',  (req, res) => {
  let number1 = parseFloat(req.body.number1);
  let number2 = parseFloat(req.body.number2);
  let product = number1 * number2;
  res.send('' + product);
});

router.post('/quotient',  (req, res) => {
  let number1 = parseFloat(req.body.number1);
  let number2 = parseFloat(req.body.number2);
  let quotient = number1 / number2;
  res.send('' + quotient);
});

module.exports = router;