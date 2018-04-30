var express = require('express');
var router = express.Router();
var mongo = require('../database/app_api.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'aslkfdja' });
});
router.get('/book', function (req, res, next) {
  res.render('book', { title: 'Express' });
});
router.post('/show', mongo.retrieveBooks);
router.post('/createBook',mongo.createBook);
router.post('/retrieveBook',mongo.createBook);
router.post('/updateaddBook',mongo.updateBook);
router.post('/addBook',mongo.createBook);
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Express' });
});

module.exports = router;
