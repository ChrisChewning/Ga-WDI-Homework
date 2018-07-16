const express = require('express');
const app = express();
const port = 3000;
const Doggo = require('./models/goodDog')
//variable Doggo is a shortcut for the model goodDog.js

require('./db/db');

app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));



//---------------------- HOME ROUTE -------------------------

app.get('/home', (req, res) => {

  Doggo.find({}, (err, allDogs) => {
    res.render('index.ejs', {
      doggo: allDogs
    })
  })
})


//---------------------- NEW ROUTE -------------------------

app.get('/home/new', (req, res) => {
  // res.send('this is for new'); for testing
  res.render('new.ejs')
  });





//---------------------- EDIT ROUTE -------------------------

app.get('/home/:id/edit', (req, res) => {
  Doggo.findById(req.params.id, (err, databaseArray) => {
    res.render('edit.ejs', {
      doggo: databaseArray
    });
  });
});


//---------------------- POST Route creates a request -------------------------

app.post('/home', (req, res) => {
  //read the on button as true or false.
  if (req.body.isGoodBoy === 'on'){
    req.body.isGoodBoy = true
  } else {
    req.body.isGoodBoy = false
  }
  //Doggo is your database. you are targeting your database.
  Doggo.create(req.body, (err, createDog) => {
    if (err) {
      res.send(err);
    } else {
  res.redirect('/home')
}
  })
})



//---------------------- UPDATE ROUTE -------------------------

app.put('/:id', (req, res) => {

//checkbox gives us the value on.
  if(req.body.isGoodBoy === 'on') {
    req.body.isGoodBoy = true
  } else {
    req.body.isGoodBoy = false
  }

  Doggo.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateDog) => {
    if(err){
            res.send(err);
          } else {
        //check to see if it is updating correctly.
        console.log(updateDog, 'check our model');
    res.redirect('/home');
  }
})
})





//---------------------- SHOW ROUTE -------------------------

// Show Route
app.get('/:id', (req, res) => {

  // Render is when you want to send
  // an ejs template to the client
  Doggo.findById(req.params.id, (err, databaseArray) => {

    if(err){
      console.log(err, ' this is error in show');
      res.send(err);
    } else {
//check to see if it is updating correctly.
  // console.log(deletedFruit, ' this is the deletedFruit in the delete route');

      res.render('show.ejs', {

      doggos: databaseArray// This creates a "doggos" variable in the show page
    })
  }
  })
});


//---------------------- DELETE ROUTE -------------------------

app.delete('/:id', (req, res) => {
  Doggo.findByIdAndDelete(req.params.id, (err, deleteDog) => {
    res.redirect('/home')
    doggo: deleteDog
  })
})






//---------------------- PORT -------------------------

app.listen(port, () => {
  console.log('listening on port 3000');
})
