import React, { Component } from 'react';
import '../styles/App.css';

import TextContainer from './Text/TextContainer';
import QuoteContainer from './Quote/QuoteContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuoteContainer />
        <TextContainer />
      </div>
    );
  }
}

export default App;
