'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
//////////////////////////////////////////////////////
//Tabbed component
const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')
/////////////////////////////
//Nav
const nav = document.querySelector('.nav')

//Modal Window
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
//1-Add event listener to common parent element
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



//TABS
//Using event delegations -> adding the event handeler to the parent element, in this case is tabs container
tabsContainer.addEventListener('click',function(e){
  const clicked = e.target.closest('.operations__tab') //prevent clicking on the wrong element
 
  //Guard clause
  if(!clicked) return 

  //Remove active classes
  tabs.forEach(t=>t.classList.remove('operations__content--active'))
  tabsContent.forEach(c=>c.classList.remove('operations__content--active'))

  //Activate tab
  clicked.classList.add('operations__content--active')

  //Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})


//Menu fade Animations
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
//Passing a "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// //Sticky navigation
// const initialCoords = section1.getBoundingClientRect()

// window.addEventListener('scroll',function(){
//   if(window.scrollY > initialCoords.top){
//     nav.classList.add('sticky')
//   }else {
//     nav.classList.remove('sticky')
//   }
// })

//STICKY NAVIGATION; INTERSECTIONS OBERVER API
// const observerCallback = function(entries,observer){
//   entries.forEach(entry=>{
//     console.log(entry)
//   })
// }
// const observerOptions = {
//   root:null,
//   threshold:[0 , 0.2],
// }
// const observer = new IntersectionObserver(observerCallback,observerOptions);
// observer.observe(section1);

const header = document.querySelector('.header')
const navHeight = nav.getBoundingClientRect().height

const stickyNav = function(entries) {
  const [entry] = entries

  if(!entry.isIntersecting) nav.classList.add('sticky')
    else{
  nav.classList.remove('sticky')}
}

const headerObserver = new IntersectionObserver(stickyNav,{
  root:null,
  threshold:0,
  rootMargin:`-${navHeight}px`//header´s height
});

headerObserver.observe(header)


//Reveal on Scroll
const allSections = document.querySelectorAll('.section')
const revealSection = function(entries,observer){
  const [entry] = entries

  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
};

const sectionObserver = new IntersectionObserver(revealSection,{  
  root:null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden')
});

//LAZY LOADING IMAGE
const imageTargets = document.querySelectorAll('img[data-src');
const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

imageTargets.forEach(img => {
  imageObserver.observe(img);
});

//SLIDER COMPONENT
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  //dots
  const dotContainer = document.querySelector('.dots');
  /////////////////////
  //check slide
  let currentSlide = 0;
  const maxSlide = slides.length;

  //Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activeDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('.dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - currentSlide)}%)`)
    );
  };

  //Next Slide
  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activeDot(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activeDot(currentSlide);
  };
  const init = function () {
    goToSlide(0);
    createDots();
    activeDot(0);
  };
  init();

  //Event Handelers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', e => {
    if (e.key == 'ArrowRight') nextSlide();
    if (e.key == 'ArrowLeft') prevSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeDot(currentSlide);
    }
  });
};
slider()
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
