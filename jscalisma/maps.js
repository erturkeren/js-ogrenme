// MAPS : key/values pairs
let val;

let numbers = new Map();

numbers.set(1, "one");
numbers.set("2", "two");
numbers.set(3, "three");
numbers.set("4", "four");
val = numbers;

val = numbers.get(1);
val = numbers.get("2");
val = numbers.get("four");
val = numbers.size;
val = numbers.has(1);
val = numbers.delete("4");
val = numbers.has("4");
console.log(val);

for (let [key, value] of numbers) {
  console.log(key + " = " + value);
}

/// FOREACH
numbers.forEach(function (key, value) {
  console.log(key + " - " + value);
});

let first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

let second = new Map([
  [4, "four"],
  [5, "two"],
]);

let merged = new Map([...first, ...second]); /// İKİ DİZİYİ BİR DİZİ İÇERİSİNDE BİRLEŞTİRME
console.log(merged);
