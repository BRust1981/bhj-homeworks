'use strict';

//Рабочий вариант простого задания

/*
function rotateText() {
  let textRotor = document.querySelectorAll('span.rotator__case');

  let textRotorLength = textRotor.length;

  for (let i = 0; i < textRotorLength; i++){
    if(textRotor.item(i).classList.contains('rotator__case_active')){
      textRotor.item(i).classList.remove('rotator__case_active');
      if(i + 1 >= textRotorLength){
        textRotor.item(0).classList.add('rotator__case_active');
      } else {
        textRotor.item(i + 1).classList.add('rotator__case_active');
      }
      break;
    }
  }

}

setInterval(rotateText, 1000);
*/

// Дополнительное задание
function rotateText() {
  let textRotor = document.querySelectorAll('span.rotator__case');

  let textRotorLength = textRotor.length;
  let currItem;

  for (let i = 0; i < textRotorLength; i++){
    if(textRotor.item(i).classList.contains('rotator__case_active')){
      textRotor.item(i).classList.remove('rotator__case_active');
      if(i + 1 >= textRotorLength){
        currItem = 0;
      } else {
        currItem = i + 1;
      }
      textRotor.item(currItem).classList.add('rotator__case_active');
      textRotor.item(currItem).style.color = textRotor.item(currItem).dataset['color'];

      setTimeout(rotateText, textRotor.item(currItem).dataset['speed']);
      break;
    }
  }

}

setTimeout(rotateText, 1000);