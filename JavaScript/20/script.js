"use strict";
/*
const str = "hello world";

console.log([...str]); //spread into array
console.log(...str);

const arr = ["a", "b", "c", "d"];

console.log([...arr]); //spread into array
console.log(...arr);
*/

/////////////// iterables and iterators  (for...of) | Arrays

// iterator is an object which defines a sequence and potentially a return value upon its termination
// const array = ["a", "b", "c", "d"];

/*
for (const el of array) {
  // el == iterator.next().value
  console.log(el);
}

let iterable = ["a", "b", "c", "d"];

function createIterator(iterable) {
  let i = 0;

  return {
    next: function () {
      if (i < iterable.length) {
        return { value: iterable[i++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}
*/
/*
const iterator = createIterator(iterable);
console.log(iterator);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log(iterator.next().value);
 */

/*
const array = ["a", "b", "c", "d"];
let i = 0;

//  console.log(array[i++]); // a
//  console.log(array[i++]); // b 
//  console.log(array[i]);
*/

/////////////////////////////////// array.entries()

/*
// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
const array = ["a", "b", "c", "d"];

// for (const el of array) {
//   console.log(el);
// }

for (const el of array.entries()) {
  console.log(el); // prints [keys and values]
}

 */

////////////////////
/*
const array = ["a", "b", "c", "d"];

for (const el of array.entries()) {
  console.log(el[0], el[1]);
}

///

let str = "JavaScript";

for (const char of str) {
  console.log(char);
}

 */

// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

///////////////////////////// enumerables (for...in) | Objects
/*
const user = {
  name: "Bob",
  age: 23,
  hasCat: true,
};


for (const props in user) {
  console.log(props); // keys only
}

console.log(Object.entries(user));
*/

///////////////////// Object.keys()/values()

/*
console.log(Object.keys(user)); // []
console.log(Object.values(user)); // []
console.log(Object.entries(user)); // [[], [], []]

for (const k of Object.keys(user)) {
  console.log(k);
}

for (const v of Object.values(user)) {
  console.log(v);
}




///////////////////// Object.entries()
// The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs
/*
console.log(Object.entries(user));

const [[k1, v1], [k2, v2], [k3, v3]] = Object.entries(user); //at once

console.log(`${k1}: ${v1} \n${k2}: ${v2} \n${k3}: ${v3}`);

for (const [key, value] of Object.entries(user)) {
  //1 by 1
  console.log(value);
}

 */

/////////////////////// Optional chaining ?.
/*
const person = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

// const dogName = person.dog.name;
// console.log(dogName); // error

const dogName = person.dog?.name;
console.log(dogName); // undefined

const catName = person.cat?.name;
console.log(catName);

 */

/////////// variants: ?.(), ?.[]
/*
let userAdmin = {
  admin: function () {
    console.log("I am admin");
  },
};

let userGuest = {};

// userAdmin.admin?.();
userGuest.admin?.();
 */

/////////
// let key = "firstName";

/*
let user1 = {
  firstName: "John",
};

let user2 = null;

console.log(user1?.firstName);
console.log(user2?.["firstName"]);
*/

/////////////
// The optional chaining ?. has no use at the left side of an assignment:

// let user = null;
// user?.name = "John"; // Error, doesn't work
// because it evaluates to undefined = "John"

////////////
/*
const user = {
  name: "John",
};
console.log(user);
delete user?.name;
console.log(user);
 */
/*
let newSet = new Set();

while (newSet.size != 100) {
  newSet.add(Math.trunc(Math.random() * 100 + 1));
}

const array = [...newSet];
console.log(array);
*/
/////////////////////// Sets    | new Set()

// let array = [1, 2, 3, 4];

// let array = new Array([1, 2, 3, 4]);
// console.log(array);

const set1 = new Set(["hello", "hello", "world", "!", "world"]);
// console.log(set1);

/*
const set2 = new Set("fooooooood"); // "foood" == ["f", "o", "o", "o" ,"d"]

const set3 = new Set([10, 20, 30, 30, 40, 40]);

console.log(set1, set2, set3);

set1.delete("!");
console.log(set1);

set1.add(10);
set1.add(20);
console.log(set1);

set1.add(30).add(40).add(50);
console.log(set1);

console.log(set1.has(10));
 */
/////////////
/*
const set1 = new Set();

set1.add(30);
set1.add(20);
set1.add(10);
*/

/*
const getEntries = set1.entries();
// console.log(getEntries);
console.log(getEntries.next().value);
console.log(getEntries.next().value);
console.log(getEntries.next().value);

/////////////
const getValues = set1.values();
const getKeys = set1.keys();

console.log(getValues);
console.log(getKeys);

*/

////////
//////
////
//
/*
const arr = ["a", "b", "c", "d"];

console.log([...arr]); //spread into array
console.log(...arr); //spread into c.l.() | we're spreading the array as parameters for console.log

const arr1 = [1, 2, 3, 4, 5];

console.log("Spreading an array iterable: ", ...arr1);

// arr = [1, 2, 3] the line console.log(...arr) is equivalent to console.log(1, 2, 3).

 */
