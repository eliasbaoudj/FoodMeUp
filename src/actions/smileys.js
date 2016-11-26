import makeActionCreator from './utils';

import { COMPLETE_SMILEY_STORE, FETCH_SMILEYS, MARK_SMILEYS_VISIBLE, RESET_SMILEYS } from '../constants';

const completeSmileyStore = makeActionCreator(COMPLETE_SMILEY_STORE);
const fetchSmileysLoading = makeActionCreator(FETCH_SMILEYS.LOADING, 'payload');
const fetchSmileysSuccess = makeActionCreator(FETCH_SMILEYS.SUCCESS, 'payload');
const fetchSmileysError = makeActionCreator(FETCH_SMILEYS.ERROR, 'payload');
const markSmileysVisible = makeActionCreator(MARK_SMILEYS_VISIBLE, 'payload');

export const resetSmileys = makeActionCreator(RESET_SMILEYS);

export function makeSmileysVisible(limit = 30) {
  return (dispatch, getState) => {
    const smileys = getState().smileys;
    const loaded = smileys.get('loaded');
    const visible = smileys.get('visible');

    if (visible + limit < loaded) {
      dispatch(markSmileysVisible({ limit }));
    } else {
      dispatch(markSmileysVisible({ limit: loaded - visible }));
    }
  };
}

export function fetchSmileys(limit = 100, sort = 'id') {
  return (dispatch, getState) => {
    const smileys = getState().smileys;

    dispatch(fetchSmileysLoading(true));

    return fetch(`/api/products?skip=${smileys.get('loaded')}&limit=${limit}&sort=${sort}`)
      .then(res => res.text())
      .then((body) => {
        const jsons = body
          .split('\n')
          .filter(json => json.length)
          .map(json => JSON.parse(json));

        dispatch(fetchSmileysLoading(false));

        if (jsons.length) {
          dispatch(fetchSmileysSuccess(jsons));
        } else {
          dispatch(completeSmileyStore());
        }
      })
      .catch((err) => {
        dispatch(fetchSmileysLoading(false));
        dispatch(fetchSmileysError(err));
      });
  };
}
