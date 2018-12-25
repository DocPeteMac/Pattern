document.querySelector('#goBtn').addEventListener('click', function(e) {
    console.log(e);
});
// take pattern number from input
let go = document.querySelector('#goBtn');
go.addEventListener('click', patternNumber);

var pNum;
function patternNumber(){
    pNum = document.querySelector('#pattrnNum').value;
    if (pNum > 86 || pNum < 1){
        alert("The pattern #" + pNum + " is not available");
    }else{
        window.location = '0' + pNum + '.html';
    }
}
