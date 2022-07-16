"use strict";

/////////////// hoisting
// it's a default behavior of moving declarations to the top

// variable declaration & initialization

/*
var a; //The initial value of variables declared using var is "undefined"
a = 20;

console.log(b); // error
let b;
b = 30;
*/

/*
console.log(x);
var x = 5;

console.log(y);
let y = 10;
*/

/////////////////
// Declarations are processed before any code is executed

/*
num = 5;
var num;

// ...is implicitly understood as:
var num;
num = 5;
 */

// initializations are not hoisted. they cant happen until the associated line of code is executed, even if the variable was originally initialized then declared, or declared and initialized in the same line

////////////////var hoisting inside the functions

/*
function numProcesser() {
  console.log(anyNum);

  var anyNum = 111;
  console.log(anyNum);
}

numProcesser();
// ...is implicitly understood as:

function numProcesser() {
  var anyNum;
  console.log(anyNum);
  anyNum = 111;
  console.log(anyNum);
}
numProcesser();

 */

//////////////////////////////////////
/*
a = "Hello"; // Initialize a // declared but not hoisted
b = "World"; // Initialize b // declared but not hoisted

console.log(a, b); // dont work in strict mode
*/

/////////////////////// block scope
/*

var x = 1;

{
  var x = 2; // dont work with let/const
  console.log(x);
}
console.log(x);
 */

/*
{
  {
    {
      var x = 3;
    }
  }
}
console.log(x);

// {{{{x}}}}
 */

///////////////////////// TDZ (Temporal Dead Zone)

/*
console.log(c); // TDZ
// console.log(a); // TDZ, ReferenceError
let a = 3; // TDZ
let b = 4; // TDZ
var c = 5; // but works with var (undefined)
console.log(c);

 */

//let and const declarations are both block-scoped, which means they are only accessible within the { } surrounding them. var, on the other hand, doesn't have this restriction.

/*
let x = 1;
let isInteger = true;

if (isInteger) {
  let x = 2;
}

console.log(x);
*/

/*
var x = 1;

if (isInteger) {
  var x = 2;
}
var isInteger = true;

console.log(x);
*/
////////////////////// tdz in practice
/*
const a = 10;
const b = 5;

var areNegative = false; // does not work with let/const after the statement

if (!areNegative) {
  console.log(sum(a, b));
}

function sum(a, b) {
  return a + b;
}
*/
//////////////////////////////////
/*
function one() {
  var a = 2;
  console.log(a);
  two();
}

function two() {
  var a;
  console.log(a);
}

var a = 1;
console.log(a);
one();
*/

//////////////////////////////////

/*
function one() {
  var a = 2;
  console.log(a);
  two();
}

function two() {
  console.log(a);
}

var a = 1;
console.log(a);
one();
 */

//////////////////////////////////

/*
function one() {
  function two() {
    console.log(a);
  }

  two();
  var a = 2;
  console.log(a);
}

var a = 1;
console.log(a);
one();
 */
//////////////////////////////////////////////////////////////////
/*
var x = 0; // Declares x within file scope, then assigns it a value of 0.

console.log(typeof z); // "undefined", since z doesn't exist yet

function a() {
  var y = 2; // Declares y within scope of function a, then assigns it a value of 2.

  console.log(x, y);

  function b() {
    x = 3; // Assigns 3 to existing file scoped x.
    y = 4; // Assigns 4 to existing outer y.
    z = 5; // Creates a new global variable z, and assigns it a value of 5.
    // (Throws a ReferenceError in strict mode.)
  }

  b(); // Creates z as a global variable.
  console.log(x, y, z);
}

a(); // Also calls b.
console.log(x, z);
console.log(typeof y); // "undefined", as y is local to function a

 */

// undefined
// 0 2
// 3 4 5
// 3 5
// undefined
