let display = document.querySelector("#display");
let result = document.querySelector(".result");
let equal = document.querySelector("#equal");
let ac = document.querySelector(".ac");

let btns = document.querySelectorAll(".button"); // []
console.log(btns);

/*
 */
function f(btn) {
  btn.addEventListener("click", () => {
    if (display.textContent == 0) {
      display.textContent = "";
    }

    display.textContent += btn.textContent;
  });
}

btns.forEach(f);

equal.addEventListener("click", () => {
  result.textContent = eval(display.textContent);
});

ac.addEventListener("click", () => {
  display.textContent = "0";
  result.textContent = "";
});

//////////////////////////////// forEach
// let array = ["a", "b", "c", "d", "e"];

// array.forEach(x);

// function x(el) {
//   console.log(el);
// }

//////////////////////////////// eval()

// let str = "1+5*6-4/2";
// console.log(eval(str));
