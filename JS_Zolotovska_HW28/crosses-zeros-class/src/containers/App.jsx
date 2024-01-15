import React, { Component } from 'react';
import Board from '../components/Board';
import Winner from '../components/Winner';
import Title from '../components/Title';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  componentDidMount() {
    const state = localStorage.getItem('gameState');
    if (state) {
      this.setState(JSON.parse(state));
    }
  }

  componentDidUpdate() {
    localStorage.setItem('gameState', JSON.stringify(this.state));
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (Winner.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{ squares: squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  handleReset() {
    this.setState({
      history: [{ squares: Array(9).fill(null) }],
      stepNumber: 0,
      xIsNext: true,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = Winner.calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Переможець: ' + winner;
    } else {
      status = 'Наступний гравець: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <Title />
        <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
        <div className="game-info">
          <div>{status}</div>
          <button className="button" onClick={() => this.handleReset()}>Розпочати нову гру</button>
        </div>
      </div>
    );
  }
}

export default App;
