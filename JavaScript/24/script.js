/////////////// closures

// a closure gives us access to an outer function’s scope from an inner function
// lexical scope is the ability for a function scope to access variables from the parent scope

/*
function sum(a) {
  return function addSecond(b) {
    return a + b;
  }; // lexical scope of addSecond with access to the lexical scope of sum
} // lexical scope of sum

const addOne = sum(1); // == addSecond

console.log(addOne(2)); // 3
console.log(addOne(3)); // 4

*/

/////
// here innerF has access to the variable environment of the execution context in which it was created (increasedBy) even though the last one has already been executed:

/*
function increasedBy() {
  let counter = 0; 
  
  return function innerF(n) { 
    counter += n;
    return counter;
  };
}

const increment = increasedBy(); // innerF

console.log(increment(2)); // 2
console.log(increment(3)); // 5
*/

/////
/*

const myGlobal = 0;

function func1() {
  const myVar = 1;

  function func2() {
    const myInnerVar = 2;

    function func3() {
      console.log(myInnerVar, myVar, myGlobal);
    }

    func3();
    console.log(myVar, myGlobal);
  }

  func2();
  console.log(myGlobal);
}

func1(); // 210 | 10 | 0

 */

/////

/*
let countEven = 0;

const items = [1, 5, 100, 10, 6, 7, 8, 4, 11, 13];

items.forEach(function (number) {
  if (number % 2 === 0) {
    countEven++;
  }
});
console.log(countEven);
 */

/////

/*
function Counter() {
  let counter = 0;

  setTimeout(function first() {
    let innerCounter = 0;

    counter++; // uses the variable declared in the parent function
    console.log("counter = " + counter);

    setTimeout(function second() {
      counter++; // - / - /
      innerCounter++; // uses the variable declared in the parent function
      console.log("counter = " + counter + ", innerCounter = " + innerCounter);
    }, 5000);
  }, 2000);
}

Counter();
*/

/////

/*
let counter1 = function () {
  let privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    randomValue: function () {
      return privateCounter;
    },
  };
};

const counter = counter1(); // returns {}

console.log(counter.randomValue());
counter.increment();
counter.increment();
console.log(counter.randomValue());
counter.decrement();
console.log(counter.randomValue()); 

console.log(counter);

 */
