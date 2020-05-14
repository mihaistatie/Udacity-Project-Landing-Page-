const navSlide = function () {
  const burger = document.querySelector('.burger-menu');
  const nav = document.querySelector('.navi-links');
  const navLinks = document.querySelectorAll('.navi-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    //ANIMATE NAVIGATION
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navi-fade 0.5s ease forwards ${index / 7 + 0.6}s`;
      }
    });
    burger.classList.toggle('toggle');
  });

}
navSlide();

//ANIMATE CONTENT ON SCROLL
function scrollAppear() {
  var secondCol = document.querySelector('.card');
  var intropPosition = secondCol.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 0.3;

  if (intropPosition < screenPosition) {
    secondCol.classList.add('introSecondCol');
  }
}
window.addEventListener('scroll', scrollAppear);

function scrollNow() {
  var secondColAgain = document.querySelector('.first-feature');
  var myIntroPosition = secondColAgain.getBoundingClientRect().top;
  var screenPos = window.innerHeight / 1.3;

  if (myIntroPosition < screenPos) {
    secondColAgain.classList.add('introSecondColAgain');
  }
}
window.addEventListener('scroll', scrollNow);


function scrollNow2() {
  var secondColAgain2 = document.querySelector('.second-feature');
  var myIntroPosition2 = secondColAgain2.getBoundingClientRect().top;
  var screenPos2 = window.innerHeight / 1.3;

  if (myIntroPosition2 < screenPos2) {
    secondColAgain2.classList.add('anotherOne');
  }
}
window.addEventListener('scroll', scrollNow2);


//Populate with UL Navigation

//About
const ul = document.getElementById("list");
const li = document.createElement('li');
const a = document.createElement('a');
ul.appendChild(li);
a.textContent = 'About';
a.setAttribute('href', '#section-1');
li.appendChild(a);

//Features
const li2 = document.createElement('li');
const a2 = document.createElement('a');
ul.appendChild(li2);
a2.textContent = 'Features';
a2.setAttribute('href', '#section-2');
li2.appendChild(a2);

//Prices
const li3 = document.createElement('li');
const a3 = document.createElement('a');
ul.appendChild(li3);
a3.textContent = 'Prices';
a3.setAttribute('href', '#section-3');
li3.appendChild(a3);

//Subscribe
const li4 = document.createElement('li');
const a4 = document.createElement('a');
ul.appendChild(li4);
a4.textContent = 'Subscribe';
a4.setAttribute('href', '#section-4');
li4.appendChild(a4);

//SET ACTIVE STATE OF LINKS ON SCROLLING
let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

//SET NAVIGATION OPACITY ON SCROLL

let myNav = document.querySelector("nav");
window.addEventListener('scroll', setOpacity);
function setOpacity() {
  myNav.style.opacity = .8;
}
