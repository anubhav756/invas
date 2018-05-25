import { combineReducers } from 'redux';

import cities from './services/cities/reducer';

export default combineReducers({
  cities,
});
