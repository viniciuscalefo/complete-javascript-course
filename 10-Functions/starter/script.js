'use strict';


const bookings = []

//Default Values  
const createBooking = function(
  flightNum,
  numPassengers=1,
  price=199*numPassengers
){
  //Old way to pass default values: flightNum = flightNum || 1 - in this case 1 is a default value
  const booking = {
    flightNum,
    numPassengers,
    price,
  }
  console.log(booking)
  bookings.push(booking)
}


createBooking('LH123')
createBooking('LH123',2,800)
createBooking('LH123',2)
createBooking('LH123',5)
