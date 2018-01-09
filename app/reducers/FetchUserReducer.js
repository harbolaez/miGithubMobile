import {
  FETCH_USER
} from '../actions';

const initialState = {};

export default function FetchUserReducer( state = initialState, action ){
  switch(action.type) {
    case `${FETCH_USER}_FULFILLED`:
      return action.payload.data;
    default:
      return state;
  }
}