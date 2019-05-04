import authReducer from '../../../store/reducers/authReducer';
import { SIGNUP, LOGIN, ASYNC_START, ASYNC_END } from '../../../store/actions/actionTypes';

const payload = {
  data: [{}]
};

describe('Signup reducer', () => {
  test('should return the initial state', () => {
    expect(authReducer(undefined, {})).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(authReducer(undefined, { type: SIGNUP })).toMatchSnapshot();
  });

  test('should return the correct state containing signup errors', () => {
    expect(authReducer(payload, { type: SIGNUP })).toMatchSnapshot();
  });

  test('should handle the correct state containing the current user', () => {
    expect(authReducer(undefined, {
      type: SIGNUP,
      payload
    })).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(authReducer(undefined, { type: ASYNC_START })).toMatchSnapshot();
  });

  test('should return the correct state containing signup errors', () => {
    expect(authReducer(undefined, { type: ASYNC_END })).toMatchSnapshot();
  });
});

describe('Login reducer', () => {
  test('should return the initial state', () => {
    expect(authReducer(undefined, {})).toMatchSnapshot();
  });

  test('should return the correct state', () => {
    expect(authReducer(undefined, { type: LOGIN })).toMatchSnapshot();
  });

  test('should return the correct state containing signup errors', () => {
    expect(authReducer(payload, { type: LOGIN })).toMatchSnapshot();
  });

  test('should handle the correct state containing the current user', () => {
    expect(authReducer(undefined, {
      type: LOGIN,
      payload
    })).toMatchSnapshot();
  });
});
