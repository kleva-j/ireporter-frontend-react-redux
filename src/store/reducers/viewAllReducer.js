import { ASYNC_START, ASYNC_END, GET_ALL_INCIDENTS } from '../actions/actionTypes';

const initialState = {
  records: {},
  inProgress: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_INCIDENTS:
      return {
        ...state,
        records: { ...action.payload.data },
      };

    case ASYNC_START:
      if (action.subtype === GET_ALL_INCIDENTS) {
        return { ...state, inProgress: true };
      } return state;

    case ASYNC_END:
      if (action.subtype === GET_ALL_INCIDENTS) {
        return { ...state, inProgress: false };
      } return state;

    default:
      return state;
  }
};
