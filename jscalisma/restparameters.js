//REST PARAMETERS

function sum(...arr) {
  let result = 0;

  arr.forEach((item) => (result += item));
  return result;
}

// console.log(sum(10, 20, 30, 40));

function isDriver(age, ...years) {
  years.forEach((year) => console.log(2025 - year >= age));
}

isDriver(2002, 1990, 2006, 2010, 20, 10);
