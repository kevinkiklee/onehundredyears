import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchTexts } from '../../actions/textActions';

const TextWrapper = styled.div`
  font-size: 16px;
`;

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
      <TextWrapper>
        TextContainer
      </TextWrapper>
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
