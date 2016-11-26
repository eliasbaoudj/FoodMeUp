import { fromJS } from 'immutable';

import createReducer from './utils';
import { REQUEST_AD } from '../constants';

function getInitialState() {
  return fromJS({ // eslint-disable-line
    value: [Math.floor(Math.random() * 1000)],
  });
}

export default createReducer(
  getInitialState(),
  {
    [REQUEST_AD]: (state, action) => state.updateIn(['value'], value => value.push(...action.payload)),
  }
);
