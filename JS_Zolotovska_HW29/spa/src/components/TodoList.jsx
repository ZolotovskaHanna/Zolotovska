import React, { useState, useEffect } from 'react';
import TodoItem from '../components/TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    const newTodo = { text: inputValue, completed: false };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <form onSubmit={addTodo} className="flex justify-center mb-4">
        <input 
          type="text" 
          name="value" 
          required 
          className="form__input p-2 border border-gray-300 mr-2 flex-1"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="form__btn bg-orange-500 text-white px-4 py-2">Додати</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem 
            key={index} 
            todo={todo} 
            onDelete={() => deleteTodo(index)} 
            onToggle={() => toggleTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
