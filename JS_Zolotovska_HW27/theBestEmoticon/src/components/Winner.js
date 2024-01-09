import React from 'react';

function Winner({ winner }) {
  return (
    <div>
      <h2>Переможець:</h2>
      {winner && (
        <div className='winner'>
          <img src={`smileys/${winner.image}`} alt={winner.symbol} />
          <span>Кількість голосів: {winner.count}</span>
        </div>
      )}
    </div>
  );
}

export default Winner;