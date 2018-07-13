//NOTES:
//the express app is on its own server.
//the database is on its own server.

const mongoose = require('mongoose');
const database = mongoose.connection;

//this model will be able to update, get, delete, etc. from our database.
const Vampires = require('./models/vampires');
mongoose.connect('mongodb://localhost:27017/vampire');


// Using the create method, create 4 new vampires with any qualities that you like two should be male and two should be female.
// 🔴 The commit message should read:
// "Commit 2 - added data into vampire collection"


//-------------------------  CHECK FOR CONNECTION  -----------------------------

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

//-------------------------  CHECK FOR CONNECTION  -----------------------------


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
