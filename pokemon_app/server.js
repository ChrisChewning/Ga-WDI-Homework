//link: https://git.generalassemb.ly/WebDev-Connected-Classroom/Pokemon-Express/blob/master/README.md

//
const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon');


const port = 3000;
app.listen(port, () => {
  console.log('listening on port', port);
})

//shows 'Welcome to the Pokemon App at http://localhost:3000/pokemon'
// app.get('/pokemon', (req, res) => {
//   res.send('Welcome to the Pokemon App!')
// })

//shows the object as json in the browser at http://localhost:3000/pokemon
// app.get('/pokemon', (req, res) => {
//   res.send(Pokemon)
// })

// shows the ejs file in the browser at http://localhost:3000/pokemon
// app.get('/pokemon', (req, res) => {
//   res.render('index.ejs')
// // res.send(Fruits)?
// });


// shows the ejs file in the browser, dynamically, by name (through a for loop in the ejs file) in a list. At http://localhost:3000/pokemon
app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
  pokemon: Pokemon
});
})



//shows the ejs file in the browser through id. This way you can put pokemon/0. This is why you need req/params.id.
app.get('/pokemon/:id', (req, res) => { //:id is the same as :index. it's whatever is after the / in your browser.
  res.render('show.ejs', {
  pokemon: Pokemon[req.params.id] //has to match up with /:id. could be /:index and req.params.index.
})
});



// Link your index.ejs to your show.ejs
// inside your index.ejs,
// for each pokemon, add an <a> tag that will have an href that goes to the route /pokemon/x, where x is the array position of the pokemon in the data array. This should be set dynamically with ejs
// when you click the link you should go to your show route and the index number corresponding to the pokemon's array position should be displayed
// 🔴 The commit message should read:
// "Commit 8 - added dynamic anchor tags to index.ejs "
