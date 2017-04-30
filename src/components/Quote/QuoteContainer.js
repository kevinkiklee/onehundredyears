import React from 'react';
import { connect } from 'react-redux';

import Quote from './Quote';
import { fetchQuotes } from '../../actions/quoteActions';

class QuoteContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
      show: true,
      timer: null,
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    const timer = setInterval(this.tick, 2000);
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
    this.setState({ show: false });
    this.setRandomQuote(this.props.quotes);
    this.setState({ show: true });
  }

  render() {
    if (this.state.show) {
      return (
        <Quote quote={this.state.quote} />
      );
    } else {
      return (
        <div />
      );
    }
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
