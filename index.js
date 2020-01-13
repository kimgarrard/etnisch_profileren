/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// window.onscroll = function(){
// document.body.style.webkitPerspectiveOrigin =
// window.scrollX + "px " + window.scrollY + "px";
// }


let button2 = document.querySelector(".button2");
let buttonback = document.querySelector(".buttonback");
let body = document.querySelector("body");

button2.onclick = function() {
  body.classList.remove("overflowx");

  let vwidd = document.querySelector(".vwidd");
  vwidd.scrollIntoView({behavior: "smooth"});

  body.classList.add("overflowhidden")
}

buttonback.onclick = function() {
  body.classList.remove("overflowhidden")
  let research = document.querySelector(".research");
  research.scrollIntoView({behavior: "smooth"});
  body.classList.add("overflowx");
}
