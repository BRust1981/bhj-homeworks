'use strict';

const chatInit = document.querySelector('div.chat-widget');
const arrayMessages = ['Тебя посодють - а ты не воруй!', 'Мама, мама, что я буду делать! Ы-ы-ы-ы!!!', 'А ля ля ля! А я сошла с ума, какая досада!', 'Ы - чтоб никто не догадался', 'Жениться надо на сироте', 'Шляп сними', 'Приходите вчера', 'Начальство надо знать в лицо!', 'Птичку жалко...', 'А че это вы тут делаете?', '...']

chatInit.onclick = function(){
  this.classList.add('chat-widget_active');
}

const textMessage = document.getElementById('chat-widget__input');

textMessage.addEventListener('keydown', function(event) {
  if(event.code === 'Enter' && this.value !== undefined){
    console.log(this.value);
    putMessage('message_client', this.value);
    talkToMeRobot(this.value);   //Типа отправляем вопрос роботу
    this.value = null;
  }
})

function putMessage(who, message){
  let messageBox = document.getElementById('chat-widget__messages');
  let messageTime = new Date;
  messageBox.innerHTML += `
  <div class="message ${who}">
  <div class="message__time">${messageTime.getHours().toString().padStart(2, '0')}:${messageTime.getMinutes().toString().padStart(2, '0')}</div>
  <div class="message__text">${message}</div>
</div>
  `;
}

function talkToMeRobot(message){
  let messageNumber = Math.trunc(Math.random() * arrayMessages.length);
  putMessage('', arrayMessages[messageNumber]);
}