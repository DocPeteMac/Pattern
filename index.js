// Button 1 = Pattern
let start = document.querySelector('#btn1');
start.addEventListener('click', startEvent);

function startEvent(){
    let img = document.querySelector('#pic');
    img.src = "img//050/050pattern.png";
}

// Button 2 = How to run
let pattern = document.querySelector('#btn2');
pattern.addEventListener('click', patternEvent);

function patternEvent() {
    let img = document.querySelector('#pic');
    img.src = "img/050/050path.png";
}

// Button 3 = How to shoot
let shoot = document.querySelector('#btn3');
shoot.addEventListener('click', shootEvent);

function shootEvent(){
    let img = document.querySelector('#pic');
    img.src = "img/050/050.gif";
}
