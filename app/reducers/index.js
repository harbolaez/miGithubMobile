import { combineReducers } from 'redux';

import FetchUserReducer from './FetchUserReducer';
import FetchUserRepos from './FetchUserRepos';

export default combineReducers({
  user: FetchUserReducer,
  repos: FetchUserRepos,
});