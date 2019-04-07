/* eslint-disable no-unused-vars */
import {
  LOGIN,
  LOGOUT,
} from '../Constant/actionTypes';
import agent from '../agent';

const localStorageMiddleware = store => next => (action) => {
  if (action.type === LOGIN) {
    if (!action.error) {
      window.localStorage.setItem('jwt', action.payload.data[0].token);
      agent.setToken(action.payload.data[0].token);
    }
  } else if (action.type === LOGOUT) {
    window.localStorage.setItem('jwt', '');
    agent.setToken(null);
  }

  next(action);
};

export default localStorageMiddleware;
