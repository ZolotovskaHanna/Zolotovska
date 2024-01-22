import React from 'react';
import TodoList from '../components/TodoList';

function App() {
    return (
    <main>
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-4 text-orange-400">ToDoList</h1>
      <TodoList />
    </div>  
    </main>
  
  );
}

export default App;