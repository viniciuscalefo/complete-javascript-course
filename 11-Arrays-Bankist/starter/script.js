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


const displayMovements = function(movements,sort = false){
  containerMovements.innerHTML = '' //cleaning the display
  //using slice to create a copy, beacause e dont want change the original
  const movs = sort ? movements.slice().sort((a,b) => a-b) : movements

  movs.forEach((value,index)=>{
    const type = value > 0 ? 'deposit':'withdrawal' 
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${index+1} ${type}</div>
          <div class="movements__value">R$ ${value}</div>
        </div>
    `
    containerMovements.insertAdjacentHTML('afterbegin',html) //Insert elements in container element, the afterbegin makes the order os elements
  })
}

const createUsername = function(accs){
  accs.forEach((acc)=>{
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(words => words[0])
    .join('')
  })
}
createUsername(accounts)

const calcDisplayBalance = function(acc){
  acc.balance = acc.movements.reduce((acc,val)=> acc+val, 0)
  labelBalance.textContent = `R$ ${acc.balance}`
}

const calcDisplaySummary = function(acc){
  const incomes = acc.movements
  .filter(mov => mov>0)
  .reduce((acc,mov)=> acc+ mov , 0)
  labelSumIn.textContent = `R$ ${incomes}`


  const out = acc.movements
  .filter(mov => mov<0)
  .reduce((acc,mov)=> acc+ mov , 0)
  labelSumOut.textContent = `R$ ${Math.abs(out)}`


  const interest = acc.movements
  .filter(mov => mov > 0)
  .map(deposit => deposit * acc.interestRate/100)
  .filter((int,i,acc)=>{
    return int >=  1
  })
  .reduce((acc,int)=>acc + int , 0)
  labelSumInterest.textContent = `R$ ${Math.abs(interest)}`
}

//Updating the UI interface with 3 different functions
const updateUI = function(acc){

    //Display movements
    displayMovements(acc.movements)

    //Display balance
    calcDisplayBalance(acc)

    //Displat movements
    calcDisplaySummary(acc)

}



//Event Handler
let currentAccount;
btnLogin.addEventListener('click',function(event){
  event.preventDefault()
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)

  if(currentAccount?.pin === Number(inputLoginPin.value)){
    //Display UI and Welcome Message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100

    //Clear inputs Fields
    inputLoginUsername.value = inputLoginPin.value = ''

    inputLoginPin.blur()
    
    updateUI(currentAccount)

  }
})


//Implemting Tranfers between accounts
btnTransfer.addEventListener('click',function(e){
  e.preventDefault()
  //Getting fields value
  const amount = +inputTransferAmount.value
  const receiverAcc = accounts.find( //find th receiver
    acc => acc.username ===inputTransferTo.value
  )
  inputTransferAmount.value = inputTransferTo.value = ''

  //Check
  if(amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount?.username){

      //Doing the transfer
      currentAccount.movements.push(-amount)
      receiverAcc.movements.push(+amount)
      updateUI(currentAccount)
    }
})

btnLoan.addEventListener('click',function(e){
  e.preventDefault()

  const amount = Number(inputLoanAmount.value)
  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){

    //add the movement
    currentAccount.movements.push(amount)
    updateUI(currentAccount)
  }

  inputLoanAmount.value = ''
})


//Closing a account
btnClose.addEventListener('click', function(e){
  e.preventDefault()

  
  if(currentAccount.username == inputCloseUsername.value &&
    currentAccount.pin == Number(inputClosePin.value)){
      const index = accounts.findIndex(acc => acc.username === currentAccount.username )
      
      //Delete account
      accounts.splice(index , 1)
      
      //Hide UI
      containerApp.style.opacity = 0
    }
    //Cleaning the fileds
    inputCloseUsername.value = inputClosePin.value = ''
})


let checkSort = false
btnSort.addEventListener('click',function(e){
  e.preventDefault()
  displayMovements(currentAccount.movements,!checkSort)
  checkSort = !checkSort
})

/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////////////////
// //ARRAY EXERCICISES
// //#1- SUM ALL DEPOSITS
// const bankDepositSum = accounts
// .flatMap(acc => acc.movements)
// .filter(mov => mov>0)
// .reduce((sum,acc) => sum + acc , 0)
// console.log(bankDepositSum)

// //#2- Number of  DEPOSITS ABOVE 1000
// // const numDeposits1000 = accounts
// // .flatMap(acc => acc.movements)
// // .filter(mov => mov>=1000).length

// // console.log(numDeposits1000)
// // //using reduce
// const numDeposits1000 = accounts
// .flatMap(acc => acc.movements)
// .reduce((count,cur) => (cur >= 1000? count + 1 : count) ,0) //could be ++count to 
// console.log(numDeposits1000)

// //#3
// const {deposits,withdrawals} = accounts
// .flatMap(acc => acc.movements)
// .reduce((sums,cur)=>{
//   cur > 0 ? sums.deposits += cur:sums.withdrawals +=cur ;
//   return sums
// },{deposits:0,withdrawals:0})

// console.log(deposits)
// console.log(withdrawals)

// //#4
// const convertTitleCase = function(title){
//   const exceptions = ['a','an','the','but','or','on','in','with','and']
//   const titleCase = title.toLowerCase().split(' ').map(word=>exceptions.includes(word)?word: word[0].toUpperCase() + word.slice(1)
//   ).join(' ')
//   return titleCase
// }
// console.log(convertTitleCase('this is a nice lng title'))


///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).


HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion. 
GOOD LUCK 😀TEST DATA:*/

//1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)*/
const dogs = [
{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
{ weight: 8, curFood: 200, owners: ['Matilda'] },
{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
{ weight: 32, curFood: 340, owners: ['Michael'] }
];

const recommendedFood = dogs.forEach((dog)=>{
  dog.recFood = (dog.weight **0.75 *28)
})

//2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

const dogSara = dogs.find(dog => dog.owners.includes('Sarah'))
console.log(`Sarah´s dog is eaten to ${dogSara.curFood>dogSara.recFood?'much':'little'}`)

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
const owner = dogs.flatMap(dog => {
  dog.curFood > dog.recFood ? ownersEatTooMuch.push(dog.owners):ownersEatTooLittle.push(dog.owners)
})
console.log(ownersEatTooLittle.flat())
console.log(ownersEatTooMuch.flat())

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(ownersEatTooLittle.flat().toString().replaceAll(',',' and ') + ' eat too little')
console.log(ownersEatTooMuch.flat().toString().replaceAll(',',' and ') + ' eat too much')

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
const eatCorrect =  dogs => dogs.curFood === dogs.recFood
console.log(dogs.some(eatCorrect))

// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
const okayFood = dogs=> dogs.curFood > dogs.recFood * 0.9 && dogs.curFood < dogs.recFood * 1.1 
console.log(dogs.some(okayFood))

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
console.log(dogs.filter(okayFood))

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
const dogsCopy = dogs.slice().sort((a,b) => a.recFood - b.recFood)
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


// FOREACH WITH MAPS AND SETS

// //Map
// currencies.forEach ((value,key,map)=>{
//   console.log(value,key,map)
// })

// //Set
// const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR'])
// console.log(currenciesUnique)
// currenciesUnique.forEach((value,_,map)=>{
// console.log(`${_}:${value}`)
//  }) 


///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function(dogsJulia , dogsKate){
//   const dogsJuliaCopy = [...dogsJulia]
//   dogsJuliaCopy.splice(0,1)
//   dogsJuliaCopy.splice(-2)


//   const jkArray = dogsJuliaCopy.concat(dogsKate)
//   jkArray.forEach((dog,index)=>{
//     console.log(`Dog number ${index} is an ${dog >=3?'adult':'puppy'}, and is ${dog} years old`)
//   })
// }



// //THE MAP METHOD
// const eutToUsd = 1.1

// const movementsUsd = movements.map(mov=> mov * eutToUsd)
// //This works to
// // const movementsUsd2 = movements.map(function(mov){
// //   return mov*eutToUsd
// // })
// console.log(movements)
// console.log(movementsUsd)

// //With for of loop
// const movementsUSDfor = []
// for(const mov of movements) movementsUSDfor.push(mov*eutToUsd)
//   console.log(movementsUSDfor)

// const movementDescription = movements.map((mov,i)=>
//   `Movement ${i + 1}: You ${mov > 0? 'deposited':'withdrew'} ${Math.abs(mov)}`)
// console.log(movementDescription)
// checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3])

// THE FILTER METHOD
// const deposits = movements.filter(function (mov){
//   return mov > 0
// })

// console.log(movements)
// console.log(deposits)

// const depositsFor = []
// for(const mov of movements) if (mov > 0) depositsFor.push(mov)
// console.log(depositsFor)

// const withdrawalsArray = movements.filter(mov=> mov<0)
// console.log(withdrawalsArray)

//REDUCE METHOD
// console.log(movements)
// const balance = movements.reduce(function(acc,cur,i,arr){
//   console.log(`Iteration: ${i}: ${acc}`)
//   return acc+cur
// },0)
// console.log(balance)

// //Maximun value
// const max = movements.reduce((acc,mov)=> acc > mov ? acc : mov ,movements[0])
// console.log(max)

/////////////////////////////////////////////////

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const calcAverageHumanAge = function(ages){
//   let humansAge = []
//   let humanAge = 0
//   ages.forEach((age)=>{
//     if(age <= 2){
//       humanAge = 2 * age
//       humansAge.push(humanAge)
//     }else{
//       humanAge = 16 + age * 4
//       humansAge.push(humanAge)
//     }
//   })
//   const filtedArray = humansAge.filter(ages=> ages>18).reduce((acc,age)=>acc+age ,0)
//   const avg = filtedArray/humansAge.filter(ages=> ages>18).length
//   console.log(`Averegae: ${avg}`)
// }


// const calcAverageHumanAge = function(ages){
//   const humanAges = ages.map(age=> age <=2 ? 2*age : 16+age*4)
//   const adults = humanAges.filter(age=> age>18)
//   const avg = adults.reduce((acc,age)=> acc+age ,0) / adults.length
//   console.log(avg)
// }
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])



//MAGIC OF CHAINING METHODS
//  const eutToUsd = 1.1

//  //Pipeline
//  const totalDeposit = movements
//  .filter(mov => mov>0)
//  .map(mov=> mov * eutToUsd)
//  .reduce((acc,mov)=> acc + mov ,0)

// console.log(totalDeposit)


///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/


// const calcAverageHumanAge = ages => ages
//     .map(age=> age <=2 ? 2*age : 16+age*4)
//     .filter(age=> age>18)
//    .reduce((acc,age,arr)=> acc+age / arr.length ,0) / adults.length
  
//   calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])


//FIND METHOD
// const withdrew = movements.find(mov => mov < 0)
// console.log(withdrew)

// const jessica = accounts.find(acc => acc.owner ==='Jéssica Davis')
// console.log(jessica)



//SOME
// console.log(movements)

// //Equality
// console.log(movements.includes(-130))
// // this will be the same as movement.some(mov => mov === -130)

// //Know if this account have any deposits ( any positve number above 0
// //Condition
// const anyDeposits = movements.some(mov => mov > 0)
// console.log(anyDeposits) // if any number satisfy the condition the function will return true


// //EVERY -> Only return true if all elements satisfy the conditions
// console.log(movements.every(acc => acc > 0))
// console.log(account4.movements.every(acc => acc > 0))


// //Separete Callback
// const deposit = mov => mov > 0
// console.log(movements.some(deposit))
// console.log(movements.every(deposit))
// console.log(movements.filter(deposit))





//FLAT ANF FLATMAP
// const arr = [[1,2,3],[4,5,6,7,8]]
// console.log(arr.flat()) //Only go onr level deep

// const arrDeep = [[[1,2],3],[4,[5,6]],7,8]
// console.log(arrDeep.flat(2)) //Number of nested array

// //Getting all moviments in a nested array
// const accountMovements = accounts.map(acc => acc.movements)
// const allMovements = accountMovements.flat() //join all
// console.log(allMovements)
// //Sum all
// const overall = allMovements.reduce((acc,mov) => acc+mov , 0)
// console.log(overall)

// //Chaining All - flat
// const overallBalance = accounts
// .map(acc => acc.movements)
// .flat()
// .reduce((acc,mov) => acc + mov ,0)
// console.log(overallBalance)

// //Flat Map
// const overallBalance2 = accounts
// .flatMap(acc => acc.movements)
// .reduce((acc,mov) => acc + mov ,0)
// console.log(overallBalance)


//SORTING
// //Strings'
// const owners = ['Jonas','ZAck', 'Adam', 'Matha']
// console.log(owners.sort()) //mutates the original string
// console.log(owners) //mutates the original string

// //Numbers
// console.log(movements) //dint sort correctly

// //return < 0, A,B (keep order)
// //return > 0, B,A (switch order)
// //Ascending
// // movements.sort((a,b)=>{
// //   if(a > b)
// //     return 1
// //   if(a < b)
// //     return -1
// // })
// movements.sort((a,b)=> a - b)
// console.log(movements)

// //Descending
// // movements.sort((a,b)=>{
//   //   if(a > b)
//   //     return -1
// //   if(a < b)
// //     return 1
// // })
// movements.sort((a,b)=> b - a)
// console.log(movements)


// //Creating and Filling arrays
// const arr = [1,2,3,4,5,6,7]
// console.log(new Array(1,2,3,4,5,6,7))

// const x = new Array(7)
// console.log(x)
// // console.log(x.map(()=>5))

// // x.fill(1)
// x.fill(1,3)
// console.log(x)

// arr.fill(23,4,6)
// console.log(arr)

// //Array.from
// const y = Array.from({length:7}, () => 1)
// console.log(y)

// const z = Array.from({lenght:7},(_, i) => i+1);
// console.log(z)


// labelBalance.addEventListener('click',function(){
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value')
//   );
//   console.log(movementsUI.map(el=> el.textContent.replace('$','')))
// })
