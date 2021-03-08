let menuToggle = document.querySelector('.menu-toggle');
let body = document.querySelector('body');
menuToggle.addEventListener('click',function() {
    body.classList.toggle('open');
});

//change menus on hover
let currColor;
//get color from style sheet
var linkClickedColor = getComputedStyle(document.body).getPropertyValue('--link-clicked');

let menuItem = document.getElementsByClassName('nav-item');
for(let i=0; i<menuItem.length; i++){
    menuItem[i].addEventListener("mouseover",mouseOver);
    menuItem[i].addEventListener("mouseout",mouseOut);
}


function mouseOver() {
    currColor = this.style.borderBottomColor;
    this.style.borderBottomColor = linkClickedColor;

    for(let i=0; i<this.childNodes.length; i++){
        this.childNodes[i].style.color = linkClickedColor;
    }
}
function mouseOut() {
    this.style.borderBottomColor = currColor;
    for(let i=0; i<this.childNodes.length; i++){
        this.childNodes[i].style.color = currColor;
    }
}



//line animation on hero
let line = document.getElementById('line');

let countLines = 0;
var idTimer = setInterval(myTimer, 100);
function myTimer() {
    line.innerHTML = '-' + line.innerHTML + '-';
    countLines++;
    // console.log(countLines);

    if (countLines>10) {
        clearInterval(idTimer);
    }
};



//test
$(document).ready(function () {
      
    AOS.init ({
      easing: 'ease',
      duration: 1000,
    });
    
});




