import {
  LOGIN,
  SIGNUP,
  ASYNC_START,
  ASYNC_END
} from '../actions/actionTypes';

const initialState = {
  currentUser: {},
  inProgress: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
    case SIGNUP:
      return {
        ...state,
        currentUser: action.payload ? action.payload.data[0] : {},
      };

    case ASYNC_START:
      return { ...state, inProgress: true };

    case ASYNC_END:
      return { ...state, inProgress: false };

    default:
      return state;
  }
};
