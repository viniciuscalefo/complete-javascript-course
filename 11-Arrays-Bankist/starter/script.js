'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// FOREACH WITH MAPS AND SETS

//Map
currencies.forEach ((value,key,map)=>{
  console.log(value,key,map)
})

//Set
const currenciesUnique = new Set([''])


//ARRAY METHODS

// let arr = ['a','b','c','d','e']
// console.log(arr.slice(2)) //not mutating the old array, returns a  new array but only with extracts parts
// console.log(arr.slice(2,4)) //not include de end parameter
// console.log(arr.slice(-1)) //negative paramter works to
// console.log(arr.slice(1,-2))
// console.log(arr.slice()) //make a copy
// console.log([...arr]) //make a copy ot, both ways are correct

// //Splice -> mutates the original array
// // console.log(arr.splice(2))
// arr.splice(-1) //remove de last element
// console.log(arr)
// console.log(arr.splice(1,2))
// console.log(arr)  // -> splice delete other elements from original array

// //Reverse
// arr = ['a','b','c','d','e']
// const arr2 = ['j','i','h','g','f']
// console.log(arr2.reverse()) //mutate the original array
// console.log(arr2)

// //Concat
// const letters = arr.concat(arr2)
// console.log(letters)
// console.log([...arr,...arr2]) //same result, and dont mutate the original array to

// //Join
// console.log(letters.join(' - '))


//THE NEW AT METHOD
// const arr = [23,11,64]
// console.log(arr[0])
// console.log(arr.at(0))

// //Ways to get the last element
// console.log(arr[arr.length-1])
// console.log(arr.slice(-1)[0])
// console.log(arr.at(-1))


// FOREACH

// movements.forEach((movement,index)=>{
//   if(movement > 0){
//     console.log(`Deposit: ${movement} index: ${index}`)
//   } else{
//     console.log(`Withdrew: ${movement} index ${index}`)
//   }
// })