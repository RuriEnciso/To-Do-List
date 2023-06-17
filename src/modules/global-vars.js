const form = document.getElementById('todoform');
const todoImput = document.getElementById('newtodo');
const todosListEl = document.getElementById('todos-list');
const notificationEl = document.querySelector('.notification');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let editTodoId = -1;

export {form, todoImput, todosListEl, notificationEl, tasks, editTodoId}