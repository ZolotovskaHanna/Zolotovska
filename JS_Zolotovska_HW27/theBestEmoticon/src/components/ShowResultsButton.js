import React from 'react';

function ShowResultsButton({ onShowResults }) {
  return (
    <div className="show-results">
      <button onClick={onShowResults}>Show Results</button>
    </div>
  );
}

export default ShowResultsButton;