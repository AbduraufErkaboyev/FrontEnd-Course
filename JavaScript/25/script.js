////////////////////// array methods

/////////////////////// .length (property)
/*
let city = ["California", "Berlin", "Paris", "London"];

let len = city.length;
console.log(len);
*/

/*
/// truncates the Array to 3 elements
let languages = ["JavaScript", "Python", "C++", "Java", "Dart"];
// console.log(languages);

languages.length = 3;
console.log(languages);

/// extends the Array to length 6
languages.length = 6;
console.log(languages);
 */

/////////////////////// .reverse()
// reverse() modifies the original array

/*
let languages = ["JavaScript", "Python", "C++", "Java", "Dart"];
languages.reverse();

console.log(languages);
 */

/////////////////////// .sort()
// all undefined elements are sorted to the end of the array
// Number is converted to string and sorted
// modifies the original array

/* 
let city = ["California", "Berlin", "Paris", "London"];
city.sort();
console.log(city);
 */

///

/*
let priceList = [1000, 50, 2, 7, 14];
priceList.sort();
console.log(priceList);
 */
///////////////////////////// custom sorting
/*
let names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];

function len_compare(a, b) {
  return a.length - b.length; // + || -
}

// sort according to string length
names.sort(len_compare);

console.log(names);

 */

/////////////////////
// function (a, b){
// // sorting logic
// // return a Number
// }

//The sort() method compares all values of the array by passing two values at a time to the compareFunction. The two parameters a and b represent these two values respectively.

// The compareFunction should return a Number. This returned value is used to sort the elements in the following way:

// If returned value < 0, a is sorted before b (a comes before b).
// If returned value > 0, b is sorted before a (b comes before a).
// If returned value == 0, a and b remain unchanged relative to each other.

///////////////////////////
// numeric sorting
/*
var priceList = [1000, 50, 2, 7, 14];

priceList.sort(function (a, b) {
  return a - b;
});

console.log("Ascending - " + priceList);

// sort() using arrow function expression
priceList.sort((a, b) => b - a);

console.log("Descending - " + priceList);

 */

/////////////////////// .fill(value, start, end)
// returns the modified array, filled with value from start to end
/*
let prices = [651, 41, 4, 3, 6];

prices.fill(7);
console.log(prices);

///
prices.fill(5, 1, 4);
console.log(prices);

///
prices.fill(15, -3);
console.log(prices);

// invalid indexed result in no change
prices.fill(15, 7, 8);
console.log(prices);

prices.fill(15, NaN, NaN);
console.log(prices);
*/

/////////////////////// .join()
// does not modify the original array
/*
let message = ["JavaScript", "is", "fun!"];

let joinedMessage = message.join("");
console.log(joinedMessage);
console.log(message);

 */

/*
let str = "David";

function changeStr(str) {
  let splitted = str.split("");
  splitted.reverse();

  const result = splitted.join("");
  return result;
}

console.log(changeStr(str));

// "sarah" -> "Sarah"
*/

/////////////////////// .toString()
// toString() does not change the original array

/*
let info = ["London", 28, "Manila"];
let str = info.toString();

console.log(info);
console.log(str);

 */

/////////////////////// .pop()
// modifies the original array
/*
let cities = ["Madrid", "New York", "Kathmandu", "Paris"];

let popped = cities.pop();
console.log(popped); // Paris
console.log(cities);
 */

/////////////////////// .shift()
// modifies the original array
/*
let languages = ["Dart", "Java", "Python", "JavaScript"];

let shifted = languages.shift();
console.log(shifted); // Dart
console.log(languages);
*/

//////////////////////// .push()
/*
let city = ["New York", "Madrid", "Paris"];

city.push("London");
console.log(city);
 */

//////////////////////// .unshift()
/*
let languages = ["Java", "Python", "C"];

languages.unshift("JavaScript");
console.log(languages);
*/

//////////////////////// .concat()
/*
let oddNumbers = [1, 3, 5, 7];
let evenNumbers = [2, 4, 6, 8];

let joinedArrays = oddNumbers.concat(evenNumbers);
console.log(joinedArrays);
 */

//////////////////////// .slice()
// does not change the original array
/*
let numbers = [1, 3, 5, 7, 9, 11, 13, 17];

let newArray = numbers.slice(3, 6);

console.log(numbers);
console.log(newArray);
*/

//////////////////////// .splice(start, deleteCount, item)
// returns an array containing the deleted elements

/*
let prime_numbers = [2, 3, 5, 7, 9, 11];

let removedElement = prime_numbers.splice(3, 2);

// replace 1 element from index 4 by 13
// let removedElement = prime_numbers.splice(4, 1, 13);

console.log(prime_numbers);
console.log(removedElement);
 */

//////////////////////// .indexOf()

