import profileReducer from '../../../store/reducers/profileReducer';
import { ASYNC_START, ASYNC_END, GET_PROFILE, GET_RECORD_COUNT } from '../../../store/actions/actionTypes';

const payload = {
  data: [{}],
  profile: {}
};

const initialState = {
  profile: {},
  'red-flag': {},
  intervention: {},
  inProgress: false
};

describe('Profile Reducer', () => {
  test('should return the initial state', () => {
    expect(profileReducer(undefined, {})).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(profileReducer(initialState, {
      type: GET_PROFILE,
      payload: payload.profile
    })).toMatchSnapshot();
  });

  test('should handle the correct state containing the current incident record', () => {
    expect(profileReducer(undefined, {
      type: GET_PROFILE,
      payload: payload.profile
    })).toMatchSnapshot();
  });

  test('should handle the correct state containing the current incident record', () => {
    expect(profileReducer(undefined, {
      type: GET_RECORD_COUNT,
      payload
    })).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(profileReducer(undefined, { type: ASYNC_START })).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(profileReducer(undefined, { type: ASYNC_END })).toMatchSnapshot();
  });
});
