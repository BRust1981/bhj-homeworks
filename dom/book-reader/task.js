'use strict';

function changeSize() {
   
  if(!this.classList.contains('font-size_active')){
    let bookSizeDrop = document.querySelectorAll('a.font-size');
    let bookSizeDropLength = bookSizeDrop.length;
    
    for(let i = 0; i < bookSizeDropLength; i++){
      if(bookSizeDrop.item(i).classList.contains('font-size_active')){
        bookSizeDrop.item(i).classList.remove('font-size_active');
        break;
      }
    }
    //Активный размер шрифта
    this.classList.add('font-size_active');
    
    //Сама читалка
    
    let book = document.querySelectorAll('div.book');
    let bookCount = book.length;

    for(let i = 0; i < bookCount; i++){
      book.item(i).classList.remove('book_fs-big', 'book_fs-small');     //плохая идея, но можно и циклом
      if(this.dataset['size'] !== undefined){
        book.item(i).classList.add('book_fs-' + this.dataset['size']);
      }
      
    }

  }

  return false;
}

//Проставим всем событие
let bookSize = document.querySelectorAll('a.font-size');
let bookSizeLength = bookSize.length;

for(let i = 0; i < bookSizeLength; i++){
  bookSize.item(i).onclick = changeSize;
}

//############################################################################################################
//Цвет текста
function changeColor() {
   
  if(!this.classList.contains('color_active')){
    let bookColorDrop = document.querySelectorAll('div.book__control_color > a.color');
    let bookColorDropLength = bookColorDrop.length;
    
    for(let i = 0; i < bookColorDropLength; i++){
      if(bookColorDrop.item(i).classList.contains('color_active')){
        bookColorDrop.item(i).classList.remove('color_active');
        break;
      }
    }
    //Активный размер шрифта
    this.classList.add('color_active');
    
    //Сама читалка
    
    let book = document.querySelectorAll('div.book');
    let bookCount = book.length;

    for(let i = 0; i < bookCount; i++){
      book.item(i).classList.remove('book_color-gray', 'book_color-whitesmoke');    
      if(this.dataset['color'] !== undefined){
        book.item(i).classList.add('book_color-' + this.dataset['color']);
      }
      
    }

  }

  return false;
}

let bookColor = document.querySelectorAll('div.book__control_color > a.color');
let bookColorLength = bookColor.length;

for(let i = 0; i < bookColorLength; i++){
  bookColor.item(i).onclick = changeColor;
}



//############################################################################################################
//Цвет фона
function changeBgColor() {
   
  if(!this.classList.contains('color_active')){
    let bookBgColorDrop = document.querySelectorAll('div.book__control_background > a.color');
    let bookBgColorDropLength = bookBgColorDrop.length;
    
    for(let i = 0; i < bookBgColorDropLength; i++){
      if(bookBgColorDrop.item(i).classList.contains('color_active')){
        bookBgColorDrop.item(i).classList.remove('color_active');
        break;
      }
    }
    //Активный размер шрифта
    this.classList.add('color_active');
    
    //Сама читалка
    
    let book = document.querySelectorAll('div.book');
    let bookCount = book.length;

    for(let i = 0; i < bookCount; i++){
      book.item(i).classList.remove('color_gray', 'color_black');     
      if(this.dataset['color'] !== undefined){
        book.item(i).classList.add('color_' + this.dataset['color']);
      }
      
    }

  }

  return false;
}

let bookBgColor = document.querySelectorAll('div.book__control_background > a.color');
let bookBgColorLength = bookBgColor.length;

for(let i = 0; i < bookBgColorLength; i++){
  bookBgColor.item(i).onclick = changeBgColor;
}
