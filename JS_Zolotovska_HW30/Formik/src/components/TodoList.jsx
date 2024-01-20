import React from 'react';

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
    const renderTodoItem = (todo, index) => {
        const { completed, text } = todo;
        return (
            <li key={index} className={`todo-item ${completed ? 'todo-item--checked' : ''}`}>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => onToggleTodo(index)}
                />
                <span className="todo-item__description">{text}</span>
                <button onClick={() => onDeleteTodo(index)} className="todo-item__delete">Видалити</button>
            </li>
        );
    };

    return (
        <ul>
            {todos.map(renderTodoItem)}
        </ul>
    );
};

export default TodoList;



