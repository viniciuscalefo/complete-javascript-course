'use strict';
// CALL AND APLLY METHODS
const lufthansa = {
  airline:'Lufthansa',
  iataCode:'LH',
  bookings: [],
  book(flightNum,name){
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
    this.bookings.push({flight: `${this.iataCode}${flightNum}`,name})
  }
}

lufthansa.book(239,'Vincius')
lufthansa.book(635,'Max Silva')
console.log(lufthansa.bookings)

const eurowings ={
  airline:'Eurowings',
  iataCode:'EW',
  bookings: [],  
}

const book = lufthansa.book
// book(23,'Sarah Willians') //doesnt work
//With the call method the first paramter is to where the word this is appointing, and the next arguments is the default parametes functions
book.call(eurowings,23,'Sarah Willians')
book.call(lufthansa,239,'MATY')
console.log(lufthansa.bookings)

const swiss = {
  airline:'Sweiss Air Lines',
  iataCode:'LX',
  bookings: [],  
}
book.call(swiss,'583','Jorge Aramsi')

//Apply method -> is bassicalt the same as call, but dont recieve parameter after the this reference, but an a list of arguments
const flightData = [583,'Geoger cooper']
book.apply(swiss,flightData)
console.log(swiss)

// the apply is not mores used, now we can use the call methos with the spread operator
book.call(swiss,...flightData)
console.log(swiss)




//BIND METHOD
// book.call(eurowings,23,'Sarah Willians')

const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)
const bookSW = book.bind(swiss)

bookEW(23,'Willian Vangenace')

const bookEW23 = book.bind(eurowings,23)
bookEW23('Jonas Shmetd')
bookEW23('Martha cooper')

//With event listener
lufthansa.planes = 300
lufthansa.buyPlane = function(){
  console.log(this)
  this.planes++
  console.log(this.planes)
}
document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa))

//Partial Applications
const addTax = (rate, value) => value + value * rate
console.log(addTax(0.10 , 200))

const addVAT = addTax.bind(null,0.23)
// const addVAT = (rate, value) => value + value *0.23 is the same thing as above line 
console.log(addVAT(100))
console.log(addVAT(23))

const addTaxRate = function(rate){
  return function(value){
    return value + value * rate
  }
}

const addVAT2 = addTaxRate(0.23)
console.log(addVAT2(100))
console.log(addVAT2(23))



// //HOW PASSING ARGUMENTS WORKS: VALUE VS REFERENCE
// const flight = 'LH234'
// const vini = {
//   name:'Vinicius Calefo',
//   passport: 47953726831,
// }

// const checkIn = function(flightNum,passenger){
  //   flightNum = 'LH999'
  //   passenger.name = 'Mr.' + passenger.name //Why this change happend and the above variable dont?

//   if(passenger.passport === 47953726831){
  //     console.log('Check In')
  //   }else{
//     console.log("Wrong passport")
//   }
// }

// // checkIn(flight, vini)
// // console.log(flight)
// // console.log(vini)

// const newPassport = function(person){
  //   person.passport = Math.trunc(Math.random()*10000000000000)
// }

// newPassport(vini)
// checkIn(flight,vini)




// //DEFALT VALUES
// const bookings = [];
// const createBooking = function (
  //   flightNum,
  //   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
  //   //Old way to pass default values: flightNum = flightNum || 1 - in this case 1 is a default value
  //   const booking = {
    //     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);



//FUNCTIONS ACCEPT CALLBACK FUNCTIONS
    // const oneWord = function(str){
    //   return str.replace(/ /g, '').toLowerCase()
    // }
    
    // const upperFirstWord = function(str){
    //   const[first,...others] =  str.split(' ')
    //   return [first.toUpperCase(),...others].join(' ')
    // }
    
    // //Highorder funcstion -> recieves another functions as parameter
    // const tranformer = function(str,fn){
    //   console.log(`Original String ${str}`)
    //   console.log(`Transformed string ${fn(str)}`) //here the callback function is call
    
    //   console.log(`Tranformed by: ${fn.name}`)
    
    
    // }
    
    // tranformer('JavaScript is the best!',upperFirstWord) //callback functions because they gonne be executed later in another function( trnaformer in this case)
    // console.log(' ')
    // tranformer('JavaScript is the best!',oneWord)
    
    // const high5 = function(){
    //   console.log('HIGH FIVE')
    // }
    // document.body.addEventListener('click',high5)

    // FUNCTION CALLING FANCTIONS

// const greet = function(greeting){
//   return function(name){
//     console.log(`${greeting} ${name}`)
//   }
// }
// const greetArrow = (greetingArrow)=>{ 
//   return (nameArrow)=>{
//     console.log(`${greetingArrow} ${nameArrow}`)
//   }
// };

// console.log('NOMAL FUNCITONS')
// const greeterHey = greet('hey')
// greeterHey('jonas')
// greeterHey('steve')
// greet('Hello')('Vicius')// call the first functions and already using the return function. All in one line

// console.log(' ')

// console.log('ARROW FUNCITONS')
// const Arrow = greetArrow('SALVE')
// Arrow('Vinic')
// Arrow('kalib')
// greet('Hello')('Vicius')// call the first functions and already using the return function. All in one line