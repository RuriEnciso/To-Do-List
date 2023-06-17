/* eslint-disable */
import showNotification from './show-notif.js';

// import { tasks } from './todos.js';
import { todosListEl, todoImput } from './global-vars.js';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let editTodoId = -1;

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

// CHECK A TODO
function checkTodo(todoId) {
  tasks = tasks.map((todo, index) => ({
    description: todo.description,
    index: index + 1,
    completed: index === todoId ? !todo.completed : todo.completed,
  }));
  renderTasks();
  localStorage.setItem('todos', JSON.stringify(tasks));
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

export {
  checkTodo, editTodo, deleteTodo, saveTodo,
};
export {
  tasks, editTodoId,
};

export { renderTasks };