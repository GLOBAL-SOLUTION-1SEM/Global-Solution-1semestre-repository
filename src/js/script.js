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

// BUBBLES
function createBubble(){
    const body = document.querySelector('body')
    const createElement = document.createElement('span')
    var size = Math.random()*60;

    createElement.style.width = 20 + size + 'px';
    createElement.style.height = 20 + size + 'px';
    createElement.style.left = Math.random() * innerWidth - 170 + "px";
    body.appendChild(createElement);

    setTimeout(()=>{
        createElement.remove()
    },4000)
}

setInterval(createBubble, 50)