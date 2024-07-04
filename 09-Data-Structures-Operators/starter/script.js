'use strict';
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enchanced object literals
  openingHours,

    //ES6 enchanced functios methods
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivey: function (starterIndex, mainIndex, time, address) {
    console.log(
      `Order recived ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function(mainIngredient , ...otherIngredient){
    console.log(mainIngredient)
    console.log(otherIngredient)
  }
};

// OPTIONAL CHAINING
if(restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open)

//WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open) 














/*DESTRUCTING ARRAY */
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr; //destructing

// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories; //skiping the second element
// console.log(main, secondary)
//   /*Switching two variables with brute force*/
//   const temp = main
//   main = secondary
//   secondary = temp
//   console.log(main,secondary)

//   /*Switching two variables with destructing*/
// [main, secondary] = [secondary, main]
// console.log(main, secondary);

// //Recieve 2 return values from a function
// const [starter,mainCorse] = restaurant.order(2,0)

// const nested = [2,4,[5,6]];
// const [firstValue,,nestValue] = nested
// console.log(firstValue , nestValue)
// const [i, , [j,k]] = nested
// console.log(i , j , k)

// //Default Values
// const [p =1,q=1,r=1] = [8,9]
// console.log(p,q,r)







// /*DESTRUCTING OBJECTS  */
// const {name,openingHours,categories} = restaurant
// console.log(name, openingHours ,categories)

// //changing the varibles names
// const {
//   name:restaurantName,
//   openingHours:hours,
//   categories:tags
// } = restaurant
// console.log(restaurantName , hours , tags)

// //Default Values
// const {menu = [ ] ,starterMenu:starters = [] } = restaurant
// console.log(menu , starters)

// //Mutating Varibles
// // let a = 111
// // let b = 999
// //  const obj = {a:23 , b:7 , c:14}

// // ({ a , b } = obj)
// // console.log(a,b)

// //Nested Objects
// const {fri: {open:abertura,close:fechamento}} = openingHours
// console.log(abertura, fechamento)

// restaurant.orderDelivey({
//   time:'22:30',
//   address:"Av do cucucu",
//   mainIndex: 2,
//   starterIndex:2
// })






// /*SPREAD OPERATOR */
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// //JOIN 2 ARRAYS
// const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(fullMenu);

// //Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// //Real World Example
// const ingridients = [
//   prompt('Lets´s make pasta ingredient 1 ?'),
//   prompt('ingredient 2 ?'),
//   prompt('ingredient 3 ?'),
// ];

// //Old way to pass parameter to a function
// restaurant.orderPasta(ingridients[0] , ingridients [1] , ingridients[2])
// console.log(ingridients);

// //Better way to pass Parameters to a function
// restaurant.orderPasta(...ingridients);

// //Objects
// const newResteurant = { foundenYear: 2024, ...restaurant, founder: 'Vinera' };
// console.log(newResteurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'VINEIRA FOODS';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);






// /*REST PATTERNS AND PARAMETERS*/
 
// // 1 - DESTRUCTING
// //SPREAD, because on RIGHT side of = sign
// const arr = [1,2,...[3,4]]

// //REST, because on LEFT side of = sign
// const [a,b,...others] =  [1,2,3,4,5] //the rest must be always the last element
// console.log(a,b,others)

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza , risotto , others)

// //Objects
// const {sat,...weekdays} = restaurant.openingHours;
// console.log(sat)
// console.log(weekdays)

// //2 - functions
// //In this case i want passa mutiples parameters without a specif parameters number
// const add = function(...numbers){
  //   let sum = 0
//   for(let i = 0 ; i < numbers.length ; i++){
//     sum += numbers[i]
   
//   } console.log(sum)
// }
// add(1,2,6,6)

// const x  = [23,5,7]
// add(...x) // this is similar to write the entire array one by one: add(23,5,7)
// restaurant.orderPizza("mushrooms",'pizza', 'avocado')






// /*SHORT CIRCUITING ( && AND ||)*/
// console.log("******OR*********")
// //OR OPERATOR
// //Use ANY detatype, return ny datatype , short-circuitng(if the 1st value is truth will return imediatily that value )
// console.log(3 || 'Vini');
// console.log('' || 'Vini'); //empy string is false
// console.log(true || 0); // 0 is s false value
// console.log(undefined || null); // undefined is a false value

// console.log(undefined || 0 || '' || 'hello' || 23 || null)

// // restaurant.numGuests = 4549
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
// console.log(guests1)
// //Better way to write and solve
// //Why works? If i not defined any value to restaurant.numGuest the value is undefined (a false value), otherwise will return the next truth value (10)
// const guests2 = restaurant.numGuests || 10

// console.log("******AND*********") //same OR logic operator but works in a opposite way.
// console.log(3 && 'Vini');
// console.log('' && 'Vini'); //empy string is false
// console.log(true && 0); // 0 is s false value
// console.log(undefined && null); // undefined is a false value

// const rest1 = {
//   name: "Capri1",
//   numGuests: 10,
// }

// const rest2 = {
//   name: "La Piazza",
//   owner: 'vKali',
// }

//OR assigment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10 //More concise way
// rest2.numGuests ||= 10 //More concise way

//nuulish assigment operator(null or undefined)
// rest1.numGuests ??= 10 //More concise way
// rest2.numGuests ??= 10 //More concise way

// console.log(rest1)
// console.log(rest2)





// ///////////////////////////////////////
// // Coding Challenge #1

// /* 
// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀*/
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1. Create one player array for each team (variables 'players1' and 'players2')
// const [players1,players2] = game.players
// console.log(players1,players2)


// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// const [gk,...fieldPlayers] = players1
// console.log(gk,fieldPlayers)

// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...players1,...players2]
// console.log(allPlayers)

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// const substitutions = ['Thiago', 'Coutinho' , 'Perisic']
// const players1Final = [...players1,...substitutions]
// console.log(players1Final)

// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// const {team1,x:draw,team2} = game.odds 
// console.log(team1,draw,team2,)

// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// function printGoals(...players){
//   console.log(`${players.length} goals were scored `)
// }
// printGoals(...game.scored)

// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
// team1>team2 && console.log('Team 1 is more likely to win')
// team2>team1 && console.log('Team 1 is more likely to win')



// /*USING THE FOR OF LOOP*/

// const menu = [...restaurant.starterMenu , ...restaurant.mainMenu]
// for(const item of menu) console.log(item)

// for(const item of menu.entries()) console.log(`${item[0]+1 }: ${item[1]}`) //if i want de index to old way
// for(const [i,el] of menu.entries()) console.log(`${i+1 }: ${el}`) //if i want de index to in modern way



