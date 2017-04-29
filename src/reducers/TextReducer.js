import { RECEIVE_TEXT } from '../actions/textActions';

const initialState = {};

const TextReducer = (state = initialState, action) => {
  Object.freeze();

  switch (action.type) {
    case RECEIVE_TEXT:
      return Object.assign({}, state, action.text);

    default:
      return state;
  }
};

export default TextReducer;
