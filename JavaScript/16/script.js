"use strict"; // loose

/////////////////////////////////
/*
const objA = {
  fName: "Hello JS",
  sayName: function () {
    alert(this.fName);
  },
};

const objB = {
  fName: "Whats up",
  sayNames: function () {
    alert(this.fName);
  },
};

objA.sayName.apply(objB);
*/

///////////////////////////////// setTimeout/setInterval(callback, ms)

/*
let i = 0;

let x = setInterval(function () {
  console.log(++i);
  if (i == 20) {
    clearInterval(x);
  }
}, 500);
*/

/*
setTimeout(function first() {
  console.log(1);
}, 5000);
setTimeout(function second() {
  console.log(2);
}, 5000);
setTimeout(function third() {
  console.log(3);
}, 5000);
setTimeout(function fourth() {
  console.log(4);
}, 5000);
setTimeout(function fifth() {
  console.log(5);
}, 5000);
*/

/*
let counter = 0;

let newInterval = setInterval(function () {
  console.log(counter++);
  if (counter > 10) {
    clearInterval(newInterval);
  }
}, 1000);
*/

/////////////////////////////////
/*
console.log("Hello");

setTimeout(() => {
  console.log("World");
}, 2000);

console.log("and my friends!");
 */

////////// global, local, function and block scopes

/*
let a = 3;

function first() {
  let a = 4;

  let second = () => {
    let a = 5;
    console.log(a); // 1
  };
  second();

  if (a > 3) {
    let b = a + 10;
    console.log(b); // 2
  }
  // console.log(b - 10); // error
}

// console.log(b); // error

first();
console.log(a); // 3

*/

/*
let currentYear = 2022;
let birthYear = 1994;

function checkAge(age) {
  if (age > 18) {
    return "you have a driver's license";
  } else {
    return "you don't have a driver's license";
  }
}

function calcAge() {
  let age = currentYear - birthYear;
  return checkAge(age);
}

console.log(calcAge());
 */

/*
let currentYear = 2022;
let birthYear = 1994;
let age;

function checkAge(age) {
  if (age > 18) {
    return "you have a driver's license";
  } else {
    return "you don't have a driver's license";
  }
}

function calcAge() {
  age = currentYear - birthYear;
}

console.log(checkAge());
calcAge();
*/

/*
let currentYear = 2022;
let birthYear = 1994;

function calcAge() {
  let age = currentYear - birthYear;
  console.log(checkAge());

  function checkAge() {
    if (age > 18) {
      return "you have a driver's license";
    } else {
      return "you don't have a driver's license";
    }
  }
}

calcAge();
*/
