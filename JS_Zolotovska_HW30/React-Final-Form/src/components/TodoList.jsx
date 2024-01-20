import React from 'react';

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
    const renderTodoItems = () =>
        todos.map((todo, index) => (
            <li 
                key={index} 
                className={`todo-item ${todo.completed ? 'todo-item--checked' : ''}`}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggleTodo(index)}/>
                <span className="todo-item__description">{todo.text}</span>
                <button 
                    onClick={() => onDeleteTodo(index)} 
                    className="todo-item__delete">
                    Видалити
                </button>
            </li>
        ));

    return <ul>{renderTodoItems()}</ul>;
};

export default TodoList;

