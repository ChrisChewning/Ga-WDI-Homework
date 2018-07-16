const express = require('express');
const app = express();
const port = 3000;
const Doggo = require('./models/goodDog')
//variable Doggo is a shortcut for the model goodDog.js

require('./db/db');


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}))

const methodOverride = require('method-override');
app.use(methodOverride('method'));




//---------------------- HOME ROUTE -------------------------

app.get('/home', (req, res) => {

  Doggo.find({}, (err, allDogs) => {
    res.render('index.ejs', {
      doggo: allDogs
    })
  })
})


//---------------------- NEW ROUTE -------------------------

app.get('/new', (req, res) => {
  // res.send('this is for new'); for testing
  res.render('new.ejs')
  });



//---------------------- POST Route creates a request -------------------------

app.post('/', (req, res) => {
  Doggo.create(req.body, (err, createDog) => {
  res.redirect('/home')
  })
})


//---------------------- EDIT ROUTE -------------------------

app.get('/home/:id/edit', (req, res) => {
  Doggo.findById(req.params.id, (err, databaseArray) => {
    res.render('edit.ejs', {
      doggo: databaseArray
    });
  });
});


//---------------------- NEW ROUTE -------------------------




//---------------------- SHOW ROUTE -------------------------




app.listen(port, () => {
  console.log('listening on port 3000');
})
