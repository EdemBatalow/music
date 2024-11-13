var express = require('express');
var router = express.Router();
var Music = require('../models/music').Music;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с musics');
    });

router.get("/:nick", async function(req, res, next) {
    var musics = await Music.find({nick: req.params.nick});
    console.log(musics)
    if(!musics.length) return next(new Error("Нет такого жанра"))
    var music = musics[0];
    res.render('music', {
    title: music.title,
    picture: music.avatar,
    desc: music.desc
    })
    });
       

module.exports = router;

