"use strict";

///////////////// window object (global object)

// var a = 20; // values with let/const are not stored in window object; use var instead

// console.log(window);
// console.log(this);

// window.alert("hey");
// this.alert("hey");

// alert("hey");

// console.log(window.outerHeight);
// console.log(this.outerWidth);
// console.log(outerWidth);

// console.log(this.location);
// console.log(this.location.href);

// window.location.href = "https://docs.flutter.dev/";

// console.log(window.navigator.cookieEnabled);

// Window is the object of browser!! it is not the object of javascript

///////////////// this keyword
// console.log(this);
// console.log(window);

/*
let user = {
  name: "Bob",
  sayHi: function () {
    console.log(this.name);
  },
};

user.sayHi()
*/

/*
var a = 28;
var b = 20;
let c = 10;

function showThis1() {
  const name = "John";
  console.log(this); // in non-strict mode points to the global object
}

const showThis2 = function () {
  console.log(this); // in non-strict mode points to the global object //so, always use strict mode!
};

const showThis3 = () => {
  console.log(this); // == the "this" keyword of the parent function ("==lexical this")
  //  console.log(this.a);
};

showThis1();
showThis2();
showThis3();
 */
// the "this" keyword will never point to the function in which we're using it, and it will never point to the variable environment of the function

//////////////////
/*
var name = "Steven";

const user = {
  name: "Bob",
  show: function () {
    console.log(this.name);
  },
};

const user1 = {
  name: "Bill",
  show: () => {
    console.log(this.name); // points to the outer lexical scope // try to create name with var in global scope
  },
};

user.show();
user1.show();
 */

////////////////////////
/////
/*
const objA = {
  fName: "Hello JS",
  sayName: function () {
    alert(this.fName);
  },
};

const objB = {
  fName: "Whats up",
};

// objA.sayName();
// objA.sayName.apply(objB);

objB.sayName = objA.sayName;
objB.sayName();

const fSayName = objA.sayName;
fSayName();
// fSayName(); // cannot read props of UNDEFINED
/////
*/

/////////////// arguments
/*
function addnums1(a, b, c, d) {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
  
  console.log(arguments);
}

addnums1(2, 4, 6, 8);
*/

/*
const addnums2 = function (a, b, c, d) {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
};

addnums2(12, 14, 16, 18);

const addnums3 = (a, b, c, d) => {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
};

addnums3(22, 24, 26, 28);
*/

////////////////// primitives & references (objects)
// primitives

/*
let a = 5;
let b = a;

console.log(a, b);

b = 10;
console.log(a, b);

a = 15;
console.log(a, b);
 */

// references

/*
let array1 = [1, 2, 3, 4];
let array2 = array1;
console.log(array1, array2);

array2[0] = 8;
console.log(array1, array2);
*/

/*
const user1 = {
  name: "Bob",
  age: 24,
};

const user2 = user1;

console.log(user1);
console.log(user2);

user2.name = "Jack";

console.log(user1);
console.log(user2);
 */

///////////////// shallow copying

/*
const user2 = Object.assign({}, user1);
user2.name = "Jack";

console.log(user1);
console.log(user2);
 */

/*
let numbers = [12, 24, 31, 28];
let numbersCopy = [...numbers];
numbersCopy[0] = 50;

console.log(numbers);
console.log(numbersCopy);
 */

///////////////////
/*
let x = 25;
let y = 25;

console.log(x === y);
*/

/*
const leo = {
  type: "Dog",
  name: "Leo",
};

const leito = {
  type: "Dog",
  name: "Leo",
};

console.log(leo === leito);

//
const leo2 = leo;
console.log(leo === leo2); // true
 */
