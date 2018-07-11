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
  pokemon: Pokemon //this is the variable you are rendering inside the file.
});
})



//shows the ejs file in the browser through id. This way you can put pokemon/0. This is why you need req/params.id.
app.get('/pokemon/:id', (req, res) => { //:id is the same as :index. it's whatever is after the / in your browser.
  res.render('show.ejs', {
  pokemon: Pokemon[req.params.id] //has to match up with /:id. could be /:index and req.params.index.
})
});

// Render your individual pokemon in the show view
// copy/paste your code from your index.ejs into your show.ejs (surely, there must be a better way; are you wondering if there is something in the hungry for more section about this?)
// change all your html code inside your show.ejs file's <body> so that
// your h1 tag says "Gotta Catch 'Em All"
// add an h2 tag that will display the name of the pokemon
// add an image tag that will display an image of the pokemon
// add an anchor tag with the text of back, that will take you back to your index.ejs view
// update the route in the server.js to render the show view with the pokemon data
// 🔴 The commit message should read:
// "Commit 9 - created show views of each pokemon "
