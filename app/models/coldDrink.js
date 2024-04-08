const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coldDrinkSchema = new Schema({
  name:{ type: String,require:true},
  image:{ type: String,require:true},
  price:{type: String,require:true}
});

module.exports = mongoose.model('coldDrink',coldDrinkSchema);