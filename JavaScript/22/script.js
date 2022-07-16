////////////////// Default parameters
/*
let str = "a";

function logger(p) {
  p = "b";
  console.log(p);
}

logger(str);

console.log(str);
*/

// let x;
// console.log(x);

/*
const str1 = "Hello";
const str2 = "World!";

function logger(s1, s2) {
  console.log(s1, s2);
}

logger(str1); // returns "undefined" (as a default parameter) if the second argument is not given
 */

/*
function logger(s1, s2 = "JS!") {
  // s2 = s2 || "JS!";
  console.log(s1, s2);
}

logger(str1, str2);
 */

///

/*
const str1 = "Hello";
const str2 = "World";
const str3 = "and my friends!";

function logger(s1 = "Goodbye", s2 = "JS", s3 = "and others!") {
  console.log(s1, s2, s3);
}

logger(str1, undefined, str3);
*/

////////////////////////// Higher-Order Functions
// any function that takes in or returns a function is called a Higher-Order Function

// takes functions as parameters
// returns a function as the result
// or both

/*
const numbers = [28, 77, 45, 99, 27];

numbers.forEach((number) => {
  console.log(number);
});
*/

////////
/*
function sum(n) {
  return (m) => m + n;
}

let sumNew = sum(10);
console.log(sumNew(11));
 */
////////
/*
const isEven = (n) => {
  return n % 2 == 0;
};

let printMsg = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`The number ${num} is an even number: ${isNumEven}`);
};

printMsg(isEven, 4);
 */

////////
// a callback function is a function passed into another function as an argument

/*
function greet(name) {
  console.log("Hello, " + name);
}

function inputName(callback) {
  let name = prompt("Enter your name");
  callback(name);
}

inputName(greet);
 */

///////////////////// Functions returning another functions
/*
function first(p1) {
  return function second(p2) {
    return function third(p3) {
      console.log(p1, p2, p3);
    };
  };
}

const firstF = first("Hello");
const secondF = firstF("JS");
secondF("and my friends!"); // c.l
 */

// first("Hello")("JS")("and my friends!");

const allFs = (p1) => (p2) => (p3) => console.log(p1, p2, p3);

// allFs("Hello")("JS")("and my friends!");

/*
 */
