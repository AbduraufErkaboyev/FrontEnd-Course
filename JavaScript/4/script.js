//////////////////// Functions calling other functions
/*
const currentYear = 2022;
const birthYear = 2008;

function calcAge(y1, y2) {
  return y1 - y2; // 14
}

function license(a, b) {
  if (calcAge(a, b) > 18) {
    return "you can drive!";
  } else {
    return "oops, you can't drive!";
  }
}

console.log(license(currentYear, birthYear));
*/

/*
const a = 1;
const b = 2;
const c = 3;

function isEvenOdd(num) {
  
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

function power(p) {
  
  if (isEvenOdd(p) == "even") {
    return p ** 2;
  } else {
    return p ** 3;
  }
}

function sum(num1, num2, num3) {
  return power(num1) + power(num2) + power(num3);
}

console.log(sum(a, b, c));
*/

// let currentYear = 2022;
// let birthYear = 1999;
// let score = 85;

// function calcAge(y1, y2) {
//   return y1 - y2;
// }

// function passTest(score) {
//   if (score > 80) {
//     return "pass";
//   } else {
//     return "fail";
//   }
// }

// function getLicense(cy, by, s) {
//   if (calcAge(cy, by) > 18 && passTest(s) == "pass") {
//     return true;
//   } else {
//     return false;
//   }
// }

// function drive(cy, by, s) {
//   if (getLicense(cy, by, s)) {
//     return "you can drive";
//   } else {
//     return "sorry, you cannot drive";
//   }
// }

// console.log(drive(currentYear, birthYear, score));

/////////////////// callback fs

// function sum(a, b) {
//   return a + b;
// }

// function logger(n) {
//   console.log(n(5, 6));
// }

// logger(sum);

////////////////////////////////////////////////////////////////

let array = [4, 6, 28, 35, 11, 67];
// let array = [104, 106, 128, 135, 111, 167];


