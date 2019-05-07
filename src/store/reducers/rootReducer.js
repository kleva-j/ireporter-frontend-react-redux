import { combineReducers } from 'redux';
import authReducer from './authReducer';
import createReducer from './createReducer';
import viewAllReducer from './viewAllReducer';
import profileReducer from './profileReducer';
import viewSingleReducer from './viewSingleReducer';

const rootReducer = combineReducers({
  authReducer,
  createReducer,
  viewAllReducer,
  profileReducer,
  viewSingleReducer,
});

export default rootReducer;
