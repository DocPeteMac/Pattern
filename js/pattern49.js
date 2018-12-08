
// Button 1 = Pattern
let start = document.querySelector('#btn1');
start.addEventListener('click', startEvent);

function startEvent(){
    let img = document.querySelector('#pic');
    img.src = "img/049/049pattern.png";
}

// Button 2 = How to run
let pattern50 = document.querySelector('#btn2');
pattern50.addEventListener('click', patternEvent);

function patternEvent() {
    let img = document.querySelector('#pic');
    img.src = "img/049/049path.png";
}

// Button 3 = How to shoot
let shoot = document.querySelector('#btn3');
shoot.addEventListener('click', shootEvent);

function shootEvent(){
    let img = document.querySelector('#pic');
    img.src = "img/049/049.gif";
}
