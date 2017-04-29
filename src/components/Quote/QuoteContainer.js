import React from 'react';
import { connect } from 'react-redux';

import { fetchQuotes } from '../../actions/quoteActions';

class QuoteContainer extends React.Component {
  componentDidMount() {
    this.props.fetchQuotes('./data/quotes.json');
  }

  render() {
    return (
      <div>
        Test
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  profile: state.profile,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchQuotes: (path) => dispatch(fetchQuotes(path)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteContainer);
