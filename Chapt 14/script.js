"use strict";
// const Person = function(firstName, birthYear){
//     // Instance properties 
//     this.firstName = firstName; 
//     this.birthYear = birthYear;

//     // this.calcAge = function(){
//     //     console.log(2037 - this.birthYear);
//     // }
// }
// const jonas =new Person('Jonas', 1991);
// console.log(jonas);

// // 1. New empty object is created
// // 2. function is called, this = {} 
// // 3. {} linked to prototype 
// // 4. function automatically returns {} (empty object)

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// console.log(jonas instanceof Person);

// // STATIC METHOD
// console.log(jonas instanceof Person);
// Person.hey = function(){
//   console.log('Hey there');
//   console.log(this);
// }
// Person.hey();

// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = this.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge(); 

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototypeOfLinkedObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda);

// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);

// // Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor); // cl.dir is for inspecting 

// const arr = [3, 6, 4, 5, 6, 9, 3];
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function(){
//     return [...new Set(this)]
// }

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.log(h1);

// console.dir(x => x + 1);

// console.log('CODING CHALLENGE');

// const Car = function(make, speed){
//   this.make = make;  
//   this.speed = speed;
// } 
// const chava = new Car('Toyota', 20);
// console.log(chava);

// Car.prototype.accelerate = this.accelerate = function(){
//   console.log(this.speed + 10);
// }
// chava.accelerate();

// Car.prototype.brake = this.brake = function(){
//   console.log(this.speed -5 );
// }
// chava.brake(); 

// const driver1 = new Car('Driver 1', 50);
// const driver2 = new Car('Driver 2', 100);

// driver1.accelerate();
// driver2.accelerate();

// driver1.brake();
// driver2.brake();


/// ES6 CLASSES 
// CLASS EXPRESSION 
const PersonC = class {

}
// CLASS DECLARATION
// class PersonCl{
//   constructor(fullName, birthYear){
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
// // METHODS WILL BE ADDED TO THE .PROTOTYPE PROPERTY
//   calcAge(){
//     console.log(2037 - this.birthYear);
//   }

//   greet(){
//     console.log(`hey ${this.firstName}`);
//   }

//   get age(){
//     return 2037-this.birthYear;
//   }

//   // Set a  property that already exists 
//   set fullName(name){
//     console.log(name);
//     if(name.includes(' ')) this._fullName = name; // use that _ for the naming conflict error 
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName(){
//     return this._fullName;
//   }

//   // STATIC METHOD
//   static hey(){
//     console.log('Hey there');
//     console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// Person.prototype.greet = function(){
//   console.log(`Hey ${this.firstName}`);
// }
// jessica.greet();  

// 1. CLASSES ARE NOT HOISTED(WE CAN USE THEM BEFORE THEY ARE DECLARED)
// 2. CLASSES ARE FIRST-CLASS CITIZENS(WE CAN PASS THEM INTO FUNCTIONS AND RETURN THEM FROM FUNCTIONS )
// 3. CLASSES ARE EXECUTED IN STRICT MODE   

// const walter = new PersonCl('Walter Whitre', 1965);
// PersonCl.hey();

// GETTERS AND SETTERS (you can use either one, not compulsory to use both)                         
const account = {
  owner : 'jonas',
  movements: [200, 530, 120, 300],
  get latest(){
    return this.movements.slice(-1).pop();
  },
  set latest(mov){
    this.movements.push(mov);
  }
};
console.log(account.latest);  

account.latest = 50;  
console.log(account.movements); 

// OBJECT.CREATE()
// const PersonProto = {
//   calcAge(){
//     console.log(2037- this.birthYear);
//   },

//   init(firstName, birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

// };
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

console.log('CHALLENGE NUMBER 2');
class Car{
  constructor(make, speed){
    this.make = make;
    this.speed = speed;
  }

  get speedUS(){
    return this.speed/1.6;
  }  

  set speedUS(mov){
    this.speed = mov * 1.6;
  }

  accelerate (){
    console.log(this.speed + 10);
  }

  brake (){
    console.log(this.speed -5 );
  }
}


// console.log('CODING CHALLENGE');

// const Car = function(make, speed){
//   this.make = make;  
//   this.speed = speed;
// } 
// const chava = new Car('Toyota', 20);
// console.log(chava);

// Car.prototype.accelerate = this.accelerate = function(){
//   console.log(this.speed + 10);
// }
// chava.accelerate();

// Car.prototype.brake = this.brake = function(){
//   console.log(this.speed -5 );
// }
// chava.brake(); 

// const driver1 = new Car('Driver 1', 50);
// const driver2 = new Car('Driver 2', 100);

// driver1.accelerate();
// driver2.accelerate();

// driver1.brake();
// driver2.brake();

console.log('INHERITANCE BTW CLASS CONSTRUCTOR FUNCTIONS');
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function(){
//   console.log(2037 - this.birthYear);
// };

// const Student = function(firstName, birthYear, course){
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);          


// Student.prototype.introduce = function(){
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__.__proto__);    

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

console.log('CODING CHALLENGE 3');

const Car1 = function(make, speed){
  this.make = make;  
  this.speed = speed;
} 
// const chava = new Car1('Toyota', 20);
// console.log(chava);

Car1.prototype.accelerate = this.accelerate = function(){
  this.speed += 20;
  this.charge --;
  console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`);
}
// chava.accelerate();

Car1.prototype.brake = this.brake = function(){
  console.log(this.speed -5 );
}

const EV = function(make, speed, charge){
  Car1.call(this, make, speed);
  this.charge = charge;
}

EV.prototype = Object.create(Car1.prototype);

EV.prototype.chargeBattery = function(chargeTo){
  this.chargeBattery = chargeTo;
}

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
// chava.brake(); 

// const driver1 = new Car('Driver 1', 50);
// const driver2 = new Car('Driver 2', 100);

// driver1.accelerate();
// driver2.accelerate();

// driver1.brake();
// driver2.brake();

// console.log('INHERITANCE BTW CLASSES ES6 CLASSES');
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // METHODS WILL BE ADDED TO THE .PROTOTYPE PROPERTY
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a  property that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(" "))
//       this._fullName = name; // use that _ for the naming conflict error
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // STATIC METHOD
//   static hey() {
//     console.log("Hey there");
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl{
//   constructor(fullName, birthYear, course){
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce(){
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge(){
//     console.log(`I'm ${2037-this.birthYear} years old, but as a student I feel more like ${2037-this.birthYear + 10}`);
//   }
// }

// const martha = new StudentCl('martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

console.log('INHERITANCE BTW CLASSES: OBJECT.CREATE()');
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);   

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course){
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}

StudentProto.introduce = function(){
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
}

const jay = Object.create(StudentProto);       
jay.init('Jay', 2010, 'Computer Science')
jay.introduce();
jay.calcAge();

class Account{
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    // SINCE IT ISNT TRULY PRIVATE, ITS PROTECTED
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  // PUBLIC INTERFACE OF OUR OBJECT
  getMovements(){
    return this._movements;
  }

  deposit(val){
    this._movements.push(val);
  }

  withdraw(val){
    this.deposit(-val);
  }

  _approveLoan(val){
    return true;
  }

  requestLoan(val){
    if(this._approveLoan(val)){
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1._movements.push(250);
acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
