const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var schema = mongoose.Schema({ name: String })
schema.methods.rok = function(){
    console.log(this.name + " ЕЕЕЕЕЕ")
    }
const music = mongoose.model('music', schema);
const song = new music({ name: 'Рок:' });
song.save().then(() => song.rok());
