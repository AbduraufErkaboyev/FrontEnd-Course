/*
const Car = {
  automobile_chassis: {
    basic_structure: { frame: 1, suspension_system: 4, axles: 2, wheels: 4 },
    power_unit: 50,
    "transmission system": 40,
    auxilliaries: 14,
    controls: 30,
    str: "system",
  },
  superstructure: function (any_prmtr) {
    console.log(
      `Number of the elements of this vehicle: ${
        this.automobile_chassis.basic_structure.frame +
        this.automobile_chassis.basic_structure.suspension_system +
        this.automobile_chassis.basic_structure.axles +
        this.automobile_chassis.basic_structure.wheels +
        this.automobile_chassis.power_unit +
        this.automobile_chassis[`${"transmission"} + ${str}`] +
        this.automobile_chassis.auxilliaries +
        this.automobile_chassis.controls
      }`
    );
  },
};             

Car.superstructure();
*/

/*
const num = "2";

const library = {
  sh_1: {
    science_1: ["Germany science", "Franch science", "Uzb Science"],
  },
  "sh 2": "Literature",
  sh_3: function () {
    console.log(this["sh " + num]);
  },
};

library.sh_3();
*/

//////////////////////////// objects  (key: value,)

/*
const center = {
  room1: "reception",
  room2: "IT",
  room3: {
    lang1: { e1: "English for adults", e2: "English for kids" },
    lang2: "Russian",
  },
};

// console.log(center.room3.lang1.e2);

// console.log(`${center.room3.lang1.e2} room is next to the ${center.room1}`);

// console.log(`${center.room2} room is next to the ${center.room1}`);

// console.log(center.room1);
// console.log(center.room2);
// console.log(center.room3.lang1.e1, center.room3.lang1.e1);
// console.log(center.room3.lang2);

// English for adults
// English for kids
*/

/*
const user = {
  firstName: "John",
  lastName: "Smith",
  age: 44,
  phoneNumber: "1-766-233-5544",
  friends: ["Steven", "Michael", "Bob", "Jack", "Bill"],
  hasCat: true,
  hasDog: false,
  cars: [
    { name: "Cadillac", color: "black" },
    { name: "BMW", color: "greyblue" },
  ],
  sayHi: function () {
    console.log("Hi!");
  },
};
*/

// user.sayHi();

// console.log(
//   `${user.firstName} ${user.lastName} is ${user.age}. He has ${
//     user.friends.length
//   } friends. His best friend is ${
//     user.friends[user.friends.length - 1]
//   }. He has a ${user.cars[0].color} ${user.cars[1].name}`
// );

// John Smith is 44. He has 4 friends. His best friend is Jack. He has a black BMW

// Michael's phone number is 1-766-233-5544. He has 2 friends: John and Bob. He has a greyblue Cadillac

// console.log(
//   `${user.friends[1]}'s phone number is ${user.phoneNumber}. He has ${user.friends.length} friends: ${user.firstName} and ${user.friends[2]}. He has a ${user.cars[1].color} ${user.cars[0].name}`
// );

// const array = [12, 23, [1, 2, 3], 45, [34, 23, [0, 10, 100]], 12];
// console.log(array[4][2][2]);

/////////////////////////
/*
let counter = 0;

let zoirbek = {
  name: "Zoirbek",
  height: 165,
  weight: 51,
  age: 15,
  
  step: function () {
    console.log(`steps i made: ${++counter}`);
  },
};

zoirbek.step();
zoirbek.step();
zoirbek.step();
zoirbek.step();
*/

// let i = 0;

// console.log(i++);
// console.log(i);

/*
const peter = {
  firstName: "Peter",
  lastName: "Parker",
  sayHi: function () {
    console.log(`Hello ${this.firstName} ${this.lastName}!`);
  },
  sayBye: function () {
    console.log(`Goodbye ${this.firstName} ${this.lastName}!`);
  },
};

peter.sayHi();
peter.sayBye();
*/

const scarlett = {
  firstName: "Scarlett",
  lastName: "Johannson",
  birthYear: 1984,

  age: function () {
    return 2022 - this.birthYear;
  },
  logger: function () {
    console.log(`${this.firstName} ${this.lastName} is ${this.age()}`);
  },
};

scarlett.logger();
/*
 */
