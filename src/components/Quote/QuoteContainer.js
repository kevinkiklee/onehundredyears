import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchQuotes } from '../../actions/quoteActions';

const QuoteWrapper = styled.div`
  font-size: 16px;
`;

class QuoteContainer extends React.Component {
  componentDidMount() {
    this.props.fetchQuotes('./data/quotes.json');
  }

  render() {
    return (
      <QuoteWrapper>
        QuoteContainer
      </QuoteWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchQuotes: (path) => dispatch(fetchQuotes(path)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteContainer);
