import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  CHANGE_STATE,
  UPDATE_FIELD_AUTH,
  LOGIN_PAGE_UNLOADED,
  SIGNUP_PAGE_UNLOADED,
} from '../Constant/actionTypes';

/**
 * Tells the app we want to log in a user
 * @param  {function} payload The function to make login request
 * @param  {function} callback The callback function for a successful login
 */
export const loginRequest = (payload, callback) => (
  { type: LOGIN, payload, callback }
);

/**
 * Tells the app we want to log in a user
 * @param  {function} payload The function to make login request
 * @param  {function} callback The callback function for a successful login
 */
export const signupRequest = (payload, callback) => (
  { type: SIGNUP, payload, callback }
);

/**
 * Tells the app we want to log in a user
 * @param  {function} payload The function to make login request
 * @param  {function} callback The callback function for a successful login
 */
export const updateState = ({ type, value }) => ({ type: CHANGE_STATE, subtype: type, value });

/**
 * Sets the form state
 * @param  {object} key the key of the form input
 * @param  {string} value the value of the form input
 */
export const updateAuthField = (key, value) => ({ type: UPDATE_FIELD_AUTH, key, value });

/**
 * Tells the app we want to log in a user
 * @param  {function} payload The function to make login request
 * @param  {function} callback The callback function for a successful login
 */
export const loginPageUnloaded = () => ({ type: LOGIN_PAGE_UNLOADED });

/**
 * Tells the app we want to log in a user
 * @param  {function} payload The function to make login request
 * @param  {function} callback The callback function for a successful login
 */
export const signupPageUnloaded = () => ({ type: SIGNUP_PAGE_UNLOADED });

/**
 * Tells the app we want to log in a user
 * @param  {function} payload The function to make login request
 * @param  {function} callback The callback function for a successful login
 */
export const logoutUser = () => ({ type: LOGOUT });
