import agent from '../agent';
import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  ASYNC_START,
  ASYNC_END,
} from './actionTypes';

const {
  Auth,
} = agent;

export const loginAction = userData => async (dispatch) => {
  try {
    dispatch({ type: ASYNC_START, subtype: LOGIN });
    const result = await Auth.login(userData);
    dispatch({ type: ASYNC_END, payload: userData });
    dispatch({ type: LOGIN, payload: result });
  } catch (error) {
    dispatch({ type: ASYNC_END });
    return error;
  }
};

/**
 * Tells the app we want to signup a new user
 * @param  {function} userData The function to make login request
 * @param  {function} callback The callback function for a successful login
 */
export const signupAction = userData => async (dispatch) => {
  try {
    dispatch({ type: ASYNC_START, subtype: SIGNUP });
    const result = await Auth.signup(userData);
    dispatch({ type: ASYNC_END, payload: userData });
    dispatch({ type: SIGNUP, payload: result });
  } catch (error) {
    dispatch({ type: ASYNC_END });
    return error;
  }
};

/**
 * Tells the app we want to log out a user
 * @param  {function} payload The function to make login request
 * @param  {function} callback The callback function for a successful login
 */
export const logoutUser = () => ({ type: LOGOUT });
