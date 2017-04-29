import * as fetchUtil from '../utils/fetchUtil';

export const RECEIVE_TEXT = 'RECEIVE_TEXT';

export const receiveText = (text) => ({
  type: RECEIVE_TEXT,
  text
});

export const fetchText = (url) => dispatch => {
  return fetchUtil.fetchJSON(url)
    .then((text) => dispatch(receiveText(text)));
};
