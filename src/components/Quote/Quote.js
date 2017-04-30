import React from 'react';
import styled from 'styled-components';

const QuoteWrapper = styled.div`
  font-size: 16px;
`;

const Quote = ({ quote }) => {
  return (
    <QuoteWrapper>
      { quote }
    </QuoteWrapper>
  );
};

export default Quote;
