'use strict';


// Home opacity change when scrolling is down
const home = document.querySelector('.home');
const scrollHeight = home.getBoundingClientRect().height;
const arrowUp = document.querySelector('.arrow__up');

document.addEventListener('scroll', ()=>{
home.style.opacity = 1 - window.scrollY/scrollHeight;

  if(home.style.opacity <0){
    arrowUp.classList.add('visible');
  }else{
    arrowUp.classList.remove('visible'); 
  }
});

// Event :: When arrow Click
arrowUp.addEventListener('click', ()=>{
    scrollIntoView('.home');
});

function scrollIntoView(selector){
    const strollTo = document.querySelector(selector);
    strollTo.scrollIntoView({behavior: "smooth"});
}