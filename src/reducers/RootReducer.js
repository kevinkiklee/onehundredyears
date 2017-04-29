import { combineReducers } from 'redux';

import TextReducer from './TextReducer';

const RootReducer = combineReducers({
  text: TextReducer
});

export default RootReducer;
