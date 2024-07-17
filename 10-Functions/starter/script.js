'use strict';

(function(){
  const header = document.querySelector('h1')
  header.style.color = 'red'

  document.querySelector('body').addEventListener('click',function(){
    header.style.color = 'blue'
  })
})()



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




// CALL AND APLLY METHODS
// const lufthansa = {
//   airline:'Lufthansa',
//   iataCode:'LH',
//   bookings: [],
//   book(flightNum,name){
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
//     this.bookings.push({flight: `${this.iataCode}${flightNum}`,name})
//   }
// }

// lufthansa.book(239,'Vincius')
// lufthansa.book(635,'Max Silva')
// console.log(lufthansa.bookings)

// const eurowings ={
//   airline:'Eurowings',
//   iataCode:'EW',
//   bookings: [],  
// }

// const book = lufthansa.book
// // book(23,'Sarah Willians') //doesnt work
// //With the call method the first paramter is to where the word this is appointing, and the next arguments is the default parametes functions
// book.call(eurowings,23,'Sarah Willians')
// book.call(lufthansa,239,'MATY')
// console.log(lufthansa.bookings)

// const swiss = {
//   airline:'Sweiss Air Lines',
//   iataCode:'LX',
//   bookings: [],  
// }
// book.call(swiss,'583','Jorge Aramsi')

// //Apply method -> is bassicalt the same as call, but dont recieve parameter after the this reference, but an a list of arguments
// const flightData = [583,'Geoger cooper']
// book.apply(swiss,flightData)
// console.log(swiss)

// // the apply is not mores used, now we can use the call methos with the spread operator
// book.call(swiss,...flightData)
// console.log(swiss)




// //BIND METHOD
// // book.call(eurowings,23,'Sarah Willians')

// const bookEW = book.bind(eurowings)
// const bookLH = book.bind(lufthansa)
// const bookSW = book.bind(swiss)

// bookEW(23,'Willian Vangenace')

// const bookEW23 = book.bind(eurowings,23)
// bookEW23('Jonas Shmetd')
// bookEW23('Martha cooper')

// //With event listener
// lufthansa.planes = 300
// lufthansa.buyPlane = function(){
//   console.log(this)
//   this.planes++
//   console.log(this.planes)
// }
// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa))

// //Partial Applications
// const addTax = (rate, value) => value + value * rate
// console.log(addTax(0.10 , 200))

// const addVAT = addTax.bind(null,0.23)
// // const addVAT = (rate, value) => value + value *0.23 is the same thing as above line 
// console.log(addVAT(100))
// console.log(addVAT(23))

// const addTaxRate = function(rate){
//   return function(value){
//     return value + value * rate
//   }
// }

// const addVAT2 = addTaxRate(0.23)
// console.log(addVAT2(100))
// console.log(addVAT2(23))


///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer(){
//     const answer = Number(prompt(`${this.question} ${this.options.join('\n')} Write your number`))
//     if(answer < this.answers.length){
//       this.answers[answer]++
//     }else{
//       console.log('Invalido')
//     }
//     this.displayResults()
//     this.displayResults('string')
//   },

//   displayResults(type = 'array'){
//     if(type === 'array'){
//       console.log(this.answers)
//     }else if( type === 'string')
//       console.log(`Poll results: ${this.answers.join(', ')}`)

//   },
// }
// const btn = document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))

// poll.displayResults.call({answers:[5, 2, 3]})
// poll.displayResults.call({answers:[1, 5, 3, 9, 6, 1]})





// //IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// const runOnce = function(){
//   console.log('This will never run again')
// }
// runOnce();

// //How we do that? wrap the function wth () and call immediatily
// (function (){
//   console.log('This will never run again')
// })();

// //Can do with arrow function to 
// ( ()=> console.log('This ALSO run once')) ();




//CLOSURE
// const secureBooking = function(){
//   let passengerCount = 0; //can´t be acess from outside

//    return function(){
//     passengerCount++
//     console.log(`${passengerCount} passengers`)
//    }
// }

// const booker = secureBooking();
// booker()
// booker()
// booker()

// let f;

// const g = function(){
//   const a  = 23
//   f = function(){
//     console.log(a*2)
//   }
// }

// const h = function(){
//   const b = 777;
//   f = function(){
//     console.log(a*2)
//   }
// }

// g()
// f()
// console.dir(f)

// //Re-assigning f function
// h()
// f()
// console.dir(f)