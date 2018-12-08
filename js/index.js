// pattern50 number from input
let go = document.querySelector('#goBtn');
go.addEventListener('click', patternNumber);

function patternNumber(){
    let patternNum = document.querySelector('#pattrnNum').value;
    if (patternNum < 49 && patternNum > 50){
        alert("The pattern " + patternNum + " is not available yet");
    }else{
        window.location = '0' + patternNum + '.html';
    }
}
