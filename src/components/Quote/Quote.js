import React from 'react';
import styled from 'styled-components';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const QuoteWrapper = styled.div`
  font-size: 16px;

  .example-enter {
    opacity: 0.01;
  }

  .example-enter.example-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .example-leave {
    opacity: 1;
  }

  .example-leave.example-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

const Quote = ({ quote }) => {
  return (
    <QuoteWrapper>
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
      <h4>{ quote }</h4>
      </ReactCSSTransitionGroup>
    </QuoteWrapper>
  );
};

export default Quote;
