// ////////////// CALL , APPLY , BİND 23.07.2025/////////////////

// let welcome = function (a, b) {
//   console.log(
//     "Welcome " + this.name + " Are you interested in " + a + " and " + b
//   );
// };

// let eren = { name: "Eren" };
// let sena = { name: "Sena" };

// welcome.call(eren, "java", "nodejs");
// welcome.call(sena, "java", "nodejs");

// welcome.apply(eren, ["java", "nodejs "]);
// welcome.apply(sena, ["java", "nodejs"]);

// welcomeEren = welcome.bind(eren);
// welcomeEren("java", "nodejs");

// welcomeSena = welcome.bind(sena);
// welcomeSena("java", "nodejs");

// /// CALL , APPLY , BIND ÖRNEKLER

// // NUMERİC RANGE
// // SAYIMIZIN 0 İLE 100 ARASINDA BİR SAYIMI

// let num = {
//   min: 0,
//   max: 100,
//   check: function (value) {
//     if (typeof value !== "number") {
//       return false;
//     } else {
//       return value >= this.min && value <= this.max;
//     }
//   },
// };

// console.log(num.check(20000000));

// let num = {
//   min: 0,
//   max: 100,
//   check: function (value) {
//     if (typeof value !== "number") {
//       return false;
//     } else {
//       return value >= this.min && value <= this.max;
//     }
//   },
// };

// console.log(num.check(20));

// let num1 = { min: 10, max: 60 };

// /// CALL
// console.log(num.check.call(num1, 75));

// ///APPLY
// console.log(num.check.apply(num1, [10]));

// /// BIND

// let checknumber = num.check.bind(num1);
// console.log(checknumber(12));
