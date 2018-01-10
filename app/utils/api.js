import axios from 'axios';

const ROOT_URL = `https://api.github.com/users`;
const REPO_URL = `https://api.github.com/repos`

export const getProfile = (username) => axios.get(`${ROOT_URL}/${username}`);

export const getRepos   = (username, limit=100, page=1) => {
  return axios.get(`${ROOT_URL}/${username}/repos?per_page=${limit}&sort=stars&page=${page}`)
};

export const getStarCount = (repos) => {
  return repos.data.reduce((count, repo) => {
    return count + repo.stargazers_count;
  },0);
}

export const getSpecificRepo = ( repos, repo_id ) => {
  return repos.filter((repo) => repo.id === repo_id )
}

export const getRepoInfo = (username, repo_name, type) => {
  return axios.get(`${REPO_URL}/${username}/${repo_name}/${type}`)
}

export const fetchUsers = (query) => {
  return axios.get(`https://api.github.com/search/users?q=${query}`)
}

export const bytesToSize = (bytes) => {
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   if (bytes == 0) return '0 Byte';
   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
   return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};