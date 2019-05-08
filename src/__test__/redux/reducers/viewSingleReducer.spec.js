import viewSingleReducer from '../../../store/reducers/viewSingleReducer';
import { ASYNC_START, ASYNC_END, GET_SINGLE_INCIDENT, DELETE_INCIDENT } from '../../../store/actions/actionTypes';

const payload = {
  data: [{}]
};

const initialState = {
  records: {},
  inProgress: false,
};

describe('Create Incident reducer', () => {
  test('should return the initial state', () => {
    expect(viewSingleReducer(undefined, {})).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(viewSingleReducer(initialState, {
      type: GET_SINGLE_INCIDENT, payload
    })).toMatchSnapshot();
  });

  test('should handle the correct state containing the current incident record', () => {
    expect(viewSingleReducer(undefined, {
      type: GET_SINGLE_INCIDENT, payload
    })).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(viewSingleReducer(undefined, {
      type: ASYNC_START, subtype: GET_SINGLE_INCIDENT
    })).toMatchSnapshot();
  });

  test('should return the correct state containing incident errors', () => {
    expect(viewSingleReducer(undefined, {
      type: ASYNC_END, subtype: GET_SINGLE_INCIDENT
    })).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(viewSingleReducer(initialState, {
      type: DELETE_INCIDENT
    })).toMatchSnapshot();
  });

  test('should handle the correct state containing the current incident record', () => {
    expect(viewSingleReducer(undefined, {
      type: DELETE_INCIDENT
    })).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(viewSingleReducer(undefined, {
      type: ASYNC_START, subtype: DELETE_INCIDENT
    })).toMatchSnapshot();
  });

  test('should return the correct state containing incident errors', () => {
    expect(viewSingleReducer(undefined, {
      type: ASYNC_END, subtype: DELETE_INCIDENT
    })).toMatchSnapshot();
  });
});
