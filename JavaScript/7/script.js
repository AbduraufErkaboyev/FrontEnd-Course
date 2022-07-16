let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let operator = document.querySelector("#operator");
let btn = document.querySelector(".btn");
let p = document.querySelector("p");

// console.log(p.textContent);

let r = function () {
  let a = Number(num1.value);
  let b = Number(num2.value);
  let c = operator.value;
  p.textContent = `Your result: ${sum(a, b, c)}`;
};

function sum(s1, s2, o) {
  if (o === "+") {
    return s1 + s2;
  }
  if (o === "-") {
    return s1 - s2;
  }
  if (o === "*") {
    return s1 * s2;
  }
  if (o === "/") {
    return s1 / s2;
  }
  if (o === "%") {
    return s1 % s2;
  }
}

btn.addEventListener("click", r);

/*

let body = document.querySelector("body");
function changeColor() {
  // btn.textContent = btn.textContent !== "clicked!" ? "clicked!" : "click!";
  if (body.style.backgroundColor != "green")
  body.style.backgroundColor = "green";
  else {
    body.style.backgroundColor = "white";
  }
}

*/
