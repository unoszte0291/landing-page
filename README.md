# Landing Page Project

## Table of Contents
・index.html<br>
・styles.css<br>
・app.js<br>
<br>
* [Instructions](#instructions)<br>
<br>
## Instructions<br>
This is project of learning Front End Web Debelopper course by Udacity.<br>
I made some Javascript functions below.<br>
<br>
<p>
1. Creating a navigation bar.<br>
 <code>let ul_element = document.createElement('ul');<br>
<br>
for(let i=1; i<=4; i++) {<br>
	let li_element = document.createElement('li');<br>
	li_element.textContent = 'Section' + i;<br>
	ul_element.appendChild(li_element);<br>
  li_element.setAttribute("id", "nav" + i);<br>
}<br>
<br>
let navarea = document.getElementById('nav');<br>
navarea.appendChild(ul_element);<br>
<br>
</code><br>
</p>
<p>
2. Scroll the page and each article of section will appear.<br>
<code>let scrollAnimationElm = document.querySelectorAll('.sa');<br>
let scrollAnimationFunc = function() {<br>
  for(let i = 0; i < scrollAnimationElm.length; i++) {<br>
    let triggerMargin = 580;<br>
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {<br>
      scrollAnimationElm[i].classList.add('show');<br>
    }<br>
  }<br>
}<br>
window.addEventListener('load', scrollAnimationFunc);<br>
window.addEventListener('scroll', scrollAnimationFunc);<br>
<br>
</code><br>
</p>
<p>
3. Hovering the cursor over the article makes the article easier to read.<br>
<code>function changeSection(){<br>
  for (i = 1; i <= 4; i++) {<br>
      let elem = document.getElementById("section" + i);<br>
        elem.addEventListener('mouseover', () => {<br>
        elem.style.backgroundColor = "orange";<br>
        elem.style.fontSize = "large";<br>
      });<br>
    }<br>
};<br>
<br>
function revertSection(){<br>
  for (i = 1; i <= 4; i++) {<br>
      let elem = document.getElementById("section" + i);<br>
        elem.addEventListener('mouseout', () => {<br>
        elem.style.backgroundColor = "";<br>
        elem.style.fontSize = "";<br>
      });<br>
    }<br>
};<br>
<br>
</p>
<p>
</code><br>
4. When you click each navigation menu, you can junp to each articles.<br>
<code><br>
window.addEventListener('load', (event) => {<br>
  for (i = 1; i <= 4; i++) {<br>
      let navelem = document.getElementById("nav" + i);<br>
      let sec_elem = document.getElementById("section" + i);<br>
          navelem.addEventListener('click', () => {<br>
          let sec_elem_position = sec_elem.getBoundingClientRect();<br>
<br>
        window.scrollTo( 0, sec_elem_position.top);<br>
          });<br>
    };<br>
});<br>
</code>
</P>
