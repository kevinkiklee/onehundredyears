import React from 'react';
import { connect } from 'react-redux';

import { fetchTexts } from '../../actions/textActions';

class TextContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    this.props.fetchTexts('./data/texts.json');
  }

  render() {
    return (
      <div>
        TextContainer
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTexts: (path) => dispatch(fetchTexts(path)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextContainer);
