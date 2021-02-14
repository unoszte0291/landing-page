# Landing Page Project

## Table of Contents
・index.html
・styles.css
・app.js

* [Instructions](#instructions)

## Instructions
<pre>
This is project of learning Front End Web Debelopper course by Udacity.
I made some Javascript functions below.

1. Creating a navigation bar.
 <code>
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
</code>

2. Scroll the page and each article of section will appear.
<code>
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
</code>

3. Scrolling the cursor over the article makes the article easier to read.
<code>
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
</code>

// Make sections active
document.addEventListener("scroll", function () {
    makeActive();
});

4. When you click each navigation menu, you can junp to each articles.
<code>
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
</code>
</pre>