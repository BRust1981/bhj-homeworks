'use strict';
//выбраннное ранее меню

let currentSlide;

const slides = document.querySelectorAll('div.slider__item');

let slidesCount = slides.length;

for (let i=0; i<slidesCount; i++){
  if(slides.item(i).className.includes('slider__item_active')){
    currentSlide = i;
  };
}

function nextSlide(){
  slides.item(currentSlide).className = slides.item(currentSlide).className.replace(' slider__item_active', '');
  if(currentSlide + 1 >= slidesCount) {
    currentSlide = 0;
  }else{
    currentSlide += 1;
  }
  slides.item(currentSlide).className = slides.item(currentSlide).className + ' slider__item_active';
}

function prevSlide(){
  slides.item(currentSlide).className = slides.item(currentSlide).className.replace(' slider__item_active', '');
  if(currentSlide - 1 < 0) {
    currentSlide = slidesCount - 1;
  }else{
    currentSlide -= 1;
  }

  slides.item(currentSlide).className = slides.item(currentSlide).className + ' slider__item_active';
}


//задать всем событие
let prevArrow = document.querySelector('div.slider__arrow_prev');
prevArrow.onclick = prevSlide;

let nextArrow = document.querySelector('div.slider__arrow_next');
nextArrow.onclick = nextSlide;

