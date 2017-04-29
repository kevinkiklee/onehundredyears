import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchQuotes } from '../../actions/quoteActions';

const QuoteWrapper = styled.div`
  font-size: 16px;
`;

class QuoteContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
    };
  }

  componentDidMount() {
    this.props.fetchQuotes('./data/quotes.json');
  }

  componentWillReceiveProps(newProps) {
    if (this.props.quotes !== newProps.quotes) {
      this.setRandomQuote(newProps.quotes);
    }
  }

  setRandomQuote(quotes) {
    const min = 0;
    const max = quotes.length;
    const index = Math.floor(Math.random() * max);

    this.setState({ quote: quotes[index] });
  }

  render() {
    return (
      <QuoteWrapper>
        { this.state.quote }
      </QuoteWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  quotes: state.data.quotes,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchQuotes: (path) => dispatch(fetchQuotes(path)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteContainer);
