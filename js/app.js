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
// ul要素を作成
let ul_element = document.createElement('ul');

for(let i=1; i<=4; i++) {
	let li_element = document.createElement('li');
	li_element.textContent = 'Section' + i;
	ul_element.appendChild(li_element);
}

// 作成したHTML要素をarticle要素に追加する
let navarea = document.getElementById('nav');
navarea.appendChild(ul_element);
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

// Creating a navigation bar.
/**
 * Start section effect-2
 * 
*/
function clicknav(){
  for (i = 1; i <= 4; i++) {
      let elem = document.getElementById("nav" + i);
        elem.addEventListener('click', function(ev){
      });
    };
  };

function ev(){
  for (i = 1; i <= 4; i++) {
    let s = ev.target;
    if (a.href && a.classList.contains('rapid')) {
    ev.preventDefault();
     a.click();
      };
  };
};
/**
 * End navigation helper
 * 
*/
window.addEventListener('mousedown', function(ev){
  var a = ev.target;
  if (a.href && a.classList.contains('rapid')) {
  ev.preventDefault();
  a.click();
  }
  }, false)

