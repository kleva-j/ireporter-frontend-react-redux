import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import createActions from '../../../store/actions/createActions';

const mockStore = configureMockStore([thunk]);
let store;

describe('Signup action creator', () => {
  test('should dispatch a successful incident creation action', () => {
    store = mockStore();
    return store.dispatch(createActions())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });

  test('should dispatch a failed incident creation action', () => {
    store = mockStore();
    mockAxios.get.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    store.dispatch(createActions()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
