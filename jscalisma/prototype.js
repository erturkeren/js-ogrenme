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

// let p1 = new Person("EREN");
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
