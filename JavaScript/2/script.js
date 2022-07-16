/////////////////// Math operators ()  **  *  /  %  +  -  < > <= >= == ===
/*
let a = 3;
let b = 6;
let c = 2;
let result = (a + b) / c;

let x = ((2.5 * 8) / c) * b - a;

console.log(x % 2 == 1);
 */

/*
const mass = 54;
const height = 1.7;
const bmi = mass / height ** 2;

console.log(bmi);

// bmi = m/h**2
*/

/*
let x, y;
x = y = 15 - 5 - 2; // x = y = 8, x = 8
console.log(x, y);

const ageJohn = 44;
const ageSarah = 38;
const ageAverage = (ageJohn + ageSarah) / 2;
console.log(ageAverage);
*/

//////////////////// String and template literals | concatenation, numbers->strings

/*
const firstName = "John";
const lastName = "Smith";
const birthYear = 1988;
const currentYear = 2022;
const job = "teacher";
let age = currentYear - birthYear;

console.log(`I'm ${firstName} ${lastName}, a ${age} years old ${job}`);
 */

///////////////////// type conversion

/*
console.log(17 + 3); // 20
console.log("17" + 3); // 173
console.log("17" * 3); // 51
console.log("17" - 3); // 14
console.log("17" / 3); // 5.(6)
console.log(20 + ""); // 20 (string)
console.log("hello" + 3); // hello3
console.log("hello" / 3); // NaN
*/

// I'm John, a 34 years old teacher

// console.log("String \nwith \nmultiple \nlines");

//////////////////// Taking decisions if/else statements | boolean in if()

// if(?){...}
/*
if (5 == 5) {
  console.log("Hello");
  console.log("JavaScript");
}
*/

///
/*
let isHappy = true; // false

if (5 == 6) {
  isHappy = false;
} 

if (isHappy) {
  console.log("Hello World");
}
*/

///
/*
if (6 < 5) {
  console.log("Hello World!");
} else {
  console.log("Hello JavaScript");
}
*/

///

/*
let x = 20;
let y = 25;

if (x > y) {
  console.log(`${x} soni ${y} dan katta`);
} else {
  console.log(`${x} soni ${y} dan kichik`);
}
*/

///

/*
let a = 5;

if (a < 5) {
  console.log(`${a} soni 5 dan kichik`);
} else if (a > 5) {
  console.log(`${a} soni 5 dan katta`);
} else {
  console.log("sonlar teng");
}
*/

///

/*
const x = 111;

if (x % 2 == 0) {
  console.log(`${x} is even`);
} else {
  console.log(`${x} is odd`);
}
 */

///

/*
let x = "hello";

if (x % 2 == 0) {
  console.log(x ** 2);
} else if (x % 2 == 1) {
  console.log(x ** 3);
} else {
  console.log("Invalid number");
}
 */

///

/* 
let a = 10;

if (a < 10) {
  console.log(a + 1);
} else if (a > 10) {
  console.log(a + 2);
} else {
  console.log(a + a);
}
*/
///
/*
const firstName = prompt("Enter your name:"); 
const birthYear = Number(prompt("Enter your birth year:")); 

const currentYear = 2022;
const age = currentYear - birthYear; 
const isOldEnough = age > 18;
const yearsLeft = 18 - age;

if (isOldEnough) {
  console.log(`${firstName} can drive`);
} else if (age == 18) {
  console.log(`${firstName} just got the driver's license`);
} else {
  console.log(`${firstName} is too young, wait another ${yearsLeft} years`);
}
*/

///

/*
const birthYear = 1998;
if (birthYear <= 2000) {
  let century = 20; // are not accessible outside the block, so cant be executed
} else {
  let century = 21; // are not accessible outside the block, so cant be executed
}
console.log(century);




//////////////////// Type conversion and coersion

/*
console.log("I'm " + 23 + " years old");
console.log("I'm", 23, "years old");

const num1 = prompt("enter any number");
const num2 = 18;
console.log(num1 + num2);
*/

//////////////////// Truthy and Falsy values
//0 "" undefined null NaN

// if (true) {
//   console.log("hello");
// }

/*
console.log(Boolean("23"));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("hi"));
console.log(Boolean({}));
console.log(Boolean(""));
 */

//////////////////// Equality operators
/*
let num1 = 12 == "12";
let num2 = 12 === "12";
let favorite = "23";

if (favorite != 23) console.log("it's not a cool number!");

if (favorite !== 23) console.log("it's not a cool number!");
*/

/////////////// Logical operators && || !

/*
let x = 16;

if (x > 5 || x < 10) {
  console.log("hey");
}

const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("You are able to drive!");
} else {
  console.log("Someone else should drive.");
}
 */

//////////////////// The switch Statement
/* 
const day = prompt("Enter the day:");
switch (day) {
  case "monday": //day === 'monday'
    console.log("Plan course structure");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend!");
    break;
  default:
    console.log("Not a valid day!");
}
*/

//////////////////// Statements and expressions
/*
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

const age = 25;
console.log(`I'm ${age} years old`);
*/

//////////////////// The Conditional (Ternary) Operator

// if(true){
//   console.log("hi");
// }else{
//   console.log("bye");
// }

// ///

// console.log( 5>6 ? "hi" : "bye");
// 5>6? console.log("hi") : console.log("bye");

/*

///

const age = 13;

age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");
*/

//////
/*
// Operator always produces a value. In other words an operator is an expression. So if we have a value we can then assign that value to a variable:
*/

// const age = 15;

//  let drink2;

//  if (age >= 18) {
//    drink2 = "wine";
//   } else {
//     drink2 = "water";
//   }
//   console.log(drink2);

// const drink = age >= 18 ? "wine" : "water";

// console.log(drink);
/*
  
  // Since the ternary operator is an expression we can now use it in a template literal:
  console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
  
  // Ternary operator is perfect when we need to take a quick decisions
  */

/*
const m = 53;
const h = 1.7;

let bmi = m/h**2;
console.log(bmi);
*/

// let x = 13;

// if (x<5) {
//   console.log(`${x} soni 5 dan kichik`);
// } else if(x>5 && x<10){
//   console.log(`${x} soni 5 dan katta 10 dan kichik`);
// } else if(x>10 && x<15){
//   console.log(`${x} soni 10 dan katta 15 dan kichik`);
// } else{
//   console.log(`${x} soni 15 dan katta`);
// }

// ///

// console.log(x<5 ? `${x} soni 5 dan kichik`: x>5 && x<10 ? `${x} soni 5 dan katta 10 dan kichik` : x>10 && x<15 ? `${x} soni 10 dan katta 15 dan kichik` : `${x} soni 15 dan katta`);

//////////////////////

// const math = 10;
// const bio = 45;
// const chem = 26;
// const physics = 71;
// const german = 30;

// const average = (math+bio+chem+physics+german)/5;

// console.log(average);

//  if(average>=80){
//    console.log("your mark is 5 :D");
//  } else if(average>= 60){
//    console.log("your mark is 4 :)");
//  } else if(average >= 40){
//    console.log("your mark is 3 :/");
//  }else{
//    console.log("your mark is 2 :(");
//  }

//  console.log(average>=80 ? "your mark is 5" : average>=60 ? "your mark is 4" : average>= 40? "your mark is 3" : "your mark is 2");
