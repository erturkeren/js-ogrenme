// SETS (Collettion - Unique value)

let val;
let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add("iki");
mySet.add({ a: 1, b: 2 });

let obj = { a: 1, b: 2 };
mySet.add(obj);

val = mySet.has(1);
val = mySet.has(2);
val = mySet.has(3);
val = mySet.has(obj);

val = mySet.size;
mySet.delete(1);

console.log(val);
console.log(mySet);

/// FOR

for (let item of mySet) {
  console.log(item);
}

for (let item of mySet.keys()) {
  console.log(item);
}

for (let item of mySet.values()) {
  console.log(item);
}

for (let item of mySet.keys()) {
  console.log(item);
}

for (let item of mySet.keys()) {
  console.log(item);
}

for (let [key, value] of mySet.entries()) {
  console.log(key, value);
}

console.log(Array.from(mySet));

let mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2);

//// Intersect - Kesişim

let intersect = new Set(Array.from(mySet).filter((x) => mySet2.has(x)));

console.log(intersect);

/// DIFFERENCE

let difference = new Set([...mySet].filter((x) => !mySet2.has(x)));

console.log(difference);
