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
        incident: action.payload,
      };

    case ASYNC_START:
      if (action.subtype === CREATE_INCIDENT) {
        return { ...state, inProgress: true };
      } return state;

    case ASYNC_END:
      if (action.subtype === CREATE_INCIDENT) {
        return { ...state, inProgress: false };
      } return state;

    default:
      return state;
  }
};
