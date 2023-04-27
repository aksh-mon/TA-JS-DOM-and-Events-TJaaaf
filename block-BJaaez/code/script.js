const todoApp = document.querySelector('.todoapp');
const header = todoApp.querySelector('.header');
const newTodoInput = header.querySelector('.new-todo');
const todoList = todoApp.querySelector('.todo-list');
const toggleAllBtn = todoApp.querySelector('#toggle-all');
const footer = todoApp.querySelector('.footer');
const clearCompletedBtn = footer.querySelector('.clear-completed');
const filters = footer.querySelector('.filters');
const todoCount = footer.querySelector('.todo-count');

let todos = [];

// Function to generate a unique ID for todos
function generateTodoId() {
  if (todos.length === 0) {
    return 1;
  } else {
    const ids = todos.map(todo => todo.id);
    return Math.max(...ids) + 1;
  }
}

// Function to render todos
function renderTodos() {
  todoList.innerHTML = '';
  for (const todo of todos) {
    const li = document.createElement('li');
    li.setAttribute('data-id', todo.id);
    li.className = todo.completed ? 'completed' : '';
    li.innerHTML = `
      <div class="view">
        <input class="toggle" type="checkbox" ${todo.completed ? 'checked' : ''}>
        <label>${todo.title}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="${todo.title}">
    `;
    todoList.appendChild(li);
  }
  updateTodoCount();
  updateClearCompletedVisibility();
  updateCompletedFilterVisibility();
}

// Function to update todo count
function updateTodoCount() {
  const activeTodosCount = todos.filter(todo => !todo.completed).length;
  const itemWord = activeTodosCount === 1 ? 'item' : 'items';
  todoCount.textContent = `${activeTodosCount} ${itemWord} left`;
}

// Function to check if any todo is completed
function hasCompletedTodos() {
  return todos.some(todo => todo.completed);
}

// Function to update visibility of "Clear completed" button
function updateClearCompletedVisibility() {
  if (hasCompletedTodos()) {
    clearCompletedBtn.style.display = 'block';
  } else {
    clearCompletedBtn.style.display = 'none';
  }
}

// Function to update visibility of "Completed" filter link
function updateCompletedFilterVisibility() {
  if (hasCompletedTodos()) {
    filters.querySelector('a[href="#/completed"]').style.display = 'inline';
  } else {
    filters.querySelector('a[href="#/completed"]').style.display = 'none';
  }
}

// Function to delete completed todos
function deleteCompletedTodos() {
  todos = todos.filter(todo => !todo.completed);
  renderTodos();
}

// Event listener for new todo input
newTodoInput.addEventListener('keydown', event => {
  if (event.key === 'Enter' && event.target.value.trim() !== '') {
    const newTodo = {
      id: generateTodoId(),
      title: event.target.value.trim(),
      completed: false
    };
    todos.push(newTodo);
    event.target.value = '';
    renderTodos();
  }
});

// Event listener for todo item toggle
todoList.addEventListener('change', event => {
  if (event.target.classList.contains('toggle')) {
    const todoId = parseInt(event.target.closest('li').getAttribute('data-id'));
    const todo = todos.find(item => item.id === todoId);
    todo.completed = event.target.checked;
    updateClearCompletedVisibility();
    updateCompletedFilterVisibility();
    renderTodos();
  }
});

// Event listener for todo item deletion
todoList.addEventListener('click', event => {
    if (event.target.classList.contains('destroy')) {
      const todoId = parseInt(event.target.closest('li').getAttribute('data-id'));
      todos = todos.filter(todo => todo.id !== todoId);
      updateClearCompletedVisibility();
      updateCompletedFilterVisibility();
      renderTodos();
    }
  });
  
  // Event listener for "Toggle all" button
  toggleAllBtn.addEventListener('change', event => {
    const completed = event.target.checked;
    todos.forEach(todo => todo.completed = completed);
    updateClearCompletedVisibility();
    updateCompletedFilterVisibility();
    renderTodos();
  });
  
  // Event listener for "Clear completed" button
  clearCompletedBtn.addEventListener('click', event => {
    deleteCompletedTodos();
  });
  
  // Function to filter todos based on hash in URL
  function filterTodos() {
    const hash = window.location.hash;
    if (hash === '#/active') {
      renderFilteredTodos(false);
    } else if (hash === '#/completed') {
      renderFilteredTodos(true);
    } else {
      renderTodos();
    }
  }
  
  // Function to render filtered todos
  function renderFilteredTodos(completed) {
    const filteredTodos = todos.filter(todo => todo.completed === completed);
    todoList.innerHTML = '';
    for (const todo of filteredTodos) {
      const li = document.createElement('li');
      li.setAttribute('data-id', todo.id);
      li.className = todo.completed ? 'completed' : '';
      li.innerHTML = `
        <div class="view">
          <input class="toggle" type="checkbox" ${todo.completed ? 'checked' : ''}>
          <label>${todo.title}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="${todo.title}">
      `;
      todoList.appendChild(li);
    }
    updateTodoCount();
    updateClearCompletedVisibility();
    updateCompletedFilterVisibility();
  }
  
  // Event listener for hash change
  window.addEventListener('hashchange', filterTodos);
  
  // Initial render of todos
  renderTodos();
  