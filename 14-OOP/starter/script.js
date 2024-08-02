'use strict';

const Person = function (firstName , bithYear) {
  this.firstName = firstName
  this.bithYear = bithYear


  //NEVER DO THIS
  // this.calcAge = function(){
  //   console.log(2024-this.bithYear)
  // }
}

const vinic = new Person('Vinic', 2001)
console.log(vinic)

//1. New empyty object is created
//2. Function is caller , this = {}
//3. {} LINKED TO PROTOTYPE
//4. functio automatically return {}

const matilda = new Person('Matilda', 1987)
const luke = new Person('Luke', 1978)
console.log(matilda,luke)

console.log(vinic instanceof Person)

//Prototype
console.log(Person.prototype)

Person.prototype.calcAge = function(){
  console.log(2024-this.bithYear)
}

vinic.calcAge()