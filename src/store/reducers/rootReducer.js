import { combineReducers } from 'redux';
import authReducer from './authReducer';
import createReducer from './createReducer';
import viewAllReducer from './viewAllReducer';

const rootReducer = combineReducers({
  authReducer,
  createReducer,
  viewAllReducer
});

export default rootReducer;
