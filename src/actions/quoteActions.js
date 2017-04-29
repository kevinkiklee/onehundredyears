import * as fetchUtil from '../utils/fetchUtil';

export const RECEIVE_QUOTES = 'RECEIVE_QUOTES';

export const receiveQuotes = (quotes) => ({
  type: RECEIVE_QUOTES,
  quotes
});

export const fetchQuotes = (url) => dispatch => {
  return fetchUtil.fetchJSON(url)
    .then((quotes) => dispatch(receiveQuotes(quotes)));
};
