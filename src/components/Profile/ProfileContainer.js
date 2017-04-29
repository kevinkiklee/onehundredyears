import React from 'react';
import { connect } from 'react-redux';

import { fetchText } from '../../actions/textActions';

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    this.props.fetchText();
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
  fetchText: (path) => dispatch(fetchText(path)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
