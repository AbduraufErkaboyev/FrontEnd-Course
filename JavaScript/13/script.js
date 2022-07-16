/*
function first() {
  const a = 28;
  console.log(a);
}

function second() {
  const a = 25;
  console.log(a);
}
*/

/////////////////////////

// const arr = [11, 22, 33, 44, 55, 66];

// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];
// // console.log(a, b, c);

// const [a, b, c, , d] = arr;
// console.log(a, b, c, d);

////////////////////////

const person = {
  firstName: undefined,
  age: 45,
  phoneNumber: "+1-915-604-2899",
  friends: ["Bill", "Steven", "Lucy"],
};

// const a = person.firstName;
// const b = person.age;
// const c = person.friends;
// console.log(a, b, c);

const { firstName = "John", ...friends } = person;

console.log(firstName, friends);
