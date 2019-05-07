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
  inProgress: false,
  currentPage: ''
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
      if (action.subtype === GET_RECORD_COUNT
        || action.subtype === GET_PROFILE) {
        return { ...state, inProgress: true };
      } return state;

    case ASYNC_END:
      if (action.subtype === GET_RECORD_COUNT
        || action.subtype === GET_PROFILE) {
        return { ...state, inProgress: false };
      } return state;

    default:
      return state;
  }
};
