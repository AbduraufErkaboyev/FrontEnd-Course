///////////////////// array destructuring
/*
const array = [8, 2, 6, 12, 67, 54, 98];

// let first = array[0];
// let second = array[1];
// let third = array[2];

const [num1, num2, num3, ...num4] = array;

// console.log(first, second, third);
console.log(num1, num2, num3);
console.log(num4);

const [a, b, ...c] = array;
console.log(c);
*/
/*

const array = [1, 2, 3, 4, 5];

const [...a] = array; // rest []

console.log(a);
console.log(...array); // spread
*/

/*
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

// const newArray = array1.concat(array2);
// console.log(newArray);

const newArray = [...array1, ...array2];
console.log(newArray);
 */

///////////

/*
function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

const [...sum] = sumAndMultiply(4, 6);
console.log(sum);
 */

/////////////////// object destructuring (override)
/*
const person1 = {
  firstName: "Sam",
  age: 25,
  phoneNumber: "+1-666-604-2899",
  friends: ["Bill", "Steven", "Jack"],
};

const person2 = {
  firstName: "Lucy",
  phoneNumber: "+1-915-604-2899",
  favoriteColor: "blue",
  friends: "Natasha",
};

const personNew = { ...person2, ...person1 };

console.log(personNew);

const { favoriteColor } = person2;
console.log(favoriteColor);

 */
///////// in functions
// const user = {
//   name: "John",
//   age: 32,
//   phoneNumber: "+1-915-604-2899",
//   friends: ["Bill", "Steven", "Jack"],
// };

// function printUser(smn) {
//   console.log(`${smn.name} is ${smn.age}`);
// }

// printUser(user);

/*
function printUser({ name, age }) {
  console.log(`${name} is ${age}`);
}

printUser(user);

 */

/*
function printFriends(...f) { // [["Bill", "Steven", "Jack"]]
  console.log(f);
}

printFriends(user.friends);
*/

/////////////////// rest & spread operator
//////////rest

// use rest to enclose some values into an array

/*
const [...array] = [22, 54, 48, 13, 25]; // rest

// console.log(array);

const nums = [1, 2, 3, 4, 5, 6];
const [a, b, ...c] = nums;

console.log(a, b, c);
 */
// rest parameters have to be at the last argument

//////////spread
// use spread to expand an array's items into individual arguments
/*
const array = [13, 42, 55, 19, 26];
const newArray = [...array]; // spread

console.log(newArray);
*/

// unlike rest parameters we can use the spread operator as the first argument:
/*
const array = [13, 42, 55, 19, 26];
const newArray = [...array, "hey"];
console.log(newArray);
 */
////////////////
/*
function add(...args) { // rest
  
  let result = 0;
  
  for (let arg of args) result += arg;
  
   console.log(result);
   
}

add(1) // returns 1
add(1,2) // returns 3
add(1, 2, 3, 4, 5) // returns 15
*/

/*
function add(a, b, c) {
  return a + b + c ;
}

const args = [1, 2, 3];

add(...args); // spread
*/

/*
function print(...allNums) {
  console.log(allNums);  
}

print(1,2,3,4,5,6,7,8,9);

*/

////////////////////////// short circuiting
// ||

// || first truthy value, last falsy value
/*
console.log(5 || "hey");
console.log("" || "hey");
console.log(0 || null);
console.log(5 || undefined);
console.log(null || 0 || undefined || "");
*/

// && first falsy, last truthy

// console.log(5 && "hey");
// console.log("" && "hey");
// console.log(0 && null);
// console.log(5 && undefined);
// console.log(null && 0 && undefined && 15 && "hey" && "");

////// with functions
/*
const person = {
  firstName: "Michael",
  age: 45,
  friends: ["Bill", "Steven", "Lucy"],
  phoneNumber: "",
};

function addPhoneNumber(obj) {
  obj.phoneNumber = "+1-915-604-2899";
}


person.phoneNumber || addPhoneNumber(person); // function is not called with &&

console.log(person);
 */

/////////////////////// nullish coalescing operator
// first non-nullish value
// (null, undefined)

/*

console.log(5 ?? "hey"); 
console.log("" ?? "hey"); 
console.log(0 ?? null); 
console.log(null ?? undefined); 
console.log(null ?? 0 ?? undefined ?? 15 ?? "hey" ?? ""); 
*/
