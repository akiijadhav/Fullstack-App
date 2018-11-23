const mongoose = require('mongoose'); // require mongoose to create model
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
});

//make a model i.e collection based on bookSchema
module.exports = mongoose.model('Book', bookSchema);
