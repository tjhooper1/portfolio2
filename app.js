//URLS

//SMART BRAIN = https://smart-brain-pal.herokuapp.com/

//DONNIE'S DONUTS = https://tjhooper1.github.io/Donnies-Donuts/

// CLOCK = https://tjhooper1.github.io/html-css-clock/

// ROBOFRIENDS = https://tjhooper1.github.io/robofriends/

var nav = document.querySelector(".nav");
var navBox = document.querySelector("#nav-box");
var toggleIcon = document.querySelector('.fas');
var items = document.querySelectorAll('.nav-li');
var open = false;

window.onload = function(){
    nav.style.width = '0%';
    items.forEach(function(item){
        item.style.opacity = '0';
        item.style.display = 'none';
    });

};

toggleIcon.addEventListener('click', function(){
    if(open){
    items.forEach(function(item){

        item.style.opacity = '0';
        item.style.display = 'none';
    });
    nav.style.width = "0%";
    navBox.style.width = '100%';
    open = !open;
    }else{
        items.forEach(function(item){

        item.style.opacity = '1';
        item.style.display = 'block';
    });
        nav.style.width = "25%";
        open = !open;
    }
});
