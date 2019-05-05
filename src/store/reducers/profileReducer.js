import {
  ASYNC_START,
  ASYNC_END,
  GET_PROFILE,
  GET_RECORD_COUNT,
} from '../actions/actionTypes';

const initialState = {
  profile: {},
  'red-flag': {},
  intervention: {},
  inProgress: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload.profile,
      };

    case GET_RECORD_COUNT:
      return {
        ...state,
        [action.payload.data[0].type]: action.payload.data[0],
      };

    case ASYNC_START:
      return { ...state, inProgress: true };

    case ASYNC_END:
      return { ...state, inProgress: false };

    default:
      return state;
  }
};
