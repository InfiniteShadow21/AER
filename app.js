const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const nav = document.querySelector('.nav');

const tl = new TimelineMax();

tl.fromTo(hero,0.8,{height: "0%"}, {height: "85%", ease: Power2.easeInOut});
tl.fromTo(hero,1,{width:"100%"},{width:"65%", ease: Power2.easeInOut});
tl.fromTo(slider,1,{x:"-100%"},{x:"0%", ease: Power2.easeInOut},"-=1.2");
tl.fromTo(logo,0.5, {opacity: 0, x: 30}, {opacity:1, x:0,ease: Power2.easeInOut}, "-=0.5");
tl.fromTo(nav,0.5, {opacity: 0}, {opacity:1, x:0,ease: Power2.easeInOut}, "-=0.5");