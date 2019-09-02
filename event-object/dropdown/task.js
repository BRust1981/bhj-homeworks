'use strict';

function menuList(){
  let listing = this.parentElement.querySelector('ul.dropdown__list');
  listing.classList.toggle('dropdown__list_active');
  return false;
}

function menuListItem(){
  let choosedvalue = this.closest('div.dropdown').querySelector('div.dropdown__value');
  let listing = this.closest('div.dropdown').querySelector('ul.dropdown__list');
  choosedvalue.textContent = this.textContent;
  listing.classList.toggle('dropdown__list_active');
  return false;
}

//Открытие листинга
let menus = document.querySelectorAll('div.dropdown__value');
let menusCount = menus.length;

for (let i = 0; i< menusCount; i++){
  menus.item(i).addEventListener('click', menuList);
}
//Выбор значения
let menuItems = document.querySelectorAll('a.dropdown__link');
let menuItemsCount = menuItems.length;

for (let i = 0; i< menuItemsCount; i++){
  menuItems.item(i).onclick = menuListItem;
}