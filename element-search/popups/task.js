'use strict';

const modalWindow = document.getElementById('modal_main');

if(!modalWindow.className.includes('modal_active')){
  modalWindow.className = modalWindow.className + ' modal_active';
}

function closeThisWindow(){
  let closestItem = this.closest('div.modal');
  closestItem.className = closestItem.className.replace(' modal_active', '');
}

let closeButtons = document.getElementsByClassName('modal__close_times');
let closeButtonsCount = closeButtons.length;


for (let i=0; i<closeButtonsCount; i++){
  closeButtons.item(i).onclick = closeThisWindow;
}

function showSuccessWindow(){
  let closestItem = this.closest('div.modal');
  closestItem.className = closestItem.className.replace(' modal_active', '');
  let successWindow = document.getElementById('modal_success');
  successWindow.className = successWindow.className + ' modal_active';
}

let successButtons = document.getElementsByClassName('show-success');
let successButtonsCount = successButtons.length;

for (let i=0; i<successButtonsCount; i++){
  successButtons.item(i).onclick = showSuccessWindow;
}
