const mongoose = require('mongoose');
 mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
 var Music = require('./models/music.js').Music
 var music  = new Music({
 title: "Рок",
 nick: "rok"
 })
 music.save();