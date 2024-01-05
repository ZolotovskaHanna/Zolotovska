import React from 'react';

class ShowResultsButton extends React.Component {
  render() {
    return (
      <div className="show-results">
        <button onClick={this.props.onShowResults}>Show Results</button>
      </div>
    )
  }
}

export default ShowResultsButton;


