import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import SmileysList from '../components/SmileysList';
import ShowResultsButton from '../components/ShowResultsButton';
import Results from '../components/Results';
import Winner from '../components/Winner';
import ClearResultsButton from '../components/ClearResultsButton';

function App() {
  const initialEmojis = [
    { id: 1, symbol: 'Smiley1', count: 0, image: 'smiley1.png' },
    { id: 2, symbol: 'Smiley2', count: 0, image: 'smiley2.png' },
    { id: 3, symbol: 'Smiley3', count: 0, image: 'smiley3.png' },
    { id: 4, symbol: 'Smiley4', count: 0, image: 'smiley4.png' },
    { id: 5, symbol: 'Smiley5', count: 0, image: 'smiley5.png' },
  ];

  const [emojis, setEmojis] = useState(initialEmojis);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const storedEmojis = localStorage.getItem('emojis');
    if (storedEmojis) {
      setEmojis(JSON.parse(storedEmojis));
    }
  }, []);

  const handleVote = (id) => {
    const updatedEmojis = emojis.map((emoji) =>
      emoji.id === id ? { ...emoji, count: emoji.count + 1 } : emoji
    );

    setEmojis(updatedEmojis);
    localStorage.setItem('emojis', JSON.stringify(updatedEmojis));
  };

  const handleShowResults = () => {
    const topEmoji = emojis.reduce((a, b) => (a.count > b.count ? a : b), emojis[0]);
    setWinner(topEmoji);
  };

  const handleClearResults = () => {
    const resetEmojis = emojis.map((emoji) => ({ ...emoji, count: 0 }));
    setEmojis(resetEmojis);
    setWinner(null);
    localStorage.setItem('emojis', JSON.stringify(resetEmojis));
  };

  return (
    <div>
      <Title />
      <SmileysList emojis={emojis} onVote={handleVote} />
      <ShowResultsButton onShowResults={handleShowResults} />
      <Results emojis={emojis} />
      <Winner winner={winner} />
      <ClearResultsButton onClearResults={handleClearResults} />
    </div>
  );
}

export default App;
