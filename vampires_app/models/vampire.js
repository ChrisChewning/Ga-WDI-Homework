
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//this is so you can refer to a constant that refers to the model. It's a shortcut in a way so you don't have to type require(./vampires) over & over again.
const Vampire = require('./models/vampire.js')




const vampireSchema = new Schema([{
//write your schema fields here
  name: {type: String, required: true, unique: true},
  hair_color: {type: String, default: 'blonde'}
  eye_color: String,
  dob: Date,
  loves: {type: Array},
  location: String,
  gender: {type: String, enum: ['m', 'f', 't']},
  //^maxlength: 1 was good but didn't restrict to m or f
  victims: {type: Number, min: 0},
}]);


//To put into mongo: Mongoose injects your model into mongodb
//the first argument will be the name of your mongo collection.
//the second argument will be what those documents look like.
const Vampires = mongoose.model('Vampires', vampireSchema); //need to be vampires instead?




module.exports = Vampires; //you are exporting the const you made, which has two arguments in it.
