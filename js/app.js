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

const sections = document.querySelectorAll('section');
let ul_element = document.createElement("ul");

for (let i = 1; i<=sections.length; i++) {
    let li_element = document.createElement("li");
    li_element.textContent = "Section" + i;
    ul_element.appendChild(li_element);
    li_element.setAttribute("id", "nav" + i);
}

let navarea = document.getElementById("nav");
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

// Scrolling the cursor over the article makes the article easier to read.
/**
 * Start section effect-2
 * 
*/
const sections_2 = document.querySelectorAll("section");
// Add class 'active' to section when it is near top of viewport
function makeActive() {
    for (const section of sections_2) {
        const box = section.getBoundingClientRect();
        // You can play with the values in the "if" condition to further make it more accurate.
        if (box.top <= 150 && box.bottom >= 150) {
            // Apply active state on the current section and the corresponding Nav link.
            section.style.backgroundColor = "orange";
            section.style.fontSize = "large";
        } else {
            // Remove active state from other section and corresponding Nav link.
            section.style.backgroundColor = "";
            section.style.fontSize = "";
        }
    }
}

// Make sections active
document.addEventListener("scroll", function () {
    makeActive();
});

/**
 * End section effect-2
 * 
*/

// Creating a navigation helper.
/**
 * Start section navigation helper
 * 
*/

window.addEventListener("load", (event) => {
  const sections = document.querySelectorAll("section");
    for (let i = 1; i <= sections.length; i++) {
        let navelem = document.getElementById("nav" + i);
        let sec_elem = document.getElementById("section" + i);
        navelem.addEventListener("click", (e) => {
            e.preventDefault();
            let sec_elem_position = sec_elem.getBoundingClientRect();

            // window.scrollTo( 0, sec_elem_position.top);
            window.scrollTo({
                top: sec_elem_position.top,
                left: 0,
                behavior: "smooth",
            });
        });
    }
});



/**
 * End navigation helper
 * 
*/