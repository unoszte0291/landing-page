# Landing Page Project

## Table of Contents
・index.html
・styles.css
・app.js

* [Instructions](#instructions)

## Instructions
This is project of learning Front End Web Debelopper course by Udacity.
I made some Javascript functions below.

1. Creating a navigation bar.
 <code>let ul_element = document.createElement('ul');

for(let i=1; i<=4; i++) {
	let li_element = document.createElement('li');
	li_element.textContent = 'Section' + i;
	ul_element.appendChild(li_element);
  li_element.setAttribute("id", "nav" + i);
}

let navarea = document.getElementById('nav');
navarea.appendChild(ul_element);
</code>
2. Scroll the page and each article of section will appear.
<code>let scrollAnimationElm = document.querySelectorAll('.sa');
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
</code>
3. Hovering the cursor over the article makes the article easier to read.
<code>function changeSection(){
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
</code>
4. When you click each navigation menu, you can junp to each articles.
<code>
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
</code>