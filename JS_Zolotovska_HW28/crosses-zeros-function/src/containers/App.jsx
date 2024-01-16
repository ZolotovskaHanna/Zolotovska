import React from 'react';
import Board from '../components/Board';
import calculateWinner from '../helpers/calculateWinner';
import useGameState from '../hooks/useGameState';
import useGameHandlers from '../hooks/useGameHandlers'; 

function App() {
  const [{ history, stepNumber, xIsNext }, setState] = useGameState();
  const { handleClick, handleReset } = useGameHandlers(history, stepNumber, xIsNext, setState);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const nextValue = xIsNext ? 'X' : 'O';
  const status = winner
    ? `Переможець: ${winner}`
    : `Наступний гравець: ${nextValue}`;

  return (
    <div className="game">
      <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      <div className="game-info">
        <div>{status}</div>
        <button className="button" onClick={handleReset}>Розпочати нову гру</button>
      </div>
    </div>
  );
}

export default App;