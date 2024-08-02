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
class PersonCl{
  constructor(fullName, birthYear){
    this.fullName = fullName
    this.birthYear = birthYear
  }

  //Methods will be added to .prototype property
  calcAge(){
    console.log(2037 - this.birthYear)
  }
  greet(){
      console.log(`Heyyyy ${this.firstName}`)
    }
  get age(){
    return 2017 - this.age
  }

  //Set a property that already exists
  set fullName(name){
    console.log(name)
    if(name.includes(" ")) this._fullName = name
    else alert(`${name} is not a full name`)
  }

  get fullName(){return this._fullName}
}
const jessica = new PersonCl('Jessica Davis', 1996)
jessica.calcAge()

console.log(jessica.__proto__ === PersonCl.prototype)

// PersonCl.prototype.greet = function(){
//   console.log(`Heyyyy ${this.firstName}`)
// }

jessica.greet()

// //1. Classes are not hoisted
// //2. Classes are first-class citizes
// //3.  Classes are executed in strict mode 

const walter = new PersonCl('Walter Roy',1987)





const account = {
  owner:'Jonas',
  movements:[200,530,120,300],

  get latest(){
    return this.movements.slice(-1).pop()
  },

  set latest(mov){
    return this.movements.push(mov)
  },
}

console.log(account.latest)
account.latest = 50
console.log(account.movements)


const PersonProto = {
  calcAge(){
    console.log(2037 - this.birthYear)
  },

  init(firstName,birthYear){
    this.firstName = firstName
    this.birthYear = birthYear
  }
}

const steven  = Object.create(PersonProto)
console.log(steven)
steven.name = 'Steven'
steven.birthYear = 2002
steven.calcAge()

console.log(steven.__proto__)

const sara  = Object.create(PersonProto)
sara.init('Sarah',2001)
sara.calcAge()


////////////////////////////////////////////
//////////////CODING CHALLENGE #2///////////////////////////
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }  
  
  accelerate() {
    this.speed+=10
    console.log(this.speed + 'km/h')
  }

  brake(){
    this.speed-=5
    console.log(this.speed + 'km/h')
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed*1.6
  }
}
const ford = new CarCl("Ford" , 120)

console.log(ford.speedUS)
ford.speedUS = 50
console.log(ford.speed)
