'use strict';

const tooltips = document.querySelectorAll('.has-tooltip');

Array.from(tooltips).map(el => {
  el.onclick = function(){
    let top = this.getBoundingClientRect().top;
    let left = this.getBoundingClientRect().left;

    let currTooltip = document.querySelector('.tooltip');
    // Да, не очень хорошее условие, особенно еслитултипы будут совпадать. Но в данных рамках задачи пока так
    // Это чтобы при нажатии на другой ссылке, тултип менял позицию и текст и скрывался при нажатии на той же ссылке
    if(currTooltip.innerText === this.title){
      currTooltip.classList.toggle('tooltip_active');
    } else {
      currTooltip.classList.add('tooltip_active');
    }

    currTooltip.innerText = this.title;
    
    // С небольшим сдвигом
    currTooltip.style.top = top + 20 + 'px';
    currTooltip.style.left = left + 20 + 'px';
    currTooltip.style.position = 'fixed';
    return false;
  };
});
