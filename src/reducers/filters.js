import { fromJS } from 'immutable';

import createReducer from './utils';

import { FILTER_BY } from '../constants';

function getInitialState() {
  return fromJS({ // eslint-disable-line
    value: 'id',
  });
}

export default createReducer(
  getInitialState(),
  {
    [FILTER_BY]: (state, action) => (
      state
        .setIn(['value'], action.payload)
    ),
  }
);
