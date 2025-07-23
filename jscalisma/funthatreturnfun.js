// /// FUNCSTIONS THAT RETURN FUNCTIONS

// function Question(hobby) {
//   switch (hobby) {
//     case "car":
//       return function (name) {
//         console.log(name + " Do you have a car ? ");
//       };
//       break;

//     case "book":
//       return function (name) {
//         console.log(name + " What is your favorite book ? ");
//       };
//       break;
//     case "software":
//       return function (name, type) {
//         console.log(name + " Are you interested in " + type);
//       };

//       break;

//     default:
//       return function (name) {
//         console.log(name + " How are you ? ");
//       };
//   }
// }

// let carQuestion = Question("software");

// carQuestion("Eren");

// let bookQuestion = Question("book");
// bookQuestion("Can");

// let softwareQuestion = Question("software");
// softwareQuestion("Ertürk", "Javascript");

// let person = {
//   firstName: "Eren",
//   LastName: "Ertürk",
//   get fullName() {
//     return `${this.firstName}  ${this.LastName}`;
//   },
//   set FullName(value) {
//     let parts = value.split(" ");
//     this.firstName = parts[0];
//     this.LastName = parts[1];
//   },
// };

// person.firstName = "Sena";

// let person = {
//   firstName: "eren",
//   LastName: "Ertürk",
// };

// Object.defineProperty(person, "fullName", {
//   get function() {
//     return `${this.firstName} ${this.LastName} `;
//   },
//   set function(value) {
//     let parts = value.split(" ");
//     this.firstName = parts[0];
//     this.LastName = parts[1];
//   },
// });

// Object.defineProperty(person, "age", {
//   value: 50,
//   writable: true,
// });

// person.age = 55;

// person.FullName = "EREN ERTÜRK";
// console.log(person.fullName);

// console.log(person.age);
