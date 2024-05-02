function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.querySelector('.task-list');

  if (taskInput.value.trim() !== '') {
      var task = document.createElement('div');
      task.className = 'task';
      task.innerHTML = '<button class="complete-btn" onclick="completeTask(this)">&#10003;</button>' +
  '<button class="edit-btn" onclick="editTask(this)">&#9998;</button>' +
  '<button class="delete-btn" onclick="deleteTask(this.parentNode)"><i class="material-icons">delete</i></button>' +
  '<p>' + taskInput.value.trim() + '</p>';

      taskList.appendChild(task);
      taskInput.value = '';
  }
}

function deleteTask(task) {
  task.parentNode.removeChild(task);
}

function editTask(editButton) {
  var taskText = editButton.parentNode.querySelector('p');
  var newText = prompt('Edit Task', taskText.textContent);
  if (newText !== null && newText.trim() !== '') {
      taskText.textContent = newText.trim();
  }
}

function completeTask(completeButton) {
  var taskText = completeButton.parentNode.querySelector('p');
  if (!taskText.classList.contains('completed')) {
    taskText.classList.add('completed');
  } else {
    taskText.classList.remove('completed');
  }
}