import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Index from './pages/Index'
import About from './pages/About'
import Contact from './pages/Contact'
import Todo from './pages/Todo'
import ThemeToggle from './components/ThemeToggle';
import { ThemeContext } from './helpers/context'
import routers from './helpers/routers'

function App() {
   
    const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <BrowserRouter>
                <div className={`mx-auto flex flex-col h-[100vh] min-h-screen ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
                    <ThemeToggle />
                    <Header/>
                    <Routes>
                        <Route path={routers.main} element={<Index/>} />
                        <Route path={routers.about} element={<About/>} />
                        <Route path={routers.contact} element={<Contact/>} />
                        <Route path={routers.todo} element={<Todo/>} />
                    </Routes>
                    <Footer/>
                </div>
            </BrowserRouter>
        </ThemeContext.Provider>
    )
}

export default App;







