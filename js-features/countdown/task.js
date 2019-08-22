'use strict';

// Задание 1
const countDown = function() {
  const timer = document.getElementById('timer');
  const timer2 = document.getElementById('timer2');
  timer.textContent = timer.textContent - 1;              // Задание 1
  timer2.textContent = timerFormat(timer.textContent);    // Задание 2
  if(timer.textContent == 0){
    clearInterval(timerId);
    alert('Вы победили в конкурсе!');
    // Задание 3
    window.location.assign('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=7&cad=rja&uact=8&ved=2ahUKEwj06ejVw5bkAhVqoYsKHeSfAi0QFjAGegQICBAC&url=http%3A%2F%2Fhomepages.inf.ed.ac.uk%2Fneilb%2FTestWordDoc.doc&usg=AOvVaw288qsEFoCGctmeDcFYP_hl');
    //document.location.href = 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=7&cad=rja&uact=8&ved=2ahUKEwj06ejVw5bkAhVqoYsKHeSfAi0QFjAGegQICBAC&url=http%3A%2F%2Fhomepages.inf.ed.ac.uk%2Fneilb%2FTestWordDoc.doc&usg=AOvVaw288qsEFoCGctmeDcFYP_hl'
    //const downloadLink = document.getElementById('link');
    //downloadLink.href = 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=7&cad=rja&uact=8&ved=2ahUKEwj06ejVw5bkAhVqoYsKHeSfAi0QFjAGegQICBAC&url=http%3A%2F%2Fhomepages.inf.ed.ac.uk%2Fneilb%2FTestWordDoc.doc&usg=AOvVaw288qsEFoCGctmeDcFYP_hl';
    //downloadLink.onclick();
    //document.getElementById('link').onclick();    //Этот код выдает ошибку что onclick - не функция
  }
}

let timerId = setInterval(countDown, 1000);

// Задание 2
function timerFormat(time){
  let hours = Math.floor(time / 3600).toString().padStart(2, '0');
  let minutes = Math.floor((time - hours * 3600) / 60).toString().padStart(2, '0');
  let seconds = (time - hours * 3600 - minutes * 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

// Задание 3
// см выше в строке 13