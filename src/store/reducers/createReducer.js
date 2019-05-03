import {
  ASYNC_START,
  ASYNC_END,
  CREATE_INCIDENT
} from '../actions/actionTypes';

const initialState = {
  incident: {},
  inProgress: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_INCIDENT:
      return {
        ...state,
        incident: action.payload.data[0],
      };

    case ASYNC_START:
      return { ...state, inProgress: true };

    case ASYNC_END:
      return { ...state, inProgress: false };

    default:
      return state;
  }
};
