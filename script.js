const taskInput = document.querySelector('#task');
const addTaskButton = document.querySelector('#add-task');
const tasksList = document.querySelector('#tasks');

function addTask(event) {
  event.preventDefault();

  const task = taskInput.value;
  if (!task) return;

  const li = document.createElement('li');
  li.innerHTML = `
    ${task} 
    <button class="delete-button">Delete</button>
  `;
  tasksList.appendChild(li);

  const deleteButton = li.querySelector('.delete-button');
  deleteButton.addEventListener('click', deleteTask);

  taskInput.value = '';
}

function deleteTask(event) {
  const li = event.target.parentNode;
  tasksList.removeChild(li);
}

addTaskButton.addEventListener('click', addTask);
