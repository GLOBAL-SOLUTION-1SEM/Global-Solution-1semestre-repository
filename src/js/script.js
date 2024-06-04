// RESPONSIVIDADE HEADER
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.navbar');
const navBg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', ()=> {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
    navBg.classList.toggle('active');

})

// CAROUSEL
let count = 1;

document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}