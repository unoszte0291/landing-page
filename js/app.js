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

// When you hover the cursor over the menu, the color changes.
/**
 * Start navigation helper
 * 
*/
function changeColor(){
    for (i = 1; i <= 4; i++) {
        let elem = document.getElementById("nav" + i);
        elem.addEventListener("mouseover", function (event) {
          event.target.style.backgroundColor = "#000d3c";
          event.target.style.color = "white";
        }, false);
      }
};

function revertColor(){
    for (i = 1; i <= 4; i++) {
        let elem = document.getElementById("nav" + i);
        elem.addEventListener("mouseout", function (event) {
          event.target.style.backgroundColor = null;
          event.target.style.color = null;
        }, false);
      }
};
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

const button1 =  document.getElementById('section');

    button1.addEventListener('mouseout', () => {
      button1.style.backgroundColor = "";
      button1.style.fontSize = "";
    });

    button1.addEventListener('mouseover', () => {
      button1.style.backgroundColor = "orange";
      button1.style.fontSize = "large";
    });
