import React from 'react';

class FetchButton extends React.Component {
  render() {
    return (
      <div className="input-group-append">
        <button
          id="fetch-button"
          className="btn btn-primary"
          onClick={this.props.onClick} 
          disabled={this.props.disabled} 
        >
          Get info
        </button>
      </div>
    );
  }
}

export default FetchButton;