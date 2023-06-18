import './style.css';

import { clearAllCompleted, form, todosListEl } from './modules/global-vars.js';
import {
  saveTodo,
  checkTodo, editTodo, deleteTodo, tasks,
  renderTasks, clearCompletedTasks,
} from './modules/todos.js';
//  fisrt render
renderTasks();
// FORM SUBMIT
form.addEventListener('submit', (event) => {
  event.preventDefault();
  saveTodo();
  renderTasks();
  localStorage.setItem('tasks', JSON.stringify(tasks));
});

// CLICK EVENT LISTENER FOR ALL TASKS
todosListEl.addEventListener('click', (event) => {
  const { target } = event;
  const parentElement = target.parentNode;

  if (parentElement.className !== 'todo') return;

  const todo = parentElement;
  const todoId = Number(todo.id);

  // TARGET ACTION
  const { action } = target.dataset;
  if (action === 'check') {
    checkTodo(todoId);
  }
  if (action === 'edit') {
    editTodo(todoId);
  }
  if (action === 'delete') {
    deleteTodo(todoId);
  }
});

clearAllCompleted.addEventListener('click', clearCompletedTasks);
