let bulpOffEl = document.getElementById('bulpOff');
let catOffEl = document.getElementById('catOff');
let paraEl = document.getElementById('para');

let offButtonEl = document.getElementById('offButton');
let onButtonEl = document.getElementById('onButton');

function onFun(){
    bulpOffEl.src = 'bulpon.png';
    catOffEl.src= 'caton.png';
    paraEl.textContent='GOOD MORNING';
    onButtonEl.style.backgroundColor='green';
    offButtonEl.style.backgroundColor='red';
}
function offFun(){
    bulpOffEl.src = 'bulpoff.png';
    catOffEl.src= 'catoff.png';
    paraEl.textContent='GOOD NIGHT';
    offButtonEl.style.backgroundColor='green';
    onButtonEl.style.backgroundColor='red';
}
