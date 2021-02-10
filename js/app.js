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
 * Start section navigation bar.
 * 
*/
let ul_element = document.createElement('ul');

for(let i=1; i<=4; i++) {
	let li_element = document.createElement('li');
	li_element.textContent = 'Section' + i;
	ul_element.appendChild(li_element);
  li_element.setAttribute("id", "nav" + i);
}

let navarea = document.getElementById('nav');
navarea.appendChild(ul_element);
/**
 * End navigation bar.
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

// Creating a navigation helper.
/**
 * Start section navigation helper
 * 
*/
window.addEventListener('load', (event) => {
  for (i = 1; i <= 4; i++) {
      let navelem = document.getElementById("nav" + i);
      let sec_elem = document.getElementById("section" + i);
          navelem.addEventListener('click', () => {
          let sec_elem_position = sec_elem.getBoundingClientRect();

        window.scrollTo( 0, sec_elem_position.top);
          });
    };
});
/**
 * End navigation helper
 * 
*/