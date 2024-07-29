'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
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


//Scrolling
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

//Page NAVIGATION - in children
// document.querySelectorAll(".nav__link").forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href')
//     const section = document.querySelector(id)
//     section.scrollIntoView({behavior:'smooth'})
//   })
// })

//Page NAVIGATION - in parent element
//1-Add event listrnrt to common parent element
//2- Determine what element originated the event

document.querySelector(".nav__links").addEventListener('click',function(e){
  e.preventDefault()

  //Matching strategy
  if(e.target.classList.contains("nav__link")){
    const id = e.target.getAttribute('href')
    const section = document.querySelector(id)
    section.scrollIntoView({behavior:'smooth'})
  }
})

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

// //1-Selecting Elements
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// //2-Adding the event listener
// btnScrollTo.addEventListener('click', function (e) {
//   const s1coord = section1.getBoundingClientRect(); //getting the coordinates
//   console.log(s1coord);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Cuurent scroll(X/Y', window.pageXOffset, window.pageYOffset);

//   //Scrolling
//   //   window.scrollTo(
//   //   s1coord.left + window.pageXOffset,
//   //   s1coord.top + window.pageYOffset,)
//   // })

//   //Old School way
//   //   window.scrollTo({
//   //     lef: s1coord.left + window.pageXOffset,
//   //     top: s1coord.top + window.pageYOffset,
//   //     behavior: 'smooth',
//   //   });

//   //Modern Way
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// //DOM TRAVERSING
// const h1 = document.querySelector('h1')

// //Going downwards: child
// console.log(h1.querySelectorAll(".highlight"))
// console.log(h1.childNodes)
// console.log(h1.children) //only wors to direct children
// h1.firstElementChild.style.color = 'white'
// h1.lastElementChild.style.color = 'red'


// //Going upwards: parents
// console.log(h1.parentNode)
// console.log(h1.parentElement)

// //You can tink in closest as the oppostite of querySelector, because query go deep as can in DOM tree, and the closes go more shallow as possible
// h1.closest('.header').style.background = 'var(--gradient-secondary)'
// h1.closest('h1').style.background = 'var(--gradient-secondary)'

// //Going sideways - siblings
// console.log(h1.previousElementSibling)
// console.log(h1.nextElementSibling)

// console.log(h1.previousSibling)
// console.log(h1.nextSibling)

// console.log(h1.parentElement.children); //all the sibling inlcude the el in self

// [...h1.parentElement.children].forEach(function(el){
//   if(el !== h1) el.style.transform = 'scale(0.5');
// });