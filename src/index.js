import './style.css';

const tasks = [
  { description: 'Task 1', completed: false, index: 1 },
  { description: 'Task 2', completed: true, index: 2 },
  { description: 'Task 3', completed: false, index: 3 },
];

const todosListEl = document.getElementById('todos-list');

function rendertasks() {
  // RENDER TODOS
  tasks.forEach((todo, index) => {
    todosListEl.innerHTML += `
        <div class="todo" id="${index}">
            <i 
                class="bi ${todo.completed ? 'bi-check-circle-fill' : 'bi-circle'}"
                style= "color: ${todo.color}"
                data-action="check"
            ></i>
            <p class="${todo.completed ? 'checked' : ''}" data-action="check">${todo.description}</p>
            <i class="bi bi-pencil-square" data-action="edit"></i>
            <i class="bi bi-trash" data-action="delete"></i>
        </div>
        `;
  });
}
rendertasks();
