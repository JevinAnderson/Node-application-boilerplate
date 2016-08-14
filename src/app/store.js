import { createStore, applyMiddleware, combineReducers } from 'redux';
import Thunk from 'redux-thunk';

import Reducers from './reducers';
import Ready from 'ready-and-able';


export default function(state = {}) {
  const rootReducer = combineReducers(Reducers);
  const middleware = applyMiddleware(Thunk);
  const store = createStore(rootReducer, state, middleware);

  Ready(function() {
    window._store = store;
  });

  return store;
}