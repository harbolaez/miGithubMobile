import {
  FETCH_REPOS
} from '../actions'

const initialState = {};

export default function FetchUserRepos( state = initialState, action ){
  switch(action.type) {
    case `${FETCH_REPOS}_FULFILLED`:
      return action.payload.data
    default:
      return state;
  }
}