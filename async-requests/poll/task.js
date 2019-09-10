'use strict';

function parsePoll(poll){
  document.getElementById('poll__title').innerText = poll.data.title;
  let pollPos = document.getElementById('poll__answers');
  for(let key in poll.data.answers){
    let pollButton = document.createElement('button');
    pollButton.classList.add('poll__answer');
    pollButton.innerText = poll.data.answers[key];
    pollButton.dataset['pollid'] = poll.id;
    pollButton.dataset['answerid'] = key;
    pollPos.appendChild(pollButton);
    pollButton.addEventListener('click', function(){
      alert('Спасибо ваш голос засчитан!');
      let total = new XMLHttpRequest();
      total.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
      total.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      total.addEventListener('readystatechange', function(){
        if (this.readyState == request.DONE && this.status == 200) {
          let totalRes = JSON.parse(this.responseText);
          let sum = totalRes.stat.reduce(function(accumulator, currentValue, index, array){
            return accumulator + currentValue.votes;
          }, 0);
          let resDiv = '';
          for(let item in totalRes.stat){
            resDiv += `<div>
          ${totalRes.stat[item].answer}: 
            <b>
              ${(totalRes.stat[item].votes / sum).toFixed(2)}%
            </b>
          </div>
        `;
          }
          let pollTotalPos = document.getElementById('poll__answers');
          pollTotalPos.innerHTML = resDiv;
        }
      });

      total.send(`vote=${this.dataset['pollid']}&answer=${this.dataset['answerid']}`);
    });
  }
}

let request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
request.addEventListener('readystatechange', function() {
  if (this.readyState == request.DONE && this.status == 200) {
    let res = JSON.parse(this.responseText);
    parsePoll(res);
  }
});

request.send();
