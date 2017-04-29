import { RECEIVE_TEXTS } from '../actions/textActions';
import { RECEIVE_QUOTES } from '../actions/quoteActions';

const initialState = {};

const DataReducer = (state = initialState, action) => {
  Object.freeze();

  switch (action.type) {
    case RECEIVE_TEXTS:
      return Object.assign({}, state, action.texts);

    case RECEIVE_QUOTES:
      return Object.assign({}, state, action.quotes);

    default:
      return state;
  }
};

export default DataReducer;
