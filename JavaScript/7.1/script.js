let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let p = document.querySelector("p");

let f1 = function () {
  let a = Number(num1.value);
  let b = Number(num2.value);
  p.textContent = `Your result: ${a + b}`;
};

let f2 = function () {
  let a = Number(num1.value);
  let b = Number(num2.value);
  p.textContent = `Your result: ${a - b}`;
};

let f3 = function () {
  let a = Number(num1.value);
  let b = Number(num2.value);
  p.textContent = `Your result: ${a * b}`;
};

let f4 = function () {
  let a = Number(num1.value);
  let b = Number(num2.value);
  p.textContent = `Your result: ${a / b}`;
};

btn1.addEventListener("click", f1);
btn2.addEventListener("click", f2);
btn3.addEventListener("click", f3);
btn4.addEventListener("click", f4);
