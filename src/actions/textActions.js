import * as fetchUtil from '../utils/fetchUtil';

export const RECEIVE_TEXTS = 'RECEIVE_TEXTS';

export const receiveTexts = (texts) => ({
  type: RECEIVE_TEXTS,
  texts
});

export const fetchTexts = (url) => dispatch => {
  return fetchUtil.fetchJSON(url)
    .then((texts) => dispatch(receiveTexts(texts)));
};
