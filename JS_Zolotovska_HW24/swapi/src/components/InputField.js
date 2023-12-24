import React from 'react';

class InputField extends React.Component {
  render() {
    return (
      <input
        type="text"
        id="endpoint-input"
        className="form-control"
        placeholder="Enter SWAPI endpoint (https://swapi.dev/api/starships/9/)"
      />
    );
  }
}

export default InputField;
