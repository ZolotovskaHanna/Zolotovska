import React, { useContext } from 'react';
import { ThemeContext } from '../helpers/context';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex flex-start py-1 rounded-lg m-1">
      <input 
        type="checkbox" 
        id="toggle-btn" 
        onChange={toggleTheme} 
        checked={theme === 'dark'} 
        className="toggle-checkbox"
      />
      <label htmlFor="toggle-btn" className="toggle-label"></label>
    </div>
  );
};

export default ThemeToggle;














