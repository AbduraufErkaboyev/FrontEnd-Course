/*
console.log(Math.trunc(2.834342));
console.log(Math.floor(2.834342));
console.log(Math.ceil(2.834342));
console.log(Math.round(2.8434342));
console.log(Math.pow(2, 5));
console.log(Math.sqrt(64));
console.log(Math.cbrt(27));

console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.max(1, 2, 3, 4, 5));

const array = [34, 11, 76, 84, 65];

console.log(Math.min(...array));
console.log(Math.max(...array));

console.log(Math.trunc(Math.random() * 10) + 1);
 */

const h1 = document.querySelector("h1");

h1.addEventListener("mouseover", () => {
  let random1 = Math.trunc(Math.random() * 300);
  let random2 = Math.trunc(Math.random() * 300);
  let operator1 = Math.trunc(Math.random() * 2) + 1;
  let operator2 = Math.trunc(Math.random() * 2) + 1;

  // console.log(operator1);

  h1.style.transform = `translate(${operator1 == 1 ? random1 : -random1}px, ${
    operator2 == 1 ? random2 : -random2
  }px)`;
});
/*
 */
