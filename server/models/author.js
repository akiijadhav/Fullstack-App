const mongoose = require('mongoose'); // require mongoose to create model
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number,
});

//make a model i.e collection based on authorSchema
module.exports = mongoose.model('Author', authorSchema);
