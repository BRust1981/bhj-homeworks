'use strict';

let tabs = document.querySelectorAll('div.tab__navigation > div.tab');

let tabsCount = tabs.length;

for(let i = 0; i< tabsCount; i++){
  tabs.item(i).addEventListener('click', function(){
    if(!this.classList.contains('tab_active')){
      let dropActive = this.parentElement.querySelectorAll('div.tab');
      let prevActive;
      let currActive;
      for(let j = 0; j < tabsCount; j++){
        if(dropActive.item(j).classList.contains('tab_active')){
          prevActive = j;
        }
        if(dropActive.item(j).textContent === this.textContent){
          currActive = j;
        }
        if(prevActive && currActive){
          break;
        }
      }

      dropActive.item(prevActive).classList.remove('tab_active');
      this.classList.add('tab_active');

      let tabContent = this.closest('div.tabs').querySelectorAll('div.tab__content');
      tabContent.item(prevActive).classList.remove('tab__content_active');
      tabContent.item(currActive).classList.add('tab__content_active');
    }
    return false;
  })
}