/*
let priceList = [10, 8, 2, 31, 10, 1, 65];

let index2 = priceList.indexOf(10);
console.log(index2);
 */

//////////////////////// .lastIndexOf()
/*
let priceList = [10, 8, 2, 31, 10, 1, 65];

// lastIndexOf() returns the last occurance

let index2 = priceList.lastIndexOf(10);
console.log(index2);

*/

/////////////////////////// .includes(valueToFind, fromIndex)
/*
let languages = ["JavaScript", "Java", "C", "C++", "Python", "Dart"];

let check = languages.includes("Java");
console.log(check);

let check2 = languages.includes("Dart", 3);
// console.log(check2);
 */

//////////////////////////// Array.isArray()
/*
value1 = [1, 2, 3, 4];
console.log(Array.isArray(value1));

value2 = "JavaScript";
console.log(Array.isArray(value2));
 */

//////////////////////// Array.of()
// The difference between Array.of() and the Array constructor is the handling of the arguments. For example, Array.of(5) creates an array with a single element 5 whereas Array(5) creates an empty array with a length of 5

/*
Array.of(5); // [5]
Array.of(1, 2, 3); // [1, 2, 3]

Array(5); // array of 5 empty slots
Array(1, 2, 3); // [1, 2, 3]
 */

/*
let numbers = Array.of(3);
console.log(numbers);

let numbers1 = Array(3);
console.log(numbers1);

let chars = Array.of("A", "B", "C");
console.log(chars);
console.log(Array.from(new Set([1, 2, 2, 3, 3, 4])));

*/

///////////////////////// .filter(callback)
// the filter() method returns a new array with all elements that pass the test defined by the given function

// the filter() method takes in:
// callback - The test function to execute on each array element; returns true if element passes the test, else false.

/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function to check even numbers

function checkOdd(number) {
  if (number % 2 == 1) return true;
  else return false;
}

console.log(checkOdd(6));

let filtered = numbers.filter(checkOdd); // [1, 3, 5, 7, 9]
console.log(filtered);

function checkEven(number) {
  if (number % 2 == 0) {
    return true;
  } else return false;
}

//  create a new array by filter even numbers from the numbers array

let evenNumbers = numbers.filter(checkEven); // [2,4,6,8,10]
console.log(evenNumbers);

// let filtered = numbers.filter((num) => num % 2 == 1);

// console.log(checkEven(10));
////

let str = "JavaScrpit"
console.log(str.length);
*/

/*
const array = [1, 6, 34, 9, 12, 26, 7, 3, 75, 16, 8];

let array = ["hey", "a", "b", "yes", "i", "no"];

function checkChar(el) {
  if (el.length == 1) {
    return true;
  } else return false;
}

let charsOnly = array.filter(checkChar);
console.log(charsOnly);
*/

//////////////////////////// .findIndex(callback)

/*
function isEven(el) {
  return el % 2 == 0; // true | false
}

let array = [1, 45, 72, 99, 7, 4];

const firstEven = array.findIndex(isEven);

console.log(firstEven);

// using arrow operator
const firstOdd = array.findIndex((el) => el % 2 == 1);
console.log(firstOdd);
 */

//////////////////////////// .find(callback)

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
/*
 */

/*
let customers = [
  {
    name: "ABC Inc",
    credit: 100,
  },
  {
    name: "ACME Corp",
    credit: 200,
  },
  {
    name: "IoT AG",
    credit: 300,
  },
];

console.log(customers.find((c) => c.credit > 100));
 */

/*
const team = [
  { name: "Bill", age: 10 },
  { name: "Nika", age: 18 },
  { name: "Lucy", age: 15 },
  { name: "Alan", age: 20 },
  { name: "Steve", age: 34 },
];

// function isAdult(el) {
//   return el.age >= 18; // true | false
// }

// let filteredA = team.filter(isAdult);
// console.log(filteredA);

team.filter((m) => m.age >= 18).forEach((el) => console.log(el.name));


// names only (filter): team.filter(isAdult).forEach((el) => console.log(el.name));
*/

/////////////////////////// .reduce(callback(a, cV))
// executes the given function for each value from left to right
// const message = [1, 2, 3, 4, 5, 6, 7];

/*
const message = ["JavaScript ", "is ", "fun!"];

function joinStrings(accumulator, currentValue) {
  return accumulator + currentValue;
}

let result = message.reduce(joinStrings);
console.log(result);
 */

/////////////////////////// .reduceRight(callback(a,c), initialValue)
// executes the given function for each value from right to left

/*
const numbers = [1, 2, 3, 4, 5, 6, 7];

function sum_reducer(accumulator, currentValue) {
  return accumulator - currentValue;
}

let sum = numbers.reduceRight(sum_reducer);
console.log(sum);
 */

