// This keyword
//ES5
// let list = {
//   category: "phone",
//   names: ["SAMSUNG", "IPHONE", "HUAWEI"],
//   call: function () {
//     let self = this;
//     this.names.map(function (name) {
//       console.log(`${self.category}   ${name}`);
//     });
//   },
// };

//ES6

// let list = {
//   category: "phone",
//   names: ["SAMSUNG", "IPHONE", "HUAWEI"],
//   call: function () {
//     this.names.map((name) => {
//       console.log(`${this.category}   ${name}`);
//     });
//   },
// };

// list.call();

//ES5

// function game() {
//   this.live = 0;
//   this.addLive = function () {
//     let self = this;
//     this.OneUp = setInterval(function () {
//       console.log(++self.live);
//     }, 1000);
//   };
// }

// let player = new game();
// player.addLive();

// //ES6

// function game() {
//   this.live = 0;
//   this.addLive = function () {
//     this.OneUp = setInterval(() => {
//       console.log(++this.live);
//     }, 1000);
//   };
// }

// // let player = new game();
// // player.addLive();
