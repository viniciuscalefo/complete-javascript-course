'use strict';

// const Person = function (firstName , bithYear) {
//   this.firstName = firstName
//   this.bithYear = bithYear


//   //NEVER DO THIS
//   // this.calcAge = function(){
//   //   console.log(2024-this.bithYear)
//   // }
// }

// const vinic = new Person('Vinic', 2001)
// console.log(vinic)

// //1. New empyty object is created
// //2. Function is caller , this = {}
// //3. {} LINKED TO PROTOTYPE
// //4. functio automatically return {}

// const matilda = new Person('Matilda', 1987)
// const luke = new Person('Luke', 1978)
// console.log(matilda,luke)

// console.log(vinic instanceof Person)

// //Prototype
// console.log(Person.prototype)

// Person.prototype.calcAge = function(){
//   console.log(2024-this.bithYear)
// }

// vinic.calcAge()
// matilda.calcAge()

// console.log(vinic.__proto__)
// console.log(vinic.__proto__=== Person.prototype)

// console.log(Person.prototype.isPrototypeOf(vinic))
// console.log(Person.prototype.isPrototypeOf(matilda))
// console.log(Person.prototype.isPrototypeOf(luke))

// //.prototypeOfLinkedObjects
// Person.prototype.species = "Homo Sapiens"
// console.log(matilda.species , vinic.species)

// console.log(vinic.hasOwnProperty("firstName"))
// console.log(vinic.hasOwnProperty("species"))


// console.log(vinic.__proto__)//Person
// console.log(vinic.__proto__.__proto__) //Object
// console.log(vinic.__proto__.__proto__.__proto__) //null

// console.dir(Person.prototype.constructor)

// const arr = [5,9,8,7,9,4,4,5,5,] // is the same as new Array ====[]
// console.log(arr.__proto__)
// console.log(arr.__proto__ === Array.prototype)

// console.log(arr.__proto__.__proto__)

// Array.prototype.unique = function(){
//   return [...new Set(this)]
// }
// console.log(arr.unique())

// const h1 = document.querySelector('h1')


// ///////////////////////////////////////
// // Coding Challenge #1
// // 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// const Car = function(make,speed){
//   this.make = make
//   this.speed = speed
// }
// // 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// Car.prototype.accelerate = function(){
//   this.speed+=10
//   console.log(this.speed + 'km/h')
// }

// // 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// Car.prototype.brake = function(){
//   this.speed-=5
//   console.log(this.speed + 'km/h')
// }
// const bmw = new Car('BMW',120)

// // 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
// bmw.accelerate()
// bmw.accelerate()
// bmw.brake()
// bmw.accelerate()
// bmw.accelerate()

// const mercedes = new Car('Mercedes',95)
// mercedes.accelerate()
// mercedes.accelerate()
// mercedes.brake()
// mercedes.accelerate()
// mercedes.accelerate()


// //Class expression
// const PersonCl = class {}
// //Class declaration
// class PersonCl{
//   constructor(fullName, birthYear){
//     this.fullName = fullName
//     this.birthYear = birthYear
//   }

//   //Methods will be added to .prototype property
//   calcAge(){
//     console.log(2037 - this.birthYear)
//   }
//   greet(){
//       console.log(`Heyyyy ${this.firstName}`)
//     }
//   get age(){
//     return 2017 - this.age
//   }

//   //Set a property that already exists
//   set fullName(name){
//     console.log(name)
//     if(name.includes(" ")) this._fullName = name
//     else alert(`${name} is not a full name`)
//   }

//   get fullName(){return this._fullName}
// }
// const jessica = new PersonCl('Jessica Davis', 1996)
// jessica.calcAge()

// console.log(jessica.__proto__ === PersonCl.prototype)

// // PersonCl.prototype.greet = function(){
// //   console.log(`Heyyyy ${this.firstName}`)
// // }

// jessica.greet()

// // //1. Classes are not hoisted
// // //2. Classes are first-class citizes
// // //3.  Classes are executed in strict mode 

// const walter = new PersonCl('Walter Roy',1987)





// const account = {
//   owner:'Jonas',
//   _:[200,530,120,300],

//   get latest(){
//     return this.movements.slice(-1).pop()
//   },

//   set latest(mov){
//     return this.movements.push(mov)
//   },
// }

// console.log(account.latest)
// account.latest = 50
// console.log(account.movements)


// const PersonProto = {
//   calcAge(){
//     console.log(2037 - this.birthYear)
//   },

//   init(firstName,birthYear){
//     this.firstName = firstName
//     this.birthYear = birthYear
//   }
// }

// const steven  = Object.create(PersonProto)
// console.log(steven)
// steven.name = 'Steven'
// steven.birthYear = 2002
// steven.calcAge()

// console.log(steven.__proto__)

// const sara  = Object.create(PersonProto)
// sara.init('Sarah',2001)
// sara.calcAge()


////////////////////////////////////////////
//////////////CODING CHALLENGE #2///////////////////////////
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }  
  
//   accelerate() {
//     this.speed+=10
//     console.log(this.speed + 'km/h')
//   }

//   brake(){
//     this.speed-=5
//     console.log(this.speed + 'km/h')
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed*1.6
//   }
// }
// const ford = new CarCl("Ford" , 120)

