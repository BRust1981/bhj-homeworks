'use strict';

function changeSize() {
  
  
  console.log(this.classList);
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
      book.item(i).classList.remove('book_fs-big');     //плохая идея, но можно и циклом
      book.item(i).classList.remove('book_fs-small');
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

//Сложный вариант тоже сделаю