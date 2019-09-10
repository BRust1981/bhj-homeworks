'use strict';

function closeTask(){
  this.closest('.task').remove();
}

function createTask(taskText){
  if(taskText !== null && taskText !== ''){
    let taskBox = document.getElementById('tasks__list');
    let task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `<div class="task__title">
          ${taskText}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>
    `;
    task.querySelector('a.task__remove').onclick = closeTask;
    taskBox.insertBefore(task, taskBox.children[0]);
  }
}

const taskForm = document.querySelector('form.tasks__control');

taskForm.onsubmit = function(event) {
  let inputField = this.querySelector('input#task__input');
  createTask(inputField.value);
  this.reset();
  inputField.focus();
  event.preventDefault();
};
