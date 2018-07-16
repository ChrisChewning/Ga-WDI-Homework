const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/doggo')


mongoose.connection.on('connected', () => {
  console.log('Mongoose is on');
})

mongoose.connection.on('error', (err) => {
  console.log(err, ' Mongoose failed to connect');
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose is disconnected');
})
