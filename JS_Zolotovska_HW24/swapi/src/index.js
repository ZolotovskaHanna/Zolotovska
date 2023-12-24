import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import Title from './components/Title';
import InputField from './components/InputField';
import FetchButton from './components/FetchButton';
import ResultDisplay from './components/ResultDisplay';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Swapi extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <Title />
        <div className="input-group mb-3">
          <InputField />
          <FetchButton />
        </div>
        <ResultDisplay />
      </div>
    );
  }
}
root.render(<Swapi />);
