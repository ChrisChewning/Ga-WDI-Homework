// your task is to make a module (Car.js) that defines a car – with both properties and methods (functions) – and export it as a module to an index.js file.
// In the Car.js file:
//
// Properties should include:
//
// color, convertible (boolean), speed (0, at first)
// Functions specs:
// include accelerate and decelerate
// these should take one argument, the speed, and add or substract it the from the current speed
// return a string with the old speed and new speed
// call these functions at the bottom of the file


// In the index.js file, be sure to require the module and console log a message about your car object, including the current speed of the car.


//FRIDAY'S EXAMPLE
const number = 7;
module.exports.name = 'kenahia';
module.exports.someArr = [1, 2, 3];
module.exports.getNumber = () => {
  console.log('Get number called the number is:', number);
  return number;
}
console.log('end of my module.js file');


//MY ATTEMPT
const car = 'corolla';
module.exports.name = 'Toyota Corolla';
module.exports.convertible = false;
module.exports.color = 'grey';
module.exports.speed = 0;


module.exports.getSpeeed = () => {
    console.log('Get speed here:', speed);
}
module.exports.speedAccelerate = () => {
  console.log('Get accelerate here:', speedAccelerate);
  speed++
}
module.exports.speedDecelerate = () => {
  console.log('Get decelerate here:', speedDecelerate);
  speed--
}


module.exports.speedChange = () => {
 return 'Get old speed:', speed 'and new speed:', speedAccelerate;
}

console.log('end of my 07-08-Car.js file');



// //THIS WOULD BE THE OBJECT:

// const Car = {
//   color: gray,
//   convertible: false,
//   speed: 0,
//   accelerate(){
//     speed++
//     console.log( , 'this is the accelarated speed');
//   }
//   decelerate(){
//     speed--
//     console.log( , 'this is the decelerated speed');
//   }
//   return 'the old speed was' + speed + ' and the new speed is ' accelerate + '.'
//
// }
  // accelerate();
  // decelerate();
