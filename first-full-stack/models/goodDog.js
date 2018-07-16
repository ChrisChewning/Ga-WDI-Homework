
const mongoose = require('mongoose');


const doggoSchema = mongoose.Schema({
  name: String,
  breed: String,
  isGoodBoy: Boolean,
});


//1st arg is the name of your collection. 2nd arg is including your schema.
module.exports = mongoose.model('Doggos', doggoSchema);