// console.log(ford.speedUS)
// ford.speedUS = 50
// console.log(ford.speed)



////Inheritance between classes

// const Person = function (firstName , birthYear) {
//   this.firstName = firstName
//   this.birthYear = birthYear
// };
// Person.prototype.calcAge = function(){
//   console.log(2037 - this.birthYear)
// }

// const Student = function(firstName,birthYear,course){
//   Person.call(this,firstName,birthYear)
//   this.course = course
// }
// //Linking Prototype
// Student.prototype = Object.create(Person.prototype)
// Student.prototype.introduce = function(){
//   console.log(`My name is ${this.firstName} and I study ${this.course}`)
// }

// const mike  = new Student('Mike', 2020,'Computer Science')
// console.log(mike)
// mike.introduce()
// mike.calcAge()

// console.log(mike.__proto__)
// console.log(mike.__proto__.__proto__)

// console.log(mike instanceof Student)
// console.log(mike instanceof Person)

// Student.prototype.constructor = Student
// console.dir(Student.prototype.constructor)


///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
// const Car = function(make, speed){
//   this.make = make
//   this.speed = speed
// }
// Car.prototype.accelerate = function(){
//   this.speed += 10
//   console.log(`${this.make} is going ate ${this.speed} km/h`)
// }
// Car.prototype.brake = function(){
//   this.speed -=5
//   console.log(`${this.make} is going ate ${this.speed} km/h`)
// }

// // 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
// const EV = function(make,speed,charge){
//     Car.call(this,make,speed)
//     this.charge = charge
// }

// //Link the Ptototypes
// EV.prototype = Object.create(Car.prototype)

// //New Function 
// EV.prototype.chargeBattery = function(chargeTo){
//   this.charge = chargeTo
// }

// EV.prototype.accelerate = function(){
//   this.speed += 20
//   this.charge--
//   console.log(`${this.make} is going ate ${this.speed} km/h with ${this.charge} %`)

// }

// const tesla = new EV('Tesla',120,23)
// tesla.chargeBattery(90)
// tesla.brake()
// tesla.accelerate()
// tesla.accelerate()

//Inheritance Between "Classes" ES6
// class PersonCl{
//     constructor(fullName, birthYear){
//       this.fullName = fullName
//       this.birthYear = birthYear
//     }
  
//     //Methods will be added to .prototype property
//     calcAge(){
//       console.log(2037 - this.birthYear)
//     }
//     greet(){
//         console.log(`Heyyyy ${this.firstName}`)
//       }
//     get age(){
//       return 2017 - this.age
//     }
  
//     //Set a property that already exists
//     set fullName(name){
//       if(name.includes(" ")) this._fullName = name
//       else alert(`${name} is not a full name`)
//     }
  
//     get fullName(){return this._fullName}

//     //Static Method 
//     static hey(){
//       console.log('Hey There')
//     }
//   }

// //Linking
// class StudentCl extends PersonCl {
//   constructor(fullName,birthYear,course){
//     //Always need to happen first
//     super(fullName,birthYear)
//     this.course = course
//   }

//   introduce(){
//     console.log(`My name is ${this.fullName} and I study ${this.course}`)
//   }

//   calcAge(){
//     console.log(`I am ${2037 - this.birthYear} year old but`)
// }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science' )
// martha.introduce()
// martha.calcAge()


/*Kinds of fields anf methods:
1) Public Fields
2) Private Fileds
3) Public Methods
4) Private Methods

*/

class Account {
  //1)Public Fields(instances)
  locale = navigator.language;
  
  //2) Private Fields(instances)
  #movements = [];
  #pin;
  
  constructor(owner,currency,pin){
    this.owner = owner
    this.currency = currency
    //Protected property
    this.#pin = pin  
    // this._movements = []
    // this.locale = navigator.language

    console.log('Thanks for opening an account,' + this.owner)
  }

  // 3)Public Methods

  //Public Interface
  getMovements(){
    return this.#movements
  }
  deposit(val){
    this.#movements.push(val)
    return this
  }

  withdraw(val){
    this.deposit(-val)
    return this
  }

  requestLoan(val){
    if(this.#approveLoan(val)){
      this.deposit(val)
      console.log(`Loan Approved`)
      return this
    }
  }

  //4) Private Methods
  #approveLoan(val){
    return true
  }
}

const acc1 = new Account('Jonas','EUR',1111)
console.log(acc1)

acc1.deposit(250)
acc1.withdraw(140)
acc1.requestLoan(1000)
// acc1.#approveLoan(1000) 

console.log(acc1)
// console.log(acc1.#movements)
// console.log(acc1.#pin)

//Chaing

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2500).withdraw(4000)


///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make,speed,charge){
    super(make,speed)
    this.#charge = charge
  }

  chargeBattery(chargeTo){
    this.#charge = chargeTo
    return this
  }

  accelerate(){
    this.speed += 20
    this.#charge--
    console.log(`${this.make} is going ate ${this.speed} km/h with ${this.#charge} %`)
    return this
    }
}

const rivian = new EVCl('Rivian',120,23)
rivian.accelerate().accelerate().accelerate().brake().brake()