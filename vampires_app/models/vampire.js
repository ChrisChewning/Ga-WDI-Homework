const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const vampireSchema = new Schema([{
//write your schema fields here
  name: {type: String, required: true, unique: true},
  hair_color: {type: String, default: 'blonde'}
  eye_color: {type: String},
  dob: {type: Date},
  loves: {type: Array},
  location: {type: String},
  gender: {type: String, maxlength: 1}, //how to restrict a string to m or f only?
  victims: {type: Number, min: 0},
}]);


loves: ['cereal','marshmallows'],
