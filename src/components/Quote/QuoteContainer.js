import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Quote from './Quote';

import { fetchQuotes } from '../../actions/quoteActions';

const QuoteWrapper = styled.div`
  font-size: 16px;
`;

class QuoteContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
      timer: null,
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    const timer = setInterval(this.tick, 3000);
    this.props.fetchQuotes('./data/quotes.json');

    this.setState({ timer });
  }

  componentWillReceiveProps(newProps) {
    if (this.props.quotes !== newProps.quotes) {
      this.setRandomQuote(newProps.quotes);
    }
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  setRandomQuote(quotes) {
    const max = quotes.length;
    const index = Math.floor(Math.random() * max);

    this.setState({ quote: quotes[index] });
  }

  tick() {
    this.setRandomQuote(this.props.quotes);
  }

  render() {
    return (
      <QuoteWrapper>
        <Quote quote={this.state.quote} />
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
