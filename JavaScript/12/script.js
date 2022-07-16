let lists = document.querySelectorAll("ul li"); // assigns the array of LIs
let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let ul = document.querySelector("ul");
let btn2 = document.querySelector(".btn2");

btn.addEventListener("click", add);

function add() {
  const newLi = document.createElement("LI"); // <li> hey </li>
  const newText = document.createTextNode(input.value); // hey

  newLi.appendChild(newText);
  ul.appendChild(newLi);
}
