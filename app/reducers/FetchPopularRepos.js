import {
  FETCH_POPULAR_REPOS
} from '../actions'

const initialState = {
  data: [],
  nextLink: null,
};

export default function FetchPopularRepos( state = initialState, action ){
  const { type, payload } = action
  switch(type) {
    case `${FETCH_POPULAR_REPOS}_FULFILLED`:
      return {
        data: [...payload.data],
        nextUrl: payload.headers.link
      }
    default:
      return state;
  }
}