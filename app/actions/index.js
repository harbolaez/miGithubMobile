import axios from 'axios';
import {
  getProfile,
  getRepos,
  getStarCount,
} from '../utils/api';

export const FETCH_USER = "FETCH_USER";
export const FETCH_REPOS = "FETCH_REPOS";
export const FETCH_POPULAR_REPOS = "FETCH_POPULAR_REPOS";

export const fetchUser = (username="henryarbolaez") => {
  const request = getProfile(username);
  console.log("Request: ", request)

  return {
    type: FETCH_USER,
    payload: request
  }
}

export const fetchRepos = (username="henryarbolaez", limit=100, page=1, isReset=false) => {
  const request = getRepos(username, limit, page)
  console.log("======= Request: ", request)

  return {
    type: FETCH_REPOS,
    payload: request,
    isReset,
  }
}

export const searchRepos = (repos, query) => {
  let foundRepos = repos.data.filter( (str) => str.name.toLowerCase().match(query.toLowerCase()))
  return {
    type: FETCH_REPOS,
    payload: foundRepos,
    isSearch: true,
  }
}

export const fetchPopularRepos = (username="henryarbolaez", limit=100, page=1) => {
  const request = getRepos(username, limit, page)
  console.log("======= Request: ", request)

  return {
    type: FETCH_POPULAR_REPOS,
    payload: request,
  }
}