import { useState, useEffect } from 'react';

function useGameState() {
  const [state, setState] = useState({
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true,
  });

  useEffect(() => {
    const storedState = localStorage.getItem('gameState');
    if (storedState) {
      setState(JSON.parse(storedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gameState', JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

export default useGameState;
