import React, { Component } from 'react';
import '../styles/App.css';

import TextContainer from './Text/TextContainer';
import Logo from './Page/Logo';
import QuoteContainer from './Quote/QuoteContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <QuoteContainer />
        <TextContainer />
      </div>
    );
  }
}

export default App;
