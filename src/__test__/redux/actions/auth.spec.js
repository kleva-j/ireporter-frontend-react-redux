import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import { signupAction, loginAction } from '../../../store/actions/authActions';

const mockStore = configureMockStore([thunk]);
let store;

describe('Signup action creator', () => {
  test('should dispatch a successful signup action', () => {
    store = mockStore();
    return store.dispatch(signupAction())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });

  test('should dispatch a failed signup action', () => {
    store = mockStore();
    mockAxios.get.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    store.dispatch(signupAction()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  test('should dispatch a success login action', () => {
    store = mockStore();
    store.dispatch(loginAction());
    expect(store.getActions()).toMatchSnapshot();
  });

  test('should dispatch a failed signup action', () => {
    store = mockStore();
    mockAxios.get.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    store.dispatch(loginAction()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
