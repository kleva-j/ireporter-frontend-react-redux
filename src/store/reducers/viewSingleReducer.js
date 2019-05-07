import { ASYNC_START, ASYNC_END, GET_SINGLE_INCIDENT } from '../actions/actionTypes';

const initialState = {
  record: {},
  inProgress: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_INCIDENT:
      return {
        ...state,
        record: { ...action.payload.data[0] },
      };

    case ASYNC_START:
      if (action.subtype === GET_SINGLE_INCIDENT) {
        return { ...state, inProgress: true };
      } return state;

    case ASYNC_END:
      if (action.subtype === GET_SINGLE_INCIDENT) {
        return { ...state, inProgress: false };
      } return state;

    default:
      return state;
  }
};
