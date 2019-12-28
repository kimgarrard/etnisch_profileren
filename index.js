/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

window.onscroll = function(){
document.body.style.webkitPerspectiveOrigin =
window.scrollX + "px " + window.scrollY + "px";
}
