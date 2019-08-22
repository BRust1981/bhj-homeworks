'use strict';

const tastyCookie = document.getElementById('cookie');
let lastClick = new Date;

tastyCookie.onclick = function (){
  const clickCount = document.getElementById('clicker__counter');
  clickCount.textContent = Number(clickCount.textContent) + 1;
  if(clickCount.textContent % 2){
    this.width="210";
  }else {
    this.width="200";
  }
  let newClick = new Date;
  if(lastClick !== undefined){
    const clickSpeed = document.getElementById('clicker__speed');
    clickSpeed.textContent = (1000 / (newClick - lastClick)).toFixed(2);
    console.log(newClick - lastClick);
  }
  lastClick = new Date;

};

