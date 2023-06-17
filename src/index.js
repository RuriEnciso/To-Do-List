// import './style.css';

// const form = document.getElementById('todoform');
// const todoImput = document.getElementById('newtodo');
// const todosListEl = document.getElementById('todos-list');
// const notificationEl = document.querySelector('.notification');

// let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// let editTodoId = -1;

import {form, todoImput, todosListEl, notificationEl, tasks, editTodoId} from './modules/global-vars.js'

//  fisrt render
renderTasks();
// FORM SUBMIT
form.addEventListener('submit', (event) => {
  event.preventDefault();
  saveTodo();
  renderTasks();
  localStorage.setItem('tasks', JSON.stringify(tasks));
});

// SAVE TODO
function saveTodo() {
  const todoValue = todoImput.value;

  // CHECK IF THE TODO IS EMPTY
  const isEmpty = todoValue === '';
  // CHECK FOR DUPLICATES TODOS
  const isDuplicate = tasks.some((todo) => todo.description.toUpperCase() === todoValue.toUpperCase());

  if (isEmpty) {
    showNotification("Task's imput is empty");
  } else if (isDuplicate) {
    showNotification('This task already exists');
  } else {
    if (editTodoId >= 0) {
      tasks = tasks.map((todo, index) => ({
        description: todo.description,
        index: index + 1,
        description: index === editTodoId ? todoValue : todo.description,
      }));
      editTodoId = -1;
    } else {
      const todo = {
        description: todoValue,
        completed: false,
        index: tasks.length + 1,
      };
      tasks.push(todo);
    }

    // CLEAN THE IMPUT SECTION
    todoImput.value = '';
  }
}

// RENDER TODOS
function renderTasks() {
  // CLEAR ELEMENT BEFORE A RE RENDER
  todosListEl.innerHTML = '';
  // RENDER TODOS
  tasks.forEach((todo, index) => {
    todosListEl.innerHTML += `
        <div class="todo" id="${index}">
            <i 
                class="bi ${todo.completed ? 'bi-check-circle-fill' : 'bi-circle'}"
                data-action="check"
            ></i>
            <p class="${todo.completed ? 'checked' : ''}" data-action="check">${todo.description}</p>
            <i class="bi bi-pencil-square" data-action="edit"></i>
            <i class="bi bi-trash" data-action="delete"></i>
        </div>
        `;
  });
}

// CLICK EVENT LISTENER FOR ALL TASKS
todosListEl.addEventListener('click', (event) => {
  const { target } = event;
  const parentElement = target.parentNode;

  if (parentElement.className !== 'todo') return;

  const todo = parentElement;
  const todoId = Number(todo.id);
  console.log(todoId, 'DFGDF');

  // TARGET ACTION
  const { action } = target.dataset;
  action === 'check' && checkTodo(todoId); // if (action === 'check') is true then it will run : checkTodo(todoId)
  action === 'edit' && editTodo(todoId);
  action === 'delete' && deleteTodo(todoId);
  console.log(todoId, action);
});

// CHECK A TODO
function checkTodo(todoId) {
  tasks = tasks.map((todo, index) => ({
    description: todo.description,
    index: index + 1,
    completed: (index) === todoId ? !todo.completed : todo.completed,
  }));
  renderTasks();
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// EDIT A TODO
function editTodo(todoId) {
  todoImput.value = tasks[todoId].description;
  editTodoId = todoId;
}

// DELETE TODO
function deleteTodo(todoId) {
  tasks = tasks.filter((todo, index) => index !== todoId);
  tasks = tasks.map((todo, index) => ({
    description: todo.description,
    index: index + 1,
    completed: tasks.completed === true ? !todo.completed : todo.completed,
  }));
  editTodoId = -1;
  // Re render
  renderTasks();
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// ALERT MESSAGE
function showNotification(msg) {
  // changing the msg in html
  notificationEl.innerHTML = msg;
  // showing notification
  notificationEl.classList.add('notif-enter');
  // time of notification
  setTimeout(() => {
    notificationEl.classList.remove('notif-enter');
  }, 2500);
}
