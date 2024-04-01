const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const nav = document.querySelector('.nav');


const tl = new TimelineMax();

tl.fromTo(logo,0.2, {opacity: 0, x: 30}, {opacity:1, x:0,ease: Power2.easeInOut});
tl.fromTo(nav,0.2, {opacity: 0, x:30}, {opacity:1, x:0,ease: Power2.easeInOut});