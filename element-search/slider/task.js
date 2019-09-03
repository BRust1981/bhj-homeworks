'use strict';
//выбраннное ранее меню

let currentSlide;

const slides = document.querySelectorAll('div.slider__item');
const dots = document.querySelectorAll('div.slider__dot');

let slidesCount = slides.length;

for (let i=0; i<slidesCount; i++){
  if(slides.item(i).className.includes('slider__item_active')){
    currentSlide = i;
    dots.item(currentSlide).classList.add('slider__dot_active');
    //break;
  };
  dots.item(i).id = 'dot_' + i;
  dots.item(i).addEventListener('click', function(){
    changeSlide(0, Number(this.id.replace('dot_', '')));
  });
}

function changeSlide(next = 0, newSlide){
  slides.item(currentSlide).classList.remove('slider__item_active');
  dots.item(currentSlide).classList.remove('slider__dot_active');
  console.log('a'+currentSlide + (currentSlide + next));

  if(newSlide !== undefined){
    currentSlide = newSlide;
  } else if (currentSlide + next >= slidesCount){
    currentSlide = 0;
  } else if (currentSlide + next < 0){
    currentSlide = slidesCount - 1;
  } else {
    currentSlide += next;
  }
  console.log('b'+currentSlide);
  slides.item(currentSlide).classList.add('slider__item_active');
  dots.item(currentSlide).classList.add('slider__dot_active');

}

function nextSlide(){
  changeSlide(1);
}

function prevSlide(){
  changeSlide(-1);
}

//задать всем событие
let prevArrow = document.querySelector('div.slider__arrow_prev');
//prevArrow.onclick = prevSlide;
prevArrow.addEventListener('click', prevSlide);

let nextArrow = document.querySelector('div.slider__arrow_next');
//nextArrow.onclick = nextSlide;
nextArrow.addEventListener('click', nextSlide);