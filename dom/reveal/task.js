'use strict';

function scrolling() {
  let hiddenDiv = document.querySelectorAll('div.reveal');
  
  let revealCount = hiddenDiv.length;
  let top, bottom;

  for(let i = 0; i < revealCount; i++){
    top = hiddenDiv.item(i).getBoundingClientRect().top;
    bottom = hiddenDiv.item(i).getBoundingClientRect().bottom;
    if(top < window.innerHeight && top > 0 || bottom < window.innerHeight && bottom > 0){
      hiddenDiv.item(i).classList.add('reveal_active');
    } else {
      hiddenDiv.item(i).classList.remove('reveal_active');
    }
  }
  
}

window.addEventListener("scroll", scrolling);