/*

// using arrow function
// let summation = numbers.reduceRight(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(summation);
*/

//////////////////////////// .forEach(callback)
// allows us to do some work with each array element

/*
let numbers = [1, 3, 4, 9, 8];

function computeSquare(element) {
  console.log(element * element);
}

numbers.forEach(computeSquare);
 */
// returns undefined

/*
let array = [];

numbers.forEach((number) => {
  array.push(number ** 2);
});
console.log(array);
*/

//////////////////////////// .map(callback)
// returns a new array containing the results of applying an operation on all original array elements

/*
let numbers2 = [2, 4, 6, 8, 10]; // [4, 16, 36, 64, 100]

let powArray = [];
for (let i = 0; i < numbers2.length; i++) {
  powArray.push(numbers2[i] * numbers2[i]);
}
console.log(powArray);

function square(number) {
  return number ** 2;
}

let sqr = numbers2.map(square);
console.log(sqr);
*/

// or 1 line code using => f // let sqr = numbers.map((num) => num ** 2);

// console.log(sqr);
// console.log(numbers2);

// returns a new array with elements as the return values from the callback function for each element

//////////////////////////// .entries()
/*
const languages = ["JavaScript", "Java", "C", "C++", "Python", "Dart"];

let iterator = languages.entries(); // [key, value]

console.log(iterator);

for (let el of iterator) {
  console.log(el);
}
*/

// [key, value]

//////////////////////////// .keys()
/*
const languages = ["JavaScript", "Java", "C", "C++", "Python"];
let iterator = languages.keys(); // key

for (let key of iterator) {
  console.log(key);
}
 */

//////////////////////////// .values()

/*
const languages = ["JavaScript", "Java", "C", "C++", "Python"];
let iterator = languages.values(); // values

for (let value of iterator) {
  console.log(value);
}
 */

//////////////////////////// Array.from()

/*
let arr1 = Array.from("abc");
console.log(arr1);

let mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);

let arr2 = Array.from(mapper);
console.log(arr2);

let arr3 = Array.from(mapper.keys());
console.log(arr3);

let set = new Set(["JavaScript", "Python", "Go", "Go"]);
let arr4 = Array.from(set);
console.log(arr4);

*/

///////////////////////////// .some(callback)
// tests whether any of the array elements pass the given test function
// does not change the original array

/*
function checkAge(age) {
  return age < 18;
}

const ageArray = [34, 23, 20, 26, 22];

let check = ageArray.some(checkAge);

console.log(check);

if (check) {
  console.log("All members must be at least 18 years of age");
}
 */

//

/*
let str = ["JavaScript", "Java", "Go"];

let bool = str.some((el) => el.length < 3);

if (bool) {
  console.log("true");
} else {
  console.log("false");
}
*/

// using arrow function
// let check1 = ageArray.some((age) => age <= 18); // true
// console.log(check1);

///////////////////////////// .every()
// checks if all the array elements pass the given test function
// does not change the original array

/*
const ageArray = [34, 23, 20, 26, 12];

function checkAdult(age) {
  return age >= 18;
}

let check = ageArray.every(checkAdult);
console.log(check);

/*
if (!check) {
  console.log("All members must be at least 18 years of age");
}
 */

// using arrow function
// let check1 = ageArray.every((age) => age >= 18); // false
// console.log(check1);

///////////////////////////// .flat()

/*
const arr1 = [1, [2, 3, 4], 5];

const flattened1 = arr1.flat();
console.log(flattened1);

const arr2 = [1, 2, [3, 4, [5, 6]]];
const flattened2 = arr2.flat(2); // depth
console.log(flattened2);

const arr3 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const flattened3 = arr3.flat(Infinity);
console.log(flattened3);
 */

///////////////////////////// .flatMap()
//  first maps each element using a mapping function, then flattens it into a new array (depth of 1)
// does not change the original array

/*
const arr1 = [1, 2, 3, 4, 5];

const intermediate = arr1.map((x) => [x ** 2]);
console.log(intermediate);

const newArr2 = intermediate.flat();
console.log(newArr2);

// or:
const newArr1 = arr1.flatMap((x) => [x ** 2]);
console.log(newArr1);
*/

////////////////////////////////////////////////////////////
//

/*
let people = [
  { name: "bob", age: 44 },
  { name: "nika", age: 23 },
  { name: "bill", age: 17 },
  { name: "jessica", age: 18 },
  { name: "alan", age: 14 },
  { name: "jack", age: 25 },
];

let newPeople = people.filter((person) => {
  person;
});
*/

/////////////// custom sorting
/*
let array = [2, 1, 5, 34, 6, 12, 7, 77, 3, 100];

let sorted = array.sort((a, b) => a - b);

console.log(sorted);
*/
