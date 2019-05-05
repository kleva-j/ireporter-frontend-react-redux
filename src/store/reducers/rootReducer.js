import { combineReducers } from 'redux';
import authReducer from './authReducer';
import createReducer from './createReducer';
import viewAllReducer from './viewAllReducer';
import profileReducer from './profileReducer'

const rootReducer = combineReducers({
  authReducer,
  createReducer,
  viewAllReducer,
  profileReducer
});

export default rootReducer;
