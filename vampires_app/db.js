// 1. Require your node modules
const mongoose = require('mongoose');
const db = mongoose.connection;
//this is so you can refer to a constant that refers to the model. It's a shortcut in a way so you don't have to type require(./vampires) over & over again.


// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire.js')
//could I put their model in populateVampires.js or a diff. file?
// 3. Connect your database and collection name
const Article = require('./populateVampires.js');
// 4A. Open your mongoose connection
mongoose.connect('mongodb://localhost:27017/vampire');
// 4B. my notes: check for connectino.

//ERROR CHECK db.on is the same format as app.listen
db.on('error', (err) => {
  //error message of a a failed connection
  //error is a reserved keyword. If there is an error when we attempt to connect, this will log out.
  console.log(err, ' this is the error message')
})

//CONNECTED CHECK
db.on('connected', () => {
  //connection is a reserved keyword
  console.log('mongoose is connected to mongodb');
})




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
//For commit 3: https://docs.mongodb.com/manual/reference/operator/query/

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
