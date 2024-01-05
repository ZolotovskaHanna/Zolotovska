import React from 'react';
import Title from '../components/Title';
import SmileysList from '../components/SmileysList';
import ShowResultsButton from '../components/ShowResultsButton';
import Results from '../components/Results';
import Winner from '../components/Winner';
import ClearResultsButton from '../components/ClearResultsButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis: [
        { id: 1, symbol: 'Smiley1', count: 0, image: 'smiley1.png' },
        { id: 2, symbol: 'Smiley2', count: 0, image: 'smiley2.png' },
        { id: 3, symbol: 'Smiley3', count: 0, image: 'smiley3.png' },
        { id: 4, symbol: 'Smiley4', count: 0, image: 'smiley4.png' },
        { id: 5, symbol: 'Smiley5', count: 0, image: 'smiley5.png' },
      ],
      winner: null,
    };
  }

  componentDidMount() {
    const storedEmojis = localStorage.getItem('emojis');
    if (storedEmojis) {
      this.setState({ emojis: JSON.parse(storedEmojis) });
    }
  }

  handleVote = (id) => {
    const updatedEmojis = this.state.emojis.map((emoji) => {
      if (emoji.id === id) {
        return { ...emoji, count: emoji.count + 1 };
      }
      return emoji;
    });

    this.setState({ emojis: updatedEmojis }, () => {
      localStorage.setItem('emojis', JSON.stringify(this.state.emojis));
    });
  };

  handleShowResults = () => {
    const topEmoji = this.state.emojis.reduce((a, b) => (a.count > b.count ? a : b), this.state.emojis[0]);
    this.setState({ winner: topEmoji });
  };

  handleClearResults = () => {
    const resetEmojis = this.state.emojis.map((emoji) => ({
      ...emoji,
      count: 0,
    }));

    this.setState({ emojis: resetEmojis, winner: null }, () => {
      localStorage.setItem('emojis', JSON.stringify(this.state.emojis));
    });
  };

  render() {
    return (
      <div>
        <Title />
        <SmileysList emojis={this.state.emojis} onVote={this.handleVote} />
        <ShowResultsButton onShowResults={this.handleShowResults} />
        <Results emojis={this.state.emojis} />
        <Winner winner={this.state.winner} />
        <ClearResultsButton onClearResults={this.handleClearResults} />
      </div>
    );
  }
}

export default App;