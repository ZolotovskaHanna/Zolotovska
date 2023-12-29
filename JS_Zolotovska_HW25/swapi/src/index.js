import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import Title from './components/Title';
import InputField from './components/InputField';
import FetchButton from './components/FetchButton';
import ResultDisplay from './components/ResultDisplay';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Swapi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false, 
    };
  }
  handleFetch = () => {
    this.setState({ isFetching: true });
  }
  render() {
    return (
      <div className="container">
        <Title />
        <div className="input-group">
          <InputField disabled={this.state.isFetching} />
          <FetchButton onClick={this.handleFetch} disabled={this.state.isFetching} />
        </div>
        <ResultDisplay isFetching={this.state.isFetching} />
      </div>
    );
  }
}

root.render(<Swapi />);
