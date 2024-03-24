var car = 'subaru';
var age = 20;
var numbers = [3, 6, 9, 12, 15];
// ***string test***
// True test
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
// False test
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // False
// ****lower case function test****
// True test
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru'); // True
// False test
console.log("Is car.toLowerCase() == 'toyota'? I predict False.");
console.log(car.toLowerCase() == 'toyota'); // False
//*** numerical test ****
// Equality and inequality
console.log("Is age == 20? I predict True.");
console.log(age == 20); // True
console.log("Is age != 25? I predict True.");
console.log(age != 25); // True
// Greater than and less than
console.log("Is age > 18? I predict True.");
console.log(age > 18); // True
console.log("Is age < 18? I predict False.");
console.log(age < 18); // False
// Greater than or equal to and less than or equal to
console.log("Is age >= 18? I predict True.");
console.log(age >= 18); // True
console.log("Is age <= 15? I predict false.");
console.log(age <= 15); //false
// *** AND OR OPERATOR Test***
// True test with "and" operator
console.log("Is 10 < age < 25? I predict True.");
console.log(age < 25 && age > 10); // True
// False test with "or" operator
console.log("Is age > 20 or age < 15? I predict False.");
console.log(age > 20 || age < 15); // False
// test wheter an item is in array
// True test
console.log("Is '3' in numbers? I predict True.");
console.log(3 in numbers); // True
// False test
console.log("Is '7' in numbers? I predict False.");
console.log(7 in numbers); // False
