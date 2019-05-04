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
        records: { ...action.payload.body.data },
      };

    case ASYNC_START:
      return { ...state, inProgress: true };

    case ASYNC_END:
      return { ...state, inProgress: false };

    default:
      return state;
  }
};
