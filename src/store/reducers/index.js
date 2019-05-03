import { combineReducers } from 'redux';
import authReducer from './authReducer';
import createReducer from './createReducer';

const rootReducer = combineReducers({
  authReducer,
  createReducer
});

export default rootReducer;
