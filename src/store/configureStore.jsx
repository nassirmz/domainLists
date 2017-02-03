import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { listsReducer, listDetailReducer, isDetailReducer } from '../reducers';

// combine reducers passing each reducer with its corresponding state
const reducer = combineReducers({
  lists: listsReducer,
  listDetail: listDetailReducer,
  isDetailAvailable: isDetailReducer,

});

// create store and export
const store = createStore(reducer, compose(applyMiddleware(thunkMiddleware)));

export default store;