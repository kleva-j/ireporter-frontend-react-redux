import createReducer from '../../../store/reducers/createReducer';
import { ASYNC_START, ASYNC_END, CREATE_INCIDENT } from '../../../store/actions/actionTypes';

const payload = {};

describe('Create Incident reducer', () => {
  test('should return the initial state', () => {
    expect(createReducer(undefined, {})).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(createReducer(undefined, { type: CREATE_INCIDENT })).toMatchSnapshot();
  });

  test('should return the correct state containing create incident errors', () => {
    expect(createReducer(payload, { type: CREATE_INCIDENT })).toMatchSnapshot();
  });

  test('should handle the correct state containing the current incident record', () => {
    expect(createReducer(undefined, {
      type: CREATE_INCIDENT,
      payload
    })).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(createReducer(undefined, { type: ASYNC_START })).toMatchSnapshot();
  });

  test('should return the correct state containing incident errors', () => {
    expect(createReducer(undefined, { type: ASYNC_END })).toMatchSnapshot();
  });
});
