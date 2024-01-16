import calculateWinner from '../helpers/calculateWinner';

const useGameHandlers = (history, stepNumber, xIsNext, setState) => {
  const handleClick = (i) => {
    const currentHistory = history.slice(0, stepNumber + 1);
    const current = currentHistory[currentHistory.length - 1];
    const squares = [...current.squares];

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';
    setState({
      history: currentHistory.concat([{ squares }]),
      stepNumber: currentHistory.length,
      xIsNext: !xIsNext,
    });
  };

  const handleReset = () => {
    setState({
      history: [{ squares: Array(9).fill(null) }],
      stepNumber: 0,
      xIsNext: true,
    });
  };

  return { handleClick, handleReset };
};

export default useGameHandlers;
