import agent from '../agent';
import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  ASYNC_START,
  ASYNC_END,
} from './actionTypes';

const { Auth } = agent;

export const loginAction = userData => async (dispatch) => {
  try {
    dispatch({ type: ASYNC_START, subtype: LOGIN });
    const result = await Auth.login(userData);
    dispatch({ type: ASYNC_END, payload: userData, subtype: LOGIN });
    dispatch({ type: LOGIN, payload: result });
    window.localStorage.setItem('jwt', result.data[0].token);
  } catch (error) {
    dispatch({ type: ASYNC_END, subtype: LOGIN });
    return error;
  }
};

export const signupAction = userData => async (dispatch) => {
  try {
    dispatch({ type: ASYNC_START, subtype: SIGNUP });
    const result = await Auth.signup(userData);
    dispatch({ type: ASYNC_END, payload: userData, subtype: SIGNUP });
    dispatch({ type: SIGNUP, payload: result });
    window.localStorage.setItem('jwt', result.data[0].token);
  } catch (error) {
    dispatch({ type: ASYNC_END, subtype: SIGNUP });
    return error;
  }
};

export const logoutUser = () => ({ type: LOGOUT });
