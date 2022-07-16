const firstName = "David";

function calcAge() {
  const birthYear = 2000;
  if (birthYear >= 1900) {
    var access = true; // doesnt work with let/const
    // var is always function scoped
  }

  function calcBirthYear() {
    const currentYear = 2022;
    if (access) {
      return currentYear - birthYear;
console.log(t1);
}
  }

  return calcBirthYear();
}

console.log(calcAge());
