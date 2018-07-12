const vampireSchema = new Schema(

  [{
//write your schema fields here
  name: {type: String, required: true, unique: true},
  hair_color: {type: String}
  eye_color: {type: String, required: true, unique: true},
  dob: {type: String, required: true, unique: true},
  loves: {type: String, required: true, unique: true},
  location: {type: String, required: true, unique: true},
  gender: {type: String, },
  victims: {type: String, required: true, unique: true},
});



// const vampire = {
//   name: 'Count Chocula',
//   hair_color: 'brown',
//   eye_color: 'brown',
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ['cereal','marshmallows'],
//   location: 'Minneapolis, Minnesota, US',
//   gender: 'm',
//   victims: 2,
// }


//   {
//     name: 'Count Chocula',
//     hair_color: 'brown',
//     eye_color: 'brown',
//     dob: new Date(1971, 2, 13, 7, 47),
//     loves: ['cereal','marshmallows'],
//     location: 'Minneapolis, Minnesota, US',
//     gender: 'm',
//     victims: 2
//   },{
