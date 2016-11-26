import makeActionCreator from './utils';

import { REQUEST_AD } from '../constants';

const addAd = makeActionCreator(REQUEST_AD, 'payload');

export function requestAd(nb) { // eslint-disable-line
  return (dispatch, getState) => {
    const ads = getState().ads.get('value');

    const nextAdIds = [];

    for (let i = 0; i < nb; i += 1) {
      let nextAdId;
      let cpt = 0;

      do {
        nextAdId = Math.floor(Math.random() * 1000);
        cpt += 1;
      } while (ads.includes(nextAdId) && cpt < 1000);

      if (cpt !== 1000) {
        nextAdIds.push(nextAdId);
      }
    }

    if (nextAdIds.length) {
      dispatch(addAd(nextAdIds));
    }
  };
}
