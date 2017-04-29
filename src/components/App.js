import React, { Component } from 'react';
import '../styles/App.css';

import TextContainer from './Text/TextContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextContainer />
      </div>
    );
  }
}

export default App;
