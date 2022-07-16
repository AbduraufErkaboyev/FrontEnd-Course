let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");

let btn_red = document.querySelector(".btn_red");
let btn_green = document.querySelector(".btn_green");
let btn_blue = document.querySelector(".btn_blue");

btn_red.addEventListener("click", f_red);
btn_green.addEventListener("click", f_green);
btn_blue.addEventListener("click", f_blue);

function f_red() {
  if (!red.classList.contains("property1")) {
    red.classList.add("property1");
  } else {
    red.classList.remove("property1");
  }
}

function f_green() {
  green.classList.toggle("property2");
}

function f_blue() {
  blue.classList.toggle("property3");
}

// red.classList.add("property1");
// red.classList.remove("property1");
// console.log(red.classList.contains("property1"));
