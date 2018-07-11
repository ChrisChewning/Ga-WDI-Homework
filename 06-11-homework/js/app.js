console.log("js connected");
//SECTION 1

/* 1. the differenece bw concatetion and interpolation is concateation
combines two strings without replacing values while interpolation
can be used to input values into a variable
"My name is" + " Chris" + " Chewning."
"My name is " + firstName + " " + lastName;

Concatenation is faster
*/
/*DRY = Don't Repeat Yourself. It's about being clear, concise,
and having no unncessary code. Bash necessitated this. We practiced
it by getting to another place in our tree by only using one line.
*/

//SECTION 2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a != b);
console.log(c != d);
console.log('Name' == 'Name');
console.log(a+b=c);
console.log(a*a=d)''
console.log(e=='Kevin');
console.log(48='48');

//SECTION 3

// the first loop is an infinite loop because
// it defaults to true, meaning there is nothing that
// makes it false.
//
// the second loop is not an infinite loop b.c of scope.
// The global scope says the const is true. However,
// inside the local scope, which is where the loop is, it
// will return it false.
//
// the third loop will output 20 A\'s in a row. You start at 0 and add up to 19.


let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}
console.log(letters);


//SECTION 4
// for loops: has an endpoint it will reach and be done.
// while loops: loops until a certain criteria/criterion is met.
//
// The first part of the control statement is: the starting point.
// The second part of the control statement is: the endpoint.
// The third part of the control statement is: the increment/decrement.


for (let i = 999; i < 1000; i--) {
console.log(i);
}


for (let i = 1; i < 11; i++) {
console.log("The value of i is: " + i + "of 10");
}

//SECTION 5
