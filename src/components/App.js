import React, { Component } from 'react';
import TextContainer from './Text/TextContainer';
import Logo from './Page/Logo';
import QuoteContainer from './Quote/QuoteContainer';

import styled from 'styled-components';

const AppWrapper = styled.div`
  text-align: center;
  font-family: 'Raleway';
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Logo />
        <QuoteContainer />
        <TextContainer />
      </AppWrapper>
    );
  }
}

export default App;
