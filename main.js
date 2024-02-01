//BURGER MENU

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}


// Wrap every letter in a span
var textWrapper = document.querySelector('.naslov');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.naslov .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.naslov .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });
  var textWrapper = document.querySelector('.naslov-2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.naslov-2 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.naslov-2 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });
//************
 var divine1 = document.querySelector(".hideShow1");
 var divine2 = document.querySelector(".hideShow2");
 var divine3 = document.querySelector(".hideShow3");
 var divine4 = document.querySelector(".hideShow4");
 var dider1 = document.querySelector(".maintaining1");
 var dider2 = document.querySelector(".maintaining2");
 var dider3 = document.querySelector(".maintaining3");
 var dider4 = document.querySelector(".maintaining4");
 var nub = 1;
 divine1.onclick = ()=>{
  if(nub == 1){
    dider1.classList.add("showwer");
    nub = 0;
  }
  else{
    dider1.classList.remove("showwer");
    nub = 1;
  }
 
}
divine2.onclick = ()=>{
  if(nub == 1){
    dider2.classList.add("showwer");
    nub = 0;
  }
  else{
    dider2.classList.remove("showwer");
    nub = 1;
  }
 
}
divine3.onclick = ()=>{
  if(nub == 1){
    dider3.classList.add("showwer");
    nub = 0;
  }
  else{
    dider3.classList.remove("showwer");
    nub = 1;
  }
 
}
divine4.onclick = ()=>{
  if(nub == 1){
    dider4.classList.add("showwer");
    nub = 0;
  }
  else{
    dider4.classList.remove("showwer");
    nub = 1;
  }
 
}