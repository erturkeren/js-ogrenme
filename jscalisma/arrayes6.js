//// ARRAYS IN ES6

//FROM

// let arr = Array.from("Eren");
// console.log(arr);

let products = [
  { name: "SAMSUNG", price: 10000 },
  { name: "SAMSUNG", price: 20000 },
  { name: "SAMSUNG", price: 50000 },
];
// console.log(Array.from(products, (prd) => prd.name == "SAMSUNG"));

// console.log(products.find((prd) => prd.name == "SAMSUNG"));
// console.log(products.filter((prd) => prd.name == "SAMSUNG"));

// console.log(products.findIndex((prd) => prd.price == 10000));

let numbers = ["a", "b", "c"];

let entries = numbers.entries();
for (let i of entries) {
  console.log(i);
}

let keys = numbers.keys();

for (let i of keys) {
  console.log(i);
}

let values = numbers.values();

for (let i of values) {
  console.log(i);
}
