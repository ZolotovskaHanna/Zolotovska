import React from 'react';

class SmileysList extends React.Component {
  render() {
    const { emojis, onVote } = this.props;
    return (
      <div className="smileysList">
        {emojis.map((emoji) => (
          <div key={emoji.id} className="smiley-item" onClick={() => onVote(emoji.id)}>
            <img src={`/smileys/${emoji.image}`} alt={`Emoji ${emoji.symbol}`} />
            <span>{emoji.count}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default SmileysList;