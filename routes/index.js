var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.greeting = "Hi!!!";
  res.render('index', { title: 'Express', counter:req.session.counter });
  });

  /* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход'});
  });
  
/* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  console.log(username);
  console.log(password);
  });  
  
/* Жанр рок*/
router.get('/rok', function(req, res, next) {
  res.render('music', {
  title: "Рок",
  picture: "images/рок.jpg",
  desc:"Рок — это музыкальный жанр, возникший в середине XX века, который объединяет разнообразные стили и направления. Характеризуется мощным ритмом, энергичным звучанием гитар, выразительным вокалом и свободой самовыражения. Рок-музыка часто отражает протест и стремление к переменам, что сделало ее символом молодёжных движений и культурных революций." 
  });
  });
  
 
  /* Жанр фонк */
  router.get('/phonk', function(req, res, next) {
    res.render('music', {
    title: "Фонк",
    picture: "images/phonk.jpg",
    desc:"Фонк — это стиль, возникший в 2010-х, который сочетает хип-хоп, южный рэп, и элементы ретро-фанка. Он характеризуется мрачным, грувовым звучанием, замедленными битами, глубоким басом и сэмплами из олдскульного фанка и соула. Часто фонк включает агрессивные тексты, атмосферные эффекты и речитатив, создавая уникальную 'темную' атмосферу." 
    });
    });

  /* Жанр поп */
  router.get('/pop', function(req, res, next) {
    res.render('music', {
    title: "Поп",
    picture: "images/pop.png",
    desc:"Поп-музыка — это жанр, ориентированный на массовую аудиторию, с акцентом на мелодичность, запоминающиеся тексты и простую структуру песен. Возникший в середине XX века, поп постоянно меняется, впитывая элементы других стилей — от рока и диско до хип-хопа и электронной музыки. Основная цель поп-музыки — создать легкие и эмоционально понятные композиции, которые быстро завоевывают популярность и становятся частью массовой культуры." 
    });
    });

module.exports = router;
