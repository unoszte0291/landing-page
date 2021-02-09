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

// Creating a navigation bar.
/**
 * Start section effect-2
 * 
*/
let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});
/**
 * End navigation helper
 * 
*/

// When you hover the cursor over the menu, the color changes.
/**
 * Start navigation helper
 * 
*/
function changeColor(){
      let elem = document.getElementById("navbar");
      elem.addEventListener('mouseover', () => {
        elem.style.backgroundColor = "#000d3c";
        elem.style.color = "white";
      });
    };

function revertColor(){
      let elem = document.getElementById("navbar");
        elem.addEventListener('mouseout', () => {
        elem.style.backgroundColor = "";
        elem.style.color = "";
      });
    };
  
    window.addEventListener('load',()=>{  // loading index.html

      const elems = document.querySelectorAll('[hovercolor]'); // hovercolor attribute
  
      elems.forEach((e)=>{  // 
  
          e.addEventListener('mouseover',()=>{
            e.style.backgroundColor = e.getAttribute('hovercolor');
              e.style.color = "white";
              // backgroung and text color for 'e'
          });
  
          e.addEventListener('mouseout',()=>{
              e.style.backgroundColor = "";
              e.style.color = "";
          });
  
      });
  });

/**
 * End navigation helper
 * 
*/

// Scroll the page and each article of section will appear.
/**
 * start section effect-1
 * 
*/

let scrollAnimationElm = document.querySelectorAll('.sa');
let scrollAnimationFunc = function() {
  for(let i = 0; i < scrollAnimationElm.length; i++) {
    let triggerMargin = 580;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);

/**
 * End section effect-1
 * Begin Events
 * 
*/

// Hovering the cursor over the article makes the article easier to read.
/**
 * Start section effect-2
 * 
*/

function changeSection(){
  for (i = 1; i <= 4; i++) {
      let elem = document.getElementById("section" + i);
        elem.addEventListener('mouseover', () => {
        elem.style.backgroundColor = "orange";
        elem.style.fontSize = "large";
      });
    }
};

function revertSection(){
  for (i = 1; i <= 4; i++) {
      let elem = document.getElementById("section" + i);
        elem.addEventListener('mouseout', () => {
        elem.style.backgroundColor = "";
        elem.style.fontSize = "";
      });
    }
};
/**
 * End section effect-2
 * 
*/