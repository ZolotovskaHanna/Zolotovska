import React from 'react';

class ClearResultsButton extends React.Component {
  render() {
    return (
      <div className="clear-results">
        <button onClick={this.props.onClearResults}>Очистити результати</button>
      </div>
    )
  }
}

export default ClearResultsButton;


