
// take pattern number from input
let go = document.querySelector('#goBtn');
go.addEventListener('click', patternNumber);

let input = document.querySelector('#pattrnNum');
input.addEventListener('keyup', function(event){
    event.preventDefault();
    if (event.key === 13)  {
        document.querySelector('#goBtn').click();
    }
});

function patternNumber(){
    let pNum = document.querySelector('#pattrnNum').value;
    if (pNum > 86 || pNum < 1){
        alert("The pattern #" + pNum + " is not available");
    }else{
        window.location = '0' + pNum + '.html';
    }
}
