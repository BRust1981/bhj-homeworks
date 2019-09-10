'use strict';

document.getElementById('form').addEventListener('submit', function(event) {
  var formData = new FormData(this);
  let request = new XMLHttpRequest();
  request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  
  request.upload.onprogress = function(event) {
    let progress = document.getElementById('progress');
    progress.value = (event.loaded / event.total).toFixed(1);
  };

  request.upload.onload = function() {
    alert('Файл загружен!');
  };

  request.upload.onload = function() {
    alert('Во время загрузки произошла непредвиденная ошибка.');
  };

  request.send(formData);
  event.preventDefault();
});

  


