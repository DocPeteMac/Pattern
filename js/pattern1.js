let patNum = document.querySelector('#numID');
let num = patNum.innerHTML;

// Button 1 = Pattern
let start = document.querySelector('#btn1');
start.addEventListener('click', function(){
    let img = document.querySelector('#pic');
    img.src = "img/0" + num + "/0" + num + "pattern1.png";
});

// start.addEventListener('click', startEvent);
// function startEvent(){
//     let img = document.querySelector('#pic');
//     img.src = "img/0" + num + "/0" + num + "pattern.png";
// }

// Button 2 = How to run
let pattern = document.querySelector('#btn2');
pattern.addEventListener('click', patternEvent);

function patternEvent() {
    let img = document.querySelector('#pic');
    img.src = "img/0" + num + "/0" + num + "path1.png";
}

// Button 3 = How to shoot
let shoot = document.querySelector('#btn3');
shoot.addEventListener('click', shootEvent);

function shootEvent(){
    let img = document.querySelector('#pic');
    img.src = "img/0" + num + "/0" + num + "-1.gif";
}

// Button 4 = birds eye
let birdEye = document.querySelector('#btn4');
birdEye.addEventListener('click', birdsEye);

function birdsEye(){
    let img = document.querySelector('#pic');
    img.src = "img/0" + num + "/0" + num + "cb.png";
}

let way_2 = document.querySelector('#patrn2');
way_2.addEventListener('click', way2);

function way2 () {
    window.location = '010.html';
}