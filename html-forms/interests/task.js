'use strict';

const interest = document.querySelectorAll('input.interest__check');

Array.from(interest).map(el => {
  el.onchange = function(){
    const nowValue = this.checked;
    console.log(nowValue);
    let checkAll = this.closest('li.interest').querySelectorAll('input.interest__check');
    Array.from(checkAll).map(el => {
      el.checked = nowValue;
    });
    return false;
  }
});