let box = document.querySelector(".box");

box.addEventListener("click", randomColor);

function randomColor() {
  let a = Math.trunc(Math.random() * 255) + 1;
  let b = Math.trunc(Math.random() * 255) + 1;
  let c = Math.trunc(Math.random() * 255) + 1;

  box.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}

/*
console.log(Math.trunc(2.834342));
console.log(Math.floor(2.834342));
console.log(Math.ceil(2.834342));
console.log(Math.round(2.834342));
console.log(Math.pow(2, 5));
console.log(Math.sqrt(64));
console.log(Math.cbrt(27));
console.log(Math.min(1, 2, 5, 3, 6));
console.log(Math.max(1, 2, 5, 3, 6));
*/
