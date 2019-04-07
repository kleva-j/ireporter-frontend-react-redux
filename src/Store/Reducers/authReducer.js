/* eslint-disable consistent-return */
import {
  LOGIN,
  LOGIN_PAGE_UNLOADED,
  ASYNC_START,
  ASYNC_END,
  UPDATE_FIELD_AUTH,
} from '../Constant/actionTypes';

const Login = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        redirectTo: action.error ? null : '/dashboard',
        token: action.error ? null : action.payload.data[0].token,
        currentUser: action.error ? {} : action.payload.data[0],
        errors: action.payload.error ? [action.payload.error] : null,
      };

    case LOGIN_PAGE_UNLOADED:
      return {};

    case ASYNC_START:
      if (action.subtype === LOGIN) {
        return { ...state, inProgress: true };
      }
      break;

    case ASYNC_END:
      return { ...state, inProgress: false };

    case UPDATE_FIELD_AUTH:
      return { ...state, [action.key]: action.value };

    default:
      return state;
  }
};

export default Login;
