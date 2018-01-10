import {
  FETCH_REPOS
} from '../actions'

const initialState = {
  data: [],
  nextLink: null,
};

export default function FetchUserRepos( state = initialState, action ){
  const { type, payload, isReset } = action
  switch(type) {
    case `${FETCH_REPOS}_FULFILLED`:
      return {
        data: isReset ? [...payload.data] : [...state.data, ...payload.data],
        nextUrl: payload.headers.link
      }
    case FETCH_REPOS:
      return {
        data: [...payload],
        nextUrl: null
      }
    default:
      return state;
  }
}