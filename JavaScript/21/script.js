"use strict";

//////////////////////// new Map()
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

/*
const map = new Map([
  [1, "q"],
  [2, "w"],
  [3, "e"],
  [4, "r"],
  [5, "t"],
  [6, "y"],
]);

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);
map.set(true, "hello");

console.log(map);

console.log(map.get("a"));
console.log(map.get(true));

map.set("a", "hello");

console.log(map.get("a"));
// console.log(map);

console.log(map.size);

map.delete("b");

console.log(map);
 */

/////////////////
/*

let john = { name: "John Doe" },
lily = { name: "Lily Bush" },
peter = { name: "Peter Drucker" };

let users = new Map();

// alert(users);

console.log(typeof users);
console.log(users instanceof Map);

users.set(john, "admin");

console.log(users);

users.set(lily, "editor").set(peter, "subscriber");

console.log(users);
 */
/////////////////

/*
let john = { name: "John Doe" },
  lily = { name: "Lily Bush" },
  peter = { name: "Peter Drucker" },
  bob = { name: "Bob" };

let users = new Map([
  [john, "admin"],
  [lily, "editor"],
  [peter, "subscriber"],
]);

// console.log(users);

console.log(users.get(john));

console.log(users.has(lily));

console.log(users.has(bob));

console.log(users.size);
*/
////////////////

/////////////////// iteration
/*
for (const user of users) {
  console.log(user);
}

for (const user of users.keys()) {
  // key
  console.log(user);
}

for (const user of users.values()) {
  // value
  console.log(user);
}
///
for (const user of users.entries()) {
  // [key, value]
  console.log(user);
}
*/

/*
for (const user of users.entries()) {
  console.log(`${user[0].name}: ${user[1]}`);
}
*/
//////////// .forEach
/*
console.log(users);

users.forEach((job, user) => console.log(`${user.name}: ${job}`)); // key-value pairs are in the insertion order

const array = ["a", "b", "c"];

array.forEach((el, i) => {
  console.log(`${i + 1}: ${el}`);
});
*/

//////////////// destructuring
/*
for (let [user, job] of users.entries()) {
  console.log(`${user.name}: ${job}`);
}
/////////

let keys = [...users.keys()];
console.log(keys);

let values = [...users.values()];
console.log(values);
*/
///////////////////////
/*
users.delete(john);
console.log(users);

users.clear();
console.log(users);
*/

///////////////////// string methods
/// length (property)
/*

let str = "Hello World!";
console.log(str.length);

let sentence = "";
let len = sentence.length;
console.log(len);

sentence = "I love JavaScript";
len = sentence.length;
console.log(len);
 */

/// indexOf | lastIndexOf
/*
const message = "JavaScript is not Java";

const index = message.indexOf("a", 2);

console.log(index);

// str.indexOf(searchValue, fromIndex)
 */
// lastIndexOf() returns the last occurance
/////////////////
/*
let str = "JavaScript is the world's most misunderstood programming language.";


let index = str.lastIndexOf("p");
console.log(index);

let index2 = str.lastIndexOf("p", 44);
console.log(index2);
*/

// str.lastIndexOf(searchValue, fromIndex)

// fromIndex (optional) - The index to start searching the string backwards. By default it is +Infinity.

/// replace()
/*
const message = "ball bat";

// replace b with c
// let result = message.replace("b", "c");
// console.log(result);

let result = message.replace(/b/g, "c");
console.log(result);
 */

// const text = "Java is awesome. Java is fun.";

// let pattern = "Java";

// let new_text = text.replace(pattern, "JavaScript");
// console.log(new_text);

// const text = "Java is awesome. Java is fun.";

// const pattern = /Java/g;
// const new_text = text.replace(pattern, "JavaScript");
// console.log(new_text);

/*
const text = "javaSCRIPT JavaScript";

// the first occurrence of javascript is replaced
// case-insensitive search
let new_text = text.replace(/javascript/gi, "JS");
console.log(new_text);

// all occurrences of javascript is replaced
let pattern = /javascript/gi; // case-insensitive and global search
new_text = text.replace(pattern, "JS");
console.log(new_text);
 */

/// toUpperCase() | toLowerCase()
/*
const message = "javascript is fun";
const upperMessage = message.toUpperCase();
console.log(upperMessage);



const message = "JAVASCRIPT IS FUN";

const lowerMessage = message.toLowerCase();
console.log(lowerMessage);
*/

/// includes()
/*
const message = "JavaScript is fun";

let result = message.includes("Java");
console.log(result);
*/
/*
let sentence = "Java is to JavaScript what Car is to Carpet.";

let check = sentence.includes("Java");
console.log(check);

// second argument specifies position to start at
let check2 = sentence.includes("Java", 12);
console.log(check2);
*/
/// repeat()
/*
let sentence = "Happy Birthday! \n";

let repeat1 = sentence.repeat(10);
console.log(repeat1);
 */

/// padStart() | padEnd()

/*
let string = "HELLOCODE";

let value1 = string.padStart(10);
// console.log(value1);

let value2 = string.padStart(10, "*");
console.log(value2);
 */
///
/*
let string = "CODE";

let value1 = string.padEnd(10);
console.log(value1);

let value2 = string.padEnd(10, "*");
console.log(value2);
 */

////////////////////////////////////////////
////////////////////////////////////////////
/*
let height = 15;

function tree(height) {
  let str = "*";
  let space = " ";

  for (let i = 1; i <= height * 2; i += 2) {
    console.log(space.repeat(height - i / 2) + str.repeat(i));
  }
  console.log((space.repeat(height - 2) + str.repeat(3) + "\n").repeat(2));
}

tree(height);
*/
////////////////////////////////////////////
////////////////////////////////////////////

/// concat()
/*
let emptyString = "";

let joinedString = emptyString.concat("JavaScript", " is", " fun.");
console.log(joinedString);

let str1 = "hello ";
let str2 = "JS!";
console.log(str1.concat(str2));
*/

/// split()

/*
const message = "JavaScript is fun";

let result = message.split(" ");
console.log(result);

console.log("  ABCDEF".split(""));
*/

/// trim()
/*
const message = "   JAVASCRIPT IS FUN    ";

const newMessage = message.trim();
console.log(newMessage);
 */
/// slice()
/*
const message = "JavaScript is fun";

let result = message.slice(4, 10);
console.log(result);

console.log(message.slice(message.length - 3));
 */

let array = ["Hello", "JavaScript"];
let str = array.join("-");
console.log(str);


// "JavaScript is fun" -> ["JAVASCRIPT", "IS", "FUN"]

// "Hello World" -> ["HELLO", "WORLD"]
/*
function changeStr(str) {
  let empty = [];
  for (let i = str.length - 1; i >= 0; i--) {
    empty.push(str[i]);
  }

  return empty;
}

console.log(changeStr("click!"));
*/
