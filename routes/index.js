var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Жанр рок*/
router.get('/rok', function(req, res, next) {
  res.send("<h1>Жанр рок</h1>")
  });
 
  /* Жанр фонк */
router.get('/phonk', function(req, res, next) {
  res.send("<h1>Жанр фонк</h1>")
  });

  /* Жанр поп */
  router.get('/pop', function(req, res, next) {
  res.send("<h1>Жанр поп</h1>")
  });

module.exports = router;
