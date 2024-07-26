'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//LECTURES

// //Selecting Elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// const header = document.querySelector('.header');
// const allSection = document.querySelectorAll('.section');
// console.log(allSection);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// //Creating and inserting Elements  .insertAdjacentHTML
// const message = document.createElement('div');
// message.classList.add('cookie-message');

// message.textContent =
//   'We use cookied for improved funcionality and analitytics';

// message.innerHTML =
//   'We use cookied for improved funcionality and analitytics<button class = "btn btn--close-cookie">Got It!</button>';

// // header.prepend(message)
// header.append(message);
// // header.append(message.cloneNode(true))

// // header.before(message)
// // header.after(message)

// //Delete Elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// //Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color)
// console.log(message.style.backgroundColor)

// console.log(getComputedStyle(message).color)
// console.log(getComputedStyle(message).height)

// message.style.height =
//    Number.parseFloat(getComputedStyle(message).height, 10)+ 30 + 'px'

// document.documentElement.style.setProperty('--color-primary','orangered')

// //atributes1
// const logo = document.querySelector('.nav__logo')
// console.log(logo.alt)
// console.log(logo.src)

// //Non-standard
// console.log(logo.designer)
// console.log(logo.getAttribute('designer'))
// logo.setAttribute('company','Bankist')

// console.log(logo.src)
// console.log(logo.getAttribute('src'))

// const link = document.querySelector('.nav__link--btn')
// console.log(link.href)
// console.log(link.getAttribute('href'))

// //Data Attributes
// console.log(logo.dataset.versionNumber)

// //Classes
// logo.classList.add('c','j')
// logo.classList.remove('c','j')
// logo.classList.toggle('c')
// logo.classList.contains('c') //not includes as arrays

// //Do not use
// logo.className = 'Vini' //override everthing

//Smooth Scroll

//1-Selecting Elements
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

//2-Adding the event listener
btnScrollTo.addEventListener('click', function (e) {
  const s1coord = section1.getBoundingClientRect(); //getting the coordinates
  console.log(s1coord);

  console.log(e.target.getBoundingClientRect());

  console.log('Cuurent scroll(X/Y', window.pageXOffset, window.pageYOffset);

  //Scrolling
  //   window.scrollTo(
  //   s1coord.left + window.pageXOffset,
  //   s1coord.top + window.pageYOffset,)
  // })

  //Old School way
  //   window.scrollTo({
  //     lef: s1coord.left + window.pageXOffset,
  //     top: s1coord.top + window.pageYOffset,
  //     behavior: 'smooth',
  //   });

  //Modern Way
  section1.scrollIntoView({ behavior: 'smooth' });
});