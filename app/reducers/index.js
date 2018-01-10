import { combineReducers } from 'redux';

import FetchUserReducer from './FetchUserReducer';
import FetchUserRepos from './FetchUserRepos';
import FetchPopularRepos from './FetchPopularRepos'

export default combineReducers({
  user: FetchUserReducer,
  repos: FetchUserRepos,
  popularRepos: FetchPopularRepos
});