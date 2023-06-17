

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