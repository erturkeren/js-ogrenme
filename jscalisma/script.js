/// PERSON CONSTRUCTOR
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.Introduce = function () {
//   console.log("hello my name is " + this.name);
// };

/// TEACHER CONSTRUCTOR

// function Teacher(name, branch) {
//   Person.call(this, name);
//   this.branch = branch;
// }

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;
// Teacher.prototype.teach = function () {
//   console.log("I teach " + this.branch);
// };

// /// STUDENT CONSTRUCTOR

// function Student(name, number) {
//   Person.call(this, name);
//   this.number = number;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.study = function () {
//   console.log(
//     "My Student number is  " + this.number + "  Ive already studied hard  "
//   );
// };

// /// Headmaster Constructor

// function Headmaster(name, branch) {
//   Teacher.call(this, name, branch);
// }

// Headmaster.prototype = Object.create(Teacher.prototype);
// Headmaster.prototype.constructor = Headmaster;

// Headmaster.prototype.shareTask = function () {
//   console.log("Ive already shared all the work ");
// };

// let p1 = new Person("eren");
// p1.Introduce();

// let t1 = new Teacher("CAN", "Math");
// t1.Introduce();
// t1.teach();

// let s1 = new Student("Berat", 36);
// s1.Introduce();
// s1.study();

// let h1 = new Headmaster("Ayşe", "Math");
// h1.Introduce();
// h1.teach();
// h1.shareTask();

/// PRİMİTİVE  & OBJECT FARKLARI

// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);

// let obj1 = {
//   name: "ada",
//   age: 10,
// };

// let obj2 = obj1;
// obj1.age = 12;

// console.log(obj1.age);
// console.log(obj2.age);

// let num = 50;
// let account = {
//   name: "eren",
//   number: "123564",
// };

// function update(a, b) {
//   a = 100;
//   b.number = "222222";
// }

// update(num, account);

// console.log(num);
// console.log(account);

// let products = [
//   { name: "product name", price: 1000 },
//   { name: "product name", price: 1000 },
//   { name: "product name", price: 1000 },
//   { name: "product name", price: 1000 },
//   { name: "product name", price: 1000 },
//   { name: "product name", price: 1000 },
//   { name: "product name", price: 1000 },
// ];

// function filterProducts(prd) {

// }

// filterProducts(products);

// CALLBACK Functions

// let val;
// function MultipleBytwo(a, b, c, callback) {
//   let arr = [];

//   if (callback && typeof callback === "function") {
//     for (let i = 0; i < 3; i++) {
//       arr[i] = callback(arguments[i] * 2);
//     }
//   }

//   return arr;
// }

// function addOne(a) {
//   return a + 1;
// }

// val = MultipleBytwo(5, 10, 20, addOne);

// for (let i = 0; i < val.length; i++) {
//   val[i] = addOne(val[i]);
// }

// console.log(val);

// function welcome() {
//   let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   let today = new Date();
//   let msg = "Welcome today is  " + days[today.getDay()];

//   return msg;
// }

// (function (name) {
//   let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   let today = new Date();
//   let msg = " Welcome " + name + " today is  " + days[today.getDay()];
//   console.log(msg);
// })("Eren");

/// FUNCSTİONS THAT RETURN FUNCTİONS

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

//person.firstName = "Sena";

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

// // person.FullName = "EREN ERTÜRK";
// // console.log(person.fullName);

// console.log(person.age);
