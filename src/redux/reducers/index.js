import { combineReducers } from 'redux';
import * as reducers from './_reducers';

/*
import postReducer from './postReducer';
export default combineReducers({
  posts: postReducer
});
*/

export default combineReducers(reducers);