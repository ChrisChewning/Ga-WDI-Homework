const express = require('express');
const app = express();
const port = 3000;

require('./db/db');


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false;
}))

const methodOverride = require('method-override');
app.use(methodOverride('method'));






app.listen(port, () => {
  console.log('listening on port 3000');
})
