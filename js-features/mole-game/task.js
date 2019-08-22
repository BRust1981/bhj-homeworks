'use strict';
function reset(){
  let result = document.getElementById('dead');
  result.textContent = 0;
  
  result = document.getElementById('lost');
  result.textContent = 0;
}

function checkWin(){
  const resWin = document.getElementById('dead');
  const resLost = document.getElementById('lost');
  if(Number(resWin.textContent) === 10){
    alert('Вы выиграли !!!!!');
    resWin.textContent = 0;
    resLost.textContent = 0;
  } else if(Number(resLost.textContent) === 5){
    alert('Вы проиграли ?!?!?!...');
    resWin.textContent = 0;
    resLost.textContent = 0;
  }
}

function moleKiller(){
  let count;
  if(this.className.includes('hole_has-mole')){
    count = document.getElementById('dead');
  }else{
    count = document.getElementById('lost');
  }
  count.textContent = Number(count.textContent) + 1;
  checkWin();
}

let hole;

for (let i= 1;i<9;i++){
  hole = document.getElementById('hole' + i);
  hole.onclick = moleKiller;
}