import { fromJS } from 'immutable';

import createReducer from './utils';
import { COMPLETE_SMILEY_STORE, FETCH_SMILEYS, MARK_SMILEYS_VISIBLE, RESET_SMILEYS } from '../constants';

function getInitialState() {
  return fromJS({
    value: [],
    complete: false,
    visible: 0,
    loaded: 0,
    loading: false,
  });
}

export default createReducer(
  getInitialState(), { // eslint-disable-line
    [RESET_SMILEYS]: () => getInitialState(),

    [FETCH_SMILEYS.LOADING]: state => state.setIn(['loading'], true),
    [FETCH_SMILEYS.ERROR]: state => state.setIn(['loading'], false),
    [FETCH_SMILEYS.SUCCESS]: (state, action) => (
      state
        .updateIn(['value'], value => value.concat(fromJS(action.payload)))
        .updateIn(['loaded'], value => value + action.payload.length)
        .setIn(['loading'], false)
    ),

    [MARK_SMILEYS_VISIBLE]: (state, action) => (
      state
        .updateIn(['visible'], value => value + action.payload.limit)
    ),

    [COMPLETE_SMILEY_STORE]: state => state.setIn(['complete'], true),
  }
);
