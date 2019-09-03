'use strict';
//выбраннное ранее меню
let currentMenu;

const menus = document.getElementsByClassName('menu__link');
let menusCount = menus.length;

//хочу задатьв сем ссылкам значения id, чтобы однозначно определять нажатие
for (let i = 0; i < menusCount; i++){
  menus.item(i).id = 'link' + i;
}

function openMenu(){
  let closestMenu = document.querySelector(`li.menu__item > a#${this.id} +ul.menu`);

  if(closestMenu !== null && closestMenu !== undefined){
    closestMenu.classList.add('menu_active');
    if(currentMenu !== undefined) {
      let closePreviousMenu = document.querySelector(`li.menu__item > a#${currentMenu} +ul.menu`);
      closePreviousMenu.classList.remove('menu_active');
    }

    currentMenu = this.id;
    return false;
  }
}

//задать всем событие
for (let i=0; i<menusCount; i++){
  menus.item(i).onclick = openMenu;
}