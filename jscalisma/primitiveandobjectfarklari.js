/// PRIMITIVE  & OBJECT FARKLARI

let a = 10;
let b = a;
console.log(a);
console.log(b);

let obj1 = {
  name: "ada",
  age: 10,
};

let obj2 = obj1;
obj1.age = 12;

console.log(obj1.age);
console.log(obj2.age);

let num = 50;
let account = {
  name: "eren",
  number: "123564",
};

function update(a, b) {
  a = 100;
  b.number = "222222";
}

update(num, account);

console.log(num);
console.log(account);

let products = [
  { name: "product name", price: 1000 },
  { name: "product name", price: 1000 },
  { name: "product name", price: 1000 },
  { name: "product name", price: 1000 },
  { name: "product name", price: 1000 },
  { name: "product name", price: 1000 },
  { name: "product name", price: 1000 },
];

function filterProducts(prd) {}

filterProducts(products);
