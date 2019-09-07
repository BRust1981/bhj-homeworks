'use strict';

const tooltips = document.querySelectorAll('.has-tooltip');

Array.from(tooltips).map(el => {
  el.insertAdjacentHTML('afterBegin', `<span class="tooltip">${el.title}</span>`);
});

Array.from(tooltips).map(el => {
  el.onclick = function(){
    //console.log('wow');
    let currTooltip = this.querySelector('.tooltip');
    hideAllTooltips(currTooltip);
    currTooltip.classList.toggle('tooltip_active');
    return false;
  };
});

function hideAllTooltips(elem){
  const activeTooltip = document.querySelector('.tooltip_active');
  console.log(elem);
  console.log(activeTooltip);
  if(activeTooltip !== null && activeTooltip !== elem) {
    activeTooltip.classList.remove('tooltip_active');
  }
}