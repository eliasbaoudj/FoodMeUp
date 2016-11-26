import { combineReducers } from 'redux';

import smileys from './smileys';
import ads from './ads';
import filters from './filters';

const rootReducer = combineReducers({
  smileys,
  ads,
  filters,
});

export default rootReducer;
