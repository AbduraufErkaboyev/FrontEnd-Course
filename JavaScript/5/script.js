//////////////////// Introduction to Arrays

/*
const cars = ["Audi", "VolksWagen", "Toyota", "Honda", "BMW"];

console.log(cars.length);
console.log(cars[0]);
console.log(cars[cars.length - 1]);
console.log(cars[8 - 7]);
console.log(cars[5]); // undefined
 */

/*
const numbers = new Array(48, 46, 32, 59, 11);

const numbers1 = [48, 46, 32, 59, 11];

console.log(numbers);
console.log(numbers1);
 */
/*
const cars = ["Audi", "VolksWagen", "Toyota", "Honda", "BMW"];

console.log(cars);

cars[2] = "Mercedess";

console.log(cars); // we're changing the value inside the array

cars[4] = "Honda";
console.log(cars); // we're changing the value inside the array

// cars = [12, 23, 34]; // Error: we're changing the value of the variable


*/

///
/*
const firstName = "Will";

const array = [firstName, "Smith", 44, cars];

console.log(array);

console.log(array[3][2]);

console.log([12, 28, [1, 2, 3], 56, 47]);
 */
///

/*
const cars = ["Audi", "VolksWagen", "Toyota", "Honda", "BMW"];

// console.log(cars);

cars.push("Tesla");
console.log(cars);

cars.unshift("Nissan");
console.log(cars);

cars.pop();
console.log(cars);

cars.shift();
console.log(cars);


*/

/*
const cars = ["Audi", "VolksWagen", "Toyota", "Honda", "BMW"];

console.log(cars.includes("Audi")); // true | false

console.log(cars.indexOf("Toyota")); // number


const popped = cars.pop();
// cars.shift();

// cars.push("Tesla");
// cars.unshift("Hyundai");

console.log(cars);
console.log(popped);
*/

/// start: array.unshift('anything') - array.shift() | end: array.push('anything') - array.pop()
// array.indexOf('anything') | array.includes('anything') // tests with strict equality

/*

function reversed(array) {
  if (array.length < 4) return "array should contain at least 4 elements!";

  const s1 = array.shift(); 
  const s2 = array.shift(); 
  const e1 = array.pop(); 
  const e2 = array.pop(); 

  array.unshift(e2);
  array.unshift(e1);
  array.push(s2);
  array.push(s1);

  return array;
}

console.log(reversed(array));
console.log(reversed(strs));
*/

/////////////////
/*
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages);
 */
///////// Looping backwards; loops in loops; while loops

///////////// break & continue
/*
for (let i = 0; i < 50; i++) {
  if (i == 21) {
    break; // to exit out of a loop
  }
  console.log(i);
}
 */

/*
for (let i = 0; i < 50; i++) {
  if (i > 20 && i < 45) {
    continue; // to skip over an iteration of a loop
  }
  console.log(i);
}
 */

// let a = 1;
// a = a + 1; // a++;
// console.log(a);

//////////// while(?){...}

/*
let i = 0;

while (i < 50) {
  i++;
  if (i % 2 == 0) {
    console.log(i);
  }
}

*/
/*
let a = 50;

while (a > 0) {
  if (a % 2 == 0) console.log(a);
  a--;
}
*/

/*
let a = 0;
while (a < 50) {
  a += 2;
  console.log(a);
}
*/

////////// do{..}while(?);
/*
let b = 0;

do {
  b++;
  console.log(b);
} while (b < 10);

///
while (5 == 6) {
  console.log("hello");
}

do {
  console.log("hello");
} while (5 == 6);
*/

///////// for(){}
/*
const num1 = Number(prompt("Enter your first number"));
const num2 = Number(prompt("Enter your second number"));

for (let i = num1; i <= num2; i++) {
  console.log(i);
}
*/

/*
for (let i = 0; i <= 50; i++) {
  if (i !== 21) {
    continue; // to skip over an iteration of a loop
  }
  console.log(i);
}
*/

///////////////////////////
/*
const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 0; i < array.length; i++) {
  console.log(`${array[i]} multiplied by 2 is ${array[i] * 2}`);
}
*/

////////
// "hello" -> ["h", "e", "l", "l", "o"]
/*
let anyString = "hello";

function stringToArray(str) {
  const empty = [];
  for (let i = 0; i < str.length; i++) {
    empty.push(str[i]);
  }
  return empty;
}

console.log(stringToArray(anyString));
*/

//////

// const array = ["a", "b", "c", "d", "e"]; // 5

// for (let i = array.length; i > 0; i--) {
//   console.log(`${i}: ${array[i - 1]}`);
// }

///

////////////////////////////////////////////

/*
let array1 = [1, 2, 3, 4, 5, 6];
let array2 = ["a", "b", "c", "d", "e", "f"];


function change(a1, a2) {
  num1 = a1.shift(); // 1
  num2 = a1.shift(); // 2
  num4 = a1.pop(); // 6
  num3 = a1.pop(); // 5

  ///

  str1 = a2.shift(); // a
  str2 = a2.shift(); // b
  str4 = a2.pop(); // f
  str3 = a2.pop(); // e

  ///

  a1.unshift(str2);
  a1.unshift(str1);
  a1.push(str3);
  a1.push(str4);

  ///
  a2.unshift(num2);
  a2.unshift(num1);
  a2.push(num3);
  a2.push(num4);

  console.log(a1);
  console.log(a2);
}

change(array1, array2);
*/

// const array = [34, 75, 23, 43, 11, 53];
// const empty = [];

// for (let i = array.length - 1; i >= 0; i--) {
//   empty.push(array[i]);
// }

// console.log(empty);
// console.log(array);

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [];

// let l = array1.length;

// for (let i = 0; i < l; i++) {
//   array2.unshift(array1.pop());
// }

// console.log(array1);
// console.log(array2);

let nums = [
  9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18,
  71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84,
  94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46,
  19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58,
  55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99,
  16,
];

for (let i = 0; i < nums.length; i++) {
  if (!nums.includes(i)) {
    console.log(i);
  }
}


