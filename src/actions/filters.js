import makeActionCreator from './utils';

import { resetSmileys, fetchSmileys, makeSmileysVisible } from './smileys';

import { FILTER_BY } from '../constants';

export const applyFilter = makeActionCreator(FILTER_BY, 'payload');

export function filterAndFetch(kind, loadingSize = 100) {
  return (dispatch, getState) => {
    dispatch(applyFilter(kind));

    const activeFilter = getState().filters.get('value');

    dispatch(resetSmileys());
    dispatch(fetchSmileys(loadingSize, activeFilter))
      .then(() => dispatch(makeSmileysVisible(loadingSize)));
  };
}
