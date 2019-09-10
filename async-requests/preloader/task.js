'use strict';

function parseCurrency(curr){
  let divCurr = '';
  for(let item in curr){
    divCurr += `<div class="item">
  <div class="item__code">
    ${curr[item].CharCode}
  </div>
  <div class="item__value">
    ${curr[item].Value}
  </div>
  <div class="item__currency">
    руб.
  </div>
</div>
`;
  }
  let currPos = document.getElementById('items');
  currPos.innerHTML = divCurr;
}

let request = new XMLHttpRequest();
request.open('POST', 'https://netology-slow-rest.herokuapp.com');
request.addEventListener('readystatechange', function() {
  if (this.readyState == request.DONE && this.status == 200) {
    document.getElementById('loader').classList.remove('loader_active');
    let res = JSON.parse(this.responseText);
    parseCurrency(res.response.Valute);
  }
});

request.send();
