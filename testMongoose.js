const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
const music = mongoose.model('music', { name: String });
const song = new music({ name: 'Рок' });
song.save().then(() => console.log('ЕЕЕЕЕЕ'));
