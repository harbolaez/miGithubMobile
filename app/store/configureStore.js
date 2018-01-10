import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';
import logger from 'redux-logger';
import promiseMiddleware from "redux-promise-middleware"

export default function configureStore() {
  const store = createStore(
    reducers,
    applyMiddleware(promiseMiddleware(), logger)
  )
  return store
}
