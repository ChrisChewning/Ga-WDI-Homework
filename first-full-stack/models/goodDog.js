
const mongoose = require('mongoose');


const doggoSchema = mongoose.schema({
  name: String,
  type: String,
  image: String
});


//1st arg is the name of your collection. 2nd arg is including your schema.
mondule.exports = mongoose.model('Dogoos', doggoSchema);
