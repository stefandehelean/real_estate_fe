import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import getReducers from '../reducers/reducer'

const middlware = [thunk];
const enhancers = [];

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
 enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(
  getReducers(),
  compose(
    applyMiddleware(...middlware),
    ...enhancers
  ),
);

export default store;