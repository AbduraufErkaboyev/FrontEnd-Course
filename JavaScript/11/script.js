let input = document.querySelector(".input");

///////////// keyup, keydown, keypress

input.addEventListener("keydown", print);
input.removeEventListener("keydown", print);

function print(a) {
  console.log(`you pressed the ${a.key}`);
}

// window.addEventListener("keydown", (e) => {
//   console.log(e);
// });

//////////////// querySelectorAll()
/*
let btns = document.querySelectorAll(".btn");
// btns = [btn, btn, btn, btn]

btns.forEach((el) => {
  el.addEventListener("click", () => {
    console.log("click!");
  });
});
*/

////////////////// .forEach() method

// const array = [3, 5, 2, 7, 4, 8];

// array.forEach((el) => console.log(el)); // executes a provided function once for each array element

///////////////////
