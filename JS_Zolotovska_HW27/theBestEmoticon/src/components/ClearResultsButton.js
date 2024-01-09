import React from 'react';

function ClearResultsButton({ onClearResults }) {
  return (
    <div className="clear-results">
      <button onClick={onClearResults}>Очистити результати</button>
    </div>
  );
}

export default ClearResultsButton;