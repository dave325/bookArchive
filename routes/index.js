var express = require('express');
var router = express.Router();
var mongo = require('../database/dbFunc.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'aslkfdja' });
});
router.get('/book', function (req, res, next) {
  res.render('book', { title: 'Express' });
});
router.post('/show', mongo.showBooks);
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Express' });
});

module.exports = router;
