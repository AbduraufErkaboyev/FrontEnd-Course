"use strict";
/*
function logger() {
  console.log(this);
}

logger(); // undefined
*/

////////
/*
let obj = {
  name: "Unknown",
  id: "123123123",
  logger: function () {
    console.log(this);
  },
};

// obj.logger();

let newLogger = obj.logger;
newLogger();
*/

/////////////////////////// .bind()
/*
let user = {
  firstname: "Scarlett",
  lastname: "Johansson",
  getUserName: function () {
    let fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

// console.log(user.getUserName());

let newF = user.getUserName;

// console.log(newF()); // throws a typeError (undefined)

// in a regular function call the "this" keyword points to undefined

// let logUser = newF.bind(user); // creates new object and binds user

console.log(logUser());
*/
/*
let callUser = function () {
    return "Hello Mrs. " + logUser();
  };
  
console.log(callUser());
*/

/////////////////////////// .call()
// accepts additional parameters as well
// does not make a copy of the function it is being called on
// expects all parameters to be passed in individually
/*
let user = {
  firstname: "Scarlett",
  lastname: "Johansson",
  getUserName: function () {
    let fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

let callUser = function (greet) {
  return greet + this.getUserName();
};

console.log(callUser.call(user, "Hello Mrs. "));
*/

/////////////////////////// .apply()
// expects an array of all parameters
/*
let user = {
  firstname: "Scarlett",
  lastname: "Johansson",
  getUserName: function () {
    let fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

let callUser = function (str1, str2, str3, str4) {
  return str1 + str2 + this.getUserName() + str3 + str4;
};

console.log(callUser.apply(user, ["Hello ", "Mrs. ", " and ", "my friends"]));

*/

// use call or apply when you want to invoke the function immediately, and modify the context
// use bind when you want that function to later be called with a certain context

///////////////////////// IIFE (Immediately Invoked Function Expressions)

/*
function add(a, b) {
  return a + b;
}

console.log(this);

var x = 20;

{
  {
    var counter = 11;
  }
}
console.log(this);

*/

/*
(function (a, b) {
  console.log(a + b);
})(5, 15);

*/

///// we can use an arrow function to define an IIFE
/*
((a, b) => {
  console.log(a + b);
})(10, 5);

 */

///
// by placing functions and variables inside an immediately invoked function expression, we can avoid polluting them to the global object
/*
(function () {
  var counter = 10;
  
  function add(a, b) {
    return a + b;
  }
  
  console.log(add(2, 7));
})();

console.log(this);
 */
