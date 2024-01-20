import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);

    const loadTodos = () => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    };

    useEffect(loadTodos, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = text => setTodos([...todos, { text, completed: false }]);

    const toggleTodo = index => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const deleteTodo = index => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className="container">
            <h1>ToDoList</h1>
            <TodoForm onAddTodo={addTodo} />
            <TodoList todos={todos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} />
        </div>
    );
}

export default App;
