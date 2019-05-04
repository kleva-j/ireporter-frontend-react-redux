import viewAllReducer from '../../../store/reducers/viewAllReducer';
import { ASYNC_START, ASYNC_END, GET_ALL_INCIDENTS } from '../../../store/actions/actionTypes';

const payload = {
  body: {
    data: {}
  }
};

const initialState = {
  records: {},
  inProgress: false,
};

describe('Create Incident reducer', () => {
  test('should return the initial state', () => {
    expect(viewAllReducer(undefined, {})).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(viewAllReducer(initialState, { type: GET_ALL_INCIDENTS, payload })).toMatchSnapshot();
  });

  test('should handle the correct state containing the current incident record', () => {
    expect(viewAllReducer(undefined, {
      type: GET_ALL_INCIDENTS,
      payload
    })).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(viewAllReducer(undefined, { type: ASYNC_START })).toMatchSnapshot();
  });

  test('should return the correct state containing incident errors', () => {
    expect(viewAllReducer(undefined, { type: ASYNC_END })).toMatchSnapshot();
  });
});
