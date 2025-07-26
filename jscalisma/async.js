///// Async
let first = () => {
  console.log("first");
  second();
};
let second = () => {
  setTimeout(() => {
    console.log("second");
  }, 2000);

  third();
};
let third = () => {
  console.log("third");
};

first();
