document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.js--form');
    const input = document.querySelector('.js--form__input');
    const todosWrapper = document.querySelector('.js--todos-wrapper');

    const loadTodos = () => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(todo => {
            const todoItem = createTodoItem(todo.text, todo.completed);
            todosWrapper.appendChild(todoItem);
        });
    };

    const createTodoItem = (text, completed = false) => {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        if (completed) {
            todoItem.classList.add('todo-item--checked');
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = completed;
        checkbox.addEventListener('change', () => {
            todoItem.classList.toggle('todo-item--checked');
            saveTodos();
        });

        const description = document.createElement('span');
        description.classList.add('todo-item__description');
        description.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Видалити';
        deleteButton.classList.add('todo-item__delete');
        deleteButton.addEventListener('click', () => {
            todoItem.remove();
            saveTodos();
        });

        todoItem.appendChild(checkbox);
        todoItem.appendChild(description);
        todoItem.appendChild(deleteButton);

        return todoItem;
    };

    const saveTodos = () => {
        const todos = [];
        document.querySelectorAll('.todo-item').forEach(todoItem => {
            todos.push({
                text: todoItem.querySelector('.todo-item__description').textContent,
                completed: todoItem.querySelector('input[type="checkbox"]').checked
            });
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    form.addEventListener('submit', event => {
        event.preventDefault();
        const text = input.value.trim();
        if (text) {
            const todoItem = createTodoItem(text);
            todosWrapper.appendChild(todoItem);
            input.value = '';
            saveTodos();
        }
    });

    loadTodos();
});
