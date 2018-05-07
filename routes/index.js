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
router.post('/createBook',mongo.createBook);
router.post('/retrieveBook',mongo.retrieveBooks);
router.post('/updateBook',mongo.updateBook);
router.post('/deleteBook',mongo.deleteBook);
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Express' });
});

module.exports = router;
