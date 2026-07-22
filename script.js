// Sticky Navbar

window.addEventListener("scroll",function(){

const navbar=document.querySelector(".navbar");

if(window.scrollY>100){

navbar.classList.add("shadow");

}else{

navbar.classList.remove("shadow");

}

});

// Scroll To Top

const scrollBtn=document.getElementById("scrollTop");

window.onscroll=function(){

if(document.body.scrollTop>200 || document.documentElement.scrollTop>200){

scrollBtn.style.display="block";

}else{

scrollBtn.style.display="none";

}

}

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
document.addEventListener("DOMContentLoaded",function(){

const form=document.querySelector("form");

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank You! Your message has been sent successfully.");

form.reset();

});

});
const slides=document.querySelectorAll(".hero-slide");

let current=0;

function nextSlide(){

slides[current].classList.remove("active");

current=(current+1)%slides.length;

slides[current].classList.add("active");

}

setInterval(nextSlide,5000);
