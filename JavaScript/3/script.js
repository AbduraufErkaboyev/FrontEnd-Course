"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("You can drive!");
*/

//////////////////// Functions

// let x = 15;
// let y = 17;

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(5,6));

// let result = sum(5,6);
// console.log(result);

// console.log(sum(x, y));

///

// function subtract(a, b) {
//   return a > b ? a - b : b - a;
// }

// console.log(subtract(x, y));

/*
function sum(a, b) {
  return a + b;
}

console.log(sum(100, 72));
console.log(sum(200, 300));
console.log(sum(54, 28));
console.log(sum(x, y));
 */

// const a = 12;
// const b = 24;

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }

// sum(100, 150);

///

// let i = 5;

// i = i + 1;
// i += 1;
// i++;

// i *= 2;
// i /= 2;
// i -= 2;

// console.log(i);

///

// function increase() {
//   i = i + 1;
// }

// increase();
// increase();
// increase();
// increase();

// console.log(i);

/*
const result = sum(a,b);
console.log(result);


function sum(num1, num2) {
  return num1 + num2;
}
*/

// function math(num1, num2) {
//   return `sum: ${num1 + num2} \nsubtract: ${
//     num1 > num2 ? num1 - num2 : num2 - num1
//   } \nmultiply: ${num1 * num2} \ndivide: ${
//     num1 > num2 ? num1 / num2 : num2 / num1
//   }`;
// }

// console.log(math(36, 48));

//sum(+), subtract(-), multiplicate(*), divide(/)

///////////////// function declaration

// let x = 13;
// let y = 6;

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(x, y));

///////////////// function expression

// let x = 13;
// let y = 6;

// let sum = function (a, b) {
//   return a + b;
// };

// console.log(sum(x, y));

/*
let a = 1;
let b = 2;

const sumBox = function (num1, num2) {
  return num1 + num2;
};

const result2 = sumBox(a, b);

console.log(result2);
*/

/*
function logger() {

  const str = "This is a regular random text";
  console.log(str);

}

logger();
logger();
logger();
*/

/*
function logger() {
  const str = "This is a regular random text";
  return str;
}

let loggerV = logger();

console.log(loggerV);

*/

//////////////////// Function Declarations & Expressions

/*
const currentYear = 2022;
const birthYear = 1996;

function calcMyAge(y1, y2) {
  const age = y1 - y2;
  return age; // returns the value as the result of the funtion
}

console.log(calcMyAge(currentYear, birthYear));

 */

/*
const calcAge = function (y1, y2) {
  const age = y1 - y2;
  return age;
};

console.log(calcAge(currentYear, birthYear));

 */
//////////////////// Arrow functions

/*
let a = 2;

const increaseby10a = function () {
  return (a += 10);
}

console.log(increaseby10a(), increaseby10a(), increaseby10a());

*/

/*
let c = 5;

const increaseby10b = () => (c += 10);

console.log(increaseby10b(), increaseby10b());
console.log(c);
 */

/*
const sum = (num1, num2) => num1 + num2;
console.log(sum(1, 2));
*/

/*
const a = 12;
const b = 35;

function math(num1, num2) {
  let sum = num1 + num2;
  let sub = num1 - num2;
  let mult = num1 * num2;
  let div = num1 / num2;

  console.log(mult);

  return `Sum: ${sum} \nSubtract: ${sub} \nMultiply ${mult} \nDivide: ${div}`;
}

console.log(math(a, b));

// console.log(mult); // error

 */

/*
const isSmart = true;

function passTest(iq) {
  if (iq == true) {
    return "pass";
  } else {
    return "fail";
  }
}

function getLicense(brain) {
  if (passTest(brain) == "pass") {
    return "Congrats, now you can drive! :)";
  } else {
    return "Sorry, you couldn't get license... :(";
  }
}

console.log(getLicense(isSmart));
 */

let x = 4;

function evenOdd(num) {
  if (num % 2 == 0) {
    return "even"; // juft
  } else {
    return "odd"; // toq
  }
}

function power(num) {
  if (evenOdd(num) == "even") {
    return num ** 2;
  } else {
    return num ** 3;
  }
}

console.log(power(x));
