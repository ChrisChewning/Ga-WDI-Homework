// 1. Require your node modules
const mongoose = require('mongoose');
const database = mongoose.connection;
//this is so you can refer to a constant that refers to the model. It's a shortcut in a way so you don't have to type require(./vampires) over & over again.



// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire.js')
// 3. Connect your database and collection name
const Article = require('./db.js');
// 4. Open your mongoose connection
mongoose.connect('mongodb://localhost:27017/vampire');
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
//I will later.

// ### Add some new vampire data
Vampire.create({
name: 'Van',
hair_color: 'black',
eye_color: 'brown',
dob: new Date(1978, 2, 13, 7, 47),
loves: ['rare meat','Frito Pie'],
location: 'Minneapolis, Minnesota, US',
gender: 'm',
victims: 25
})

Vampire.create({
name: 'Drag-you-luh',
dob: new Date(937, 0, 24, 13, 0),
hair_color: 'black',
eye_color: 'blue',
loves: ['La Croixs', 'steam engines', 'potatoes', 'side pieces'],
location: 'Transylvania, Romania',
gender: 'f',
victims: 1238
  })

  Vampire.create({
  name: 'Vamboni',
  hair_color: 'brown',
  eye_color: 'green',
  dob: new Date(2004, 10, 12, 5, 12),
  loves: ['baseball at night'],
  location: 'Baltimore, Maryland, US',
  gender: 'm',
  victims: 10
})

  Vampire.create({
  name: 'Sneakz',
  dob: new Date(92, 22, 42, 8, 1),
  hair_color: 'black',
  eye_color: 'blue',
  loves: ['Soap', 'Socks', 'Sandwiches'],
  location: 'Northwest, Canada',
  gender: 'f',
  victims: 1
})
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Find all the vampires that that are females
Vampire.find({gender: 'f'}, (err, vampire) => {
  console.log(vampire); //find always returns an array.
})
// have greater than 500 victims
Vampire.find({victims {$gt : 0}}, (err, vampire) => {
  console.log(vampire); //find always returns an array.
})
// have fewer than or equal to 150 victims
Vampire.find({victims { $lte: 150}}), (err, vampire) => {
  console.log(vampire); //find always returns an array.
})
// have a victim count is not equal to 210234
Vampire.find{victims {$ne: 210234}, (err, vampire) => {
  log(vampire)
} }

// have greater than 150 AND fewer than 500 victims
Vampire.find({victims {gt: 150, lt: 500}}, (err, vampire) => {
  console.log(vampire);
})
// example: ( { status: "A", qty: { $lt: 30 } }


/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
