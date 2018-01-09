import axios from 'axios';
import {
  getProfile,
  getRepos,
  getStarCount,
} from '../utils/api';

export const FETCH_USER = "FETCH_USER";
export const FETCH_REPOS = "FETCH_REPOS";


export const fetchUser = (username="henryarbolaez") => {
  const request = getProfile(username);
  console.log("Request: ", request)

  return {
    type: FETCH_USER,
    payload: request
  }
}

export const fetchRepos = (username="henryarbolaez", limit=100) => {
  const request = getRepos(username, limit);
  console.log("Request: ", request)

  return {
    type: FETCH_REPOS,
    payload: request
  }
}


