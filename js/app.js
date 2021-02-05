/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function changeColor(){
    for (i = 1; i <= 4; i++) {
        const elem = document.getElementById("nav" + i);
        elem.addEventListener("mouseover", function (event) {
          event.target.style.backgroundColor = "#000d3c";
          event.target.style.color = "white";
        }, false);
      }
};

function revertColor(){
    for (i = 1; i <= 4; i++) {
        const elem = document.getElementById("nav" + i);
        elem.addEventListener("mouseout", function (event) {
          event.target.style.backgroundColor = null;
          event.target.style.color = null;
        }, false);
      }
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const scrollAnimationElm = document.querySelectorAll('.landing__container');
const scrollAnimationFunc = function(){
  for(const i = 0; i < scrollAnimationElm.length; i++) {
    const triggerMargin = 100;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc)

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


