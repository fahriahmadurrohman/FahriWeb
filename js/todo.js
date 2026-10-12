const STORAGE_KEY = 'personal-website-todos';

function loadTodos() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (!savedData) {
      return [];
    }

    const parsedData = JSON.parse(savedData);

    if (!Array.isArray(parsedData)) {
      return [];
    }

    return parsedData.filter((todo) => {
      return (
        todo &&
        typeof todo.id === 'string' &&
        typeof todo.text === 'string' &&
        typeof todo.completed === 'boolean'
      );
    });
  } catch (error) {
    console.warn('Data to-do tidak valid. Daftar akan dimuat ulang.', error);
    return [];
  }
}

function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export function createTodoApp({
  formSelector,
  inputSelector,
  listSelector,
  countSelector,
  emptyMessageSelector,
}) {
  const form = document.querySelector(formSelector);
  const input = document.querySelector(inputSelector);
  const list = document.querySelector(listSelector);
  const countEl = document.querySelector(countSelector);
  const emptyMessage = document.querySelector(emptyMessageSelector);

  if (!form || !input || !list || !countEl || !emptyMessage) {
    return null;
  }

  let todos = loadTodos();

  function updateTodoCount() {
    const remainingTasks = todos.filter((todo) => !todo.completed).length;
    countEl.textContent = `${remainingTasks} tugas tersisa`;
  }

  function renderTodos() {
    list.innerHTML = '';

    if (todos.length === 0) {
      emptyMessage.hidden = false;
      emptyMessage.textContent = 'Belum ada tugas. Tambahkan tugas pertama kamu sekarang.';
    } else {
      emptyMessage.hidden = true;
    }

    todos.forEach((todo) => {
      const item = document.createElement('li');
      item.className = `todo-item${todo.completed ? ' is-complete' : ''}`;
      item.setAttribute('data-id', todo.id);

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = todo.completed;
      checkbox.setAttribute('aria-label', `Tandai ${todo.text} sebagai selesai`);

      checkbox.addEventListener('change', () => {
        toggleTodo(todo.id);
      });

      const text = document.createElement('span');
      text.className = 'todo-item__text';
      text.textContent = todo.text;

      const deleteButton = document.createElement('button');
      deleteButton.type = 'button';
      deleteButton.className = 'todo-item__delete';
      deleteButton.textContent = 'Hapus';
      deleteButton.setAttribute('aria-label', `Hapus tugas ${todo.text}`);
      deleteButton.addEventListener('click', () => {
        deleteTodo(todo.id);
      });

      item.append(checkbox, text, deleteButton);
      list.appendChild(item);
    });

    updateTodoCount();
    saveTodos(todos);
  }

  function addTodo() {
    const text = input.value.trim();

    if (!text) {
      input.setAttribute('aria-invalid', 'true');
      input.focus();
      input.placeholder = 'Tulis tugas terlebih dahulu';
      return;
    }

    input.removeAttribute('aria-invalid');
    input.placeholder = 'Tambahkan tugas baru...';

    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };

    todos = [newTodo, ...todos];
    input.value = '';
    renderTodos();
  }

  function toggleTodo(todoId) {
    todos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    renderTodos();
  }

  function deleteTodo(todoId) {
    todos = todos.filter((todo) => todo.id !== todoId);
    renderTodos();
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    addTodo();
  });

  input.addEventListener('input', () => {
    input.removeAttribute('aria-invalid');
    input.placeholder = 'Tambahkan tugas baru...';
  });

  renderTodos();

  return {
    addTodo,
    toggleTodo,
    deleteTodo,
    renderTodos,
  };
}
