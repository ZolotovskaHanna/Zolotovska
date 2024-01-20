import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);

    const loadTodos = () => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    };

    const saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    useEffect(loadTodos, []);
    useEffect(saveTodos, [todos]);

    const handleAddTodo = text => {
        setTodos([...todos, { text, completed: false }]);
    };

    const handleToggleTodo = index => {
        const updatedTodos = todos.map((todo, i) => 
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const handleDeleteTodo = index => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className="container">
            <h1>ToDoList</h1>
            <TodoForm onAddTodo={handleAddTodo} />
            <TodoList todos={todos} onToggleTodo={handleToggleTodo} onDeleteTodo={handleDeleteTodo} />
        </div>
    );
}

export default App;
