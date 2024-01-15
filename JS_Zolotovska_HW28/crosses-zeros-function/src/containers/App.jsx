import React, { useState, useEffect } from 'react';
import Board from '../components/Board';
import Winner from '../components/Winner';
import Title from '../components/Title';

const useGameState = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  useEffect(() => {
    const savedState = localStorage.getItem('gameState');
    if (savedState) {
      const { history, stepNumber, xIsNext } = JSON.parse(savedState);
      setHistory(history);
      setStepNumber(stepNumber);
      setXIsNext(xIsNext);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gameState', JSON.stringify({ history, stepNumber, xIsNext }));
  }, [history, stepNumber, xIsNext]);

  const handleClick = (i) => {
    const currentHistory = history.slice(0, stepNumber + 1);
    const current = currentHistory[currentHistory.length - 1];
    const squares = [...current.squares];

    if (Winner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(currentHistory.concat([{ squares }]));
    setStepNumber(currentHistory.length);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setHistory([{ squares: Array(9).fill(null) }]);
    setStepNumber(0);
    setXIsNext(true);
  };

  return { history, stepNumber, xIsNext, handleClick, handleReset };
};

function App() {
  const { history, stepNumber, xIsNext, handleClick, handleReset } = useGameState();
  const current = history[stepNumber];
  const winner = Winner(current.squares);

  let status;
  if (winner) {
    status = 'Переможець: ' + winner;
  } else {
    status = 'Наступний гравець: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className="game">
      <Title />
      <Board squares={current.squares} onClick={handleClick} />
      <div className="game-info">
        <div>{status}</div>
        <button className="button" onClick={handleReset}>Розпочати нову гру</button>
      </div>
    </div>
  );
}

export default App;
