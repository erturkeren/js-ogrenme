// CALLBACK Functions

let val;
function MultipleBytwo(a, b, c, callback) {
  let arr = [];

  if (callback && typeof callback === "function") {
    for (let i = 0; i < 3; i++) {
      arr[i] = callback(arguments[i] * 2);
    }
  }

  return arr;
}

function addOne(a) {
  return a + 1;
}

val = MultipleBytwo(5, 10, 20, addOne);

for (let i = 0; i < val.length; i++) {
  val[i] = addOne(val[i]);
}

console.log(val);

function welcome() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let today = new Date();
  let msg = "Welcome today is  " + days[today.getDay()];

  return msg;
}

(function (name) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let today = new Date();
  let msg = " Welcome " + name + " today is  " + days[today.getDay()];
  console.log(msg);
})("Eren");
