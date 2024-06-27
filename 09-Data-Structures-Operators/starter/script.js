'use strict';

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

  openingHours: {
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
  },

  order: function (starterIndex, mainIndex) {
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
};

/*SPREAD OPERATOR */
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

//JOIN 2 ARRAYS
const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(fullMenu);

//Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

//Real World Example
const ingridients = [
  prompt('Lets´s make pasta ingredient 1 ?'),
  prompt('ingredient 2 ?'),
  prompt('ingredient 3 ?'),
];

console.log(ingridients);
//Parameters to a function
restaurant.orderPasta(...ingridients);

//Objects
const newResteurant = { foundenYear: 2024, ...restaurant, founder: 'Vinera' };
console.log(newResteurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'VINEIRA FOODS';
console.log(restaurant.name);
console.log(restaurantCopy.name);
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
