import React from 'react';

function TodoItem({ todo, onDelete, onToggle }) {
  const itemClasses = `flex items-center justify-between p-2 mb-2 ${todo.completed ? 'bg-gray-300' : 'bg-gray-100'}`;
  const textClasses = `flex-1 ml-2 text-black ${todo.completed ? 'line-through' : ''}`;

  return (
    <li className={itemClasses}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={onToggle} 
      />
      <span className={textClasses}>
        {todo.text}
      </span>
      <button 
        onClick={onDelete} 
        className="bg-orange-400 text-white px-3 py-1"
      >
        Видалити
      </button>
    </li>
  );
}

export default TodoItem;

