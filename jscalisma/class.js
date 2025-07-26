/// Static methods

// class Person {
//   constructor(name, job, yearofbirth) {
//     this.name = name;
//     this.job = job;
//     this.yearofbirth = yearofbirth;
//   }

//   calculateAge() {
//     return 2025 - this.yearofbirth;
//   }
//   static sayHi() {
//     console.log("HELLO");
//   }
// }
// let eren = new Person("Eren", "Student", 2002);
// console.log(eren.calculateAge());
// console.log(eren);
// Person.sayHi();

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   static distance(a, b) {
//     let dx = a.x - b.x;
//     let dy = a.y - b.y;
//     return Math.hypot(dx, dy);
//   }
// }

// let d1 = new Point(10, 10);
// let d2 = new Point(20, 20);

// console.log(Point.distance(d1, d2));

//// Sub Classes

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi() {
    return `Hello I'am ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, username) {
    super(firstName, lastName);
    this.phone = phone;
    this.username = username;
  }
  static getTotal() {
    // statici Customer dan çağıracaksın customer1den değil
    return 1000;
  }
}

let customer1 = new Customer("Eren", "Ertürk", "1234566", "canmertinyo");

console.log(customer1.sayHi());
console.log(customer1);
console.log(Customer.getTotal());
