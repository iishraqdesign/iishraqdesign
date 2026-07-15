// Smooth appearance

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


// Navbar shadow

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.background="rgba(0,0,0,.75)";

}else{

header.style.background="rgba(0,0,0,.45)";

}

});


// Gallery click

const images=document.querySelectorAll(".gallery img");

images.forEach(img=>{

img.addEventListener("click",()=>{

window.open(img.src,"_blank");

});

});