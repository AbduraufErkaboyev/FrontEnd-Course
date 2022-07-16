let txt = document.querySelector(".txt");
let btn = document.querySelector("#btn");

btn.addEventListener("click", changeColor);

function changeColor() {
  let a = Math.trunc(Math.random() * 200);
  let b = Math.trunc(Math.random() * 200);

  if (txt.style.color == "black") {
    txt.style.color = "blue";
    txt.style.transform = `translateX(${a}px)`;
  } else {
    txt.style.color = "black";
    txt.style.transform = `translateX(-${b}px)`;
  }
}
/*
 */

// console.log(Math.trunc(Math.random() * 100) + 1);
// console.log(Math.trunc(2.4343));
